import { motion } from 'framer-motion';
import { Globe, Heart, Users, Zap } from 'lucide-react';

export const GaiaProtocol = () => {
  const regions = [
    { name: 'Europe', x: '48%', y: '30%', flow: 2340 },
    { name: 'Asia', x: '70%', y: '40%', flow: 4120 },
    { name: 'Americas', x: '25%', y: '45%', flow: 3280 },
    { name: 'Africa', x: '50%', y: '55%', flow: 1890 },
    { name: 'Oceania', x: '80%', y: '70%', flow: 920 },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border-emerald-500/30">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Gaia Protocol</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Global Social </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            20% of all protocol activity supports human re-skilling and social funds in partner countries.
          </p>
        </motion.div>

        {/* Globe Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[2/1] max-w-4xl mx-auto"
        >
          {/* World Map Stylized */}
          <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full h-px bg-primary" style={{ top: `${i * 10}%` }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-primary" style={{ left: `${i * 10}%` }} />
              ))}
            </div>

            {/* Energy nodes */}
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="absolute"
                style={{ left: region.x, top: region.y, transform: 'translate(-50%, -50%)' }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 w-16 h-16 -m-8 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                
                {/* Core node */}
                <div className="relative w-4 h-4 rounded-full bg-primary glow-border cursor-pointer group">
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="glass-card px-3 py-2 rounded-lg whitespace-nowrap">
                      <div className="text-xs font-semibold text-foreground">{region.name}</div>
                      <div className="text-xs text-primary">{region.flow.toLocaleString()} energy flow</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(185, 100%, 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {regions.slice(0, -1).map((region, i) => {
                const next = regions[i + 1];
                return (
                  <motion.line
                    key={i}
                    x1={region.x}
                    y1={region.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { icon: Globe, value: '128', label: 'Partner Nations' },
            { icon: Users, value: '2.4M', label: 'Lives Impacted' },
            { icon: Zap, value: '$48M', label: 'Funds Distributed' },
            { icon: Heart, value: '20%', label: 'Protocol Contribution' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
