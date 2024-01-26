import { PhoneIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'

export default function CallService() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&h=1707&q=80"
              alt="Customer service representative"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Always Here for You</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">24/7 Call Service</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              At Palm Partners, our commitment to you extends beyond regular business hours. Our dedicated team of public adjusters is available around the clock to ensure that your needs are met with urgency and care. Whether you're facing an emergency claim situation or have late-night concerns, we're here to provide expert guidance and support.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                We understand that property damage and insurance claims don't adhere to a 9-to-5 schedule. That's why our 24/7 call service is designed to provide you with peace of mind, knowing that professional help is just a phone call away, anytime, anywhere in Florida.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <PhoneIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Immediate Response.</strong> Our team is ready to take your call and provide immediate assistance, ensuring that your claim is handled promptly and efficiently.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Around-the-Clock Availability.</strong> No matter the time of day, our public adjusters are here to offer their expertise and navigate the complexities of your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Expert Advocacy.</strong> We stand as your advocate against insurance companies, ensuring that your rights are upheld and you receive the settlement you deserve.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                When you choose Palm Partners, you're choosing a partner who values your security and satisfaction above all else. Our public adjusters are not only your claim experts but also your steadfast supporters throughout the entire process.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Partner in Crisis.</h2>
              <p className="mt-6">
                Experience the difference with Palm Partners' 24/7 call service. We're more than just adjusters; we're your advocates, negotiators, and partners in securing your financial recovery. Don't face your insurance claims alone—let us be your guide every step of the way.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/in-depth-policy-review" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Policy Review
                </a>
                <a href="/services/personal-claims-specialist" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Personal Claims Specialist →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
