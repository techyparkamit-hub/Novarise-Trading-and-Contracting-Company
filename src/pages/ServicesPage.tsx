import { motion } from 'motion/react';
import { Building2, Zap, Truck, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';

const detailedServices = [
  {
    title: "Civil Construction",
    icon: Building2,
    desc: "Comprehensive civil engineering and construction services for public and private sectors.",
    features: ["Structural Engineering", "Building Maintenance", "Infrastructure Development"]
  },
  {
    title: "Power Plants",
    icon: Zap,
    desc: "Specialized services in power plant construction, maintenance, and electromechanical works.",
    features: ["Electrical Systems", "Electromechanical Maintenance", "Energy Solutions"]
  },
  {
    title: "Heavy Equipment Rental",
    icon: Truck,
    desc: "A wide fleet of heavy and light equipment available for rental to support your projects.",
    features: ["Cranes & Excavators", "Transport Vehicles", "Specialized Machinery"]
  },
  {
    title: "IT Solutions",
    icon: Monitor,
    desc: "Modern IT integration and technology solutions for corporate efficiency.",
    features: ["System Integration", "Network Infrastructure", "Digital Transformation"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              We directly and ultimately engaged in various industries since 2020, delivering perfection across several areas in the Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-novarise-orange rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-novarise-blue mb-6">{service.title}</h2>
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-novarise-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video bg-zinc-100">
                    <img
                      src={`https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&sig=${index}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-novarise-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Need a specialized solution?</h2>
          <button className="bg-novarise-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-novarise-blue transition-all flex items-center gap-3 mx-auto">
            Contact our team
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
