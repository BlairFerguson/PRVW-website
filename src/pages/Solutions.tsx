import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Landmark, Shield, ShoppingCart, HeartPulse, Cpu, TrendingUp,
  Package, Radio, GraduationCap, Factory, Building2,
} from "lucide-react";

const industries = [
  { icon: Landmark, name: "Banking & Financial Services", hook: "From fraud detection to algorithmic credit scoring — AI that moves at the speed of capital." },
  { icon: Shield, name: "Insurance", hook: "Underwriting intelligence, claims automation, and risk modelling at enterprise scale." },
  { icon: ShoppingCart, name: "Retail & Consumer", hook: "Personalisation engines, demand forecasting, and supply chain optimisation powered by AI." },
  { icon: HeartPulse, name: "Health & Life Sciences", hook: "Clinical AI, patient intelligence platforms, and diagnostics that save time and lives." },
  { icon: Cpu, name: "Technology & Software", hook: "AI-native product development, platform intelligence, and developer productivity at scale." },
  { icon: TrendingUp, name: "Private Equity", hook: "Due diligence automation, portfolio intelligence, and value-creation acceleration." },
  { icon: Package, name: "Consumer Goods", hook: "Brand intelligence, pricing optimisation, and route-to-market AI." },
  { icon: Radio, name: "Communications & Media", hook: "Content intelligence, audience modelling, and AI-driven monetisation." },
  { icon: GraduationCap, name: "Education", hook: "Adaptive learning platforms, student intelligence, and operational AI for institutions." },
  { icon: Factory, name: "Manufacturing", hook: "Predictive maintenance, quality control AI, and intelligent supply chain management." },
  { icon: Building2, name: "Public Sector", hook: "Responsible AI for government — citizen intelligence, policy modelling, and service automation." },
];

const capabilitiesLeft = ["Artificial Intelligence", "Cloud", "Consulting", "Data Engineering", "Digital Engineering", "Emerging Technology"];
const capabilitiesRight = ["Implementation", "Marketing & Experience", "Strategy & Operations", "Technology Transformation", "Responsible AI & Governance", "Agentic AI Systems"];

const Solutions = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal><span className="eyebrow">Solutions</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h1 className="mt-6 max-w-4xl">Intelligence built for your industry</h1></ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              PRVW brings deep domain expertise across the industries where data and AI create the greatest transformative value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={(i % 3) * 0.1}>
                <div className="glass-card p-8 h-full border-t-2 border-primary/20 hover:border-primary/60 transition-colors hover-lift">
                  <ind.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.hook}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-6 mb-12">Our Capabilities</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <ul className="space-y-3">
                {capabilitiesLeft.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ul className="space-y-3">
                {capabilitiesRight.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto">
              Not sure where to start? Every engagement begins with a Data Discovery and Audit.
            </h2>
            <Button asChild className="btn-lime rounded-full text-base mt-8">
              <Link to="/contact">Start Here</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
