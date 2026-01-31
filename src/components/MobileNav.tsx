import { motion } from 'framer-motion';
import { Home, Grid3X3, Target, Wallet } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Grid3X3, label: 'Departments', id: 'departments' },
  { icon: Target, label: 'Missions', id: 'missions' },
  { icon: Wallet, label: 'Wallet', id: 'wallet' },
];

export const MobileNav = () => {
  const [active, setActive] = useState('home');

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-card/90 backdrop-blur-xl border-t border-white/10 px-2 py-3 safe-area-bottom">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                active === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="relative">
                <item.icon className="w-5 h-5" />
                {active === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -inset-2 bg-primary/20 rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
