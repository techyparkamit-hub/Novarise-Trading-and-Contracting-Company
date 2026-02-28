import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Novarise has been a reliable partner for our manpower needs. Their professionalism and quality of service are unmatched in the region.",
    author: "Ahmed Al-Sayed",
    position: "Operations Manager",
    company: "Gulf Logistics"
  },
  {
    quote: "The scrap trading division at Novarise is efficient and transparent. We've had a seamless experience working with them on multiple projects.",
    author: "Sarah Johnson",
    position: "Procurement Head",
    company: "BuildRight Construction"
  },
  {
    quote: "Their commitment to safety and excellence is evident in every project they undertake. Highly recommended for complex contracting work.",
    author: "Khalid Mansour",
    position: "CEO",
    company: "Qatar Infrastructure Group"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-novarise-orange font-bold uppercase tracking-widest text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-novarise-blue mt-4 uppercase tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon Background */}
          <div className="absolute -top-12 -left-12 text-novarise-orange/10">
            <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute w-full text-center px-8"
              >
                <p className="text-2xl md:text-3xl font-medium text-zinc-700 italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-1 bg-novarise-orange mb-4" />
                  <h4 className="text-xl font-bold text-novarise-blue uppercase tracking-wider">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-zinc-500 font-medium">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={slidePrev}
              className="p-3 rounded-full border border-zinc-200 text-novarise-blue hover:bg-novarise-blue hover:text-white transition-all group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-novarise-orange w-8' : 'bg-zinc-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={slideNext}
              className="p-3 rounded-full border border-zinc-200 text-novarise-blue hover:bg-novarise-blue hover:text-white transition-all group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
