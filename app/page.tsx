import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FolkloreSection } from "@/components/folklore-section"
import { MusicSection } from "@/components/music-section"
import { CostumesSection } from "@/components/costumes-section"
import { CustomsSection } from "@/components/customs-section"
import { CuisineSection } from "@/components/cuisine-section"
import { Footer } from "@/components/footer"

export default function MacedonianCulturePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FolkloreSection />
      <MusicSection />
      <CostumesSection />
      <CustomsSection />
      <CuisineSection />
      <Footer />
    </main>
  )
}
