"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Globe, Menu, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useLanguage } from "@/context/language-context"
import CartDropdown from "@/components/cart-dropdown"
import AuthButtons from "@/components/auth/auth-buttons"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(min-width: 1200px)")
  const [scrolled, setScrolled] = useState(false)
  const [showMiniHeader, setShowMiniHeader] = useState(true)
  const { currentLanguage, setLanguage, languages } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolled past threshold
      if (currentScrollY > 10) {
        setScrolled(true)
        setShowMiniHeader(false) // Always hide mini header when scrolled down
      } else {
        setScrolled(false)
        setShowMiniHeader(true) // Show mini header only at the top
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const mainNavItems = [
    { name: "Courses", href: "/courses" },
    { name: "Meal Plans", href: "/meal-plans" },
    { name: "Audiobooks", href: "/audiobooks" },
    { name: "Package", href: "/package" },
    { name: "Shop", href: "/shop" },
  ]

  const profileMenuItems = [
    { name: "Account Settings", href: "/account" },
    { name: "View Cart", href: "/cart" },
    { name: "Order History", href: "/orders" },
    { name: "Saved Items", href: "/saved" },
  ]

  return (
    <header className="w-full border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      {/* Mini header with language selection - hidden on scroll down, shown on scroll up */}
      <div
        className={`bg-gray-900 transition-all duration-300 ${
          showMiniHeader ? "h-8 py-1 px-4 opacity-100" : "h-0 p-0 opacity-0"
        }`}>
        <div className="container mx-auto flex justify-end items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs ml-auto">
                <Globe className="h-3 w-3" />
                {currentLanguage.name}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang)}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`${
          scrolled ? "bg-black/80 backdrop-blur-sm py-2" : "bg-gray-900 py-3"
        } transition-all duration-300`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-primary">
              <div className="flex items-center gap-2">
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
                <span>FITLIFE</span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium mx-4 hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary opacity-0 group-hover:opacity-50 transition-opacity"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Right Side Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Auth Button - Single Login */}
              <AuthButtons />

              {/* Cart Dropdown */}
              <CartDropdown />

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-800">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  {profileMenuItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">Sign Out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* CTA Button */}
              <Button>Start Your Journey</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Cart */}
              <CartDropdown />

              {/* Mobile Menu Trigger */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-gray-900 border-gray-800">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-4">
                      <span className="font-bold text-lg">Menu</span>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>

                    <nav className="flex flex-col space-y-4 py-4">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="space-y-4">
                      <AuthButtons />

                      <div className="border-t border-gray-800 pt-4">
                        <p className="text-sm font-medium mb-2">My Account</p>
                        <div className="space-y-2">
                          {profileMenuItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                          <DropdownMenuSeparator className="bg-gray-800 my-2" />
                          <Link
                            href="/signout"
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
