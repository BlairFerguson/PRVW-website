import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const statCards = [
  { source: "MIT (2026)", text: "Despite $30–40 billion in enterprise investment into GenAI, 95% of organisations are getting zero return and remain stuck with no measurable P&L impact." },
  { source: "McKinsey (2026)", text: "92% of companies plan to increase their AI investments. But only 1% believe they are at maturity." },
  { source: "PRVW (2026)", text: "The Data & AI revolution brings the marginal cost of creation to zero. The winners will not be those who adopt AI first — but those with the strongest foundations." },
];

const topics = ["Agentic AI", "Data Architecture", "AI Maturity", "Responsible AI", "Enterprise Strategy", "GenAI ROI", "WISDAM®", "Digital Transformation"];

const Insights = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "You're on the list.", description: "We'll be in touch." });
    setEmail("");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal><span className="eyebrow">Insights</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h1 className="mt-6 max-w-4xl">Perspectives on the Data & AI age</h1></ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              Original thinking from the PRVW team — on enterprise AI strategy, data architecture, responsible intelligence, and the future of business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {statCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass-card p-8 h-full border-t-2 border-primary/20">
                  <span className="text-primary font-mono-accent text-xs uppercase tracking-wider">{card.source}</span>
                  <p className="text-foreground mt-4 leading-relaxed">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold">Intelligence dispatches, coming soon.</h2>
            <p className="text-muted-foreground text-lg mt-6">
              We're preparing a series of original research pieces, practitioner guides, and data-driven perspectives. Subscribe to be notified when we publish.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3 mt-8 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary/50 border-border"
              />
              <Button type="submit" className="btn-lime rounded-full px-6 shrink-0">Notify Me</Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 pt-8">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic) => (
                <span key={topic} className="px-5 py-2.5 rounded-full border border-border/50 bg-secondary/20 text-muted-foreground text-sm">{topic}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
