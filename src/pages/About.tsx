import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const threeWords = [
  {
    word: "Diagnosing",
    suffix: "the Future",
    desc: "We use proprietary diagnostic tools to benchmark organisations against global best practice and identify exactly where to act.",
  },
  {
    word: "Designing",
    suffix: "Intelligence",
    desc: "We architect intelligent systems, data fabrics, and agentic AI platforms tailored to each enterprise's unique context.",
  },
  {
    word: "Delivering",
    suffix: "Growth",
    desc: "We don't stop at strategy. We embed, execute, and measure — ensuring every engagement drives measurable P&L impact.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">About PRVW</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl">Building Decision Intelligence & Data Asset Management platforms</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              At PRVW, we engineer intelligence — designing and deploying Decision Intelligence platforms and Data Asset
              Management (DAM) systems, underpinned by our proprietary Secure Algorithmic Core™. We convert complexity
              into clarity, and data into measurable enterprise value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32 bg-secondary/10">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center max-w-4xl mx-auto leading-snug">
              We are a pioneering Data & AI technology firm — building Decision Intelligence and Data Asset Management
              platforms that give enterprises the foundation to thrive in the AI age.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* THREE WORDS */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {threeWords.map((item, i) => (
              <ScrollReveal key={item.word} delay={i * 0.15}>
                <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors hover-lift">
                  <h3 className="text-2xl font-bold">
                    <span className="text-primary">{item.word}</span> {item.suffix}
                  </h3>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <blockquote className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-snug">
              "We are an adaptive force that can operate independently to deliver end-to-end projects, partner alongside
              your existing teams to accelerate transformation, or embed directly within your enterprise to scale
              expertise from within."
            </blockquote>
            <p className="text-primary font-mono-accent text-sm mt-8 uppercase tracking-wider">
              Your Data & AI team's, Data & AI team™
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold">Ready to transform?</h2>
            <p className="text-muted-foreground text-lg mt-4 mb-8 max-w-xl mx-auto">
              Start with a conversation about your Data & AI ambitions.
            </p>
            <Button asChild className="btn-lime rounded-full text-base">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
