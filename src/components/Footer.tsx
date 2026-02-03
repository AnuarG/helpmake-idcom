import { Zap, Github, Twitter, Send } from 'lucide-react';

const TELEGRAM_BOT_URL = 'https://t.me/HelpMakeID_bot';
const GITHUB_URL = 'https://github.com/AnuarG/helpmake-id-core';

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                HelpMake<span className="text-primary">ID</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              The decentralized AGI ecosystem owned by the community.
            </p>
            <div className="flex items-center gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/HelpMakeID" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Protocol',
              links: ['Documentation', 'GitHub', 'Whitepaper', 'Roadmap'],
            },
            {
              title: 'Ecosystem',
              links: ['Departments', 'Architects', 'Missions', 'Forge'],
            },
            {
              title: 'Company',
              links: ['About', 'Careers', 'Press', 'Contact'],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="neural-line mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 HelpMake ID. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
