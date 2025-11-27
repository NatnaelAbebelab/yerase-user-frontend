import { Briefcase, Clock, HeartHandshake, Globe, GraduationCap, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkWithUs() {
  const benefits = [
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance is important to us. We offer flexible scheduling and remote work options.",
    },
    {
      icon: HeartHandshake,
      title: "Wellness Benefits",
      description: "Free access to our platform, gym stipends, and wellness days to recharge and stay healthy.",
    },
    {
      icon: Briefcase,
      title: "Competitive Salary",
      description: "We offer market-competitive compensation packages and equity options for all employees.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous growth through professional development funds and learning opportunities.",
    },
    {
      icon: Smile,
      title: "Inclusive Culture",
      description: "A diverse, supportive environment where every voice is valued and respected.",
    },
    {
      icon: Globe,
      title: "Global Team",
      description: "Join a team of passionate professionals from around the world, united by our mission.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            CAREERS
          </div>
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're always looking for passionate, talented individuals to join our team and help us revolutionize the
            wellness industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Culture & Values</h3>
            <p className="text-gray-300 mb-8">
              At FitLife, our culture is built around innovation, wellness, and impact. We believe in leading by
              example, bringing our whole selves to work, and creating an environment where everyone can thrive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Work-Life Integration</h4>
                <p className="text-sm text-gray-300">
                  We don't just talk about balance – we live it. With flexible schedules, wellness days, and team
                  activities that promote health and connection.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Growth Mindset</h4>
                <p className="text-sm text-gray-300">
                  We embrace challenges and see failures as opportunities to learn. Continuous improvement is in our
                  DNA.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Diversity & Inclusion</h4>
                <p className="text-sm text-gray-300">
                  We celebrate diverse perspectives and create an environment where everyone belongs and contributes.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Impact-Driven</h4>
                <p className="text-sm text-gray-300">
                  We measure our success by the positive change we create in our users' lives and in the world.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button size="lg">View Career Opportunities</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
