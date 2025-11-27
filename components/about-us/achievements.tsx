import { Award, Heart, Star, Shield, TrendingUp, Trophy } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      year: "2017",
      title: "Wellness Startup of the Year",
      organization: "TechFit Awards",
      icon: Trophy,
    },
    {
      year: "2019",
      title: "Best Fitness App",
      organization: "Digital Health Awards",
      icon: Star,
    },
    {
      year: "2020",
      title: "Excellence in User Experience",
      organization: "UX Design Awards",
      icon: Heart,
    },
    {
      year: "2021",
      title: "Top 10 Wellness Platforms",
      organization: "Health Tech Review",
      icon: TrendingUp,
    },
    {
      year: "2022",
      title: "Innovation in Fitness Technology",
      organization: "FitTech Summit",
      icon: Shield,
    },
    {
      year: "2023",
      title: "Best Corporate Wellness Solution",
      organization: "Workplace Wellness Awards",
      icon: Award,
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            RECOGNITION
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're proud of the recognition we've received for our commitment to excellence in fitness technology and
            wellness innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-primary text-sm font-medium">{achievement.year}</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Featured In</h3>
              <p className="text-gray-400">
                FitLife has been featured in leading publications and media outlets around the world.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-8">
              {/* Placeholder logos (replace with actual logos) */}
              <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Forbes</span>
              </div>
              <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">TechCrunch</span>
              </div>
              <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Men's Health</span>
              </div>
              <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Women's Fitness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
