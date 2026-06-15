import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Trophy, Send } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "../../data/portfolio";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2600);
  };

  return (
    <section id="contact" className="section-padding pb-32 relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Let's Connect</h2>
          <p className="mt-4 text-slate-400">Open for data science roles and ML internships</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Socials */}
          <div className="glass-panel p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Find Me Online</h3>
            
            <div className="space-y-4">
              {[
                { href: socialLinks.github, icon: Github, label: "GitHub", desc: "View my code and open source contributions" },
                { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", desc: "Connect for professional opportunities" },
                { href: socialLinks.email, icon: Mail, label: "Email", desc: "varun.kumar.hc@gmail.com" },
                { href: socialLinks.leetcode, icon: Trophy, label: "LeetCode", desc: "Algorithmic problem solving" }
              ].map(({ href, icon: Icon, label, desc }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-accentCyan/30 hover:bg-white/10 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bgSecondary border border-white/10 text-slate-300 group-hover:text-accentCyan transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{label}</p>
                    <p className="text-xs text-slate-400 mt-1">{desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  className="w-full rounded-xl border border-white/10 bg-bgSecondary/50 px-4 py-3 text-sm text-white outline-none transition focus:border-accentPurple/50 focus:bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  required 
                  className="w-full rounded-xl border border-white/10 bg-bgSecondary/50 px-4 py-3 text-sm text-white outline-none transition focus:border-accentPurple/50 focus:bg-white/5"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Message</label>
              <textarea 
                name="message" 
                rows={5} 
                placeholder="How can we work together?" 
                required 
                className="w-full rounded-xl border border-white/10 bg-bgSecondary/50 px-4 py-3 text-sm text-white outline-none transition focus:border-accentPurple/50 focus:bg-white/5 resize-none"
              />
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button type="submit" className="glass-button-primary">
                Send Message <Send size={16} />
              </button>
              
              {submitted && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium text-accentCyan"
                >
                  Message sent!
                </motion.span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
