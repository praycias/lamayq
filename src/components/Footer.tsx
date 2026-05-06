import { Car, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <Car className="text-gold w-8 h-8" />
              <span className="font-display text-2xl font-bold tracking-tighter uppercase italic">
                LAMAYA <span className="text-gold">Detail</span>
              </span>
            </div>
            <p className="text-white/40 font-light leading-relaxed mb-8 max-w-xs">
              The premier automotive rejuvenation center for discerning owners. 
              Precision, technology, and luxury in every droplet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-mono text-[10px] uppercase text-gold tracking-[0.3em] mb-8">Navigation</h5>
            <ul className="space-y-4 font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">The Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-mono text-[10px] uppercase text-gold tracking-[0.3em] mb-8">Legals</h5>
            <ul className="space-y-4 font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Members</a></li>
            </ul>
          </div>

          <div id="location" className="md:col-span-4 glass p-8">
            <h5 className="font-mono text-[10px] uppercase text-gold tracking-[0.3em] mb-8">Location</h5>
            <div className="space-y-4 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold w-5 h-5 shrink-0" />
                <span className="text-white/60 text-sm">Malawi,Lilongwe, <br />Area 49, New Shire</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold w-5 h-5 shrink-0" />
                <span className="text-white/60 text-sm">+265 (0) 999 20 29 09</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/20">
            © 2026 LAMAYA. ALL RIGHTS RESERVED. 
          </div>
          <div className="flex gap-8 font-mono text-[9px] uppercase tracking-widest text-white/20">
            <span>GMT+1 11:23:45</span>
            <span className="text-gold">Status: Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
