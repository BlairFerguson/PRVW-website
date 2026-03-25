import Layout from "@/components/Layout";
import { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  markdown: string;
};

const renderMarkdown = (markdown: string) => {
  const lines = markdown.split("\n");
  const elements: ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    elements.push(
      <p key={`p-${elements.length}`} className="text-muted-foreground leading-7">
        {paragraph.join(" ")}
      </p>
    );
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc pl-6 space-y-2 text-muted-foreground leading-7">
        {listItems.map((item, idx) => (
          <li key={`${item}-${idx}`}>{item}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h1 key={`h1-${elements.length}`} className="text-3xl md:text-4xl font-bold text-foreground">
          {line.replace(/^#\s+/, "")}
        </h1>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={`h2-${elements.length}`} className="text-xl md:text-2xl font-semibold text-foreground mt-6">
          {line.replace(/^##\s+/, "")}
        </h2>
      );
      return;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.replace(/^-\s+/, ""));
      return;
    }

    paragraph.push(line.replace(/\*\*/g, ""));
  });

  flushParagraph();
  flushList();

  return elements;
};

const LegalPage = ({ title, markdown }: LegalPageProps) => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-4xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{title}</h1>
            <p className="text-muted-foreground">Public policy information for PRVW.AI.</p>
          </header>

          <article className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-5 shadow-sm">
            {renderMarkdown(markdown)}
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
