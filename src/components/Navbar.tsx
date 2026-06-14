import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Menu, X } from 'lucide-react';

const navLinks = ['Arena', 'Zones', 'Booking', 'Tournaments', 'Memberships'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-obsidian/80 border-b border-white/5 shadow-lg shadow-black/30'
          : 'backdrop-blur-lg bg-obsidian/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Gamepad2 className="w-6 h-6 text-cyber group-hover:text-violet transition-colors duration-300" />
          <span className="font-space font-bold text-xl bg-gradient-to-r from-violet to-cyber bg-clip-text text-transparent">
            NEXUS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-inter text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyber group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-lg font-space font-semibold text-sm text-obsidian bg-cyber hover:bg-cyber/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] active:scale-95"
          >
            Book Rig
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="font-inter text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg font-space font-semibold text-sm text-obsidian bg-cyber hover:bg-cyber/90 transition-all"
            >
              Book Rig
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
