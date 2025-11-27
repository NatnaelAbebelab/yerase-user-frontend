import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnrollCTA() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of members who have transformed their lives with our expert-led courses. Your fitness
              journey begins with just one step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-400">Premium Courses</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">30-Day</div>
              <p className="text-gray-400">Money-Back Guarantee</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-400">Unlimited Access</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              Browse All Courses <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Membership Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
