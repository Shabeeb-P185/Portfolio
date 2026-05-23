import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award, Languages } from "lucide-react";

const achievements = ["Analytical Thinking", "Teamwork", "Adaptability", "Problem Solving", "Communication"];
const languages = ["English", "Malayalam", "Hindi"];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-strong rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple">
              <GraduationCap className="size-6" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">B.Tech in Artificial Intelligence & Data Science</h3>
            <p className="text-gradient-primary font-medium mt-1">APJ Abdul Kalam Technological University</p>
            <p className="text-sm text-muted-foreground mt-1">Mentor Engineering College · 2023 – 2027</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Focused on machine learning, statistics, data structures, and modern software engineering —
              with an emphasis on real-world data problems and intelligent systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 text-primary mb-4">
            <Languages className="size-4" />
            <h4 className="text-sm uppercase tracking-wider">Languages</h4>
          </div>
          <div className="space-y-3">
            {languages.map((l) => (
              <div key={l} className="flex items-center justify-between text-sm">
                <span>{l}</span>
                <span className="text-xs text-muted-foreground">Fluent</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2 text-primary mb-4">
          <Award className="size-4" />
          <h4 className="text-sm uppercase tracking-wider">Soft Skills</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl px-4 py-3 text-center text-sm hover:border-primary/50 hover:text-primary transition"
            >
              {a}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
