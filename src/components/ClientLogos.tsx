import { motion } from "framer-motion";

const clients = [
  "GSK", "Amazon", "Microsoft", "Ford", "Sky", "KFC",
  "Volkswagen", "Samsung", "M&S", "Waitrose", "Heineken",
  "Nike", "Puma", "Halfords", "Lowe's", "DHL",
  "John Lewis", "Lidl", "Primark", "Nando's", "McDonald's",
  "Audi", "Renault", "Skoda", "Costa Coffee", "Gymshark",
  "Kia", "Holland & Barrett", "Bayer", "Macmillan Cancer Support"
];

const ClientLogos = () => {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: [0, -2400] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="flex-shrink-0 px-5 py-3 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/50 transition-colors"
          >
            <span className="text-muted-foreground font-medium whitespace-nowrap text-sm">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientLogos;
