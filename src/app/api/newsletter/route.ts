import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';

type Entry = { email: string; createdAt: string; locale?: string };

function isEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, locale } = body as { email?: string; locale?: string };
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
