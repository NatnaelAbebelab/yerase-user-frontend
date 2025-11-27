import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Starter",
    price: 29,
    period: "monthly",
    description: "Perfect for beginners starting their fitness journey",
    features: ["5 Fitness Courses", "Basic Meal Plan", "3 Mindfulness Audiobooks", "Community Access", "Email Support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: 59,
    period: "monthly",
    description: "Our most popular plan for dedicated fitness enthusiasts",
    features: [
      "Unlimited Fitness Courses",
      "Personalized Meal Plans",
      "Full Audiobook Library",
      "Priority Community Access",
      "24/7 Support",
      "Progress Tracking",
      "1 Personal Coaching Session",
    ],
    cta: "Choose Premium",
    popular: true,
  },
  {
    name: "Ultimate",
    price: 99,
    period: "monthly",
    description: "Complete transformation package for maximum results",
    features: [
      "Everything in Premium",
      "Weekly Personal Coaching",
      "Custom Fitness Program",
      "Nutrition Consultation",
      "Advanced Analytics",
      "Exclusive Content",
      "Early Access to New Features",
    ],
    cta: "Go Ultimate",
    popular: false,
  },
]

export default function PackagePlans() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            PRICING PLANS
          </div>
          <h2 className="text-4xl font-bold mb-4">Choose Your Transformation Journey</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Select the package that best fits your goals and lifestyle. All plans include access to our mobile app and
            can be canceled anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                pkg.popular
                  ? "bg-gradient-to-b from-primary/20 to-gray-900 border border-primary/50 transform md:-translate-y-4 scale-105"
                  : "bg-gray-900"
              }`}
            >
              {pkg.popular && <div className="bg-primary text-black text-center py-2 font-medium">Most Popular</div>}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-gray-400 ml-2">/{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${pkg.popular ? "bg-primary text-black hover:bg-primary/90" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
