import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Rocket, Users, Globe, Target, Zap, BarChart3, ArrowRight, Mail, MapPin, Briefcase, X } from "lucide-react";

const whyCards = [
  {
    icon: Rocket,
    title: "Frontier Work",
    desc: "Work on some of the most consequential Data & AI engagements globally — spanning strategy, architecture, and cutting-edge agentic systems.",
  },
  {
    icon: Users,
    title: "Adaptive Team",
    desc: "We're human + cybernetic. You'll work alongside world-class partners and proprietary AI agents that multiply your output a hundredfold.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Offices in Singapore, London, Manchester, New York, and Chicago — with the flexibility of a hybrid, remote-first culture.",
  },
];

const roles = [
  {
    title: "Senior Data & AI Consultant",
    location: "Singapore / London / Remote",
    type: "Full-time",
    desc: "We're looking for a senior consultant with deep expertise in Data & AI strategy and delivery to join our growing advisory practice. You'll lead client engagements, drive diagnostic and transformation work, and contribute to PRVW's proprietary methodologies.",
    fullDesc: [
      "Lead end-to-end Data & AI advisory engagements across strategy, architecture, and implementation for enterprise clients.",
      "Conduct data maturity diagnostics, define transformation roadmaps, and design operating models for data-driven organisations.",
      "Contribute to and evolve PRVW's proprietary frameworks, including the Secure Algorithmic Core™ methodology.",
      "Collaborate with engineers and AI specialists to translate strategic recommendations into deployable solutions.",
      "Mentor junior consultants and help shape the culture of a fast-growing, cybernetic-first advisory firm.",
    ],
    requirements: [
      "7+ years in data strategy, analytics, or AI consulting (Big 4, MBB, or specialist firm preferred).",
      "Proven track record of leading enterprise-scale Data & AI transformation programmes.",
      "Strong stakeholder management and executive communication skills.",
      "Familiarity with modern data architectures (data mesh, data fabric, lakehouse) and AI/ML platforms.",
    ],
    tags: ["Consulting", "Data Strategy", "AI Transformation", "Senior"],
    mailto: "mailto:careers@prvw.ai?subject=Application: Senior Data & AI Consultant",
  },
  {
    title: "AI & Data Engineer",
    location: "Singapore / Remote",
    type: "Full-time",
    desc: "We're seeking a talented engineer to help build and deploy enterprise-grade data fabrics, AI pipelines, and agentic systems. You'll work across the PRVW Secure Algorithmic Core™ and WISDAM® platform, turning architectural designs into production-grade reality.",
    fullDesc: [
      "Design, build, and maintain production-grade data pipelines and AI/ML workflows on cloud-native infrastructure.",
      "Develop components of the WISDAM® Decision Intelligence platform and Secure Algorithmic Core™.",
      "Implement agentic AI systems that automate complex analytical and operational workflows.",
      "Work with enterprise clients to deploy, integrate, and scale data and AI solutions in regulated environments.",
      "Contribute to engineering best practices — CI/CD, testing, monitoring, and documentation.",
    ],
    requirements: [
      "4+ years of hands-on experience in data engineering, ML engineering, or backend development.",
      "Proficiency in Python, SQL, and at least one cloud platform (AWS, GCP, or Azure).",
      "Experience with orchestration tools (Airflow, Dagster, Prefect) and modern data stack components.",
      "Familiarity with LLMs, RAG architectures, or agentic frameworks is a strong plus.",
    ],
    tags: ["Engineering", "Data Engineering", "AI/ML", "Agentic AI"],
    mailto: "mailto:careers@prvw.ai?subject=Application: AI & Data Engineer",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision over volume",
    desc: "We do fewer things, better. Every engagement is delivered with the same rigour we'd apply to a Fortune 500 client.",
  },
  {
    icon: Zap,
    title: "Intelligence multiplied",
    desc: "We combine human expertise with cybernetic capability. We expect everyone to embrace AI as a force-multiplier in their own work.",
  },
  {
    icon: BarChart3,
    title: "Impact-first",
    desc: "We measure ourselves by the measurable value we create for clients. Not by hours billed, decks delivered, or pilots run.",
  },
];

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState<typeof roles[0] | null>(null);

  return (
    <Layout>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Join PRVW</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl">Build the intelligence of tomorrow</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              We're a small team doing extraordinary work — partnering with the world's leading enterprises to engineer
              the future of AI. If you want to be at the frontier of what's possible, you're in the right place.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY PRVW */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Why PRVW</span>
            <h2 className="mt-6 mb-16">Why join us</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {whyCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.15}>
                <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors hover-lift">
                  <c.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Open Roles</span>
            <h2 className="mt-6">Current Openings</h2>
            <p className="text-muted-foreground mt-4 mb-12">
              We're actively growing. Roles below are open — more will be added shortly.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {roles.map((role, i) => (
              <ScrollReveal key={role.title} delay={i * 0.15}>
                <div
                  className="glass-card p-8 border-t-2 border-primary/20 hover:border-primary/60 transition-colors cursor-pointer"
                  onClick={() => setSelectedRole(role)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{role.location}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{role.type}</span>
                      </div>
                      <p className="text-muted-foreground mt-4 leading-relaxed line-clamp-2">{role.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-foreground font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="btn-lime rounded-full shrink-0 self-start" onClick={(e) => { e.stopPropagation(); setSelectedRole(role); }}>
                      View Role <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Role Detail Dialog */}
          <Dialog open={!!selectedRole} onOpenChange={(open) => !open && setSelectedRole(null)}>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-border">
              {selectedRole && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{selectedRole.title}</DialogTitle>
                    <DialogDescription asChild>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground pt-1">
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{selectedRole.location}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{selectedRole.type}</span>
                      </div>
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <div>
                      <p className="text-foreground leading-relaxed">{selectedRole.desc}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What you'll do</h4>
                      <ul className="space-y-2">
                        {selectedRole.fullDesc.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1 shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What we're looking for</h4>
                      <ul className="space-y-2">
                        {selectedRole.requirements.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1 shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedRole.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-foreground font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button asChild className="btn-lime rounded-full w-full text-base h-12">
                      <a href={selectedRole.mailto}>
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* General application */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16 p-12 glass-card">
              <p className="text-lg text-foreground mb-4">
                Don't see a role that fits? We're always interested in exceptional people.
              </p>
              <Button asChild className="btn-lime rounded-full text-base">
                <a href="mailto:careers@prvw.ai?subject=Open Application">
                  <Mail className="mr-2 h-4 w-4" /> Send an Open Application
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CULTURE & VALUES */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Culture & Values</span>
            <h2 className="mt-6 mb-16">How we work</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.15}>
                <div className="flex gap-4">
                  <v.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">{v.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
