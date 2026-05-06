import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-32 md:py-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dpfvx7duy&public_id=Lma%C3%A5y_ydppuv&autoplay=true&muted=true&loop=true&controls=false"
          className="w-full h-full opacity-40 grayscale-[0.3]"
          style={{ 
            height: '100%', 
            width: '177.77777778vh', /* 16:9 aspect ratio relative to height */
            minWidth: '130%', /* Over-sized to allow for shifting */
            minHeight: '100%',
            position: 'absolute',
            top: '50%',
            left: '60%', /* Shifted right for better content framing */
            transform: 'translate(-50%, -50%)',
            aspectRatio: '16/9',
            objectFit: 'cover',
            border: 'none',
          }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              The Platinum Standard
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-8 italic drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
            <span className="block text-white">DEFINING THE</span>
            <span className="block text-white pb-2">CAR.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
            At Lamaya, we don't just wash cars. We rejuvenate luxury assets 
            with surgical precision and bespoke ceramic technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
            <button 
              onClick={onBookNow}
              className="group relative px-10 py-5 bg-gold text-black font-display font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Exploration <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-[1px] h-32 bg-gradient-to-t from-gold to-transparent hidden md:block" />
      <div className="absolute right-10 bottom-4 font-mono text-[10px] uppercase tracking-[0.5em] rotate-90 origin-right text-white/20 hidden md:block">
        Lamaya // 2026
      </div>
    </section>
  );
}
