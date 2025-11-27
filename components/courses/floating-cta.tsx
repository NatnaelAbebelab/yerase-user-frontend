"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const showCTA = () => {
      if (window.pageYOffset > 1000 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", showCTA)
    return () => window.removeEventListener("scroll", showCTA)
  }, [isDismissed])

  const dismissCTA = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-3 px-4 z-40 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex-1 mb-3 sm:mb-0 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium">Ready to transform your fitness journey?</p>
          <p className="text-xs text-gray-400">Get started with our most popular courses today!</p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline">
            View Courses
          </Button>
          <Button size="sm">Enroll Now</Button>
          <button onClick={dismissCTA} className="ml-2 text-gray-400 hover:text-white" aria-label="Dismiss">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
