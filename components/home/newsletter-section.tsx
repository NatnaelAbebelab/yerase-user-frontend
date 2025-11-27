"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      // Here you would typically send the email to your backend
    }
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            <Mail className="h-3 w-3 inline-block mr-2" />
            STAY UPDATED
          </div>
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Get the latest fitness tips, nutrition advice, and exclusive offers delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900 border-gray-800 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="lg" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>

          {submitted && <p className="mt-4 text-primary">Thank you for subscribing! Check your inbox soon.</p>}

          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}
