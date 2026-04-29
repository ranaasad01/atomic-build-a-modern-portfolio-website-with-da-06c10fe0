// About + ProjectsSection + ContactSection combined
"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personalInfo, projects } from "@/lib/data";
import { MapPin, Mail, Github, Linkedin, Download, Eye, ArrowRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "GitHub Stars", value: "2k+" },
];

// ─── ProjectsSection ──────────────────────────────────────────────────────────

const gradients = [
  "from-indigo-500 to-violet-600",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-rose-600",
  "from-pink-500 to-purple-600",
  "from-amber-500 to-orange-600",
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const gradient = gradients[index % gradients.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 transition-all duration-300 flex flex-col"
    >
      <div className={["relative h-44 bg-gradient-to-br overflow-hidden flex-shrink-0", gradient].join(" ")}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-white/30" />
          <div className="absolute bottom-4 right-4 w-24 h-8 rounded-lg bg-white/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-white/25 select-none">
            {project.title.split(" ").map((w: string) => w[0]).join("").slice(0, 3)}
          </span>
        </div>
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-sm text-white text-xs font-semibold">{project.year}</div>
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-sm text-white text-xs font-semibold">{project.category}</div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 text-xs font-medium">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 text-xs font-medium">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              Code
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Eye size={13} />
              Demo
            </a>
          </div>
          <Link href={"/projects/" + project.slug} className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link">
            Details
            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full-Stack", "AI/ML", "Frontend", "Tools"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-[#1e293b]">
      <div className="container-max">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 border border-indigo-100 dark:border-indigo-800">
            Projects
          </span>
          <h2 className="section-title">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects I&apos;ve built — from SaaS platforms to developer tools.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={[
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── ContactSection ───────────────────────────────────────────────────────────

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm";

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-[#0f172a]">
      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 border border-indigo-100 dark:border-indigo-800">
            Contact
          </span>
          <h2 className="section-title">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Get in touch</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m currently open to freelance projects, full-time roles, and interesting collaborations.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: "mailto:" + personalInfo.email },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.github, label: "GitHub", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                  { href: personalInfo.linkedin, label: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { href: personalInfo.twitter, label: "Twitter", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/50 shadow-sm">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
                      <input id="name" name="name" type="text" required placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                      <input id="email" name="email" type="email" required placeholder="john@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                    <input id="subject" name="subject" type="text" required placeholder="Project inquiry" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className={[inputClass, "resize-none"].join(" ")} />
                  </div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

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
