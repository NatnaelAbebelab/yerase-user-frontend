import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppointmentBanner() {
  return (
    <section className="py-10 sm:py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="text-gray-300 max-w-xl text-sm sm:text-base">
                Schedule a free consultation with one of our fitness experts to create a personalized plan that fits
                your goals and lifestyle.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
