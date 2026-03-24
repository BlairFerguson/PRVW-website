import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ClientLogos from "@/components/ClientLogos";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "95%", label: "of GenAI investments deliver zero P&L impact (MIT, 2026)" },
  { value: "92%", label: "of companies increasing AI spend" },
  { value: "1%", label: "believe they are at AI maturity (McKinsey)" },
];

const pillars = [
  {
    num: "01",
    title: "Diagnostics",
    desc: "We benchmark your organisation against global best practice in Data & AI maturity using our proprietary Pathway Pilot® navigator, identifying structural gaps across data, process, and talent.",
  },
  {
    num: "02",
    title: "Consulting",
    desc: "We apply our 5 Pillars of Growth methodology to design and execute end-to-end AI transformation — from strategy alignment through to Centre of Excellence establishment.",
  },
  {
    num: "03",
    title: "Technology",
    desc: "We build and deploy your Secure Algorithmic Core™ — a resilient, adaptive AI foundation including the WISDAM® Decision Intelligence platform.",
  },
];

const techBadges = ["AWS", "Microsoft Azure", "Google Cloud", "Databricks", "Snowflake", "Oracle"];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Noise texture overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Floating particles */}
        {[
          { top: "10%", left: "15%", size: 6, duration: 6, delay: 0 },
          { top: "25%", left: "80%", size: 4, duration: 8, delay: 1 },
          { top: "60%", left: "10%", size: 5, duration: 7, delay: 2 },
          { top: "70%", left: "70%", size: 3, duration: 9, delay: 0.5 },
          { top: "40%", left: "50%", size: 4, duration: 6.5, delay: 1.5 },
          { top: "80%", left: "35%", size: 5, duration: 7.5, delay: 3 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.5, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Flowing curves */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <motion.path
            d="M0,300 Q360,200 720,350 T1440,300"
            fill="none"
            stroke="hsl(74 92% 58%)"
            strokeWidth="1.5"
            animate={{ d: ["M0,300 Q360,200 720,350 T1440,300", "M0,350 Q360,250 720,300 T1440,350", "M0,300 Q360,200 720,350 T1440,300"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,500 Q360,400 720,550 T1440,500"
            fill="none"
            stroke="hsl(74 92% 58%)"
            strokeWidth="1"
            animate={{ d: ["M0,500 Q360,400 720,550 T1440,500", "M0,450 Q360,500 720,450 T1440,500", "M0,500 Q360,400 720,550 T1440,500"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.path
            d="M0,700 Q360,600 720,750 T1440,700"
            fill="none"
            stroke="hsl(170 40% 50%)"
            strokeWidth="1"
            animate={{ d: ["M0,700 Q360,600 720,750 T1440,700", "M0,650 Q360,700 720,650 T1440,700", "M0,700 Q360,600 720,750 T1440,700"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </svg>

        {/* Animated background orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="eyebrow mb-8">Engineering Tomorrow's Intelligence</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mt-8 leading-[0.95]">
                  Powering <span className="text-primary text-glow">Decision Intelligence</span> for the modern enterprise.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
                  95% of organisations investing in AI are getting zero return. PRVW is the world's most trusted guide for enterprise through the Data & AI age — diagnosing readiness, designing intelligence, and delivering measurable growth.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <Button asChild className="btn-lime rounded-full text-base px-8 py-3 h-auto">
                    <Link to="/contact">
                      Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <a href="#approach" className="btn-outline rounded-full text-base px-8 py-3 h-auto inline-flex items-center">
                    See Our Approach
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Floating stat block */}
            <ScrollReveal delay={0.4} direction="right">
              <div className="glass-card p-8 space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className={i < stats.length - 1 ? "pb-6 border-b border-border/50" : ""}>
                    <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* PROBLEM / TENSION */}
      <section id="approach" className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center max-w-4xl mx-auto leading-snug">
              "The Data & AI revolution will require boards and the entire C-suite to understand this technology at a level not previously seen. This is not your average technology revolution."
            </blockquote>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors">
                <h3 className="text-xl font-bold mb-4">Democratised AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tools and intelligence once reserved for advanced data scientists are now accessible to everyone in business.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors">
                <h3 className="text-xl font-bold mb-4">Ubiquitous AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI becomes embedded everywhere — in every project, workflow, decision, and interaction — often invisible, always present.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-xl md:text-2xl font-semibold mt-16 max-w-3xl mx-auto">
              AI alone will not provide a sustained competitive advantage. The winners will be those with the <span className="text-primary">strongest data foundations</span>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DO — 3 PILLARS */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-6 mb-16">Three pillars of transformation</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 0.15}>
                <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors hover-lift">
                  <span className="text-5xl font-extrabold text-primary/30">{p.num}</span>
                  <h3 className="text-2xl font-bold mt-4 mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">Our mission is to help the 95%.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl mt-6 opacity-80">
              Diagnosing the Future. Designing Intelligence. Delivering Growth.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button asChild className="mt-10 bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-4 text-base font-semibold">
              <Link to="/contact">Start with a Data Discovery Audit</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>


      {/* TECH EXPERTISE */}
      <section className="section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <span className="eyebrow">From AWS to Snowflake and everything between</span>
            <h2 className="mt-6 mb-12">Platform Expertise</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {techBadges.map((badge) => (
                <span key={badge} className="px-6 py-3 rounded-full border border-border/50 bg-secondary/30 text-foreground font-medium text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Spanning Global Cloud, Enterprise Data, Modern Middleware, and AI Platforms — we turn complexity into competitive advantage.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="glass-card border-t-2 border-primary p-12 md:p-16 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold">Ready to become the 1%?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                PRVW's Data Discovery and Audit is the first engagement undertaken by over 99% of our clients. It's the first step to becoming AI-ready.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
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

export default Index;
