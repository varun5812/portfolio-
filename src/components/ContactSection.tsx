import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const availability = [
  "Open to Data Science Internships",
  "Junior Machine Learning Roles",
  "Analytics And EDA Projects",
  "Generative AI Learning Opportunities"
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2600);
  };

  return (
    <AnimatedSection id="contact" className="section-padding pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="If you're hiring for a fresher data scientist, ML intern, or AI-focused analyst path — I'd love to connect."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card p-8">
            <div className="badge mb-6">
              <Sparkles size={12} className="text-accent" />
              Available For Opportunities
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              I'm especially interested in roles where I can keep building stronger skills in data
              preprocessing, EDA, model development, deployment, and generative AI systems.
            </p>

            <div className="mt-6 space-y-2.5">
              {availability.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-2.5">
              {[
                { href: socialLinks.github, icon: Github, label: "GitHub", external: true },
                { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
                { href: socialLinks.email, icon: Mail, label: "Email", external: false },
                { href: socialLinks.leetcode, icon: Trophy, label: "LeetCode", external: true }
              ].map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label className="form-field mt-4">
              <span>Subject</span>
              <input type="text" name="subject" placeholder="Job opportunity or collaboration" required />
            </label>
            <label className="form-field mt-4">
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Tell me about the role or project..." required />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs uppercase tracking-[0.15em] text-accent"
                >
                  Message sent successfully
                </motion.span>
              )}
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
