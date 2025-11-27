"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const instructors = [
  {
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    bio: "Former Olympic athlete with 15+ years of coaching experience. Specializes in functional strength training and athletic performance.",
    image: "/placeholder.svg?height=400&width=400",
    courses: 12,
    students: 15420,
    rating: 4.9,
    expertise: ["Strength Training", "Athletic Performance", "Functional Fitness"],
  },
  {
    name: "Emma Wilson",
    role: "HIIT & Cardio Specialist",
    bio: "Certified personal trainer with a background in competitive sports. Known for her high-energy HIIT workouts and motivational coaching style.",
    image: "/placeholder.svg?height=400&width=400",
    courses: 8,
    students: 12350,
    rating: 4.8,
    expertise: ["HIIT", "Cardio", "Weight Loss"],
  },
  {
    name: "David Kim",
    role: "Strength Coach",
    bio: "Powerlifting champion and certified strength coach. Focuses on proper form and progressive overload for maximum strength gains.",
    image: "/placeholder.svg?height=400&width=400",
    courses: 10,
    students: 9870,
    rating: 4.9,
    expertise: ["Powerlifting", "Hypertrophy", "Strength Fundamentals"],
  },
  {
    name: "Aisha Patel",
    role: "Yoga & Mindfulness Instructor",
    bio: "Internationally certified yoga instructor with 12+ years of teaching experience. Combines traditional yoga practices with modern movement science.",
    image: "/placeholder.svg?height=400&width=400",
    courses: 15,
    students: 18650,
    rating: 4.9,
    expertise: ["Yoga", "Flexibility", "Meditation", "Stress Management"],
  },
]

export default function InstructorSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextInstructor = () => {
    setCurrentIndex((prev) => (prev === instructors.length - 1 ? 0 : prev + 1))
  }

  const prevInstructor = () => {
    setCurrentIndex((prev) => (prev === 0 ? instructors.length - 1 : prev - 1))
  }

  const instructor = instructors[currentIndex]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            INSTRUCTOR SPOTLIGHT
          </div>
          <h2 className="text-4xl font-bold mb-4">Learn From the Best</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our world-class instructors bring years of expertise and passion to every course. Get to know the experts
            who will guide your fitness journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-900 border-gray-800"
                onClick={prevInstructor}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={instructors[currentIndex].image || "/placeholder.svg"}
                    alt={instructors[currentIndex].name}
                    className="w-full h-full object-cover"
                    key={instructors[currentIndex].name} // Add key to force re-render
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-primary">{instructor.role}</p>
                  </div>

                  <p className="text-gray-300 mb-6">{instructor.bio}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{instructor.courses}</div>
                      <div className="text-xs text-gray-400">Courses</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{(instructor.students / 1000).toFixed(1)}K</div>
                      <div className="text-xs text-gray-400">Students</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary flex items-center justify-center">
                        {instructor.rating} <Star className="h-4 w-4 ml-1 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" /> Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full">View Instructor's Courses</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-900 border-gray-800"
                onClick={nextInstructor}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {instructors.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to instructor ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
