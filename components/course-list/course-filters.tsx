"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"

interface CourseFiltersProps {
  onFilterChange: (filters: string[]) => void
  activeFilters: string[]
  filtersRef: React.MutableRefObject<{ [key: string]: HTMLInputElement }>
}

export default function CourseFilters({ onFilterChange, activeFilters, filtersRef }: CourseFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(activeFilters)
  const [priceRange, setPriceRange] = useState<number>(100)
  const minPrice = 0
  const maxPrice = 200

  // Filter sections with expand/collapse state
  const [filterSections, setFilterSections] = useState([
    {
      title: "Categories",
      isExpanded: true,
      options: [
        { id: "strength", label: "Strength Training", count: 120 },
        { id: "cardio", label: "Cardio & HIIT", count: 85 },
        { id: "yoga", label: "Yoga & Flexibility", count: 95 },
        { id: "nutrition", label: "Nutrition & Diet", count: 75 },
        { id: "mindfulness", label: "Mindfulness & Recovery", count: 60 },
        { id: "group", label: "Group Fitness", count: 65 },
      ],
    },
    {
      title: "Level",
      isExpanded: true,
      options: [
        { id: "beginner", label: "Beginner", count: 150 },
        { id: "intermediate", label: "Intermediate", count: 200 },
        { id: "advanced", label: "Advanced", count: 120 },
        { id: "all-levels", label: "All Levels", count: 30 },
      ],
    },
    {
      title: "Price Range",
      isExpanded: true,
      type: "range",
    },
    {
      title: "Duration",
      isExpanded: false,
      options: [
        { id: "under-4-weeks", label: "< 4 weeks", count: 45 },
        { id: "1-3-months", label: "1-3 months", count: 120 },
        { id: "3-6-months", label: "3-6 months", count: 75 },
        { id: "over-6-months", label: "> 6 months", count: 100 },
      ],
    },
    {
      title: "Features",
      isExpanded: false,
      options: [
        { id: "certificate", label: "Certificate", count: 200 },
        { id: "downloadable", label: "Downloadable Resources", count: 180 },
        { id: "live-sessions", label: "Live Sessions", count: 120 },
        { id: "lifetime-access", label: "Lifetime Access", count: 220 },
      ],
    },
  ])

  // Toggle filter section expand/collapse
  const toggleSection = (index: number) => {
    const updatedSections = [...filterSections]
    updatedSections[index].isExpanded = !updatedSections[index].isExpanded
    setFilterSections(updatedSections)
  }

  // Handle checkbox changes
  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter)
      } else {
        return [...prev, filter]
      }
    })
  }

  // Handle price range changes
  const handlePriceChange = (value: number) => {
    setPriceRange(value)
  }

  // Handle clear all filters
  const handleClearAll = () => {
    setSelectedFilters([])
    onFilterChange([])
  }

  // Handle apply filters
  const handleApplyFilters = () => {
    onFilterChange(selectedFilters)
  }

  // Update parent when filters change
  useEffect(() => {
    //onFilterChange(selectedFilters);
  }, [selectedFilters])

  // Sync with activeFilters from parent
  useEffect(() => {
    setSelectedFilters(activeFilters)
  }, [activeFilters])

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        {selectedFilters.length > 0 && (
          <button onClick={handleClearAll} className="text-primary text-sm hover:underline transition-colors">
            Clear all
          </button>
        )}
      </div>

      {filterSections.map((section, index) => (
        <div key={section.title} className="border-t border-gray-800 py-4">
          <button
            className="flex justify-between items-center w-full text-left font-medium"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            {section.isExpanded ? (
              <ChevronUp className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            )}
          </button>

          <div className={`mt-3 space-y-2 ${section.isExpanded ? "block" : "hidden"}`}>
            {section.type !== "range" &&
              section.options &&
              section.options.map((option) => (
                <div key={option.id} className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={selectedFilters.includes(option.label)}
                        onChange={() => handleFilterChange(option.label)}
                        ref={(el) => {
                          if (el) filtersRef.current[option.label] = el
                        }}
                      />
                      <div className="w-4 h-4 border border-gray-600 rounded bg-gray-800 peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                      <div className="absolute left-0 top-0 w-4 h-4 flex items-center justify-center text-black scale-0 peer-checked:scale-100 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2 text-sm group-hover:text-primary transition-colors">{option.label}</span>
                  </label>
                  <span className="text-xs text-gray-400">({option.count})</span>
                </div>
              ))}

            {section.type === "range" && (
              <div className="space-y-4 pt-2">
                <div className="flex justify-between">
                  <span className="text-sm">
                    ${minPrice} - ${priceRange}
                  </span>
                  <span className="text-xs text-primary">{priceRange === maxPrice ? "$200+" : ""}</span>
                </div>

                <div className="relative pt-5 pb-2">
                  {/* Price range slider with min/max on one slider */}
                  <div className="flex justify-between text-xs text-primary mb-1">
                    <span>Min</span>
                    <span>Max</span>
                  </div>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={priceRange}
                    onChange={(e) => handlePriceChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    style={{
                      background: `linear-gradient(to right, #00ff05 0%, #00ff05 ${(priceRange / maxPrice) * 100}%, #1f2937 ${(priceRange / maxPrice) * 100}%, #1f2937 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Apply Filters Button */}
      <button
        onClick={handleApplyFilters}
        className="w-full mt-6 bg-primary text-black py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <Filter className="h-4 w-4" />
        Apply Filters
      </button>
    </div>
  )
}
