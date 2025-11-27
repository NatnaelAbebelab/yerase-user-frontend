import { Dumbbell, Heart, Utensils, Brain, MonitorIcon as Running, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Strength Training",
    icon: Dumbbell,
    description:
      "Build muscle, increase strength, and improve overall fitness with our comprehensive strength programs.",
    courses: 120,
    color: "from-blue-600/20 to-blue-600/5",
    textColor: "text-blue-400",
  },
  {
    name: "Cardio & HIIT",
    icon: Running,
    description: "Boost your endurance and burn calories with high-intensity interval training and cardio workouts.",
    courses: 85,
    color: "from-red-600/20 to-red-600/5",
    textColor: "text-red-400",
  },
  {
    name: "Yoga & Flexibility",
    icon: Heart,
    description: "Improve flexibility, balance, and mental clarity with yoga and stretching routines for all levels.",
    courses: 95,
    color: "from-purple-600/20 to-purple-600/5",
    textColor: "text-purple-400",
  },
  {
    name: "Nutrition & Diet",
    icon: Utensils,
    description: "Learn how to fuel your body with expert nutrition guidance, meal planning, and healthy recipes.",
    courses: 75,
    color: "from-green-600/20 to-green-600/5",
    textColor: "text-green-400",
  },
  {
    name: "Mindfulness & Recovery",
    icon: Brain,
    description:
      "Enhance your mental wellbeing and recovery with meditation, sleep improvement, and stress management.",
    courses: 60,
    color: "from-yellow-600/20 to-yellow-600/5",
    textColor: "text-yellow-400",
  },
  {
    name: "Group Fitness",
    icon: Users,
    description: "Experience the motivation of group workouts with classes designed for community and accountability.",
    courses: 65,
    color: "from-pink-600/20 to-pink-600/5",
    textColor: "text-pink-400",
  },
]

export default function CourseCategories() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            COURSE CATEGORIES
          </div>
          <h2 className="text-4xl font-bold mb-4">Explore Our Course Categories</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Browse through our diverse range of fitness categories designed to help you achieve your specific wellness
            goals, whether you're a beginner or advanced fitness enthusiast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 bg-gradient-to-br ${category.color} border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className={`h-6 w-6 ${category.textColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className={`text-sm ${category.textColor}`}>{category.courses} Courses</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <Button variant="outline" size="sm" className="w-full">
                Explore Category
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Categories</Button>
        </div>
      </div>
    </section>
  )
}
