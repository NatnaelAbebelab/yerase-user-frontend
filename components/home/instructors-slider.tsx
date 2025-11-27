"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const instructors = [
  {
    name: "Alex Morgan",
    title: "Fitness Coach",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sarah Johnson",
    title: "Nutrition Expert",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Michael Chen",
    title: "Yoga Instructor",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Emma Wilson",
    title: "HIIT Specialist",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "David Kim",
    title: "Strength Coach",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Lisa Rodriguez",
    title: "Mindfulness Coach",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function InstructorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [visibleCount, setVisibleCount] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)

  // Create a circular array of instructors for infinite looping
  const displayInstructors = [...instructors, ...instructors.slice(0, visibleCount)]

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 768) {
        setVisibleCount(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
      } else {
        setVisibleCount(4)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    if (currentIndex >= instructors.length - 1) {
      // If we're at the end, quickly jump back to the beginning
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }

    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    if (currentIndex === 0) {
      // If we're at the beginning, quickly jump to the end
      setCurrentIndex(instructors.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }

    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            OUR EXPERTS
          </div>
          <h2 className="text-4xl font-bold mb-4">Meet Our World-Class Instructors</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Learn from industry professionals who are passionate about helping you achieve your fitness and wellness
            goals.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900 border-gray-800"
              onClick={prevSlide}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900 border-gray-800"
              onClick={nextSlide}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Instructors Slider */}
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {displayInstructors.map((instructor, index) => (
                <div
                  key={`${instructor.name}-${index}`}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3"
                >
                  <div className="relative group overflow-hidden rounded-xl">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-xl font-bold text-white">{instructor.name}</h4>
                        <p className="text-primary">{instructor.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
