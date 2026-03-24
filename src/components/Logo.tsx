import { motion } from "framer-motion";
import prvwLogo from "@/assets/prvw-logo.svg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={prvwLogo} 
        alt="PRVW.AI" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </motion.div>
  );
};

export default Logo;
