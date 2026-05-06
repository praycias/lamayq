import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { useState } from "react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="relative bg-[#0A0A0A] font-sans text-white overflow-x-hidden selection:bg-gold selection:text-black">
      <Navbar onBookNow={() => setIsBookingOpen(true)} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero onBookNow={() => setIsBookingOpen(true)} />
        
        <div className="relative z-10">
          <Services onBookNow={() => setIsBookingOpen(true)} />
          <Gallery />
        </div>

        <Footer />
      </motion.div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Decorative vertical grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
