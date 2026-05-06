import { motion } from "motion/react";
import { Shield, Dog, Heart, Zap } from "lucide-react";

interface ServicesProps {
  onBookNow: () => void;
}

export default function Services({ onBookNow }: ServicesProps) {
  const services = [
    {
      id: "01",
      title: "Social Responsibility Program(SRP)",
      description: "Showing love and compassion towards the community.",
      icon: <Heart className="w-6 h-6" />,
       features: ["Sponsorship programs", "Cleaning artifacts", "Philantropy"]
    },
    {
      id: "02",
      title: "Household Maintainance",
      description: "Top-grade quality cleaning with peak protection and shiny.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Deep cleansing", "9H Liquid Armor", "powerful detergents"]
    },
    {
      id: "03",
      title: "Concierge Valet",
      description: "Door-to-door service. We collect your vehicle, perform detailing, and return it in stealth-mode.",
      icon: <Zap className="w-6 h-6" />,
       features: ["Insured Transport", "Secure Storage", "Status Tracking"]
    },
    {
      id: "04",
      title: "Pet Care",
      description: "Grooming and nurturing your pets in a loving way",
      icon: <Dog className="w-6 h-6" />,
       features: ["Bathing and Blow-drying", "Shampoo Cleansing", "Vet Care"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-gold text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold italic">
              UNCOMPROMISED <br />SERVICES.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-2">
            Every vehicle has a story. We ensure its next chapter is written in high-gloss brilliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={onBookNow}
              className="group p-8 glass hover:bg-gold/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="font-mono text-gold/20 text-4xl mb-8 group-hover:text-gold/40 transition-colors">
                {service.id}
              </div>
              <div className="bg-white/5 w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map(f => (
                  <li key={f} className="text-[10px] uppercase tracking-wider text-white/30 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold rounded-full" /> {f}
                  </li>
                ))}
              </ul>
              
              {/* Hover highlight */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="text-gold w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ChevronRight } from "lucide-react";
