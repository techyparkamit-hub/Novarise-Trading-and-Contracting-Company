import { motion } from 'motion/react';

export default function AtAGlance() {
  return (
    <section id="sustainability" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novarise-orange/10 text-novarise-orange font-bold text-sm uppercase tracking-wider mb-6">
            At a Glance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-novarise-blue leading-tight mb-6">
            Our impact in numbers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center hover:shadow-xl transition-all"
          >
            <div className="text-5xl font-bold text-novarise-orange mb-4">10+</div>
            <h3 className="text-xl font-bold text-novarise-blue mb-2">Years</h3>
            <p className="text-zinc-600 text-sm">Operating successfully in the contracting and trading field.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center hover:shadow-xl transition-all"
          >
            <div className="text-5xl font-bold text-novarise-orange mb-4">100M</div>
            <h3 className="text-xl font-bold text-novarise-blue mb-2">SAR Revenue</h3>
            <p className="text-zinc-600 text-sm">Reached in our metal collection and scrap trading division.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center hover:shadow-xl transition-all"
          >
            <div className="text-5xl font-bold text-novarise-orange mb-4">50+</div>
            <h3 className="text-xl font-bold text-novarise-blue mb-2">Specialists</h3>
            <p className="text-zinc-600 text-sm">Elite group of employees driving our metal trading sector.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center hover:shadow-xl transition-all"
          >
            <div className="text-5xl font-bold text-novarise-orange mb-4">100%</div>
            <h3 className="text-xl font-bold text-novarise-blue mb-2">Saudi Arabian</h3>
            <p className="text-zinc-600 text-sm">Fully committed to the Vision 2030 economic renaissance.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
