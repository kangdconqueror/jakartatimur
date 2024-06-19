import { BeritaTerkiniSection } from "@/components/BeritaTerkiniSection/BeritaTerkiniSection";
import { CeritaFotoSection } from "@/components/CeritaFotoSection/CeritaFotoSection";
import { DashboardButton } from "@/components/DashboardButton/DashboardButton";
import { FasilitasUnggulanSection } from "@/components/FasilitasUnggulanSection/FasilitasUnggulanSection";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { InfoJaktimSection } from "@/components/InfoJaktimSection/InfoJaktimSection";
import { JadwalKegiatanSection } from "@/components/JadwalKegiatanSection/JadwalKegiatanSection";
import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import { PartnerSection } from "@/components/PartnerSection/PartnerSection";
import { ScrollUpButton } from "@/components/ScrollUpButton/ScrollUpButton";
import { UniversalAccesButton } from "@/components/UniversalAccesButton/UniversalAccesButton";
import { VideoInformationSection } from "@/components/VideoInformationSection/VideoInformationSection";

export default function Home() {
  return (
    <main className="bg-[#FFFDFE] font-roboto">
      <NavigationBar />
      <HeroSection />
      <FasilitasUnggulanSection />
      <JadwalKegiatanSection />
      <BeritaTerkiniSection />
      <VideoInformationSection />
      <InfoJaktimSection />
      <CeritaFotoSection />
      <PartnerSection />
      <Footer />
      <DashboardButton />
      <UniversalAccesButton />
      <ScrollUpButton />
    </main>
  );
}
