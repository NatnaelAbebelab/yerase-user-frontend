import { Dumbbell, Utensils, Headphones, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

const offerings = [
  {
    title: "Online Fitness Courses",
    description:
      "Expert-led workouts for all fitness levels, from beginners to advanced athletes. Access anytime, anywhere.",
    icon: Dumbbell,
    link: "/courses",
  },
  {
    title: "Personalized Meal Plans",
    description:
      "Nutrition plans tailored to your dietary preferences and fitness goals, with weekly shopping lists and recipes.",
    icon: Utensils,
    link: "/meal-plans",
  },
  {
    title: "Mindfulness Audiobooks",
    description:
      "Guided meditations and personal development content to nurture your mental wellbeing and reduce stress.",
    icon: Headphones,
    link: "/audiobooks",
  },
  {
    title: "Complete Wellness Packages",
    description:
      "Comprehensive programs combining fitness, nutrition, and mindfulness for total body and mind transformation.",
    icon: Package,
    link: "/package",
  },
]

export default function OfferingsSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            OUR OFFERINGS
          </div>
          <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions for Your Wellness Journey</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover our range of services designed to help you achieve your health and fitness goals, all in one
            convenient platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <offering.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
              <p className="text-gray-400 mb-6">{offering.description}</p>
              <Button variant="link" className="text-primary p-0" asChild>
                <a href={offering.link}>Learn More →</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
