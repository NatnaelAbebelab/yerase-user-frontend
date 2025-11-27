"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutHero() {
  const missionRef = useRef<HTMLDivElement>(null)

  const scrollToMission = () => {
    // Get the mission section element
    const missionSection = document.getElementById("mission-values-section")

    if (missionSection) {
      // Get header height to account for fixed header
      const headerHeight = 80 // Approximate header height
      const topPosition = missionSection.getBoundingClientRect().top + window.pageYOffset - headerHeight

      // Smooth scroll to the section
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10"></div>
        <img src="/placeholder.svg?height=800&width=1600" alt="FitLife Team" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="py-32 md:py-40 flex flex-col items-center text-center">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-6">
            ABOUT FITLIFE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Transforming Lives Through Holistic Wellness Since 2016
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We're more than just a fitness platform. We're a community dedicated to helping you achieve your best self
            through expert guidance, innovative technology, and unwavering support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={scrollToMission}>
              Our Mission
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const teamSection = document.getElementById("team-section")
                if (teamSection) {
                  const headerHeight = 80
                  const topPosition = teamSection.getBoundingClientRect().top + window.pageYOffset - headerHeight
                  window.scrollTo({
                    top: topPosition,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Meet Our Team
            </Button>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-gray-400">Registered Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-gray-400">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-400">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
