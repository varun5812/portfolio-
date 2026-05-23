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
    <AnimatedSection id="contact" className="px-5 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Open To Roles, Internships, And Meaningful AI Work"
          description="If you are hiring for a fresher data scientist, machine learning intern, or AI-focused analyst path, I would love to connect."
        />

        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="glass-panel p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cyanGlow">
              <Sparkles size={14} />
              Available For Opportunities
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              I’m especially interested in roles where I can keep building stronger skills in data
              preprocessing, EDA, model development, deployment, and generative AI systems.
            </p>

            <div className="mt-8 grid gap-3">
              {availability.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="contact-chip">
                <Github size={18} />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-chip"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href={socialLinks.email} className="contact-chip">
                <Mail size={18} />
                Email
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="contact-chip"
              >
                <Trophy size={18} />
                LeetCode
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-8">
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
              <textarea name="message" rows={6} placeholder="Tell me about the role or project..." required />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="button-primary">
                Send Message
              </button>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm uppercase tracking-[0.2em] text-cyanGlow"
                >
                  Message signal simulated successfully
                </motion.span>
              )}
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
