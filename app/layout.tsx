import type React from "react"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import GoToTop from "@/components/go-to-top"
import SplashScreen from "@/components/splash-screen"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import { WishlistProvider } from "@/context/wishlist-context"
import { CartProvider } from "@/context/cart-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FitLife",
  description: "Your fitness journey starts here",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <LanguageProvider>
          <WishlistProvider>
            <CartProvider>
              <SplashScreen />
              <Header />
              <main>{children}</main>
              <Footer />
              <GoToTop />
            </CartProvider>
          </WishlistProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
