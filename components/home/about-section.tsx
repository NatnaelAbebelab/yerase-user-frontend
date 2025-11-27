import { Users, Calendar, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Arrangement */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Fitness training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-12">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Meditation session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden -mt-8">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Healthy meal preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Wellness coaching"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#00ff05]/20 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#00ff05]/10 z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-[#00ff05]/30 rounded-full z-0"></div>
          </div>

          {/* Text Content */}
          <div>
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              ABOUT US
            </div>
            <h2 className="text-5xl font-bold mb-6">Transform Your Life With Our Holistic Approach</h2>
            <p className="text-gray-300 mb-8 text-lg">
              At FitLife, we believe in a comprehensive approach to wellness that nurtures both body and mind. Our
              platform brings together expert trainers, nutritionists, and mindfulness coaches to provide you with all
              the tools you need for your wellness journey. Whether you're just starting out or looking to take your
              fitness to the next level, we're here to support you every step of the way.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary">50K+</h4>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary">7</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary">200+</h4>
                <p className="text-sm text-gray-400">Expert Trainers</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary">4.8</h4>
                <p className="text-sm text-gray-400">User Rating</p>
              </div>
            </div>
            
            <Button className="rounded-full px-8" size="lg" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
