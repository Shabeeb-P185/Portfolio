import { motion } from "framer-motion";
import { GraduationCap, Brain, LineChart, Sparkles } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { value: "2", label: "Internships" },
  { value: "8+", label: "Projects Completed" },
  { value: "20+", label: "Technologies Learned" },
];

const highlights = [
  { Icon: GraduationCap, text: "B.Tech in Artificial Intelligence & Data Science" },
  { Icon: Brain, text: "Passion for machine learning and analytics" },
  { Icon: LineChart, text: "Skilled in EDA, clustering, and predictive systems" },
  { Icon: Sparkles, text: "Internship experience in Data Science & Full Stack" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building intelligent solutions with data">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm an aspiring <span className="text-foreground font-medium">Data Scientist and Machine Learning Engineer</span>,
            currently pursuing a B.Tech in Artificial Intelligence & Data Science. I love turning raw data into
            decisions — through clean pipelines, sharp visualizations, and models that actually ship.
          </p>
          <p>
            My focus areas include data cleaning, exploratory analysis, clustering, and predictive systems.
            Outside of ML, I build full-stack applications with Python, REST APIs, and modern frontend stacks.
          </p>
          <div className="space-y-3 pt-2">
            {highlights.map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="size-9 shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center text-primary">
                  <Icon className="size-4" />
                </div>
                <p className="pt-1.5 text-foreground/90 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-strong rounded-2xl p-6 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
