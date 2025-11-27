import { CheckCircle, Clock, ComputerIcon as Device, Users, Award, Zap } from "lucide-react"

export default function CoursesBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Learn at Your Own Pace",
      description:
        "Access course content 24/7 and progress through lessons on your schedule. No deadlines or time constraints.",
    },
    {
      icon: Device,
      title: "Multi-Device Access",
      description:
        "Stream courses on any device - watch on your phone during commutes or on your TV for home workouts.",
    },
    {
      icon: CheckCircle,
      title: "Step-by-Step Guidance",
      description:
        "Clear, structured curriculum with progressive difficulty to ensure proper form and technique at every level.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow students and instructors through discussion forums and live Q&A sessions.",
    },
    {
      icon: Award,
      title: "Completion Certificates",
      description: "Earn certificates upon course completion to track your progress and showcase your achievements.",
    },
    {
      icon: Zap,
      title: "Regular Updates",
      description:
        "Courses are regularly updated with new content and techniques to reflect the latest in fitness science.",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            WHY CHOOSE OUR COURSES
          </div>
          <h2 className="text-4xl font-bold mb-4">Benefits of Learning With FitLife</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our courses are designed with your success in mind. Here's what sets our learning experience apart from
            traditional fitness programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-300">
                If you're not completely satisfied with any course within 30 days, we'll give you a full refund.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
