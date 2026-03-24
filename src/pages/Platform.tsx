import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, Layers, BarChart3, Workflow, Globe } from "lucide-react";

const platformFeatures = [
  {
    icon: Brain,
    title: "Decision Intelligence",
    desc: "WISDAM® transforms raw data into actionable intelligence — surfacing patterns, predicting outcomes, and recommending decisions across every business function.",
  },
  {
    icon: Layers,
    title: "Data Asset Management",
    desc: "A unified intelligence fabric that catalogues, governs, and activates your entire data estate — turning fragmented information into a structured, queryable enterprise asset.",
  },
  {
    icon: Shield,
    title: "Secure Algorithmic Core™",
    desc: "Every WISDAM® deployment is underpinned by our Secure Algorithmic Core™ — a resilient, adaptive AI foundation with built-in governance, ethics, and enterprise-grade security.",
  },
  {
    icon: Workflow,
    title: "Agentic Orchestration",
    desc: "Autonomous AI agents collaborate, orchestrate workflows, and augment human decision-making — scaling intelligence across teams without scaling headcount.",
  },
  {
    icon: BarChart3,
    title: "Embedded Analytics",
    desc: "Real-time dashboards, predictive models, and contextual insights embedded directly into your existing workflows and tools — intelligence where you need it, when you need it.",
  },
  {
    icon: Globe,
    title: "Industry-Agnostic Architecture",
    desc: "WISDAM® is designed to serve any sector — from financial services and healthcare to retail and manufacturing — adapting to your domain without custom rebuilds.",
  },
];

const Platform = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Platform</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl">
              WISDAM<span className="text-primary">®</span> — the Decision Intelligence platform
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              WISDAM® is PRVW's next-generation Decision Intelligence and Data Asset Management platform — a dynamic intelligence fabric that unifies data, content, and context with embedded AI. Built on our proprietary Secure Algorithmic Core™, it's industry-agnostic and enterprise-ready from day one. — a dynamic intelligence fabric that unifies data, content, and context with embedded AI. Built on our proprietary Secure Algorithmic Core™, it's industry-agnostic and enterprise-ready from day one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE VALUE PROP */}
      <section className="py-24 md:py-32 bg-secondary/10">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center max-w-4xl mx-auto leading-snug">
              Your data is your most valuable asset. WISDAM® turns it into your most powerful <span className="text-primary">competitive advantage</span>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-6 mb-16">What WISDAM® delivers</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={(i % 3) * 0.1}>
                <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors hover-lift">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECURE ALGORITHMIC CORE */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="eyebrow">Foundation</span>
              <h2 className="mt-6">Built on the Secure Algorithmic Core™</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Every WISDAM® deployment is powered by our Secure Algorithmic Core™ — a proprietary architecture that ensures enterprise-grade security, responsible AI governance, and adaptive scalability. It's the foundation that makes WISDAM® not just intelligent, but trustworthy.
              </p>
              <ul className="mt-8 space-y-3">
                {["Enterprise-grade security & encryption", "Responsible AI & ethics by design", "Adaptive scaling across geographies", "Vendor-agnostic cloud deployment"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-10 text-center border-t-2 border-primary/40">
                <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Industry-Agnostic</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From banking and healthcare to retail and manufacturing — WISDAM® adapts to your sector, your data, and your decision-making context without custom rebuilds.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SALES CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="glass-card border-t-2 border-primary p-12 md:p-16 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold">
                See WISDAM® in action
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Join the enterprises already transforming their data into Decision Intelligence. Book a personalised demo and discover how WISDAM® can unlock measurable value from your existing data estate — in weeks, not years. Book a personalised demo and discover how WISDAM® can unlock measurable value from your existing data estate — in weeks, not years.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button asChild className="btn-lime rounded-full text-base px-8 py-3 h-auto">
                  <Link to="/contact">
                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full text-base px-8 py-3 h-auto">
                  <Link to="/services">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
