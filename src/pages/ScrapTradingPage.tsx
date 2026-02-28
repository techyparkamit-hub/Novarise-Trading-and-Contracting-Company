import { motion } from 'motion/react';
import { Recycle, Anchor, Building, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

const scrapServices = [
  {
    title: "Metal Scrap Collection",
    icon: Recycle,
    desc: "Wholesale of iron, aluminum, copper and other ferrous and non-ferrous scrap related to recycling materials.",
    features: ["Collection & Sorting", "Classification", "Detailing & Stripping", "Storage & Delivery"]
  },
  {
    title: "Dismantling & Smashing Ships",
    icon: Anchor,
    desc: "Expert dismantling and smashing of ships with specialized equipment and safety protocols.",
    features: ["Safe Dismantling", "Material Recovery", "Environmental Compliance"]
  },
  {
    title: "Demolition & Removal",
    icon: Building,
    desc: "Professional demolition and removal of buildings and other industrial structures.",
    features: ["Building Demolition", "Site Clearing", "Waste Management"]
  }
];

export default function ScrapTradingPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-zinc-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Scrap Trading Division</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              A market-leading scrap merchant in the Kingdom of Saudi Arabia, reaching 100 million SAR in revenue.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 grayscale">
          <img
            src="https://images.unsplash.com/photo-1558383331-f520f2888351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Scrap Metal"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-novarise-blue mb-6">Market-Leading Scrap Merchants</h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Established in the Umluj Governorate as a sole proprietorship, we have grown into a major national company in the metal collection sector.
              </p>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Our business includes selling, buying, processing, supplying, importing and exporting. We participate in governmental and semi-governmental auctions, private sector auctions, and soon international auctions.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-novarise-orange mb-2">100M</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">SAR Revenue</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-novarise-orange mb-2">50+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Specialists</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-zinc-100"
            >
              <img
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Industrial Scrap"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-novarise-blue mb-6">Our Scrap Services</h2>
            <p className="text-zinc-600">Comprehensive solutions for metal collection, dismantling, and demolition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scrapServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-novarise-orange/10 rounded-2xl flex items-center justify-center mb-6 text-novarise-orange group-hover:bg-novarise-orange group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-novarise-blue mb-4">{service.title}</h3>
                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-novarise-orange flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-novarise-blue rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-12">Our Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {[
                  "Recruitment and appointment of national cadres",
                  "Providing our customers with high quality products",
                  "Achieving a clean environment through recycling",
                  "Avoid and reduce environmental pollution",
                  "Providing distinguished services of high quality",
                  "Giving priority at all times to customer service",
                  "Constant search for development and improvement",
                  "Acquiring satisfaction in Saudi and foreign markets"
                ].map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-novarise-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-zinc-300 font-medium">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-novarise-orange/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
