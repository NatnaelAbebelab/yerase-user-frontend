"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  getCartTotal: () => number
  getItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// Sample initial cart items
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    price: 49.99,
    quantity: 1,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Performance T-Shirt",
    price: 34.99,
    quantity: 2,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Plant Protein Powder",
    price: 39.99,
    quantity: 1,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
