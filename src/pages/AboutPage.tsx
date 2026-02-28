import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-novarise-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">About NOVARISE</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              A 100% Saudi Arabian Company committed to excellence and the Vision 2030 economic renaissance.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-novarise-orange/10 skew-x-12 translate-x-20" />
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-novarise-blue mb-6">Company Profile</h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                NOVARISE Trading and Contracting Company is a dynamic player in the corporate world of the Kingdom of Saudi Arabia. We are involved in contracting, trading, technology, industrial, food, electrical, pipe lines and manpower supply.
              </p>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Over the historical ten years, the company has successfully completed numerous projects in the public and private sectors, which reflect the company's expertise and credibility as a reputable contractor in the Kingdom of Saudi Arabia.
              </p>
              <div className="bg-zinc-50 p-6 rounded-2xl border-l-4 border-novarise-orange">
                <p className="italic text-zinc-700">
                  "NOVARISE is a financially sound group and is capable of sustaining the cash flow required for major works as demonstrated by the projects on-going."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100"
            >
              <div className="w-16 h-16 bg-novarise-orange/10 rounded-2xl flex items-center justify-center mb-6 text-novarise-orange">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-novarise-blue mb-4">Our Mission</h3>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-novarise-orange flex-shrink-0 mt-1" />
                  <span>Ensure that proven and reliable construction technology is incorporated into every aspect of the building process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-novarise-orange flex-shrink-0 mt-1" />
                  <span>Ensure that the customer's needs and concerns are understood and addressed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-novarise-orange flex-shrink-0 mt-1" />
                  <span>Provide services & manpower support throughout the construction process to help our customers succeed.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100"
            >
              <div className="w-16 h-16 bg-novarise-blue/10 rounded-2xl flex items-center justify-center mb-6 text-novarise-blue">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-novarise-blue mb-4">Our Vision</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Our vision stems from the inspiring vision of His Highness the Crown Prince 2030, which encouraged us to create a huge corporate entity that contributes to the implementation of development projects in the Kingdom of Saudi Arabia.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We strive to bring growth to our community, helping to maintain existing companies and assist our clients to make their dreams become reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-novarise-blue mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Integrity & Fairness",
                desc: "Integrity and fairness are the basis of our business ethics, whether dealing with customers, suppliers or team members.",
                icon: Award
              },
              {
                title: "Teamwork",
                desc: "Our people assist each other all the time. Internal 'cutthroat' behavior is rare and not tolerated.",
                icon: Users
              },
              {
                title: "Proven Excellence",
                desc: "Accomplishments and performance are a testament to the dedication of our skilled and experienced management team.",
                icon: CheckCircle2
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6 text-novarise-orange border border-zinc-100 shadow-sm">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-novarise-blue mb-4">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
