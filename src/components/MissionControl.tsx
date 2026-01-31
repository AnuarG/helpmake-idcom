import { motion } from 'framer-motion';
import { Target, Zap, Clock, ChevronRight, Award, Flame } from 'lucide-react';

const missions = [
  {
    title: 'Fine-tune a Neural Model',
    difficulty: 'Lead',
    reward: 5000,
    timeLeft: '2d 14h',
    participants: 24,
    progress: 67,
    hot: true,
  },
  {
    title: 'Draft Ethical AI Guidelines',
    difficulty: 'Senior',
    reward: 3500,
    timeLeft: '5d 8h',
    participants: 18,
    progress: 45,
    hot: false,
  },
  {
    title: 'Build Agent Workflow Template',
    difficulty: 'Junior',
    reward: 1500,
    timeLeft: '1d 6h',
    participants: 42,
    progress: 89,
    hot: true,
  },
  {
    title: 'Optimize Inference Pipeline',
    difficulty: 'Senior',
    reward: 4200,
    timeLeft: '3d 20h',
    participants: 15,
    progress: 32,
    hot: false,
  },
];

const difficultyColors: Record<string, string> = {
  Junior: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Senior: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Lead: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

export const MissionControl = () => {
  return (
    <section className="py-24 px-4 mesh-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border-amber-500/30">
            <Target className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400 font-medium">Mission Control</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Active </span>
            <span className="text-gradient">Missions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solve real AI challenges, earn Credits, and level up your reputation
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group cursor-pointer relative overflow-hidden"
            >
              {mission.hot && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium">
                  <Flame className="w-3 h-3" />
                  <span>Hot</span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {mission.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[mission.difficulty]}`}>
                      {mission.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{mission.participants} participants</span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground">{mission.progress}%</span>
                </div>
                <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${mission.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-primary">
                    <Zap className="w-4 h-4" />
                    <span className="font-semibold">{mission.reward.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">credits</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{mission.timeLeft}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leaderboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="font-display font-semibold">Top Mission Hunters</span>
            </div>
            <button className="text-sm text-primary hover:underline">View All</button>
          </div>
          <div className="flex items-center justify-around">
            {['🥇 Sarah C.', '🥈 Alex K.', '🥉 Maria S.'].map((name, i) => (
              <div key={i} className="text-center">
                <div className="text-lg">{name.split(' ')[0]}</div>
                <div className="text-sm text-muted-foreground">{name.split(' ').slice(1).join(' ')}</div>
                <div className="text-xs text-primary mt-1">{42 - i * 5} missions</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
