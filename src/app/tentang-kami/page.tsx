import AboutHero from "@/components/sections/about/AboutHero";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutTimeline from "@/components/sections/about/AboutTimeline";
import AboutServices from "@/components/sections/about/AboutServices";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata = {
  title: "Tentang Kami | Visa Partner",
  description: "Mengenal lebih dekat Visa Partner, konsultan pengurusan visa dan perizinan dokumen Anda.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20"> {/* Offset for fixed navbar */}
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutServices />
        <AboutValues />
        <AboutTimeline />
        <AboutCTA />
      </div>
    </main>
  );
}
