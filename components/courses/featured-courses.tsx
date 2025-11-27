"use client"

import { useState, useEffect } from "react"
import { Star, Clock, BarChart, ChevronLeft, ChevronRight, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Complete Body Transformation: 12-Week Program",
    instructor: "Alex Morgan",
    level: "Intermediate",
    duration: "12 weeks",
    lessons: 48,
    students: 3245,
    rating: 4.9,
    reviews: 420,
    image: "/placeholder.svg?height=400&width=600",
    price: 89.99,
    category: "Strength Training",
    featured: true,
    new: false,
    difficulty: "intermediate",
    description:
      "Transform your body with this comprehensive 12-week program designed to build muscle, burn fat, and improve overall fitness through progressive strength training and cardio workouts.",
  },
  {
    id: 2,
    title: "30-Day HIIT Challenge for Maximum Fat Loss",
    instructor: "Emma Wilson",
    level: "All Levels",
    duration: "4 weeks",
    lessons: 30,
    students: 5621,
    rating: 4.8,
    reviews: 350,
    image: "/placeholder.svg?height=400&width=600",
    price: 59.99,
    category: "Cardio & HIIT",
    featured: true,
    new: true,
    difficulty: "advanced",
    description:
      "Burn maximum calories and accelerate fat loss with this intense 30-day HIIT challenge featuring quick, effective workouts that can be done anywhere with minimal equipment.",
  },
  {
    id: 3,
    title: "Yoga for Strength and Flexibility",
    instructor: "Aisha Patel",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 24,
    students: 2890,
    rating: 4.9,
    reviews: 310,
    image: "/placeholder.svg?height=400&width=600",
    price: 69.99,
    category: "Yoga & Flexibility",
    featured: true,
    new: false,
    difficulty: "beginner",
    description:
      "Improve your flexibility, build functional strength, and reduce stress with this beginner-friendly yoga program that progressively builds your practice over 8 weeks.",
  },
  {
    id: 4,
    title: "Nutrition Masterclass: Meal Planning for Fitness",
    instructor: "Carlos Rodriguez",
    level: "All Levels",
    duration: "6 weeks",
    lessons: 18,
    students: 1875,
    rating: 4.7,
    reviews: 230,
    image: "/placeholder.svg?height=400&width=600",
    price: 79.99,
    category: "Nutrition & Diet",
    featured: true,
    new: false,
    difficulty: "intermediate",
    description:
      "Learn how to fuel your workouts and support your fitness goals with this comprehensive nutrition course covering macronutrients, meal timing, and personalized meal planning.",
  },
  {
    id: 5,
    title: "Strength Training for Beginners",
    instructor: "David Kim",
    level: "Beginner",
    duration: "10 weeks",
    lessons: 30,
    students: 4210,
    rating: 4.8,
    reviews: 275,
    image: "/placeholder.svg?height=400&width=600",
    price: 69.99,
    category: "Strength Training",
    featured: true,
    new: true,
    difficulty: "beginner",
    description:
      "Start your strength training journey with proper form and technique. This beginner-friendly program gradually introduces you to the fundamentals of resistance training for long-term success.",
  },
]

export default function FeaturedCourses() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Calculate how many courses to show based on screen size
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
    const maxStartIndex = Math.max(0, courses.length - visibleCount)
    setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxStartIndex = Math.max(0, courses.length - visibleCount)
    setCurrentIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1))
  }

  // Get the visible courses
  const visibleCourses = []
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % courses.length
    visibleCourses.push(courses[index])
  }

  // Helper function to get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500 hover:bg-green-600"
      case "intermediate":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "advanced":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-blue-500 hover:bg-blue-600"
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              FEATURED COURSES
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Most Popular Courses</h2>
            <p className="text-gray-300 max-w-2xl">
              Discover our highest-rated and most enrolled courses. These programs have helped thousands of members
              achieve their fitness goals.
            </p>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-all duration-500">
              {visibleCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex-1 min-w-0 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                  style={{ width: `calc(100% / ${visibleCount})` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {course.featured && <Badge className="bg-primary text-black hover:bg-primary/90">Featured</Badge>}
                      {course.new && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
                      <Badge className={getDifficultyColor(course.difficulty)}>
                        {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </div>
                    {/* Preview Badge */}
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        variant="outline"
                        className="bg-black/70 backdrop-blur-sm border-white/20 hover:bg-black/90"
                      >
                        Preview Available
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium px-2 py-1 rounded bg-gray-800 text-gray-300">
                        {course.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                        <span className="text-xs text-gray-400 ml-1">({course.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">{course.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{course.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <BarChart className="h-4 w-4 mr-1" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">${course.price}</span>
                      <Button>Enroll Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="/course-list">View All Courses</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
