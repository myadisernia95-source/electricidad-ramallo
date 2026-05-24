import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';

type Entry = { email: string; createdAt: string; locale?: string };

// ----------------------------------------------------------------------------
// Hardening
// ----------------------------------------------------------------------------

/** Per-IP rate limit. In-memory; resets per serverless instance — not perfect
 *  but stops casual spam without adding any infra. */
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimitOk(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

/** Reject submissions coming from a different origin (basic CSRF defence). */
function sameOriginOk(req: Request): boolean {
  const origin = req.headers.get('origin');
  const referer = req.headers.get('referer');
  const host = req.headers.get('host');
  if (!host) return false;
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }
  if (referer) {
    try {
      return new URL(referer).host === host;
    } catch {
      return false;
    }
  }
  // Allow when both headers are missing (e.g. direct testing). Restrictive
  // defaults can lock out legitimate edge cases.
  return true;
}

/** Strict email regex (RFC-ish, conservative). */
function isEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

// ----------------------------------------------------------------------------
// Handler
// ----------------------------------------------------------------------------

export async function POST(req: Request) {
  try {
    // Reject oversized bodies — newsletter payload is tiny.
    const contentLength = Number(req.headers.get('content-length') ?? '0');
    if (contentLength > 1024) {
      return NextResponse.json({ ok: false, error: 'payload_too_large' }, { status: 413 });
    }

    // Cross-origin → block.
    if (!sameOriginOk(req)) {
      return NextResponse.json({ ok: false, error: 'forbidden_origin' }, { status: 403 });
    }

    const ip = clientIp(req);
    if (!rateLimitOk(ip)) {
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
    }

    const body = await req.json().catch(() => ({}));
    const { email, locale, website } = body as {
      email?: string;
      locale?: string;
      website?: string;
    };

    // Honeypot: real users don't fill this hidden field. If filled, pretend
    // success but ignore the submission so the bot can't tell it failed.
    if (website && String(website).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    const file = path.join(dataDir, 'subscribers.json');
    await fs.mkdir(dataDir, { recursive: true });

    let list: Entry[] = [];
    try {
      const raw = await fs.readFile(file, 'utf8');
      list = JSON.parse(raw);
      if (!Array.isArray(list)) list = [];
    } catch {
      list = [];
    }

    if (!list.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
      list.push({ email, locale, createdAt: new Date().toISOString() });
      await fs.writeFile(file, JSON.stringify(list, null, 2), 'utf8');
    }

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = await import('nodemailer').catch(() => null);
        if (nodemailer) {
          const transporter = (nodemailer as any).default.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: false,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          });
          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.NEWSLETTER_NOTIFY_EMAIL ?? 'myadisernia95@gmail.com',
            subject: 'Nueva suscripción al newsletter',
            text: `Nuevo suscriptor: ${email} (locale: ${locale ?? 'es'})`
          });
        }
      } catch {
        // Silent: subscriber already saved to JSON.
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'server' }, { status: 500 });
  }
}

// Only allow POST. Block other methods explicitly to avoid surprises.
export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 });
}
