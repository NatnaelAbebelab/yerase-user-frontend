import AboutHero from "@/components/about-us/about-hero"
import OurStory from "@/components/about-us/our-story"
import MissionValues from "@/components/about-us/mission-values"
import TeamSection from "@/components/about-us/team-section"
import Achievements from "@/components/about-us/achievements"
import WorkWithUs from "@/components/about-us/work-with-us"
import Facilities from "@/components/about-us/facilities"
import PartnersBrands from "@/components/about-us/partners-brands"
import ContactCTA from "@/components/about-us/contact-cta"

export const metadata = {
  title: "About Us | FitLife",
  description: "Learn about FitLife's mission, values, and the team behind your fitness journey",
}

export default function AboutPage() {
  return (
    <div className="bg-black text-white pt-28 overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <MissionValues />
      <TeamSection />
      <Achievements />
      <Facilities />
      <WorkWithUs />
      <PartnersBrands />
      <ContactCTA />
    </div>
  )
}
