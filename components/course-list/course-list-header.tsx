"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"

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

export default function CourseListHeader() {
  const [courses, setCourses] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setShowSuggestions(false)
    // Here you would typically update the course list based on the search query
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
    <>
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 pt-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Find Your Perfect <span className="text-primary">Fitness Journey</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
              Browse our extensive collection of expert-led courses designed to transform your health and wellness.
            </p>

            {/* Enhanced Search Bar with Autocomplete */}
            <div
              ref={searchRef}
              className="relative z-50 mb-6 max-w-2xl mx-auto animate-fade-in-delay"
              style={{ animationDelay: "0.3s" }}
            >
              <form onSubmit={handleSearch} className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-10 py-3 h-14 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-l-lg focus:ring-primary focus:border-primary focus:outline-none transition-all"
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
                <button
                  type="submit"
                  className="bg-primary text-black px-6 py-2 rounded-r-lg hover:bg-primary/90 h-14 font-medium transition-all"
                >
                  Search
                </button>
              </form>

              {/* Autocomplete Suggestions - Fixed z-index issue */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto">
                  <ul>
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-800 cursor-pointer flex items-center transition-colors"
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

            {/* Popular searches */}
            <div
              className="flex flex-wrap justify-center gap-2 animate-fade-in-delay mb-8"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-sm text-gray-400">Popular:</span>
              {["HIIT", "Yoga", "Strength", "Nutrition", "Mindfulness"].map((tag) => (
                <button
                  key={tag}
                  className="text-sm px-3 py-1 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-colors"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
