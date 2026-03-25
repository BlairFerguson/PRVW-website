import ScrollReveal from "@/components/ScrollReveal";

interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  markdown: string;
}

const cleanText = (text: string) =>
  text
    .replace(/\\\./g, ".")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const LegalDocument = ({ eyebrow, title, markdown }: LegalDocumentProps) => {
  const blocks = markdown
    .replace(/\r/g, "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .filter((block) => !/^[-\s|]{8,}$/.test(block));

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-4xl">
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="mt-6">{title}</h1>
        </ScrollReveal>

        <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          {blocks.map((block, idx) => {
            const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

            if (lines.every((line) => line.startsWith("-"))) {
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2">
                  {lines.map((line, lineIndex) => (
                    <li key={`${idx}-${lineIndex}`} className="text-foreground/90">
                      {cleanText(line.replace(/^[-•]\s*/, ""))}
                    </li>
                  ))}
                </ul>
              );
            }

            const combined = cleanText(lines.join(" "));

            if (/^\d+\./.test(combined)) {
              return (
                <h2 key={idx} className="text-2xl md:text-3xl text-foreground mt-8">
                  {combined}
                </h2>
              );
            }

            if (idx === 0) {
              return (
                <p key={idx} className="text-xl md:text-2xl font-bold text-foreground">
                  {combined}
                </p>
              );
            }

            if (idx === 1) {
              return (
                <p key={idx} className="text-lg md:text-xl font-semibold text-foreground">
                  {combined}
                </p>
              );
            }

            return (
              <p key={idx} className="text-foreground/90">
                {combined}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LegalDocument;
