import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Platform", path: "/platform" },
      { name: "Insights", path: "/insights" },
      { name: "Careers", path: "/careers" },
    ],
    services: [
      { name: "Diagnostics", path: "/services#diagnostics" },
      { name: "Consulting", path: "/services#consulting" },
      { name: "Technology", path: "/services#technology" },
    ],
    connect: [
      { name: "Contact Us", path: "/contact" },
      { name: "Book a Call", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-6" />
            <p className="text-muted-foreground max-w-sm mb-6">
              Diagnosing the Future. Designing Intelligence. Delivering Growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/prvw-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:info@prvw.ai"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PRVW.AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
