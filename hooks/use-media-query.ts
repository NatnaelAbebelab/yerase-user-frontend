"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Set initial value on client side
    if (typeof window !== "undefined") {
      setMatches(window.matchMedia(query).matches)
    }

    const media = window.matchMedia(query)

    // Define callback for media query change
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add the callback as a listener
    media.addEventListener("change", listener)

    // Remove the listener when component unmounts
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
