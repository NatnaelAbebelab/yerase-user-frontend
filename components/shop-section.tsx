"use client"

import { useState } from "react"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWishlist } from "@/context/wishlist-context"
import { useCart } from "@/context/cart-context"

const categories = [
  { id: "all", name: "All Products" },
  { id: "equipment", name: "Equipment" },
  { id: "apparel", name: "Apparel" },
  { id: "supplements", name: "Supplements" },
]

const products = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    price: 49.99,
    rating: 4.8,
    reviews: 124,
    category: "equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Resistance Bands Set",
    price: 29.99,
    rating: 4.6,
    reviews: 98,
    category: "equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Performance T-Shirt",
    price: 34.99,
    rating: 4.7,
    reviews: 86,
    category: "apparel",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Compression Leggings",
    price: 59.99,
    rating: 4.9,
    reviews: 152,
    category: "apparel",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Plant Protein Powder",
    price: 39.99,
    rating: 4.5,
    reviews: 73,
    category: "supplements",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Pre-Workout Formula",
    price: 44.99,
    rating: 4.4,
    reviews: 67,
    category: "supplements",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Adjustable Dumbbells",
    price: 199.99,
    rating: 4.9,
    reviews: 203,
    category: "equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Recovery Supplements",
    price: 54.99,
    rating: 4.7,
    reviews: 91,
    category: "supplements",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const handleWishlistToggle = (productId: number) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId)
    } else {
      addToWishlist(productId)
    }
  }

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            SHOP
          </div>
          <h2 className="text-4xl font-bold mb-4">Premium Fitness Products</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover our curated selection of high-quality fitness equipment, apparel, and supplements to support your
            wellness journey.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-900">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="data-[state=active]:text-primary data-[state=active]:bg-primary/10"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-gray-900 rounded-xl overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                      className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors hover:bg-black/70"
                      onClick={() => handleWishlistToggle(product.id)}
                      aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart
                        className={`h-4 w-4 ${isInWishlist(product.id) ? "text-red-500 fill-red-500" : "text-white"}`}
                      />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-400 mr-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-white">{product.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                    </div>
                    <h3 className="font-bold mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">${product.price}</span>
                      <Button size="sm" className="gap-1" onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
