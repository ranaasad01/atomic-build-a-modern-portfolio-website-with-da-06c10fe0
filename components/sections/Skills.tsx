// Skills + Projects + Contact sections combined
"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { skills } from "@/lib/data";

type CategoryKey = "Frontend" | "Backend" | "Tools & DevOps";

const categoryColors: Record<CategoryKey, { bg: string; text: string; border: string; bar: string }> = {
  Frontend: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-800",
    bar: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  Backend: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-100 dark:border-emerald-800",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  "Tools & DevOps": {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-100 dark:border-violet-800",
    bar: "bg-gradient-to-r from-violet-500 to-purple-500",
  },
};

const defaultColors = categoryColors["Frontend"];

const extraTech = [
  "Python", "Rust", "Go", "Java", "Swift", "Kotlin",
  "Kubernetes", "Terraform", "Nginx", "Linux", "Jest", "Cypress",
  "Prisma", "Drizzle", "tRPC", "Zustand", "React Query", "Zod",
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-[#0f172a]">
      <div className="container-max">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 border border-indigo-100 dark:border-indigo-800">
            Skillsasdasdasd
          </span>
          <h2 className="section-title">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life, from concept to deployment.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, catIdx) => {
            const colors = categoryColors[category.category as CategoryKey] || defaultColors;
            return (
              <ScrollReveal key={category.category} delay={catIdx * 0.15}>
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={["w-10 h-10 rounded-xl border flex items-center justify-center", colors.bg, colors.border].join(" ")}>
                      <span className={["text-lg font-bold", colors.text].join(" ")}>
                        {category.category[0]}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                      {category.category}
                    </h3>
                  </div>

                  <StaggerContainer className="space-y-4">
                    {category.items.map((skill) => (
                      <motion.div key={skill.name} variants={staggerItem}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className={["text-xs font-semibold", colors.text].join(" ")}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level + "%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className={["h-full rounded-full", colors.bar].join(" ")}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3} className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              Also familiar with
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {extraTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
