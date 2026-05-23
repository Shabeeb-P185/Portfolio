import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Sparkles, Brain, Database, LineChart, Rocket, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "ML: Clustering & Data Analysis",
    description: "Performed EDA, preprocessing, clustering, and anomaly detection using machine learning techniques on real-world datasets.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    Icon: Brain,
    gradient: "from-primary to-accent",
  },
  {
    title: "Student Management System",
    description: "Full-stack CRUD application for managing student records with a responsive frontend and integrated backend.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    Icon: Database,
    gradient: "from-accent to-[oklch(0.85_0.18_200)]",
  },
  {
    title: "Machine Learning Prediction API",
    description: "Prediction API powered by ML models for intelligent forecasting, exposed via a clean REST interface.",
    tech: ["Python", "FastAPI", "Scikit-learn"],
    Icon: LineChart,
    gradient: "from-[oklch(0.85_0.18_200)] to-primary",
  },
  {
    title: "DreamKatcher Investment Platform",
    description: "Investment platform connecting movie technicians and investors with a sleek, conversion-focused interface.",
    tech: ["Next.js", "Tailwind CSS"],
    Icon: Rocket,
    gradient: "from-primary to-[oklch(0.85_0.18_200)]",
  },
  {
    title: "E Commerce Site",
    description: "Full-featured e-commerce platform with product catalog, cart, checkout flow, and order management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    Icon: ShoppingCart,
    gradient: "from-accent to-primary",
  },
];

const upcoming = [
  { title: "Real-Time Sentiment Engine", desc: "NLP pipeline analyzing social sentiment at scale." },
  { title: "Predictive Analytics Dashboard", desc: "Interactive dashboards powered by time-series forecasting." },
  { title: "Deep Learning Image Classifier", desc: "CNN-based image classification with transfer learning." },
  { title: "AI Resume Screener", desc: "LLM-powered resume parsing and ranking system." },
];

export function Projects() {
  return (
    <>
      <Section id="projects" eyebrow="Projects" title="Selected work" subtitle="A handful of projects exploring ML, data, and full-stack engineering. Source code on GitHub.">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-2xl overflow-hidden group relative"
            >
              <div className={`h-44 relative bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p.Icon className="size-20 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-white/20 blur-3xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Source Code Available on GitHub</span>
                  <a
                    href="https://github.com/laamiah18"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-medium glow-purple hover:scale-105 transition"
                  >
                    <Github className="size-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What's Next" title="Upcoming AI & Data Science Projects" subtitle="Ideas currently in research or early prototype.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcoming.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-primary/15 text-primary border border-primary/30 animate-pulse-glow">
                Coming Soon
              </div>
              <Sparkles className="size-7 text-accent mb-4" />
              <h4 className="font-semibold">{u.title}</h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
