"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Jennifer K.",
    role: "Fitness Enthusiast",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "FitLife completely transformed my approach to fitness. The personalized meal plans and workout routines helped me lose 30 pounds in just 4 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus T.",
    role: "Busy Professional",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As someone with a hectic schedule, FitLife's mobile app has been a game-changer. I can squeeze in quick workouts and track my progress on the go.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia R.",
    role: "Yoga Practitioner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The mindfulness audiobooks have helped me reduce stress and improve my focus. I've never felt more balanced both physically and mentally.",
    rating: 4,
  },
  {
    id: 4,
    name: "Carlos M.",
    role: "Athlete",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The nutrition guidance and supplement recommendations have taken my performance to the next level. I'm setting new personal records every month!",
    rating: 5,
  },
  {
    id: 5,
    name: "Aisha J.",
    role: "New Mom",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "FitLife made it possible for me to get back in shape after pregnancy. The at-home workouts and supportive community kept me motivated.",
    rating: 5,
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = testimonials.length - 3 // Show exactly 3 slides at a time
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl font-bold mb-4">Transformations That Inspire</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from our community about how FitLife has helped them transform their lives and achieve their fitness
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
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Testimonials */}
          <div className="overflow-hidden px-0" ref={containerRef}>
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-gray-900 p-6 rounded-xl h-full flex flex-col">
                    <div className="relative group mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <p className="text-sm font-bold text-white">{testimonial.name}</p>
                        <p className="text-xs text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 italic flex-grow text-center">
                      "{testimonial.quote}"
                    </blockquote>
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
