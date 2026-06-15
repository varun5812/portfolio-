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
    <section id="contact" className="section-padding pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            Let's <span className="serif italic text-inkLight">Connect</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="paper-card p-8"
          >
            <h3 className="font-display text-xl font-bold text-ink mb-6">Find Me Online</h3>
            <div className="space-y-3">
              {[
                { href: socialLinks.github, icon: Github, label: "GitHub", desc: "View my projects", color: "bg-ink/5 text-ink hover:bg-ink hover:text-cream" },
                { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", desc: "Connect professionally", color: "bg-sky/20 text-skyDeep hover:bg-skyDeep hover:text-white" },
                { href: socialLinks.email, icon: Mail, label: "Email", desc: "varunkumar5812@gmail.com", color: "bg-sakura/20 text-sakuraDeep hover:bg-sakuraDeep hover:text-white" },
                { href: socialLinks.leetcode, icon: Trophy, label: "LeetCode", desc: "Problem solving", color: "bg-matcha/20 text-matchaDeep hover:bg-matchaDeep hover:text-white" }
              ].map(({ href, icon: Icon, label, desc, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:shadow-card group"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{label}</p>
                    <p className="text-xs text-inkMuted mt-0.5">{desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="paper-card p-8"
          >
            <h3 className="font-display text-xl font-bold text-ink mb-6">Send a Message</h3>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-inkMuted">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-warmGray bg-beige/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-sakura focus:bg-white focus:shadow-sakura"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-inkMuted">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-warmGray bg-beige/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-sakura focus:bg-white focus:shadow-sakura"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-inkMuted">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about the role or project..."
                required
                className="w-full rounded-xl border border-warmGray bg-beige/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-sakura focus:bg-white focus:shadow-sakura resize-none"
              />
            </div>
            <div className="mt-8 flex items-center justify-between">
              <button type="submit" className="btn-primary">
                Send Message <Send size={16} />
              </button>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold text-matchaDeep"
                >
                  Sent! ✨
                </motion.span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
