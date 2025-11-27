"use client"

import { useState } from "react"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CartDropdown() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getItemCount } = useCart()
  const [open, setOpen] = useState(false)

  const formatPrice = (price: number) => {
    return price.toFixed(2)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-primary text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {getItemCount()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 bg-gray-900 border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-medium text-sm">Your Cart ({getItemCount()} items)</h3>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-gray-400 text-[14px]">Your cart is empty</div>
        ) : (
          <>
            <div className="max-h-80 overflow-auto py-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start p-3 hover:bg-gray-800/50">
                  <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0 bg-gray-800">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-grow">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <span className="ml-auto text-sm">${formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="ml-2 text-gray-400 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-800">
              <div className="flex justify-between mb-4">
                <span className="text-sm">Subtotal</span>
                <span className="font-medium text-sm">${formatPrice(getCartTotal())}</span>
              </div>
              <Button className="w-full">Checkout</Button>
              <Button variant="outline" className="w-full mt-2" onClick={() => setOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
