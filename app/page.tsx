import { AudioToggle } from "@/components/ui/audio-toggle";
import { InkGrain } from "@/components/ui/ink-grain";
import { GradientBlobs } from "@/components/ui/gradient-blobs";
import { Particles } from "@/components/ui/particles";
import { StatsTicker } from "@/components/ui/stats-ticker";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionDivider } from "@/components/ui/section-divider";
import { Hero } from "@/components/sections/hero";
import { Banner } from "@/components/sections/banner";
import { TheBoulder } from "@/components/sections/the-boulder";
import { Manifesto } from "@/components/sections/manifesto";
import { QuoteOne } from "@/components/sections/quote-one";
import { Community } from "@/components/sections/community";
import { DailyChallenge } from "@/components/sections/daily-challenge";
import { QuoteTwo } from "@/components/sections/quote-two";
import { TheWall } from "@/components/sections/the-wall";
import { TheCode } from "@/components/sections/the-code";
import { TheTruth } from "@/components/sections/the-truth";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <>
      <GradientBlobs />
      <Particles />
      <InkGrain />
      <AudioToggle />
      <StatsTicker />
      <ScrollProgress />
      <main className="max-w-[1440px] mx-auto relative z-[2]">
        <Hero />
        <Banner />
        <SectionDivider kanji="一" />
        <TheBoulder />
        <SectionDivider kanji="二" />
        <Manifesto />
        <SectionDivider kanji="三" />
        <TheTruth />
        <SectionDivider kanji="四" />
        <QuoteOne />
        <SectionDivider kanji="五" />
        <Community />
        <SectionDivider kanji="六" />
        <DailyChallenge />
        <SectionDivider kanji="七" />
        <QuoteTwo />
        <SectionDivider kanji="八" />
        <TheWall />
        <SectionDivider kanji="九" />
        <TheCode />
        <FooterSection />
      </main>
    </>
  );
}
