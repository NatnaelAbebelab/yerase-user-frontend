"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Jennifer K.",
    location: "New York, USA",
    image: "/placeholder.svg?height=100&width=100",
    course: "Complete Body Transformation: 12-Week Program",
    quote:
      "This course completely changed my approach to fitness. The structured program made it easy to follow along, and Alex's detailed explanations of proper form helped me avoid injuries. I lost 25 pounds and gained so much strength!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus T.",
    location: "London, UK",
    image: "/placeholder.svg?height=100&width=100",
    course: "30-Day HIIT Challenge for Maximum Fat Loss",
    quote:
      "As someone with a busy schedule, Emma's HIIT program was perfect. The workouts are intense but quick, and I could feel myself getting stronger each week. I've tried many fitness programs before, but this one actually kept me motivated till the end.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia R.",
    location: "Toronto, Canada",
    image: "/placeholder.svg?height=100&width=100",
    course: "Yoga for Strength and Flexibility",
    quote:
      "Aisha's yoga course helped me not only become more flexible but also manage my stress levels. The progression from beginner poses to more advanced sequences was perfectly paced. I now practice yoga daily and feel so much better mentally and physically.",
    rating: 4,
  },
  {
    id: 4,
    name: "Carlos M.",
    location: "Barcelona, Spain",
    image: "/placeholder.svg?height=100&width=100",
    course: "Strength Training for Beginners",
    quote:
      "I was intimidated by weight training before taking David's course. His clear instructions and beginner-friendly approach gave me the confidence to start. Six months later, I'm lifting weights I never thought possible and feeling stronger than ever.",
    rating: 5,
  },
  {
    id: 5,
    name: "Aisha J.",
    location: "Dubai, UAE",
    image: "/placeholder.svg?height=100&width=100",
    course: "Nutrition Masterclass: Meal Planning for Fitness",
    quote:
      "The nutrition course was exactly what I needed to complement my workouts. I learned how to properly fuel my body and the meal planning templates made it so easy to implement. My energy levels have improved dramatically!",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael P.",
    location: "Sydney, Australia",
    image: "/placeholder.svg?height=100&width=100",
    course: "Strength Training for Beginners",
    quote:
      "After years of on-and-off gym attendance with minimal results, this course taught me what I was doing wrong. The focus on proper technique and progressive overload has been game-changing. I've made more progress in 3 months than in the previous 3 years.",
    rating: 5,
  },
]

export default function CourseTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Update visible count based on screen size
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

  const nextSlide = () => {
    const maxStartIndex = Math.max(0, testimonials.length - visibleCount)
    setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxStartIndex = Math.max(0, testimonials.length - visibleCount)
    setCurrentIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1))
  }

  // Get visible testimonials
  const visibleTestimonials = []
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % testimonials.length
    visibleTestimonials.push(testimonials[index])
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from our community about how our courses have helped them transform their fitness journey and achieve
            their wellness goals.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900 border-gray-800"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900 border-gray-800"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Testimonials Cards */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-all duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-1 min-w-0" style={{ width: `calc(100% / ${visibleCount})` }}>
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg relative h-full border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />

                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{testimonial.name}</h4>
                        <p className="text-primary text-sm">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-gray-300 italic text-sm mb-4 line-clamp-4">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="pt-3 border-t border-gray-800 mt-auto">
                      <p className="text-xs text-primary">Course Completed:</p>
                      <p className="font-medium text-sm">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, idx) => {
              const isActive = currentIndex >= idx * visibleCount && currentIndex < (idx + 1) * visibleCount
              return (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors ${isActive ? "bg-primary" : "bg-gray-600"}`}
                  onClick={() => setCurrentIndex(idx * visibleCount)}
                  aria-label={`Go to testimonial group ${idx + 1}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
