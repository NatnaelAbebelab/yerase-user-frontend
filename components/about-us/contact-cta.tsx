"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, MessageSquare, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
      valid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData)

      // Show success message
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl font-bold mb-6">We'd Love to Hear From You</h2>
            <p className="text-gray-300 mb-8">
              Whether you have questions about our platform, partnership opportunities, or career openings, our team is
              here to help and respond to your inquiries.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Main Office</h3>
                  <p className="text-gray-400">123 Fitness Street, San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400">info@fitlife.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6 flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      }`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
