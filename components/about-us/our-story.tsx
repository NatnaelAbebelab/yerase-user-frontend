import { Heart, Leaf, Zap } from "lucide-react"

export default function OurStory() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              OUR STORY
            </div>
            <h2 className="text-4xl font-bold mb-6">From Passion to Platform: The FitLife Journey</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                FitLife was born in 2016 from a simple idea: fitness and wellness should be accessible to everyone,
                regardless of their experience level or background. Our founders, Alex and Sarah, both former fitness
                professionals, saw a gap in the market for a truly comprehensive wellness solution.
              </p>
              <p>
                What started as a small collection of workout videos quickly grew into a holistic platform offering
                nutrition guidance, mental wellness resources, and community support. Our team expanded to include
                nutritionists, mindfulness experts, and technology innovators—all united by a passion for helping others
                transform their lives.
              </p>
              <p>
                Today, FitLife serves more than 50,000 active members across 15 countries, but our mission remains the
                same: to empower individuals to take control of their health through personalized, expert-led guidance
                and a supportive community.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="border-l-2 border-primary/30 ml-3 md:ml-8 pl-6 md:pl-12 py-4 space-y-16 relative">
              <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary"></div>

              <div className="relative">
                <div className="absolute left-[-39px] md:left-[-44px] top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center">
                  <Heart className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <div className="text-primary font-bold mb-2">2016</div>
                  <h3 className="text-xl font-bold mb-2">Founded in San Francisco</h3>
                  <p className="text-gray-400">
                    FitLife was launched with a mission to make fitness accessible to everyone with 10 online courses.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-39px] md:left-[-44px] top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center">
                  <Leaf className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <div className="text-primary font-bold mb-2">2018</div>
                  <h3 className="text-xl font-bold mb-2">Expanded to Nutrition & Mindfulness</h3>
                  <p className="text-gray-400">
                    Introduced personalized meal plans and partnered with mindfulness experts to offer meditation
                    content.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-39px] md:left-[-44px] top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center">
                  <Zap className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <div className="text-primary font-bold mb-2">2021</div>
                  <h3 className="text-xl font-bold mb-2">Global Expansion & App Launch</h3>
                  <p className="text-gray-400">
                    Reached 25,000 members and launched our mobile app, bringing wellness to users worldwide.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-[-8px] w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
