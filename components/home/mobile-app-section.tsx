import { Bell, BarChart, Download, Users, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileAppSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Update the mobile app section with smaller subheader and default buttons */}
          {/* Replace the subheader div */}
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            <Smartphone className="h-3 w-3 inline-block mr-2" />
            MOBILE APP
          </div>
          <h2 className="text-4xl font-bold mb-4">Take Your Fitness Journey Anywhere</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The MindBody Balance app puts your entire wellness journey in your pocket. Access workouts, meal plans, and
            mindfulness content anytime, anywhere - even offline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup - Centered */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="w-[280px] h-[560px] bg-gray-900 rounded-[36px] p-3 border-4 border-gray-800 shadow-xl">
                <div className="w-full h-full bg-gray-800 rounded-[28px] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=560&width=280"
                    alt="FitLife Mobile App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-primary/30 rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Offline Access</h4>
                  <p className="text-gray-400">Download your favorite workouts and meditations for on-the-go access.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Progress Tracking</h4>
                  <p className="text-gray-400">Monitor your fitness journey with detailed stats and achievements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Smart Reminders</h4>
                  <p className="text-gray-400">Stay on track with personalized notifications and workout reminders.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Community Connection</h4>
                  <p className="text-gray-400">Join challenges, share achievements, and connect with other members.</p>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5227 12.0488C17.5013 9.1167 19.9662 7.79543 20.0706 7.73552C18.6879 5.70303 16.5334 5.43584 15.7733 5.41748C13.9256 5.22565 12.1389 6.5469 11.1994 6.5469C10.2599 6.5469 8.79099 5.43584 7.23257 5.47256C5.22844 5.50928 3.36509 6.65869 2.33393 8.44635C0.198425 12.0855 1.75685 17.4616 3.80264 20.3386C4.83379 21.7515 6.05328 23.3474 7.67835 23.2709C9.26507 23.1944 9.87623 22.2549 11.7973 22.2549C13.7183 22.2549 14.2928 23.2709 15.9546 23.2342C17.6531 23.1944 18.7108 21.7882 19.7053 20.3753C20.8732 18.7427 21.3559 17.1468 21.3743 17.0703C21.3376 17.0519 17.5441 15.6024 17.5227 12.0488Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.2928 3.62C15.1222 2.60721 15.6783 1.22266 15.5284 0C14.3605 0.0550916 12.9111 0.825458 12.0449 1.83825C11.2706 2.72609 10.5979 4.14899 10.7662 5.33013C12.0816 5.42839 13.4627 4.63325 14.2928 3.62Z"
                    fill="currentColor"
                  />
                </svg>
                App Store
              </Button>
              <Button size="lg" className="gap-2">
                <svg width="20" height="22" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.32285 0.546875C1.09375 0.78125 0.96875 1.17188 0.96875 1.67188V22.3281C0.96875 22.8281 1.09375 23.2188 1.32285 23.4531L1.39062 23.5156L12.5781 12.3281V12L1.39062 0.8125L1.32285 0.546875Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.4219 16.1719L12.5781 12.3281V12L16.4219 8.15625L16.5 8.20312L21.0312 10.7344C22.3438 11.4844 22.3438 12.5156 21.0312 13.2656L16.5 15.7969L16.4219 16.1719Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5 15.7969L12.5781 12L1.32285 23.2188C1.76035 23.6875 2.48535 23.75 3.29785 23.2812L16.5 15.7969Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5 8.20312L3.29785 0.71875C2.48535 0.25 1.76035 0.3125 1.32285 0.78125L12.5781 12L16.5 8.20312Z"
                    fill="currentColor"
                  />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
