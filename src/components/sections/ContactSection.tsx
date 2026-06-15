import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Trophy, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../../data/portfolio";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    // Mimic API submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-12 bg-cream border-t-[3px] border-ink pb-28">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            06. Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl"
          >
            Drop a <span className="serif italic text-inkMuted font-normal">Letter / Note</span>
          </motion.h2>
        </div>

        {/* Outer Envelope Wrapper */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* Left: Stamp styled social cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-[3px] border-ink bg-paper p-6 sm:p-8 rounded-2xl shadow-sketch flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-ink border-b-2 border-dashed border-warmGray pb-4 mb-6">
                Postage & Address
              </h3>
              <div className="space-y-4">
                {[
                  {
                    href: socialLinks.github,
                    icon: Github,
                    label: "GitHub",
                    desc: "Explore projects",
                    color: "bg-ink text-cream"
                  },
                  {
                    href: socialLinks.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                    desc: "Professional network",
                    color: "bg-sky text-ink"
                  },
                  {
                    href: socialLinks.email,
                    icon: Mail,
                    label: "Email",
                    desc: "varunkumar5812@gmail.com",
                    color: "bg-sakura text-ink"
                  },
                  {
                    href: socialLinks.leetcode,
                    icon: Trophy,
                    label: "LeetCode",
                    desc: "Algorithmic practice",
                    color: "bg-apricot text-ink"
                  }
                ].map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-4 rounded-xl border-2 border-ink/10 p-3 hover:border-ink hover:shadow-[3px_3px_0px_0px_#1E1E24] transition-all duration-300 bg-cream/15 group"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink shadow-[2px_2px_0px_0px_#1E1E24] ${item.color}`}>
                      <item.icon size={16} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-ink leading-none">{item.label}</p>
                      <p className="text-[10px] sm:text-xs text-inkMuted mt-1">{item.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t-2 border-dashed border-warmGray pt-6 text-center text-xs text-inkMuted font-bold uppercase tracking-wider">
              Bengaluru, Karnataka, India 📍
            </div>
          </motion.div>

          {/* Right: Vintage letter form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-[3px] border-ink bg-paper p-6 sm:p-8 rounded-2xl shadow-sketch relative overflow-hidden"
          >
            {/* Stamp decoration */}
            <div className="absolute top-4 right-4 w-12 h-14 border-[2px] border-dashed border-ink/40 bg-warmLinen flex items-center justify-center rounded p-1 select-none">
              <span className="text-[8px] font-bold text-inkMuted rotate-12 uppercase">AI Mail</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-ink border-b-2 border-dashed border-warmGray pb-4 mb-6">
              Write a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-inkMuted">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Gon Freecss"
                    className="w-full rounded-xl border-2 border-ink bg-cream/40 px-3.5 py-2.5 text-xs sm:text-sm text-ink outline-none transition focus:bg-paper focus:shadow-[2px_2px_0px_0px_#1E1E24]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-inkMuted">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g., gon@hunter.org"
                    className="w-full rounded-xl border-2 border-ink bg-cream/40 px-3.5 py-2.5 text-xs sm:text-sm text-ink outline-none transition focus:bg-paper focus:shadow-[2px_2px_0px_0px_#1E1E24]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-inkMuted">Message Note</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Say hello, share a project, or drop a suggestion..."
                  className="w-full rounded-xl border-2 border-ink bg-cream/40 px-3.5 py-2.5 text-xs sm:text-sm text-ink outline-none transition focus:bg-paper focus:shadow-[2px_2px_0px_0px_#1E1E24] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button type="submit" className="btn-primary flex items-center gap-1.5">
                  Send Note <Send size={12} className="stroke-[3]" />
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-xs sm:text-sm font-bold text-matchaDeep flex items-center gap-1 bg-cream border border-ink/20 px-3 py-1.5 rounded-xl shadow-[1.5px_1.5px_0px_0px_rgba(30,30,36,0.1)]"
                    >
                      ✨ Note sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
