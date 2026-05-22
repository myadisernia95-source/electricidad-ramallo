type Props = { data: Record<string, unknown> | Record<string, unknown>[] };

/** Injects JSON-LD structured data into the document. Server component. */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
