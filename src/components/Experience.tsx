import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Litmus7",
    duration: "June 2025 – July 2025",
    points: [
      "Worked on the end-to-end ML lifecycle",
      "Performed EDA and feature engineering",
      "Built clustering models on real-world data",
      "Used NumPy and Pandas for data preprocessing",
      "Sharpened analytical problem-solving skills",
      "Collaborated via Git for version control",
    ],
  },
  {
    role: "Python Full Stack Intern",
    company: "Litmus7",
    duration: "July 2024 – August 2024",
    points: [
      "Built CRUD applications end-to-end",
      "Developed REST APIs with Python",
      "Worked on responsive frontend development",
      "Implemented backend logic and database operations",
      "Gained debugging and testing experience",
      "Learned agile development practices",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative max-w-4xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="space-y-12">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-gradient-to-br from-primary to-accent glow-purple ring-4 ring-background" />
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="glass-strong rounded-2xl p-6 hover:border-primary/40 transition">
                  <div className="flex items-center gap-2 text-xs text-primary mb-2">
                    <Briefcase className="size-3.5" />
                    {e.duration}
                  </div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-sm text-gradient-primary font-medium mt-1">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
