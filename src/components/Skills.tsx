import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Brain, Library, Globe, Database, Wrench } from "lucide-react";

const groups = [
  { Icon: Code, title: "Programming Languages", items: ["Python", "C", "Java", "R"] },
  { Icon: Brain, title: "Data Science & ML", items: ["Machine Learning", "Data Analysis", "EDA", "Feature Engineering", "Classification", "Regression", "Clustering", "Data Visualization"] },
  { Icon: Library, title: "Libraries & Frameworks", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "FastAPI", "Flask"] },
  { Icon: Globe, title: "Web Development", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { Icon: Database, title: "Databases", items: ["MySQL", "MongoDB"] },
  { Icon: Wrench, title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My technical toolkit" subtitle="Languages, frameworks and tools I use to ship data-driven products.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="size-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground mb-4 glow-purple">
                <g.Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-foreground/80 hover:border-primary/50 hover:text-primary transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
