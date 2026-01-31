import { motion } from 'framer-motion';
import { 
  Code, Bot, Server, Palette, Video, Camera, 
  Gamepad2, TrendingUp, Scale, Factory 
} from 'lucide-react';

const departments = [
  { name: 'Vibe Coding', icon: Code, description: 'Full-stack development with AI assistance', color: 'from-cyan-400 to-blue-500' },
  { name: 'AI Agents', icon: Bot, description: 'Autonomous agent creation & deployment', color: 'from-emerald-400 to-cyan-500' },
  { name: 'Solutions & Infra', icon: Server, description: 'Cloud architecture & DevOps', color: 'from-violet-400 to-purple-500' },
  { name: 'Design & Brand', icon: Palette, description: 'UI/UX & brand identity systems', color: 'from-pink-400 to-rose-500' },
  { name: 'Cinema & Video', icon: Video, description: 'AI-powered video production', color: 'from-amber-400 to-orange-500' },
  { name: 'Photorealism', icon: Camera, description: 'Hyper-realistic image generation', color: 'from-teal-400 to-emerald-500' },
  { name: 'GameDev & 3D', icon: Gamepad2, description: 'Game engines & 3D modeling', color: 'from-red-400 to-pink-500' },
  { name: 'SMM & Growth', icon: TrendingUp, description: 'Social media & growth hacking', color: 'from-lime-400 to-green-500' },
  { name: 'Legal & Ethics', icon: Scale, description: 'AI governance & compliance', color: 'from-blue-400 to-indigo-500' },
  { name: 'Industrial & Robotics', icon: Factory, description: 'Hardware integration & automation', color: 'from-slate-400 to-zinc-500' },
];

export const DepartmentGrid = () => {
  return (
    <section className="py-24 px-4 relative">
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
            <span className="text-foreground">Specialized </span>
            <span className="text-gradient">Knowledge Hubs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            10 autonomous departments powering the future of AI development
          </p>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="glass-card-hover p-6 h-full cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="w-full h-full text-white" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neural Line Divider */}
      <div className="neural-line mt-24" />
    </section>
  );
};
