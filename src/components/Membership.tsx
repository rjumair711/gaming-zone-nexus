import { motion } from 'framer-motion';
import { Shield, Crown, Star, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Casual',
    badge: 'Silver',
    icon: Shield,
    price: 'Hourly',
    color: 'text-gray-400',
    borderColor: 'border-gray-500/30',
    glowColor: '',
    features: [
      'Standard rig access',
      'Hourly pay-as-you-go rates',
      'Community Discord access',
      'Basic cafe menu',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    badge: 'Gold',
    icon: Crown,
    price: '$49/mo',
    color: 'text-yellow-400',
    borderColor: 'border-cyber/40',
    glowColor: 'shadow-[0_0_40px_rgba(102,252,241,0.1)]',
    features: [
      'Priority rig booking',
      '15% cafe discount',
      'Discord VIP channel',
      'Monthly tournament entry',
      'Exclusive member events',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    badge: 'Legendary',
    icon: Star,
    price: '$99/mo',
    color: 'text-violet',
    borderColor: 'border-violet/40',
    glowColor: 'shadow-[0_0_40px_rgba(131,58,180,0.1)]',
    features: [
      '24/7 unrestricted access',
      'Free tournament entries',
      'Personal locker & storage',
      'Custom leaderboard flair',
      'Private streaming booth access',
      'Guest passes (2/month)',
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section id="memberships" className="relative py-24 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyber/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Membership <span className="text-cyber glow-text">Tiers</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-lg mx-auto">
            Unlock perks, discounts, and exclusive access with a membership plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.badge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative glass rounded-2xl p-6 border ${tier.borderColor} ${tier.glowColor} transition-all duration-300 hover:border-opacity-60 ${
                  tier.popular ? 'md:-mt-4 md:mb-0' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyber text-obsidian font-space text-xs font-bold shadow-[0_0_20px_rgba(102,252,241,0.3)]">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 ${
                    tier.popular ? 'bg-cyber/10' : 'bg-white/5'
                  }`}>
                    <Icon className={`w-7 h-7 ${tier.color}`} />
                  </div>
                  <h3 className="font-space font-bold text-xl text-white">{tier.name}</h3>
                  <span className={`font-space text-sm font-medium ${tier.color}`}>({tier.badge})</span>
                  <div className="mt-3">
                    <span className="font-space font-bold text-3xl text-white">{tier.price}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map(feature => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.popular ? 'text-cyber' : 'text-gray-500'}`} />
                      <span className="font-inter text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-2.5 rounded-xl font-space font-semibold text-sm transition-all duration-300 ${
                    tier.popular
                      ? 'bg-cyber text-obsidian hover:shadow-[0_0_20px_rgba(102,252,241,0.3)]'
                      : 'border border-white/10 text-gray-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {tier.popular ? 'Join Pro' : 'Get Started'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
