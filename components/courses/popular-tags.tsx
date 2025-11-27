import { Button } from "@/components/ui/button"

const tags = [
  { name: "Weight Loss", count: 45 },
  { name: "Muscle Building", count: 38 },
  { name: "Home Workout", count: 52 },
  { name: "No Equipment", count: 30 },
  { name: "Beginner Friendly", count: 42 },
  { name: "Advanced", count: 25 },
  { name: "Core Strength", count: 33 },
  { name: "Flexibility", count: 28 },
  { name: "Cardio", count: 40 },
  { name: "Strength", count: 47 },
  { name: "Recovery", count: 22 },
  { name: "Nutrition", count: 35 },
  { name: "Meal Planning", count: 20 },
  { name: "Mindfulness", count: 18 },
  { name: "Yoga", count: 30 },
  { name: "HIIT", count: 36 },
]

export default function PopularTags() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            BROWSE BY TAGS
          </div>
          <h2 className="text-4xl font-bold mb-4">Popular Course Tags</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find exactly what you're looking for with our popular course tags. Each tag represents a specific focus area
            or workout style.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tags.map((tag, index) => (
            <Button
              key={index}
              variant="outline"
              className="rounded-full border-gray-700 hover:border-primary hover:bg-primary/10"
            >
              {tag.name} <span className="ml-2 text-xs text-gray-400">({tag.count})</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
