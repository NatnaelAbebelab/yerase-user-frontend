import { Heart, Watch, Bell } from "lucide-react"

export default function SmartwatchSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background with primary color */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-primary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            <Watch className="h-3 w-3 inline-block mr-2" />
            COMING SOON
          </div>
          <h2 className="text-4xl font-bold mb-4">FitLife Smartwatch Integration</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take your fitness journey to the next level with our upcoming smartwatch integration. Track your health
            metrics, get guided workouts, and receive mindfulness reminders right on your wrist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Health Metrics</h3>
            <p className="text-gray-400">
              Monitor your heart rate, sleep quality, and activity levels with precision tracking technology.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Watch className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Guided Workouts</h3>
            <p className="text-gray-400">
              Follow along with guided workouts directly from your wrist, with haptic feedback for proper form.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Mindfulness Reminders</h3>
            <p className="text-gray-400">
              Receive gentle reminders to breathe, stretch, and take mindful moments throughout your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
