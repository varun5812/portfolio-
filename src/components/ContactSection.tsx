import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

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
          title="Let’s Build Meaningful AI Experiences"
          description="A premium contact experience for recruiters, collaborators, and teams looking for data and AI energy."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel p-8">
            <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-white">
              Connect Across Platforms
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I’m interested in data science, AI product work, analytics storytelling, and smart
              systems that solve real-world problems.
            </p>

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
              <input type="text" name="subject" placeholder="Project collaboration" required />
            </label>
            <label className="form-field mt-4">
              <span>Message</span>
              <textarea name="message" rows={6} placeholder="Tell me about your idea..." required />
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
                  Signal transmitted successfully
                </motion.span>
              )}
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
