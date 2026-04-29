import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "indigo" | "outline" | "subtle";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    indigo:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
    outline:
      "bg-transparent text-indigo-600 dark:text-indigo-400 border border-indigo-400 dark:border-indigo-600",
    subtle:
      "bg-slate-50 text-slate-600 dark:bg-slate-900/50 dark:text-slate-400 border border-slate-100 dark:border-slate-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
