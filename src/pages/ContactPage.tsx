import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Send, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-novarise-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              We are here to help you grow your business. Reach out to us for any inquiries or project discussions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-novarise-blue mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-novarise-orange border border-zinc-100 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-novarise-blue mb-1">Our Location</h4>
                    <p className="text-zinc-600 leading-relaxed">
                      48323-Umluj, King Faisal Street,<br />
                      Al Hurra District, Saudi Arabia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-novarise-orange border border-zinc-100 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-novarise-blue mb-1">Phone Numbers</h4>
                    <div className="flex flex-col text-zinc-600">
                      <a href="tel:+966544053440" className="hover:text-novarise-orange transition-colors">+966 54 405 3440</a>
                      <a href="tel:+966590910174" className="hover:text-novarise-orange transition-colors">+966 59 091 0174</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-novarise-orange border border-zinc-100 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-novarise-blue mb-1">Email Address</h4>
                    <a href="mailto:alraqimodern@gmail.com" className="text-zinc-600 hover:text-novarise-orange transition-colors">alraqimodern@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-novarise-orange border border-zinc-100 shadow-sm">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-novarise-blue mb-1">Website</h4>
                    <a href="https://www.alraqimodern.com" className="text-zinc-600 hover:text-novarise-orange transition-colors">www.alraqimodern.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-novarise-blue rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-zinc-300">
                    <div className="flex justify-between">
                      <span>Sunday - Thursday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span className="text-novarise-orange font-bold uppercase tracking-widest text-[10px]">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-novarise-orange/10 rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-novarise-blue mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-novarise-blue uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-novarise-orange transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-novarise-blue uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-novarise-orange transition-all bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-novarise-blue uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-novarise-orange transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-novarise-blue uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-novarise-orange transition-all bg-white resize-none"
                  />
                </div>
                <button className="w-full bg-novarise-blue text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-novarise-blue/20 hover:bg-novarise-orange transition-all flex items-center justify-center gap-3">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
