import { motion } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="arena" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(102,252,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(102,252,241,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyber/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyber/20 mb-8 animate-float"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber" />
          </span>
          <span className="font-inter text-sm text-cyber font-medium">42 Rigs Available Online Now</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-cyber via-white to-violet bg-clip-text text-transparent glow-text">
            THE ULTIMATE
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet via-cyber to-white bg-clip-text text-transparent">
            GAMING SANCTUARY
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-inter text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience next-generation performance with RTX 5090 rigs, full-motion VR pods, and elite streaming booths.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-space font-bold text-obsidian bg-cyber hover:bg-cyber/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(102,252,241,0.4)] active:scale-95"
          >
            <Zap className="w-5 h-5" />
            Reserve Your Slot
          </a>
          <a
            href="#zones"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-space font-semibold text-cyber border border-cyber/30 hover:border-cyber/60 hover:bg-cyber/5 transition-all duration-300"
          >
            Explore Arena
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
