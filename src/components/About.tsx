import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface AboutProps {
  title?: string;
  description?: string;
}

export default function About({ title, description }: AboutProps) {
  const { content } = useContent();

  const displayTitle = title || content.about.title;
  const displayDescription = description || content.about.description;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novarise-orange/10 text-novarise-orange font-bold text-sm uppercase tracking-wider mb-6">
              Discover NOVARISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-novarise-blue leading-tight mb-6">
              {displayTitle}
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              {displayDescription}
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Civil Construction & Power Plants',
                'Heavy Equipment Rental',
                'IT Solutions & Integration',
                'Comprehensive Manpower Supply'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-novarise-orange flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/about"
              className="group bg-novarise-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-novarise-orange transition-all flex items-center justify-center gap-3 shadow-xl shadow-novarise-blue/20"
            >
              Learn more about us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern corporate building in Saudi Arabia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novarise-blue/80 via-novarise-blue/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-5xl font-bold text-novarise-orange mb-2">10+</div>
                <div className="text-xl font-medium uppercase tracking-widest">Years of excellence</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-novarise-orange/10 rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-novarise-blue/5 rounded-full -z-10 blur-3xl opacity-60" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
