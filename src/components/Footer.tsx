import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="inline-block size-8 rounded-lg bg-gradient-to-br from-primary to-accent glow-purple" />
              <span className="text-gradient">Laamiah.MP</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Aspiring Data Scientist building intelligent solutions with machine learning and modern software.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/laamiah18" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/laamiah-sulthana-mp-458a872a9" },
                { Icon: Mail, href: "mailto:laamiahsulthanamp@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="size-10 rounded-xl glass flex items-center justify-center hover:text-primary hover:scale-110 transition"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Laamiah Sulthana MP. All rights reserved.</p>
          <p>Built with passion for AI & Data Science</p>
        </div>
      </div>
    </footer>
  );
}
