"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/lib/data";
import { MapPin, Mail, Github, Linkedin, Download } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "GitHub Stars", value: "2k+" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-[#1e293b]">
      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 border border-indigo-100 dark:border-indigo-800">
            About Me
          </span>
          <h2 className="section-title">
            Passionate about crafting{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              great software
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + stats */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Avatar placeholder */}
              <div className="relative mx-auto lg:mx-0 w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 rotate-6 opacity-20" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 rotate-3 opacity-10" />
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 border-2 border-indigo-200 dark:border-indigo-700 flex items-center justify-center overflow-hidden">
                  {/* Stylized avatar */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                      {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-slate-800 dark:text-white text-lg">{personalInfo.name}</p>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">{personalInfo.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 lg:right-8 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Open to work</span>
                </div>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700 text-center"
                >
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Bio */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="text-lg">
                  {personalInfo.bio}
                </p>
                <p>
                  I believe in writing clean, maintainable code and building products that make a real difference.
                  My approach combines technical excellence with a deep understanding of user needs and business goals.
                </p>
                <p>
                  I&apos;m always looking for new challenges and opportunities to grow. Whether it&apos;s a complex
                  distributed system or a pixel-perfect UI, I bring the same level of care and craftsmanship to every project.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <a href={"mailto:" + personalInfo.email} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
