"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample search suggestions
const searchSuggestions = [
  "HIIT Workouts",
  "Yoga for Beginners",
  "Strength Training",
  "Weight Loss Programs",
  "Nutrition Basics",
  "Home Workouts",
  "Cardio Exercises",
  "Mindfulness Meditation",
  "Flexibility Training",
  "Core Strength",
  "Muscle Building",
  "Recovery Techniques",
]

export default function CoursesHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setShowSuggestions(false)
    // Here you would typically redirect to search results page
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    // Filter suggestions based on input
    if (value.trim()) {
      const filtered = searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const selectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="Fitness training"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="py-20 md:py-32 max-w-3xl">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-6">
            EXPERT-LED COURSES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Body and Mind With Our Premium Fitness Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Access over 500+ professionally designed courses for all fitness levels. Learn from world-class instructors
            and achieve your wellness goals on your schedule.
          </p>

          {/* Search Bar with Autocomplete */}
          <div ref={searchRef} className="relative mb-8">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-10 py-3 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-l-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={clearSearch}
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-white" />
                  </button>
                )}
              </div>
              <Button type="submit" className="rounded-l-none h-12">
                Search
              </Button>
            </form>

            {/* Autocomplete Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto">
                <ul>
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer flex items-center"
                      onClick={() => selectSuggestion(suggestion)}
                    >
                      <Search className="h-4 w-4 text-gray-400 mr-2" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400">Popular:</span>
            <a href="#" className="text-primary hover:underline flex items-center">
              HIIT Workouts <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="text-primary hover:underline flex items-center">
              Yoga <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="text-primary hover:underline flex items-center">
              Strength Training <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative bg-gray-900/80 backdrop-blur-sm border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 py-4">
            <div className="text-center px-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-400">Courses</div>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-400">Expert Instructors</div>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-400">Active Students</div>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
