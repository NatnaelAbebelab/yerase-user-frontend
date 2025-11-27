"use client"

import { useState, useEffect } from "react"
import { Linkedin, Twitter, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const teamMembers = {
  leadership: [
    {
      name: "Alex Morgan",
      role: "CEO & Co-Founder",
      bio: "Former Olympic athlete with an MBA from Stanford. Alex is passionate about making fitness accessible to everyone.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "COO & Co-Founder",
      bio: "Nutrition expert with 10+ years in the wellness industry. Sarah oversees operations and product development.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech innovator with experience at leading companies. Michael leads our engineering and product teams.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Jessica Williams",
      role: "CMO",
      bio: "Marketing strategist with a passion for wellness. Jessica leads our brand and growth initiatives.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Rodriguez",
      role: "CFO",
      bio: "Financial expert who ensures our business growth while maintaining our mission-driven focus.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
      },
    },
  ],
  trainers: [
    {
      name: "Emma Wilson",
      role: "Head of Fitness",
      bio: "HIIT and strength training specialist with 8+ years of experience training professional athletes.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Kim",
      role: "Senior Fitness Coach",
      bio: "Certified personal trainer specializing in functional fitness and recovery techniques.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Aisha Patel",
      role: "Yoga & Mindfulness Lead",
      bio: "Internationally certified yoga instructor with expertise in meditation and stress management.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Running Coach",
      bio: "Former marathon champion who specializes in endurance training and race preparation.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sophia Chen",
      role: "Pilates Instructor",
      bio: "Certified Pilates expert with a background in physical therapy and rehabilitation.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Strength Specialist",
      bio: "Olympic weightlifting coach who specializes in proper form and progressive strength development.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  nutrition: [
    {
      name: "Carlos Rodriguez",
      role: "Head Nutritionist",
      bio: "Registered dietitian with a focus on performance nutrition and sustainable eating habits.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Lisa Chen",
      role: "Meal Planning Specialist",
      bio: "Culinary expert with a background in creating nutritionally balanced meal plans for diverse needs.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Mark Thompson",
      role: "Sports Nutrition Consultant",
      bio: "Sports nutrition specialist who has worked with professional athletes across multiple disciplines.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Julia Blackwell",
      role: "Plant-Based Nutrition Expert",
      bio: "Specializes in plant-based nutrition strategies for optimal athletic performance and health.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Robert Zhang",
      role: "Clinical Nutritionist",
      bio: "Clinical background with expertise in nutrition for chronic disease prevention and management.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("leadership")
  const [currentIndex, setCurrentIndex] = useState({
    leadership: 0,
    trainers: 0,
    nutrition: 0,
  })
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const nextSlide = (category: string) => {
    const totalSlides = teamMembers[category as keyof typeof teamMembers].length
    const maxStartIndex = Math.max(0, totalSlides - visibleCount)

    setCurrentIndex((prev) => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] >= maxStartIndex ? 0 : prev[category as keyof typeof prev] + 1,
    }))
  }

  const prevSlide = (category: string) => {
    const totalSlides = teamMembers[category as keyof typeof teamMembers].length
    const maxStartIndex = Math.max(0, totalSlides - visibleCount)

    setCurrentIndex((prev) => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] <= 0 ? maxStartIndex : prev[category as keyof typeof prev] - 1,
    }))
  }

  const renderTeamSlider = (category: string, members: any[]) => {
    const startIndex = currentIndex[category as keyof typeof currentIndex]
    const visibleMembers = []

    // Handle wrapping around the end of the array
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % members.length
      visibleMembers.push(members[index])
    }

    const showNavigation = members.length > visibleCount

    return (
      <div className="relative">
        {showNavigation && (
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900 border-gray-800"
              onClick={() => prevSlide(category)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        )}

        <div className="overflow-hidden">
          <div className="flex transition-all duration-500 gap-8">
            {visibleMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="flex-1 min-w-0"
                style={{ width: `calc(100% / ${visibleCount})` }}
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-transform hover:-translate-y-2 duration-300 h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 mb-4 text-sm">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.website && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                          <a href={member.social.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showNavigation && (
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900 border-gray-800"
              onClick={() => nextSlide(category)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Indicators */}
        {showNavigation && (
          <div className="flex justify-center mt-8 space-x-1">
            {Array.from({ length: Math.ceil(members.length / visibleCount) }).map((_, idx) => {
              // Calculate if this indicator represents the current visible set
              const isActive = startIndex >= idx * visibleCount && startIndex < (idx + 1) * visibleCount

              return (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${isActive ? "bg-primary" : "bg-gray-600"}`}
                  onClick={() =>
                    setCurrentIndex((prev) => ({
                      ...prev,
                      [category]: idx * visibleCount,
                    }))
                  }
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <section id="team-section" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            OUR TEAM
          </div>
          <h2 className="text-4xl font-bold mb-4">Meet the Experts Behind FitLife</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our diverse team of professionals is united by a passion for wellness and a commitment to helping our
            members achieve their goals.
          </p>
        </div>

        <Tabs defaultValue="leadership" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-900">
              <TabsTrigger
                value="leadership"
                className="data-[state=active]:text-primary data-[state=active]:bg-primary/10"
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger
                value="trainers"
                className="data-[state=active]:text-primary data-[state=active]:bg-primary/10"
              >
                Fitness Experts
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:text-primary data-[state=active]:bg-primary/10"
              >
                Nutrition Team
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leadership" className="mt-0">
            {renderTeamSlider("leadership", teamMembers.leadership)}
          </TabsContent>

          <TabsContent value="trainers" className="mt-0">
            {renderTeamSlider("trainers", teamMembers.trainers)}
          </TabsContent>

          <TabsContent value="nutrition" className="mt-0">
            {renderTeamSlider("nutrition", teamMembers.nutrition)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
