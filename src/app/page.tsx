import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Courses } from "@/components/sections/courses";
import { SamboHistory } from "@/components/sections/sambo-history";
import { SamboChampions } from "@/components/sections/sambo-champions";
import { Schedule } from "@/components/sections/schedule";
import { Coaches } from "@/components/sections/coaches";
import { Philosophy } from "@/components/sections/philosophy";
import { Pricing } from "@/components/sections/pricing";
import { Gallery } from "@/components/sections/gallery";
import { News } from "@/components/sections/news";
import { FreeTrial } from "@/components/sections/free-trial";
import { Contact } from "@/components/sections/contact";
import { Partners } from "@/components/sections/partners";
import { UsefulLinks } from "@/components/sections/useful-links";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Courses />
        <SamboHistory />
        <SamboChampions />
        <Schedule />
        <Coaches />
        <Gallery />
        <Philosophy />
        <Pricing />
        <News />
        <FreeTrial />
        <Partners />
        <Contact />
        <UsefulLinks />
      </main>
      <Footer />
    </div>
  );
}
