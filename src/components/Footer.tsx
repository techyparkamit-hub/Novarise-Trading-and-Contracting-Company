import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-950 text-zinc-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 80V20H45L45 55L75 20L75 80H50V45L20 80Z" fill="white" />
                  <path d="M45 55L85 15M85 15H65M85 15V35" stroke="#dfa247" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-black text-2xl tracking-tight uppercase text-white">
                NOVARISE
              </span>
            </Link>
            <h3 className="text-2xl font-bold text-white mb-4">Grow Your Business With Us.</h3>
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Novarise Trading and Contracting Company is a dynamic player in the corporate world of the Kingdom of Saudi Arabia, committed to Vision 2030.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-novarise-orange hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-novarise-orange hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-novarise-orange hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-novarise-orange hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-novarise-orange hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-novarise-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-novarise-orange transition-colors">What We Do</Link></li>
              <li><Link to="/manpower" className="hover:text-novarise-orange transition-colors">Manpower</Link></li>
              <li><Link to="/scrap-trading" className="hover:text-novarise-orange transition-colors">Scrap Trading</Link></li>
              <li><Link to="/projects" className="hover:text-novarise-orange transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-novarise-orange transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-novarise-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-novarise-orange transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-novarise-orange flex-shrink-0" />
                <span>48323-Umluj, King Faisal Street, Al Hurra District, Saudi Arabia.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-novarise-orange flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+966544053440" className="hover:text-novarise-orange transition-colors">+966 54 405 3440</a>
                  <a href="tel:+966590910174" className="hover:text-novarise-orange transition-colors">+966 59 091 0174</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-novarise-orange flex-shrink-0" />
                <a href="mailto:alraqimodern@gmail.com" className="hover:text-novarise-orange transition-colors">alraqimodern@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Novarise Trading and Contracting Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy statement</a>
            <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
