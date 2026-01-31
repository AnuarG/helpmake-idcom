import { motion } from 'framer-motion';
import { Zap, TrendingUp, Award, ArrowUpRight } from 'lucide-react';

export const CreditWidget = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Fuel Your </span>
              <span className="text-gradient">Intelligence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Internal Credits power the ecosystem. Earn by contributing, spend on AI models 
              and expert services. Your reputation unlocks new possibilities.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Zap, label: 'Compute Power', desc: 'Access to distributed AI processing' },
                { icon: TrendingUp, label: 'Contribution Points', desc: 'Earn by improving the protocol' },
                { icon: Award, label: 'Reputation XP', desc: 'Unlock exclusive AI models & features' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 glow-border">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground">JD</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold">John Doe</div>
                    <div className="text-sm text-primary">Lead Architect</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Level 42
                </div>
              </div>

              {/* Balance */}
              <div className="bg-background/50 rounded-xl p-6 mb-6">
                <div className="text-sm text-muted-foreground mb-2">Credit Balance</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-primary glow-text">24,580</span>
                  <span className="text-muted-foreground">credits</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-emerald-400 text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+1,245 this week</span>
                </div>
              </div>

              {/* XP Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Reputation XP</span>
                  <span className="text-foreground">8,420 / 10,000</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '84%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  1,580 XP to next level
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
