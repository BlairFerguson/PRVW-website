import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Globe, MapPin, Linkedin } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  organisation: z.string().min(1, "Organisation is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more detail"),
  interest: z.string().min(1, "Please select an option"),
});

type FormData = z.infer<typeof formSchema>;

const offices = [
  { city: "Singapore HQ", address: "160 Robinson Road, #20-03, SBF Centre, 068914", email: "singapore@prvw.ai" },
  { city: "Singapore SMU", address: "40 Stamford Rd, Level 4, SMU Connexion, 178908", email: "incubator@prvw.ai" },
  { city: "London", address: "4/4a Bloomsbury Square, WC1A 2RP", email: "london@prvw.ai" },
  { city: "Manchester", address: "82 King Street, M2 4WQ", email: "manchester@prvw.ai" },
  { city: "New York", address: "14 Wall Street, New York City, 10005", email: "newyork@prvw.ai" },
  { city: "Chicago", address: "110 North Wacker Drive, 60606", email: "chicago@prvw.ai" },
];

const interestOptions = ["Data & AI Diagnostic", "Consulting Engagement", "Technology Build", "General Enquiry"];

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", organisation: "", jobTitle: "", email: "", phone: "", message: "", interest: "" },
  });

  const onSubmit = () => {
    toast({ title: "Thank you", description: "We'll be in touch within 24 hours." });
    form.reset();
  };

  return (
    <Layout>
      <section className="section-padding pb-16">
        <div className="container-wide mx-auto">
          <ScrollReveal><span className="eyebrow">Get in Touch</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h1 className="mt-6 max-w-4xl">Let's start with a conversation</h1></ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              Whether you're exploring Data & AI readiness, seeking a strategic partner, or looking to build something transformative — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-4 md:px-8">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            <ScrollReveal>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="Jane Smith" className="bg-secondary/50 border-border" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="organisation" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation</FormLabel>
                        <FormControl><Input placeholder="Acme Corp" className="bg-secondary/50 border-border" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="jobTitle" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl><Input placeholder="Chief Data Officer" className="bg-secondary/50 border-border" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input type="email" placeholder="jane@acme.com" className="bg-secondary/50 border-border" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (optional)</FormLabel>
                      <FormControl><Input placeholder="+65 9123 4567" className="bg-secondary/50 border-border" {...field} /></FormControl>
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="interest" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What best describes your interest?</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="grid sm:grid-cols-2 gap-3 mt-2">
                          {interestOptions.map((opt) => (
                            <div key={opt} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt} id={opt} />
                              <Label htmlFor={opt} className="text-sm cursor-pointer">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea rows={5} placeholder="Tell us about your challenge..." className="bg-secondary/50 border-border resize-none" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" className="btn-lime rounded-full text-base w-full sm:w-auto">Send Message</Button>
                </form>
              </Form>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div className="glass-card p-6">
                  <h4 className="font-bold mb-4">Contact</h4>
                  <div className="space-y-3 text-sm">
                    <a href="mailto:info@prvw.ai" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 text-primary" /> info@prvw.ai
                    </a>
                    <a href="https://prvw.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="h-4 w-4 text-primary" /> prvw.ai
                    </a>
                    <a href="https://www.linkedin.com/company/prvw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
                    </a>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <h4 className="font-bold mb-4">Global Offices</h4>
                  <div className="space-y-4">
                    {offices.map((o) => (
                      <div key={o.city} className="text-sm">
                        <p className="font-semibold flex items-center gap-2"><MapPin className="h-3 w-3 text-primary" /> {o.city}</p>
                        <p className="text-muted-foreground mt-0.5">{o.address}</p>
                        <a href={`mailto:${o.email}`} className="text-primary text-xs hover:underline">{o.email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
