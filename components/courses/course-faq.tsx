"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I access the courses after purchasing?",
    answer:
      "After purchasing a course, you can access it immediately through your FitLife account dashboard. All courses are available on-demand, and you can stream them on any device with internet access. You'll have lifetime access to the course content, including any future updates.",
  },
  {
    question: "Do I need special equipment for the workouts?",
    answer:
      "Equipment requirements vary by course. Each course description clearly lists any necessary equipment. Many of our courses offer equipment-free alternatives or suggest household items that can be used instead. We also have dedicated 'No Equipment' courses designed specifically for home workouts without any gear.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes! We have courses for all fitness levels, from complete beginners to advanced athletes. Each course is clearly labeled with its difficulty level. Our beginner courses include detailed form instructions, modified exercise options, and gradual progression to ensure safety and build confidence.",
  },
  {
    question: "Can I download the videos for offline viewing?",
    answer:
      "Yes, our mobile app allows you to download course videos for offline viewing. This is perfect for when you're traveling or in areas with limited internet access. Downloaded content is available for 30 days within the app before requiring reconnection to the internet.",
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer:
      "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your course purchase, you can request a full refund within 30 days of purchase. No questions asked. Your satisfaction is our priority.",
  },
  {
    question: "How long do I have access to a course after purchasing?",
    answer:
      "You have lifetime access to all courses you purchase. This includes any updates or additional content added to the course in the future. Your one-time payment gives you unlimited access with no recurring fees or subscriptions required.",
  },
  {
    question: "Can I interact with the instructors?",
    answer:
      "Yes! Each course includes a discussion section where you can ask questions and get feedback from instructors and fellow students. Many of our premium courses also include monthly live Q&A sessions with the instructors where you can get personalized advice.",
  },
  {
    question: "Are there any prerequisites for advanced courses?",
    answer:
      "Some advanced courses may recommend completing certain beginner or intermediate courses first. These recommendations will be clearly stated in the course description. However, if you already have experience with the subject matter, you're welcome to jump into any course that matches your current skill level.",
  },
]

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl font-bold mb-4">Common Questions About Our Courses</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find answers to the most common questions about our course platform, enrollment process, and learning
            experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-800 rounded-lg overflow-hidden ${
                  openIndex === index ? "bg-gray-900" : "bg-gray-900/50"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300">
              Still have questions?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
