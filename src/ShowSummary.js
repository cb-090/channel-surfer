import DOMPurify from "dompurify";

export default function ShowSummary({ summary }) {
  return (
    <section className="summary">
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(summary),
        }}
      />
    </section>
  );
}
