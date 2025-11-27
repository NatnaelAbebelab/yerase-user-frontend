"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const facilities = [
  {
    title: "San Francisco Headquarters",
    description:
      "Our main office houses our leadership team, product development, and state-of-the-art content creation studios.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "New York Experience Center",
    description:
      "A space for members to connect with trainers, try new fitness technology, and participate in live events.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Austin Fitness Studio",
    description:
      "Where we film our workout content with professional equipment and lighting for the highest quality experience.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Miami Innovation Lab",
    description:
      "Our R&D facility where we test new fitness technologies and develop cutting-edge features for our platform.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === facilities.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? facilities.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            OUR FACILITIES
          </div>
          <h2 className="text-4xl font-bold mb-4">Where the Magic Happens</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our modern facilities where we create content, develop new features, and collaborate
            to bring you the best fitness experience.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900/70 backdrop-blur-sm border-gray-800"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-900/70 backdrop-blur-sm border-gray-800"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Facilities Slider */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {facilities.map((facility, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-gray-300">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {facilities.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
