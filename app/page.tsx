import { Navbar, SiteFooter } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About, ProjectsSection, ContactSection } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
