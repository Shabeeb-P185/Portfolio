import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Linkedin, Github, Mail, ArrowRight, Brain, Database, Code2, Sparkles } from "lucide-react";
import { ParticlesBg } from "./ParticlesBg";

const roles = [
  "Data Science Enthusiast",
  "Machine Learning Engineer",
  "Python Developer",
  "AI & Analytics Learner",
  "Full Stack Developer",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <ParticlesBg />

      {/* floating icons */}
      <Brain className="absolute top-32 left-[8%] size-10 text-primary/60 animate-float" style={{ animationDelay: "0s" }} />
      <Database className="absolute bottom-32 left-[14%] size-8 text-accent/60 animate-float" style={{ animationDelay: "1.5s" }} />
      <Code2 className="absolute top-40 right-[12%] size-10 text-[oklch(0.85_0.18_200)]/60 animate-float" style={{ animationDelay: "3s" }} />
      <Sparkles className="absolute bottom-40 right-[8%] size-9 text-primary/60 animate-float" style={{ animationDelay: "4.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities · AI & Data Science
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
          >
            <span className="block text-foreground">Laamiah</span>
            <span className="block text-gradient animate-gradient bg-gradient-to-r from-[oklch(0.85_0.18_200)] via-primary to-accent">
              Sulthana MP
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 h-10 flex items-center justify-center"
          >
            <span className="text-muted-foreground text-lg md:text-xl mr-2">I am a</span>
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-lg md:text-xl font-semibold text-gradient-primary"
            >
              {roles[i]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            Aspiring Data Scientist specializing in machine learning, analytics,
            and intelligent software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground glow-purple hover:scale-105 transition"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/laamiah_resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/laamiah-sulthana-mp-458a872a9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex justify-center gap-4"
          >
            {[
              { Icon: Github, href: "https://github.com/laamiah18" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/laamiah-sulthana-mp-458a872a9" },
              { Icon: Mail, href: "mailto:laamiahsulthanamp@gmail.com" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="size-11 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 transition"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
