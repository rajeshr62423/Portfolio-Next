import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Credentials from "@/components/credentials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollEffects from "@/components/scroll-effects";
import { ResumeModalProvider } from "@/components/resume-modal";
import StarkBot from "@/components/stark-bot";

export default function Home() {
  return (
    <ResumeModalProvider>
      <ScrollEffects />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <StarkBot />
    </ResumeModalProvider>
  );
}
