import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Gamepad, Headset, Radio } from 'lucide-react';

interface ZoneCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  accentColor: string;
}

function ZoneCard({ title, description, icon, className = '', accentColor }: ZoneCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl glass p-6 group cursor-pointer ${className}`}
    >
      {/* Dynamic border glow that follows mouse */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}20, transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accentColor === '#66FCF1' ? 'bg-cyber/10' : 'bg-violet/10'}`}>
          {icon}
        </div>
        <h3 className="font-space font-bold text-lg text-white mb-2">{title}</h3>
        <p className="font-inter text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Corner accent line */}
      <div className={`absolute top-0 right-0 w-20 h-px ${accentColor === '#66FCF1' ? 'bg-gradient-to-l from-cyber/40 to-transparent' : 'bg-gradient-to-l from-violet/40 to-transparent'}`} />
      <div className={`absolute top-0 right-0 w-px h-20 ${accentColor === '#66FCF1' ? 'bg-gradient-to-b from-cyber/40 to-transparent' : 'bg-gradient-to-b from-violet/40 to-transparent'}`} />
    </motion.div>
  );
}

export default function Zones() {
  return (
    <section id="zones" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Gaming <span className="text-cyber glow-text">Zones</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-xl mx-auto">
            Four purpose-built environments engineered for peak performance and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-2 md:row-span-2"
          >
            <ZoneCard
              title="The PC Elite Lounge"
              description="RTX 5090 & 4090 rigs on 360Hz monitors, Herman Miller chairs, and per-station noise-isolated pods. Built for competitive FPS and ranked grinders who demand zero compromise."
              icon={<Monitor className="w-6 h-6 text-cyber" />}
              accentColor="#66FCF1"
              className="h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ZoneCard
              title="The Console Coliseum"
              description="PS5 Pro & Xbox Series X on 4K OLED displays with luxury lounge seating."
              icon={<Gamepad className="w-6 h-6 text-violet" />}
              accentColor="#833AB4"
              className="h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ZoneCard
              title="VR Simulation Pods"
              description="Full-motion platforms with Index headsets for immersive gameplay."
              icon={<Headset className="w-6 h-6 text-cyber" />}
              accentColor="#66FCF1"
              className="h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-2"
          >
            <ZoneCard
              title="VIP Streaming Booths"
              description="Soundproofed spaces with dual-PC streaming rigs, pro studio lighting, and dedicated green-screen corners for content creators."
              icon={<Radio className="w-6 h-6 text-violet" />}
              accentColor="#833AB4"
              className="h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
