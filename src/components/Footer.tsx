import { useState } from 'react';
import { Gamepad2, Send } from 'lucide-react';

const socialLinks = [
  { name: 'Discord', href: '#', icon: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
  )},
  { name: 'Twitch', href: '#', icon: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
  )},
  { name: 'Twitter', href: '#', icon: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { name: 'YouTube', href: '#', icon: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
];

const quickLinks = [
  { label: 'Arena', href: '#arena' },
  { label: 'Zones', href: '#zones' },
  { label: 'Booking', href: '#booking' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Memberships', href: '#memberships' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative border-t border-white/5 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-cyber" />
              <span className="font-space font-bold text-xl bg-gradient-to-r from-violet to-cyber bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            <p className="font-inter text-sm text-gray-500 leading-relaxed">
              The premium gaming sanctuary for competitors and creators.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(s => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-cyber hover:border-cyber/30 transition-all duration-300"
                    aria-label={s.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-semibold text-sm text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <a key={link.label} href={link.href} className="font-inter text-sm text-gray-500 hover:text-cyber transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-space font-semibold text-sm text-white mb-4">Support</h4>
            <div className="flex flex-col gap-2.5">
              {['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map(item => (
                <a key={item} href="#" className="font-inter text-sm text-gray-500 hover:text-cyber transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-space font-semibold text-sm text-white mb-4">Stay Updated</h4>
            <p className="font-inter text-sm text-gray-500 mb-4">Get notified about tournaments and events.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 font-inter text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyber/40 transition-colors"
              />
              <button className="px-3 py-2 rounded-lg bg-cyber text-obsidian hover:shadow-[0_0_15px_rgba(102,252,241,0.3)] transition-all duration-300">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-inter text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Nexus Gaming Zone. All rights reserved.
          </span>
          <span className="font-inter text-xs text-gray-600">
            Designed with precision for the elite.
          </span>
        </div>
      </div>
    </footer>
  );
}
