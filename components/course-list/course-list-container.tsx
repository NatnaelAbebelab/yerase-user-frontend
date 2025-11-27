"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import CourseFilters from "./course-filters"
import CourseCard from "./course-card"
import CoursePagination from "./course-pagination"
import { ChevronDown, Filter, X, ChevronUp } from "lucide-react"

// Mock courses data
const generateCourses = (count: number) => {
  const categories = [
    "Strength Training",
    "Cardio & HIT",
    "Yoga & Flexibility",
    "Nutrition & Diet",
    "Mindfulness & Recovery",
    "Group Fitness",
  ]

  const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"]

  const durations = ["< 4 weeks", "1-3 months", "3-6 months", "> 6 months"]

  const features = ["Certificate", "Downloadable Resources", "Live Sessions", "Lifetime Access"]

  const courses = []

  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const level = levels[Math.floor(Math.random() * levels.length)]
    const duration = durations[Math.floor(Math.random() * durations.length)]
    const price = Math.floor(Math.random() * 20) * 10 + 9.99
    const rating = (3 + Math.random() * 2).toFixed(1)
    const reviews = Math.floor(Math.random() * 500) + 50
    const featured = Math.random() > 0.8
    const isNew = Math.random() > 0.8
    const difficulty = ["beginner", "intermediate", "advanced"][Math.floor(Math.random() * 3)]
    const enrollments = Math.floor(Math.random() * 10000) + 500

    // Generate random tags from all possible filter options
    const tags = [category, level, duration]

    // Add some random features
    if (Math.random() > 0.5) {
      tags.push(features[Math.floor(Math.random() * features.length)])
    }

    courses.push({
      id: i,
      title: `${category}: Complete ${level} ${i % 3 === 0 ? "Masterclass" : "Course"}`,
      instructor: `Trainer ${i}`,
      price,
      rating: Number.parseFloat(rating),
      reviews,
      image: `/placeholder.svg?height=400&width=600&text=Course+${i}`,
      category,
      level,
      duration,
      lessons: Math.floor(Math.random() * 30) + 10,
      students: Math.floor(Math.random() * 5000) + 100,
      featured,
      new: isNew,
      difficulty,
      enrollments,
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
      tags,
    })
  }

  return courses
}

export default function CourseListContainer() {
  const [courses, setCourses] = useState<any[]>([])
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState("popular")
  const [showFilters, setShowFilters] = useState(true)
  const coursesPerPage = 9
  const filtersRef = useRef<{ [key: string]: HTMLInputElement }>({})

  // Initialize courses on component mount
  useEffect(() => {
    setCourses(generateCourses(36))
  }, [])

  // Handle filter changes
  const handleFilterChange = useCallback((filters: string[]) => {
    setActiveFilters(filters)
    setCurrentPage(1) // Reset to first page when filters change
  }, [])

  // Remove a single filter
  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter))

    // Uncheck the corresponding checkbox in the sidebar
    if (filtersRef.current[filter]) {
      filtersRef.current[filter].checked = false
    }
  }

  // Filter courses based on active filters
  const filteredCourses = courses.filter((course) => {
    if (activeFilters.length === 0) return true
    return activeFilters.some((filter) => course.tags.includes(filter))
  })

  // Sort courses based on selected option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortOption) {
      case "popular":
        return b.enrollments - a.enrollments
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  // Paginate courses
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage)

  return (
    <>
      {/* Course stats bar */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-primary font-bold">{courses.length}</span>
              </div>
              <div>
                <span className="block text-sm font-medium">Total Courses</span>
                <span className="text-xs text-gray-400">For all fitness levels</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-primary font-bold">12</span>
              </div>
              <div>
                <span className="block text-sm font-medium">Categories</span>
                <span className="text-xs text-gray-400">Specialized training</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-primary font-bold">15+</span>
              </div>
              <div>
                <span className="block text-sm font-medium">Expert Trainers</span>
                <span className="text-xs text-gray-400">Industry professionals</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-primary font-bold">4.8</span>
              </div>
              <div>
                <span className="block text-sm font-medium">Avg. Rating</span>
                <span className="text-xs text-gray-400">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/5">
            <CourseFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} filtersRef={filtersRef} />
          </div>

          {/* Course List */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full bg-gray-900 p-4 rounded-lg border border-gray-800"
              >
                <div className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  <span>Filters</span>
                </div>
                {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {showFilters && (
                <div className="mt-4">
                  <CourseFilters
                    onFilterChange={handleFilterChange}
                    activeFilters={activeFilters}
                    filtersRef={filtersRef}
                  />
                </div>
              )}
            </div>

            {/* Sort and results count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-gray-300">
                  Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, filteredCourses.length)} of{" "}
                  {filteredCourses.length} results
                </p>
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Sorted by:</span>
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-gray-900 border border-gray-800 text-white rounded-lg py-2 pl-4 pr-10 cursor-pointer hover:border-[#333333] text-sm focus:outline-none"
                    aria-label="Sort courses"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                <span className="text-sm text-gray-400 flex items-center">Filters:</span>
                {activeFilters.map((filter) => (
                  <div key={filter} className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                    {filter}
                    <button
                      onClick={() => removeFilter(filter)}
                      className="ml-2 text-gray-400 hover:text-white"
                      aria-label={`Remove ${filter} filter`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Course grid */}
            {currentCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <p className="text-xl mb-4">No courses match your filters</p>
                <p className="text-gray-400 mb-6">Try adjusting your filters or browse our categories</p>
                <button
                  onClick={() => setActiveFilters([])}
                  className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <CoursePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
