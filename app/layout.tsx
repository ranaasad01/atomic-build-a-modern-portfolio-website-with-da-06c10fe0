import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan — Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, and Node.js.",
    type: "website",
    url: "https://alexmorgan.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, and Node.js.",
    creator: "@alexmorgan",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
