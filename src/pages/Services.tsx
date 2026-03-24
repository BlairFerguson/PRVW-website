import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const maturityStages = [
  { stage: "1A", title: "Building the Foundation", desc: "Define opportunities and prepare data, tech, process, and culture" },
  { stage: "1B", title: "Experimentation", desc: "Test AI use cases through structured pilots using third-party tools" },
  { stage: "2", title: "Expansion", desc: "Use AI across a broader set of enterprise activities; begin to insource development" },
  { stage: "3", title: "Transformation", desc: "Automate complete sets of enterprise activities within a function or horizontal operation" },
  { stage: "4", title: "Monetisation", desc: "AI as a significant new revenue source through new products or B2B services" },
];

const fivePillars = [
  { num: 1, title: "Engineer Value Creation", desc: "Business-case driven; quantify ROI in growth, efficiency, and enterprise impact" },
  { num: 2, title: "Develop a Secure Algorithmic Core", desc: "People, process, platforms, and protocols for scalable AI adoption" },
  { num: 3, title: "Build Trustworthy Intelligence", desc: "Ethics by design; responsible and sustainable AI" },
  { num: 4, title: "Empower Human Intelligence", desc: "New roles, adaptive skills, and continuous learning for human-AI collaboration" },
  { num: 5, title: "Drive Continuous Reimagination", desc: "Multi-year innovation cycles and ongoing reinvention as a growth habit" },
];

const processSteps = [
  { num: 1, title: "Discovery", desc: "Clarify the challenge, decompose complexity, and align ambition" },
  { num: 2, title: "Immersion", desc: "Dive deep into data and operations to surface patterns and truths" },
  { num: 3, title: "Design", desc: "Abstract insights into strategies, decide priorities, and architect the path forward" },
  { num: 4, title: "Execution", desc: "Operationalise decisions into systems, algorithms, and scalable action" },
  { num: 5, title: "Reimagination", desc: "Monitor, govern, and continuously reinvent through responsible AI and innovation loops" },
];

const Services = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">What We Do</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl">End-to-end Data & AI transformation</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              From diagnostic to deployment — we guide enterprise through every stage of the AI Maturity Curve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AI MATURITY CURVE */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">The AI Maturity Curve</span>
            <h2 className="mt-6 mb-16">From foundation to monetisation</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/30" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {maturityStages.map((s, i) => (
                <ScrollReveal key={s.stage} delay={i * 0.1}>
                  <div className="relative text-center md:text-left">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-lg mx-auto md:mx-0 relative z-10">
                      {s.stage}
                    </div>
                    <h4 className="font-bold mt-4 text-sm">{s.title}</h4>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <p className="text-muted-foreground text-center mt-12 max-w-3xl mx-auto">
              Even the most advanced enterprises are still in Stage 1. PRVW's Pathway Pilot® navigator identifies exactly where you sit — and creates a clear, staged roadmap forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DIAGNOSTICS */}
      <section id="diagnostics" className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="text-6xl font-extrabold text-primary/20">01</span>
              <h2 className="mt-4">Proprietary diagnostic tools & benchmarks</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                At the heart of PRVW is our Pathway Pilot® navigator — a proprietary diagnostic that benchmarks organisations against global best practice in AI, data and digital maturity. Combined with Algorithmic Business Thinking (ABT), we identify where clients sit on the AI Maturity Curve, pinpoint structural gaps across data, process and talent, and create a clear, staged pathway from experimentation through to scaled transformation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8">
                <h4 className="font-bold mb-4 text-sm font-mono-accent uppercase tracking-wider text-primary">Typical Engagements</h4>
                <div className="flex flex-wrap gap-2">
                  {["Data & AI Readiness Diagnostics", "Market & Competitive Intelligence", "Responsible AI & Governance Frameworks"].map((t) => (
                    <span key={t} className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section id="consulting" className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal className="lg:order-2">
              <span className="text-6xl font-extrabold text-primary/20">02</span>
              <h2 className="mt-4">Proven value creation through the 5 Pillars of Growth</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                We apply our 5 Pillars of Growth methodology to unlock sustainable advantage. Our cross-functional approach unites C-suite alignment, technical build, and workforce enablement — ensuring transformations don't stall at pilot stage but scale seamlessly across geographies and functions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:order-1">
              <div className="glass-card p-8">
                <h4 className="font-bold mb-6 text-sm font-mono-accent uppercase tracking-wider text-primary">The 5 Pillars</h4>
                <ol className="space-y-4">
                  {fivePillars.map((p) => (
                    <li key={p.num} className="flex gap-4">
                      <span className="text-primary font-extrabold text-lg shrink-0">{p.num}.</span>
                      <div>
                        <span className="font-semibold">{p.title}</span>
                        <span className="text-muted-foreground"> — {p.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <h4 className="font-bold mb-4 text-sm font-mono-accent uppercase tracking-wider text-primary">Typical Engagements</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Go-to-Market & Growth Acceleration", "Operating Model & Organisational Design", "Capability & Talent Transformation", "Process Optimisation & Automation"].map((t) => (
                      <span key={t} className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="text-6xl font-extrabold text-primary/20">03</span>
              <h2 className="mt-4">The PRVW Secure Algorithmic Core™</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Beyond strategy, PRVW embeds execution. We design and build your Secure Algorithmic Core™ — a resilient, adaptive AI foundation where AI agents collaborate, orchestrate workflows, and augment human decision-making. Our WISDAM® platform is a next-generation Beyond strategy, PRVW embeds execution. We design and build your Secure Algorithmic Core™ — a resilient, adaptive AI foundation where AI agents collaborate, orchestrate workflows, and augment human decision-making. Our WISDAM® platform is a next-generation Data Asset Management and Decision Intelligence platform — a dynamic intelligence fabric that unifies data, content, and context with embedded intelligence. — a dynamic intelligence fabric that unifies data, content, and context with embedded intelligence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8">
                <h4 className="font-bold mb-4 text-sm font-mono-accent uppercase tracking-wider text-primary">Typical Engagements</h4>
                <div className="flex flex-wrap gap-2">
                  {["Technology Strategy & Stack Modernisation", "Product & Service Innovation", "IP & Proprietary Asset Development", "Continuous Reinvention & Growth Innovation Labs"].map((t) => (
                    <span key={t} className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PATHWAY PILOT PROCESS */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">The Pathway Pilot® Process</span>
            <h2 className="mt-6 mb-16">Five phases to transformation</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="glass-card p-6 h-full text-center border-t-2 border-primary/20 hover:border-primary/60 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto">
                    {s.num}
                  </div>
                  <h4 className="font-bold mt-4">{s.title}</h4>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DATA DISCOVERY CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="glass-card border-t-2 border-primary p-12 md:p-16 text-center">
            <ScrollReveal>
              <p className="text-primary font-mono-accent text-sm uppercase tracking-wider mb-4">The first step to becoming the 1%</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Data Discovery & Audit</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                PRVW's Data Discovery and Audit is the first engagement undertaken by over 99% of our clients. Typically 2–4 weeks in duration, it delivers a full data catalogue, quality scoring, architecture review, and a clear recommendation for your next-gen data architecture.
              </p>
              <Button asChild className="btn-lime rounded-full text-base mt-8">
                <Link to="/contact">Book a Data Discovery Audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
