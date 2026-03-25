import { Fragment, ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  markdown: string;
}

type BlockType = "section-title" | "subsection-title" | "list" | "meta" | "heading" | "paragraph";

interface LegalBlock {
  type: BlockType;
  content: string | string[];
}

const cleanup = (text: string) =>
  text
    .replace(/\\\./g, ".")
    .replace(/\s+/g, " ")
    .trim();

const renderInline = (text: string): ReactNode => {
  const normalized = cleanup(text);

  return normalized.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (!part) return null;

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
};

const isMetaLine = (value: string) => value.startsWith("*Effective Date") || value.startsWith("*Last Updated");

const parseBlocks = (markdown: string): LegalBlock[] => {
  const rawBlocks = markdown
    .replace(/\r/g, "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .filter((block) => !/^[-\s|]{8,}$/.test(block));

  return rawBlocks.map((block) => {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const compact = cleanup(lines.join(" "));

    if (lines.every((line) => /^[-•]/.test(line))) {
      return {
        type: "list",
        content: lines.map((line) => line.replace(/^[-•]\s*/, "")),
      };
    }

    if (/^\d+\.\d+/.test(compact)) {
      return { type: "subsection-title", content: compact };
    }

    if (/^\d+\./.test(compact)) {
      return { type: "section-title", content: compact };
    }

    if (isMetaLine(compact)) {
      return { type: "meta", content: compact };
    }

    if (/^\*\*[^*]+\*\*$/.test(compact)) {
      return { type: "heading", content: compact };
    }

    return { type: "paragraph", content: compact };
  });
};

const LegalDocument = ({ eyebrow, title, markdown }: LegalDocumentProps) => {
  const blocks = parseBlocks(markdown);

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="mt-6 mb-4">{title}</h1>
        </ScrollReveal>

        <div className="glass-card p-6 md:p-10 lg:p-12 border-border/60 space-y-5">
          {blocks.map((block, index) => {
            if (block.type === "heading") {
              return (
                <p key={index} className="text-xl md:text-2xl font-semibold text-foreground">
                  {renderInline(block.content as string)}
                </p>
              );
            }

            if (block.type === "meta") {
              return (
                <p key={index} className="text-sm md:text-base text-primary/90 font-medium">
                  {renderInline(block.content as string)}
                </p>
              );
            }

            if (block.type === "section-title") {
              return (
                <h2 key={index} className="text-2xl md:text-3xl text-foreground pt-4 border-t border-border/60 first:border-t-0 first:pt-0">
                  {renderInline(block.content as string)}
                </h2>
              );
            }

            if (block.type === "subsection-title") {
              return (
                <h3 key={index} className="text-lg md:text-xl text-foreground font-semibold mt-3">
                  {renderInline(block.content as string)}
                </h3>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-foreground/90 marker:text-primary">
                  {(block.content as string[]).map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>{renderInline(item)}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-foreground/90 leading-relaxed">
                {renderInline(block.content as string)}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LegalDocument;
