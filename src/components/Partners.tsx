import { motion } from 'motion/react';

const partners = [
  { name: 'Saudi Aramco', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Saudi_Aramco_logo.svg/1200px-Saudi_Aramco_logo.svg.png' },
  { name: 'SABIC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SABIC_Logo.svg/1200px-SABIC_Logo.svg.png' },
  { name: 'DOOSAN', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Doosan_logo.svg/1200px-Doosan_logo.svg.png' },
  { name: 'MARAFIQ', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Marafiq_logo.svg/1200px-Marafiq_logo.svg.png' },
  { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png' },
  { name: 'Samsung Engineering', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Samsung_Engineering_logo.svg/1200px-Samsung_Engineering_logo.svg.png' },
  { name: 'SEPCO', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Sepco_logo.svg/1200px-Sepco_logo.svg.png' },
  { name: 'Petro Rabigh', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Petro_Rabigh_logo.svg/1200px-Petro_Rabigh_logo.svg.png' },
  { name: 'SWCC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/SWCC_logo.svg/1200px-SWCC_logo.svg.png' },
  { name: 'MAWANI', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Mawani_logo.svg/1200px-Mawani_logo.svg.png' },
];

export default function Partners() {
  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novarise-orange/10 text-novarise-orange font-bold text-sm uppercase tracking-wider mb-6">
            Trusted Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-novarise-blue leading-tight mb-6">
            Clients We Are Happy With.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Collaborating with industry leaders to deliver excellence across the Kingdom.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex items-center justify-center w-32 md:w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden absolute font-bold text-xl text-novarise-blue group-hover:text-novarise-orange uppercase tracking-wider text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
