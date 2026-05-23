import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something intelligent" subtitle="Let's collaborate and build intelligent solutions together.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { Icon: Mail, label: "Email", value: "laamiahsulthanamp@gmail.com", href: "mailto:laamiahsulthanamp@gmail.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "laamiah-sulthana-mp", href: "https://www.linkedin.com/in/laamiah-sulthana-mp-458a872a9" },
            { Icon: Github, label: "GitHub", value: "github.com/laamiah18", href: "https://github.com/laamiah18" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-primary/50 hover:-translate-y-1 transition group"
            >
              <div className="size-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple group-hover:scale-110 transition">
                <Icon className="size-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                <div className="text-sm font-medium">{value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="lg:col-span-3 glass-strong rounded-2xl p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" type="text" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" type="text" placeholder="What's this about?" />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_30px_-5px_oklch(0.65_0.24_295_/_0.5)] transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium glow-purple hover:scale-[1.02] transition"
          >
            <Send className="size-4" />
            {sent ? "Message sent!" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_30px_-5px_oklch(0.65_0.24_295_/_0.5)] transition"
      />
    </div>
  );
}
