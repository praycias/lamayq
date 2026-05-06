import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop",
      title: "Midnight Chrome",
      category: "Ceramic Coating"
    },
    {
      url: " https://res.cloudinary.com/dpfvx7duy/image/upload/f_auto,q_auto/1000292355_kamlik",
      title: "Italian Precision",
      category: "Full Detail"
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
      title: "Stealth Finish",
      category: "Matte Wrap Care"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-stealth">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter uppercase italic leading-none">
              THE <span className="text-gold">PORTFOLIO</span> <br />
              OF BRILLIANCE
            </h2>
          </div>
          <div className="md:col-span-4 font-mono text-xs text-white/40 uppercase tracking-widest border-l border-gold pl-6">
            Curating the finest automotive results for owners who demand perfection.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group overflow-hidden aspect-[4/5] bg-black"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="font-mono text-gold text-[10px] uppercase tracking-[0.3em] mb-2 block">
                  {img.category}
                </span>
                <h4 className="font-display text-2xl font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="px-12 py-4 border border-white/10 hover:border-gold hover:text-gold transition-all font-mono text-[10px] uppercase tracking-widest">
            View Expanded Archive (42)
          </button>
        </div>
      </div>
    </section>
  );
}
