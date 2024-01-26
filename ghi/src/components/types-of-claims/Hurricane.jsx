import { CloudIcon, DocumentCheckIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";

export default function Hurricane() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hurricane Damage"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Claim Handling</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hurricane Damage</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              When hurricanes strike the Florida coast, the damage can be catastrophic. At Palm Partners Public Adjusters, we specialize in handling hurricane damage claims to ensure you receive the compensation you deserve. Our experienced team understands the complexities of insurance policies and is skilled in negotiating with insurance carriers to secure the fairest settlement for you.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                We know that hurricane damage can be overwhelming, which is why we provide comprehensive assistance throughout the claims process. Our dedicated adjusters conduct thorough assessments, document all damages, and advocate for your rights. With Palm Partners by your side, you can rest assured that your claim is in capable hands.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Efficient Claim Submission.</strong> We expedite the claim submission process, ensuring your case receives prompt attention from the insurance carrier.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DocumentCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Skillful Negotiation.</strong> Our adjusters are adept negotiators, working tirelessly to maximize your settlement and protect your best interests.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Documentation.</strong> We meticulously document all hurricane-related damages, ensuring no detail is overlooked in your claim.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                At Palm Partners, we understand the devastating impact of hurricanes on your property and your life. Our mission is to provide unwavering support, streamline the claims process, and help you rebuild and recover as quickly as possible.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Ally in Hurricane Claims</h2>
              <p className="mt-6">
                As a Florida-based company, we have firsthand experience with the destructive power of hurricanes. When you choose Palm Partners Public Adjusters, you're not just hiring an adjuster; you're gaining a dedicated partner who will fight for your rights, navigate the complexities of your claim, and ensure you receive the full and fair compensation you deserve. Trust us to be your advocate in the aftermath of a hurricane.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/mediation" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Mediation
                </a>
                <a href="/types-of-claims/fire" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Fire →
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
