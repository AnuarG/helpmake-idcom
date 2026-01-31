import { motion } from 'framer-motion';
import { Github, GitFork, Star, Users, ExternalLink, Shield } from 'lucide-react';

const contributors = [
  { name: 'Sarah Chen', avatar: 'SC', commits: 342, rank: 1 },
  { name: 'Alex Kumar', avatar: 'AK', commits: 289, rank: 2 },
  { name: 'Maria Silva', avatar: 'MS', commits: 234, rank: 3 },
  { name: 'James Wilson', avatar: 'JW', commits: 198, rank: 4 },
  { name: 'Yuki Tanaka', avatar: 'YT', commits: 167, rank: 5 },
];

const repos = [
  { name: 'hmid-core', stars: 4.2, forks: 1.8, desc: 'Core AGI protocol implementation' },
  { name: 'neural-bridge', stars: 2.8, forks: 0.9, desc: 'Cross-model communication layer' },
  { name: 'gaia-sdk', stars: 1.9, forks: 0.6, desc: 'Social impact tracking SDK' },
];

export const OpenSourceForge = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border-primary/30">
            <Github className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Open Source Forge</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Transparency is Our </span>
            <span className="text-gradient">Kill-Switch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every line of code is auditable by the community. Fork, contribute, and earn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Repositories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Active Repositories
            </h3>
            <div className="space-y-4">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card-hover p-5 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-muted-foreground" />
                      <span className="font-mono text-primary font-medium">{repo.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{repo.desc}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}k</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks}k</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="cyber-btn-outline w-full mt-6 flex items-center justify-center gap-2"
            >
              <GitFork className="w-4 h-4" />
              <span className="font-display font-semibold">Fork the Core</span>
            </motion.button>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Leaderboard of Contributors
            </h3>
            <div className="glass-card p-6">
              <div className="space-y-4">
                {contributors.map((contributor, i) => (
                  <motion.div
                    key={contributor.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                      i === 0 ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' :
                      i === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-800' :
                      i === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {contributor.rank}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center font-display font-bold text-sm text-primary-foreground">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{contributor.name}</div>
                      <div className="text-sm text-muted-foreground">{contributor.commits} commits</div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-semibold">+{(contributor.commits * 10).toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">credits earned</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
