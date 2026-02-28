import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ title, subtitle, description }: HeroProps) {
  const { content } = useContent();

  const displayTitle = title || content.hero.title;
  const displaySubtitle = subtitle || content.hero.subtitle;
  const displayDescription = description || content.hero.description;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-zinc-900/50 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1541888087425-ce81dcfa4892?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-cranes-and-buildings-41243-large.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image for browsers that don't support video */}
          <img
            src="https://images.unsplash.com/photo-1541888087425-ce81dcfa4892?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Heavy equipment on construction site"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {displayTitle} <br className="hidden md:block" />
            <span className="text-novarise-orange">{displaySubtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-10 max-w-2xl font-light">
            {displayDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              to="/about"
              className="group bg-novarise-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-novarise-orange/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-novarise-orange/20"
            >
              Discover NOVARISE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-novarise-orange absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
