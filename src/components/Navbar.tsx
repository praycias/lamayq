import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 glass" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative h-14 w-14 flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/dpfvx7duy/image/upload/v1778043846/Llmay%C3%A5_wuinnv.png" 
              alt="Lamaya" 
              className="h-full w-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-110" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement?.classList.add('bg-gold/10', 'border', 'border-gold/30', 'rounded-xl');
              }}
            />
            <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Visual Fallback if img fails */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 [.bg-gold\/10_&]:opacity-100">
               <span className="text-gold font-display font-black text-2xl tracking-tighter">L</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center border-l border-white/10 pl-4 h-12">
            <span className="font-display text-xl font-bold tracking-tighter uppercase leading-none text-white">
              Lamaya
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40 mt-1.5 flex items-center gap-2">
              <span className="w-1.5 h-[1px] bg-gold/50" />
              Executive Cleaners
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-mono text-xs uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onBookNow}
            className="px-6 py-2 border border-gold text-gold font-mono text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass py-8 px-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-display text-2xl font-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onBookNow();
            }}
            className="w-full py-4 border border-gold text-gold font-mono text-sm uppercase"
          >
            Schedule Experience
          </button>
        </motion.div>
      )}
    </nav>
  );
}
