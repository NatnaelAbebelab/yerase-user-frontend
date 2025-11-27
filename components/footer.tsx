"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { currentLanguage, setLanguage, languages } = useLanguage()

  return (
    <footer className="bg-gray-950 pt-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="#00ff05"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#00ff05"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#00ff05"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-bold text-xl text-primary">FITLIFE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming lives through holistic wellness solutions that nurture both body and mind.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-primary transition-colors">
                  Fitness Courses
                </Link>
              </li>
              <li>
                <Link href="/meal-plans" className="text-gray-400 hover:text-primary transition-colors">
                  Meal Plans
                </Link>
              </li>
              <li>
                <Link href="/audiobooks" className="text-gray-400 hover:text-primary transition-colors">
                  Audiobooks
                </Link>
              </li>
              <li>
                <Link href="/package" className="text-gray-400 hover:text-primary transition-colors">
                  Wellness Packages
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Fitness Street, Wellness City, WC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">info@fitlife.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} FitLife. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0">
            <div className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-400 transition-colors">
                Cookies
              </Link>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-400 transition-colors">
                <Globe className="h-4 w-4" />
                <span>{currentLanguage.name}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute bottom-full mb-2 right-0 bg-gray-900 border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentLanguage.code === lang.code
                          ? "text-primary"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
