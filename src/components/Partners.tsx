import { motion } from 'framer-motion';

const partners = [
  { name: 'OpenAI', logo: 'OpenAI' },
  { name: 'Anthropic', logo: 'Anthropic' },
  { name: 'Google Cloud', logo: 'Google Cloud' },
  { name: 'Midjourney', logo: 'Midjourney' },
  { name: 'Hugging Face', logo: 'Hugging Face' },
  { name: 'AWS', logo: 'AWS' },
];

export const Partners = () => {
  return (
    <section className="py-24 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Strategic Alliances
          </p>
          <h3 className="font-display text-xl text-foreground">
            Open to integration with global compute providers
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="px-6 py-4 glass-card rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="font-display text-lg font-semibold text-muted-foreground">
                {partner.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
