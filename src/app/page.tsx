import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AreaDivider from "@/components/AreaDivider";
import ThumbnailWorks from "@/components/ThumbnailWorks";
import YouTubeSection from "@/components/YouTubeSection";
import Skills from "@/components/Skills";
import StageDivider from "@/components/StageDivider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div className="grid-bg" style={{ backgroundColor: "var(--bg-base)" }}>
          <Hero />
          <AreaDivider areaNum="AREA 01" nextArea="WORKS" />
          <ThumbnailWorks />
          <AreaDivider areaNum="AREA 02" nextArea="YOUTUBE" />
          <YouTubeSection />
          <AreaDivider areaNum="AREA 03" nextArea="SKILLS" />
          <Skills />
        </div>
        <StageDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
