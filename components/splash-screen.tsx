"use client"

import { useState, useEffect } from "react"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 4
      })
    }, 50)

    // Hide splash screen after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <div className="mb-6 animate-spin-slow">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="#00ff05"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2 17L12 22L22 17" stroke="#00ff05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#00ff05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-2 animate-fade-in">FITLIFE</h1>
        <p className="text-gray-400 animate-fade-in-delay">Transform Your Life</p>
        <div className="mt-8 h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
