"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type Language = {
  code: string
  name: string
}

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  languages: Language[]
}

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
]

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
