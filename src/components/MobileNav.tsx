import { motion } from 'framer-motion';
import { Home, Grid3X3, Target, Rocket, LucideIcon } from 'lucide-react';
import { useState, forwardRef } from 'react';

const TELEGRAM_BOT_URL = 'https://t.me/HelpMakeID_bot';

interface NavItem {
  icon: LucideIcon;
  label: string;
  id: string;
  href?: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', id: 'home', href: '#' },
  { icon: Grid3X3, label: 'Departments', id: 'departments', href: '#departments' },
  { icon: Target, label: 'Missions', id: 'missions', href: '#missions' },
  { icon: Rocket, label: 'Launch', id: 'launch', href: TELEGRAM_BOT_URL, isExternal: true },
];

export const MobileNav = forwardRef<HTMLElement>((_, ref) => {
  const [active, setActive] = useState('home');

  return (
    <nav
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-card/90 backdrop-blur-xl border-t border-white/10 px-2 py-3 safe-area-bottom"
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isLaunch = item.id === 'launch';
            
            if (isLaunch) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all text-primary"
                >
                  <div className="relative">
                    <item.icon className="w-5 h-5" />
                    <motion.div
                      className="absolute -inset-2 bg-primary/20 rounded-lg -z-10"
                    />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </a>
              );
            }
            
            return (
              <a
                key={item.id}
                href={item.href}
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
              </a>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
});

MobileNav.displayName = 'MobileNav';
