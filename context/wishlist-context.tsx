"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type WishlistContextType = {
  wishlist: number[]
  addToWishlist: (productId: number) => void
  removeFromWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([])

  const addToWishlist = (productId: number) => {
    setWishlist((prev) => [...prev, productId])
  }

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== productId))
  }

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
