import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Globe, ChevronDown, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../context/ContentContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { content } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const dynamicLinks = (content.pages || []).map(page => ({
    name: page.title,
    href: `/p/${page.slug}`
  }));

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { 
      name: 'What We Do', 
      href: '/services',
      dropdown: [
        { name: 'Services Overview', href: '/services' },
        { name: 'Manpower', href: '/manpower' },
        { name: 'Scrap Trading', href: '/scrap-trading' },
      ]
    },
    { name: 'Projects', href: '/projects' },
    ...dynamicLinks
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-novarise-blue py-4' : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Geometric N shape based on PDF */}
                <path 
                  d="M20 80V20H45L45 55L75 20L75 80H50V45L20 80Z" 
                  fill={isScrolled ? "#1c335c" : "white"} 
                  className="transition-colors duration-300"
                />
                {/* Upward Arrow */}
                <path 
                  d="M45 55L85 15M85 15H65M85 15V35" 
                  stroke="#dfa247" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tight uppercase leading-none ${isScrolled ? 'text-novarise-blue' : 'text-white'}`}>
                NOVARISE
              </span>
              <span className={`text-[8px] font-bold uppercase tracking-widest leading-none mt-1 ${isScrolled ? 'text-zinc-500' : 'text-zinc-300'}`}>
                Trading and Contracting Company
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-novarise-orange flex items-center gap-1 py-2 ${isScrolled ? 'text-novarise-blue' : 'text-white'}`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl overflow-hidden border border-zinc-100 mt-2"
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-6 py-3 text-sm font-bold text-novarise-blue hover:bg-zinc-50 hover:text-novarise-orange transition-colors border-b border-zinc-50 last:border-0"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className={`hover:text-novarise-orange transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${isScrolled ? 'text-novarise-blue' : 'text-white'}`}>
              <Globe className="w-4 h-4" />
              EN
            </button>
            <button className={`hover:text-novarise-orange transition-colors ${isScrolled ? 'text-novarise-blue' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact" className="bg-novarise-orange text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-novarise-orange/90 transition-all shadow-lg shadow-novarise-orange/20">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className={`hover:text-novarise-orange transition-colors ${isScrolled ? 'text-novarise-blue' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-novarise-orange transition-colors ${isScrolled ? 'text-novarise-blue' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white text-novarise-blue shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-zinc-100 last:border-0">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex justify-between items-center px-3 py-4 text-base font-bold uppercase tracking-wider hover:text-novarise-orange transition-all"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-zinc-50"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-8 py-3 text-sm font-bold uppercase tracking-wider text-zinc-600 hover:text-novarise-orange transition-all"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-4 text-base font-bold uppercase tracking-wider hover:text-novarise-orange transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 flex flex-col gap-4 px-3">
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-novarise-orange transition-colors">
                  <Globe className="w-4 h-4" />
                  Global - English
                </button>
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-novarise-orange text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-novarise-orange/20 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
