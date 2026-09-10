import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Splash from "./components/Splash";
import ScrollToTop from "./components/ScrollToTop";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const ContactSection = lazy(() =>
  import("./components/Contact").then((mod) => ({ default: mod.Contact }))
);
const FooterSection = lazy(() =>
  import("./components/Contact").then((mod) => ({ default: mod.Footer }))
);

export default function App() {
  return (
    <div>
      <Splash />
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-40" />}>
        <About />
        <Skills />
        <Projects />
        <ContactSection />
        <FooterSection />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}