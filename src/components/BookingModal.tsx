import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon, Clock, User, ChevronRight, X, ShieldCheck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicle: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const days = Array.from({ length: 6 }).map((_, i) => addDays(new Date(), i));
  const times = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

  const handleFinalBooking = () => {
    console.log("Booking Confirmed:", { ...formData, date, selectedTime });
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl glass border-gold/20 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row min-h-[600px]"
          >
            {/* Sidebar Info */}
            <div className="md:w-1/3 bg-gold/5 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
              <div>
                <button onClick={onClose} className="mb-12 text-white/40 hover:text-white transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                  <X className="w-4 h-4" /> Close Session
                </button>
                <div className="mb-8">
                  <span className="font-mono text-gold text-xs uppercase tracking-widest mb-4 block">Concierge Desk</span>
                  <h2 className="font-display text-4xl font-bold italic text-white uppercase leading-tight">Secure Your <br />Experience.</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: "Personal Info", step: 1 },
                    { title: "Session Details", step: 2 },
                    { title: "Confirmation", step: 3 }
                  ].map(s => (
                    <div key={s.step} className={`flex items-center gap-4 transition-colors ${step >= s.step ? "text-white" : "text-white/20"}`}>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs ${step === s.step ? "border-gold text-gold shadow-[0_0_10px_rgba(212,175,55,0.3)]" : "border-current"}`}>
                        {s.step}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest">{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5 space-y-4">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="text-gold w-4 h-4" />
                    <span className="font-mono text-[10px] text-white/40 uppercase">Fully Insured Service</span>
                 </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="md:w-2/3 p-8 md:p-12 relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 font-mono text-[40px] text-white/5 font-bold uppercase select-none pointer-events-none">
                LAMAYA_RESERVE
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="font-display text-2xl mb-8 flex items-center gap-3 italic">
                    <User className="text-gold" /> Personal Enrollment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-white/40 tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-all font-light text-white" 
                        placeholder="Your name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-white/40 tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-all font-light text-white" 
                        placeholder="email.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-white/40 tracking-widest">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-all font-light text-white" 
                        placeholder="Phone number" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-white/40 tracking-widest">Vehicle Model</label>
                      <input 
                        type="text" 
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-all font-light text-white" 
                        placeholder="Your car" 
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)} 
                    disabled={!formData.fullName || !formData.email || !formData.phone}
                    className="flex lg:ml-auto items-center gap-2 bg-gold text-black px-10 py-4 font-display font-bold uppercase tracking-wider hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-full lg:w-auto justify-center"
                  >
                    Select Schedule <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="font-display text-2xl mb-8 flex items-center gap-3 italic">
                    <CalendarIcon className="text-gold" /> Logistics Timing
                  </h3>
                  
                  <div className="mb-10">
                    <span className="font-mono text-[10px] uppercase text-white/40 tracking-widest mb-4 block">Preferred Date</span>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {days.map(d => (
                        <button 
                          key={d.toISOString()}
                          onClick={() => setDate(d)}
                          className={`p-4 border font-mono text-center transition-all ${
                            format(date, 'd') === format(d, 'd') ? "border-gold text-gold bg-gold/10" : "border-white/10 text-white/40 hover:border-white/20"
                          }`}
                        >
                          <div className="text-[9px] uppercase mb-1">{format(d, 'EEE')}</div>
                          <div className="text-xl font-bold">{format(d, 'dd')}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <span className="font-mono text-[10px] uppercase text-white/40 tracking-widest mb-4 block text-left">Available Slots</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {times.map(t => (
                        <button 
                          key={t} 
                          onClick={() => setSelectedTime(t)}
                          className={`p-4 border font-mono text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                            selectedTime === t ? "border-gold text-gold bg-gold/10" : "border-white/10 text-white/40 hover:border-gold hover:text-gold"
                          }`}
                        >
                          <Clock className="w-3 h-3" /> {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <button onClick={() => setStep(1)} className="text-white/40 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors underline">
                      Previous Step
                    </button>
                    <button 
                      onClick={handleFinalBooking} 
                      disabled={!selectedTime}
                      className="bg-gold text-black px-12 py-4 font-display font-bold uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50 w-full md:w-auto"
                    >
                      Book Signature Session
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <CalendarIcon className="text-gold w-10 h-10" />
                  </div>
                  <h3 className="font-display text-4xl font-bold mb-4 italic uppercase text-white">Confirmed.</h3>
                  <p className="text-white/40 font-light mb-12 max-w-sm mx-auto">
                    Reservations are exclusive. Your concierge agent will reach out momentarily to finalize the vehicle logistics.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <button 
                      onClick={onClose} 
                      className="px-10 py-4 bg-white text-black font-display font-bold uppercase tracking-widest hover:scale-105 transition-all"
                    >
                      Exit Console
                    </button>
                    <div className="px-8 py-3 bg-gold/10 border border-gold/30 font-mono text-[10px] uppercase tracking-widest text-gold italic">
                      REF: LM-BK-{Math.floor(Math.random() * 9000 + 1000)}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
