import HeroSlider from "@/components/home/hero-slider"
import AboutSection from "@/components/home/about-section"
import OfferingsSection from "@/components/home/offerings-section"
import InstructorsSlider from "@/components/home/instructors-slider"
import MobileAppSection from "@/components/home/mobile-app-section"
import SmartwatchSection from "@/components/home/smartwatch-section"
import ShopSection from "@/components/shop-section"
import TestimonialsSlider from "@/components/home/testimonials-slider"
import PackagePlans from "@/components/home/package-plans"
import AppointmentBanner from "@/components/home/appointment-banner"
import NewsletterSection from "@/components/home/newsletter-section"

export default function Page() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSlider />
      <AboutSection />
      <OfferingsSection />
      <InstructorsSlider />
      <MobileAppSection />
      <SmartwatchSection />
      <ShopSection />
      <PackagePlans />
      <TestimonialsSlider />
      <AppointmentBanner />
      <NewsletterSection />
    </div>
  )
}
