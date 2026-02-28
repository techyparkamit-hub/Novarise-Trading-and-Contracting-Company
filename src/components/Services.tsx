import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Recycle, Fuel, Hammer, Users } from 'lucide-react';

const services = [
  {
    icon: Recycle,
    title: 'Metal & Scrap Trading',
    description: 'Achieving revenues of 100 million Saudi riyals with a dedicated team in the eastern region.',
    image: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/scrap-trading'
  },
  {
    icon: Fuel,
    title: 'Bulk Diesel Solutions',
    description: 'Supplying premium quality Diesel, Octane & Petrol with on-site product testing and mobile refuelling.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services'
  },
  {
    icon: Hammer,
    title: 'Dismantling & Demolition',
    description: 'Serving our customers with 100% safety in dismantling and demolition contracts.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/scrap-trading'
  },
  {
    icon: Users,
    title: 'Manpower Supply',
    description: 'Providing over 120 categories of skilled labor, from QC Engineers to Riggers and Heavy Drivers.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/manpower'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novarise-orange/20 text-novarise-orange font-bold text-sm uppercase tracking-wider mb-6">
            What we do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Pillars of Business
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            From trading and supply to specialized contracting, our diverse portfolio is designed to meet the growing demands of the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative rounded-3xl overflow-hidden bg-zinc-800 aspect-[4/5] flex flex-col justify-end p-8 cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novarise-blue via-novarise-blue/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: (index * 0.1) + 0.3 
                    }}
                    className="w-12 h-12 bg-novarise-orange rounded-2xl flex items-center justify-center mb-6 text-white group-hover:-translate-y-2 transition-transform duration-300"
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-novarise-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-sm mb-6 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-novarise-orange font-bold text-sm group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
