import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const Trust = dynamic(() => import("@/components/sections/Trust").then(m => ({ default: m.Trust })), { loading: () => <div className="h-96" /> });
const Services = dynamic(() => import("@/components/sections/Services").then(m => ({ default: m.Services })), { loading: () => <div className="h-96" /> });
const Solutions = dynamic(() => import("@/components/sections/Solutions").then(m => ({ default: m.Solutions })), { loading: () => <div className="h-96" /> });
const Methodology = dynamic(() => import("@/components/sections/Methodology").then(m => ({ default: m.Methodology })), { loading: () => <div className="h-96" /> });
const Differentiators = dynamic(() => import("@/components/sections/Differentiators").then(m => ({ default: m.Differentiators })), { loading: () => <div className="h-96" /> });
const Technologies = dynamic(() => import("@/components/sections/Technologies").then(m => ({ default: m.Technologies })), { loading: () => <div className="h-96" /> });
const PersonalClave = dynamic(() => import("@/components/sections/PersonalClave").then(m => ({ default: m.PersonalClave })), { loading: () => <div className="h-96" /> });
const Projects = dynamic(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })), { loading: () => <div className="h-96" /> });
const CTA = dynamic(() => import("@/components/sections/CTA").then(m => ({ default: m.CTA })), { loading: () => <div className="h-96" /> });

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Solutions />
      <Methodology />
      <Differentiators />
      <Technologies />
      <PersonalClave />
      <Projects />
      <CTA />
    </>
  );
}
