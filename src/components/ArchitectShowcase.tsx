import { motion } from 'framer-motion';
import { Star, BadgeCheck, ArrowRight } from 'lucide-react';

const architects = [
  {
    name: 'Elena Rodriguez',
    avatar: 'ER',
    specialty: 'Neural Architecture',
    level: 'Lead Architect',
    rating: 4.9,
    verified: true,
    services: [
      { name: 'Custom AI Model Training', price: 2500 },
      { name: 'Agent Workflow Design', price: 1800 },
    ],
  },
  {
    name: 'Marcus Chen',
    avatar: 'MC',
    specialty: 'Vibe Coding',
    level: 'Senior Developer',
    rating: 4.8,
    verified: true,
    services: [
      { name: 'Full-Stack AI App', price: 3200 },
      { name: 'API Integration', price: 950 },
    ],
  },
  {
    name: 'Aisha Patel',
    avatar: 'AP',
    specialty: 'Photorealism',
    level: 'Creative Director',
    rating: 5.0,
    verified: true,
    services: [
      { name: 'Brand Visual Identity', price: 4500 },
      { name: 'AI Product Photography', price: 1200 },
    ],
  },
];

export const ArchitectShowcase = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Elite </span>
            <span className="text-gradient">AI Architects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover verified experts ready to bring your AI vision to life
          </p>
        </motion.div>

        {/* Architect Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architects.map((architect, i) => (
            <motion.div
              key={architect.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center font-display font-bold text-lg text-primary-foreground">
                    {architect.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-foreground">{architect.name}</h3>
                      {architect.verified && (
                        <BadgeCheck className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="text-sm text-primary">{architect.level}</div>
                    <div className="text-sm text-muted-foreground">{architect.specialty}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${j < Math.floor(architect.rating) ? 'text-amber-400 fill-amber-400' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{architect.rating}</span>
                </div>
              </div>

              {/* Services */}
              <div className="p-6">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Services</div>
                <div className="space-y-3">
                  {architect.services.map((service, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{service.name}</span>
                      <span className="text-sm font-semibold text-primary">{service.price.toLocaleString()} credits</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 cyber-btn-outline flex items-center justify-center gap-2 text-sm">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="cyber-btn font-display font-semibold">
            Explore All Architects
          </button>
        </motion.div>
      </div>
    </section>
  );
};
