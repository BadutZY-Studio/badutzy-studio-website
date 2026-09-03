import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import {
  About,
  Founder,
  Games,
  Process,
  SiteFooter,
  TechStack,
  VisionMission,
} from "@/components/site/sections";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Games />
        <Process />
        <TechStack />
        <Founder />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;