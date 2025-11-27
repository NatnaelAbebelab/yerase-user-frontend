"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const currentPosition = window.pageYOffset
    const targetPosition = Math.max(0, currentPosition - 300) // Scroll up 300px or to the top if less than 300px from top

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 rounded-full p-2 sm:p-3 bg-primary hover:bg-primary/90"
          aria-label="Go to top"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
        </Button>
      )}
    </>
  )
}
