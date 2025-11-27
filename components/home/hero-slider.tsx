"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Expert-Led Fitness Courses",
    description: "Transform your body with our professional trainers and personalized workout plans.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Browse Courses",
    link: "/courses",
    gradient: "from-blue-900/80 via-blue-800/60 to-transparent",
  },
  {
    id: 2,
    title: "Personalized Meal Plans",
    description: "Nutrition made simple with meal plans tailored to your goals and preferences.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Explore Meal Plans",
    link: "/meal-plans",
    gradient: "from-purple-900/80 via-purple-800/60 to-transparent",
  },
  {
    id: 3,
    title: "Mindfulness Audiobooks",
    description: "Enhance your mental wellbeing with our collection of guided meditations and audiobooks.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Discover Audiobooks",
    link: "/audiobooks",
    gradient: "from-green-900/80 via-green-800/60 to-transparent",
  },
  {
    id: 4,
    title: "Premium Fitness Equipment",
    description: "Shop quality fitness gear and supplements to support your wellness journey.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Shop Now",
    link: "/shop",
    gradient: "from-red-900/80 via-red-800/60 to-transparent",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    if (transitioning) return
    setTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setTransitioning(false), 1000)
  }

  const prevSlide = () => {
    if (transitioning) return
    setTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setTransitioning(false), 1000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[700px] sm:h-[800px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Overlay with gradient - different for each slide */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} z-10`}></div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content - Left aligned with more padding */}
            <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 container mx-auto">
              <div className="max-w-2xl pl-4 md:pl-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">{slide.title}</h1>
                <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-xl">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a href={slide.link} className="flex items-center">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="group">
                    <span className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Positioned away from content */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators - Above the wave shape */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 54C1248 48 1344 48 1392 48L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}
