import { Command } from "lucide-react"

export default function PartnersBrands() {
  // These would be replaced with actual partner logos
  const partners = Array(12).fill(null)

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
            PARTNERS & COLLABORATIONS
          </div>
          <h2 className="text-4xl font-bold mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're proud to collaborate with these innovative companies to bring cutting-edge wellness solutions to our
            members.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((_, index) => (
            <div
              key={index}
              className="aspect-[3/2] bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <Command className="h-8 w-8 text-gray-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Become a Partner</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Interested in collaborating with FitLife? We're always open to partnerships that align with our mission of
            promoting holistic wellness.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block py-3 px-6 bg-primary text-black font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Partnership Opportunities
            </a>
            <a
              href="#"
              className="inline-block py-3 px-6 bg-transparent text-white font-medium rounded-full border border-gray-700 hover:border-white transition-colors"
            >
              Contact Business Development
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
