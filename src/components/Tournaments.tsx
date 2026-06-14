import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Swords, Medal, Flame, Zap } from 'lucide-react';

const tournaments = [
  { id: 1, name: 'Valorant Showdown', game: 'Valorant', date: new Date(Date.now() + 2 * 3600000), prize: '$500', slots: '8/16' },
  { id: 2, name: 'CS2 Apex Cup', game: 'CS2', date: new Date(Date.now() + 5 * 3600000), prize: '$300', slots: '12/16' },
  { id: 3, name: 'Rocket League Arena', game: 'Rocket League', date: new Date(Date.now() + 18 * 3600000), prize: '$200', slots: '6/12' },
];

const leaderboard = [
  { rank: 1, tag: 'PhantomX', streak: 14, xp: 12400 },
  { rank: 2, tag: 'NeonBlade', streak: 11, xp: 11800 },
  { rank: 3, tag: 'VoidRunner', streak: 9, xp: 10500 },
  { rank: 4, tag: 'CyberFox', streak: 7, xp: 9200 },
  { rank: 5, tag: 'ShadowPulse', streak: 6, xp: 8700 },
  { rank: 6, tag: 'ArcaneShift', streak: 5, xp: 7100 },
  { rank: 7, tag: 'ZeroGlimpse', streak: 4, xp: 6400 },
  { rank: 8, tag: 'IronSpectre', streak: 3, xp: 5200 },
];

function CountdownTimer({ target }: { target: Date }) {
  const [diff, setDiff] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (diff <= 0) return <span className="text-cyber font-space text-xs">LIVE</span>;

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <span className="font-space text-xs text-cyber">
      {pad(h)}:{pad(m)}:{pad(s)}
    </span>
  );
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-400" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />;
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
  return <span className="font-space text-sm text-gray-500 w-5 text-center">{rank}</span>;
}

export default function Tournaments() {
  return (
    <section id="tournaments" className="relative py-24 px-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Tournaments & <span className="text-violet violet-glow">Leaderboard</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-lg mx-auto">
            Compete in local LAN events and climb the arena rankings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tournaments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Swords className="w-5 h-5 text-violet" />
              <h3 className="font-space font-semibold text-lg text-white">Upcoming LAN Events</h3>
            </div>
            <div className="flex flex-col gap-3">
              {tournaments.map(t => (
                <div key={t.id} className="glass rounded-xl p-4 flex items-center gap-4 group hover:border-violet/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
                    <Swords className="w-5 h-5 text-violet" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-space font-semibold text-sm text-white truncate">{t.name}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-inter text-xs text-gray-500">{t.game}</span>
                      <span className="font-inter text-xs text-gray-600">|</span>
                      <span className="font-inter text-xs text-gray-500">{t.slots} teams</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <CountdownTimer target={t.date} />
                    </div>
                    <span className="font-inter text-xs text-yellow-400">{t.prize}</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg font-space text-xs font-semibold bg-violet/20 text-violet border border-violet/30 hover:bg-violet/30 transition-all duration-300 shrink-0">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Flame className="w-5 h-5 text-cyber" />
              <h3 className="font-space font-semibold text-lg text-white">Arena Leaderboard</h3>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <div className="grid grid-cols-[40px_1fr_80px_80px] sm:grid-cols-[50px_1fr_100px_100px] px-4 py-3 border-b border-white/5">
                <span className="font-inter text-xs text-gray-500 font-medium">#</span>
                <span className="font-inter text-xs text-gray-500 font-medium">Player</span>
                <span className="font-inter text-xs text-gray-500 font-medium text-center">Streak</span>
                <span className="font-inter text-xs text-gray-500 font-medium text-right">XP</span>
              </div>
              {leaderboard.map((p, i) => (
                <motion.div
                  key={p.rank}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`grid grid-cols-[40px_1fr_80px_80px] sm:grid-cols-[50px_1fr_100px_100px] px-4 py-3 items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-200 ${
                    p.rank <= 3 ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <div className="flex justify-center">
                    <RankBadge rank={p.rank} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className={`w-3.5 h-3.5 ${p.rank <= 3 ? 'text-cyber' : 'text-gray-600'}`} />
                    <span className={`font-space text-sm font-medium ${p.rank <= 3 ? 'text-white' : 'text-gray-300'}`}>{p.tag}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Flame className={`w-3.5 h-3.5 ${p.streak >= 10 ? 'text-orange-400' : 'text-gray-500'}`} />
                    <span className="font-inter text-sm text-gray-400">{p.streak}</span>
                  </div>
                  <span className="font-inter text-sm text-gray-400 text-right">{p.xp.toLocaleString()}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
