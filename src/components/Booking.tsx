import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Gamepad, Headset, Radio, ChevronRight, ChevronLeft, Headphones, Coffee, Keyboard, DollarSign } from 'lucide-react';

const zones = [
  { id: 'pc', name: 'PC Elite', icon: Monitor, price: 8 },
  { id: 'console', name: 'Console', icon: Gamepad, price: 6 },
  { id: 'vr', name: 'VR Pods', icon: Headset, price: 10 },
  { id: 'stream', name: 'Streaming', icon: Radio, price: 12 },
];

const seats = [
  1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1,
];

const upgrades = [
  { id: 'headset', name: 'Pro Headset Upgrade', price: 3, icon: Headphones },
  { id: 'drinks', name: 'Unlimited Energy Drinks', price: 5, icon: Coffee },
  { id: 'keyboard', name: 'Mechanical Keyboard Swap', price: 2, icon: Keyboard },
];

export default function Booking() {
  const [step, setStep] = useState(0);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [selectedUpgrades, setSelectedUpgrades] = useState<Set<string>>(new Set());
  const [hours, setHours] = useState(2);

  const zonePrice = zones.find(z => z.id === selectedZone)?.price ?? 0;
  const upgradesTotal = upgrades
    .filter(u => selectedUpgrades.has(u.id))
    .reduce((sum, u) => sum + u.price, 0);
  const totalPrice = (zonePrice * hours) + upgradesTotal;

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const canProceed = () => {
    if (step === 0) return selectedZone !== null;
    if (step === 1) return selectedSeat !== null;
    return true;
  };

  const steps = ['Zone', 'Seat', 'Upgrades', 'Summary'];

  return (
    <section id="booking" className="relative py-24 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Book Your <span className="text-cyber glow-text">Session</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-lg mx-auto">
            Reserve your rig in four quick steps. Premium experience, zero hassle.
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-space text-xs font-bold transition-all duration-300 ${
                i <= step ? 'bg-cyber text-obsidian' : 'bg-charcoal text-gray-500 border border-white/10'
              }`}>
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 sm:w-16 h-px transition-colors duration-300 ${i < step ? 'bg-cyber' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="glass rounded-2xl p-6 sm:p-8 min-h-[340px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="zone" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <h3 className="font-space font-semibold text-lg text-white mb-5">Select Your Zone</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {zones.map(zone => {
                    const Icon = zone.icon;
                    const active = selectedZone === zone.id;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 ${
                          active
                            ? 'border-cyber bg-cyber/10 shadow-[0_0_20px_rgba(102,252,241,0.15)]'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${active ? 'text-cyber' : 'text-gray-400'}`} />
                        <span className={`font-space text-sm font-medium ${active ? 'text-cyber' : 'text-gray-300'}`}>{zone.name}</span>
                        <span className="font-inter text-xs text-gray-500">${zone.price}/hr</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="seat" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <h3 className="font-space font-semibold text-lg text-white mb-2">Select Your Seat</h3>
                <p className="font-inter text-xs text-gray-500 mb-5">Available &middot; Selected &middot; Occupied</p>
                <div className="grid grid-cols-6 gap-2 max-w-md mx-auto">
                  {seats.map((seat, i) => {
                    const isSelected = selectedSeat === i;
                    const isAvailable = seat === 0;
                    return (
                      <button
                        key={i}
                        disabled={!isAvailable && !isSelected}
                        onClick={() => setSelectedSeat(isSelected ? null : i)}
                        className={`aspect-square rounded-lg flex items-center justify-center font-inter text-xs font-medium transition-all duration-300 ${
                          isSelected
                            ? 'bg-cyber/30 border border-cyber text-cyber shadow-[0_0_12px_rgba(102,252,241,0.2)]'
                            : isAvailable
                            ? 'bg-charcoal border border-white/10 text-gray-400 hover:border-white/20'
                            : 'bg-dimred border border-red-900/30 text-gray-600 cursor-not-allowed'
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="upgrades" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <h3 className="font-space font-semibold text-lg text-white mb-5">Customize Your Session</h3>
                <div className="flex flex-col gap-3">
                  {upgrades.map(upgrade => {
                    const Icon = upgrade.icon;
                    const active = selectedUpgrades.has(upgrade.id);
                    return (
                      <button
                        key={upgrade.id}
                        onClick={() => toggleUpgrade(upgrade.id)}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                          active
                            ? 'border-cyber bg-cyber/5'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${active ? 'text-cyber' : 'text-gray-400'}`} />
                          <span className={`font-inter text-sm ${active ? 'text-white' : 'text-gray-300'}`}>{upgrade.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-inter text-sm text-gray-500">+${upgrade.price}</span>
                          <div className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-300 ${active ? 'bg-cyber' : 'bg-charcoal border border-white/10'}`}>
                            <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${active ? 'translate-x-4' : ''}`} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="summary" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <h3 className="font-space font-semibold text-lg text-white mb-5">Duration & Summary</h3>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-inter text-sm text-gray-400">Session Length</span>
                    <span className="font-space font-bold text-cyber">{hours} hour{hours !== 1 ? 's' : ''}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={hours}
                    onChange={e => setHours(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="font-inter text-xs text-gray-600">1hr</span>
                    <span className="font-inter text-xs text-gray-600">8hr</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-gray-400">Zone</span>
                    <span className="font-inter text-sm text-white">{zones.find(z => z.id === selectedZone)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-gray-400">Seat</span>
                    <span className="font-inter text-sm text-white">#{(selectedSeat ?? 0) + 1}</span>
                  </div>
                  {selectedUpgrades.size > 0 && (
                    <div className="flex justify-between">
                      <span className="font-inter text-sm text-gray-400">Upgrades</span>
                      <span className="font-inter text-sm text-white">${upgradesTotal}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-gray-400">Base ({hours}h x ${zonePrice}/hr)</span>
                    <span className="font-inter text-sm text-white">${zonePrice * hours}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between">
                    <span className="font-space font-bold text-white flex items-center gap-2"><DollarSign className="w-4 h-4 text-cyber" /> Total</span>
                    <span className="font-space font-bold text-2xl text-cyber">${totalPrice}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setStep(s => Math.max(0, s - 1))}
              className={`flex items-center gap-1 font-inter text-sm text-gray-400 hover:text-white transition-colors ${step === 0 ? 'invisible' : ''}`}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep(s => s + 1)}
                disabled={!canProceed()}
                className={`flex items-center gap-1 px-6 py-2.5 rounded-xl font-space font-semibold text-sm transition-all duration-300 ${
                  canProceed()
                    ? 'bg-cyber text-obsidian hover:shadow-[0_0_20px_rgba(102,252,241,0.3)]'
                    : 'bg-charcoal text-gray-600 border border-white/10 cursor-not-allowed'
                }`}
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button className="flex items-center gap-2 px-8 py-2.5 rounded-xl font-space font-bold text-sm bg-cyber text-obsidian hover:shadow-[0_0_20px_rgba(102,252,241,0.3)] transition-all duration-300">
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
