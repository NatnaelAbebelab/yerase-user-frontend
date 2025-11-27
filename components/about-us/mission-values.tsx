import { Target, Users, Shield, Lightbulb, Heart, Zap } from "lucide-react"

export default function MissionValues() {
  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "We believe wellness belongs to everyone, regardless of fitness level, background, or experience.",
    },
    {
      icon: Shield,
      title: "Expert Guidance",
      description: "Every program and piece of content is crafted or reviewed by certified professionals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly evolve our platform to incorporate the latest in fitness science and technology.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We understand that wellness journeys have ups and downs, and provide support every step of the way.",
    },
    {
      icon: Target,
      title: "Holistic Approach",
      description: "True wellness encompasses physical fitness, nutrition, and mental wellbeing.",
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "We give our members the tools and knowledge to take control of their own health journey.",
    },
  ]

  return (
    <section id="mission-values-section" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            MISSION & VALUES
          </div>
          <h2 className="text-4xl font-bold mb-6">Guiding Principles That Define Us</h2>
          <p className="text-gray-300 text-lg">
            Our mission is to empower individuals to achieve optimal wellness through a holistic approach to fitness,
            nutrition, and mindfulness, supported by an engaged community and innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
