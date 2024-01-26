import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function HailWindDrivenRain() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.pexels.com/photos/2724373/pexels-photo-2724373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hail and Wind Driven Rain Damage"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Claim Handling</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hail and Wind-Driven Rain Claims</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              When severe weather strikes, the aftermath can be devastating to your property. Our team at Palm Partners Public Adjusters specializes in navigating hail and wind-driven rain claims to ensure you receive the compensation you deserve. We meticulously assess the damage, advocate for your rights, and negotiate with insurance companies to secure a fair settlement.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our expertise in handling complex claims means we're equipped to identify and document all aspects of the damage. We work tirelessly to expedite your claim, alleviate stress, and help you rebuild with confidence.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Damage Assessment.</strong> We conduct a thorough inspection to ensure every detail is accounted for in your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Policyholder Advocacy.</strong> Our adjusters represent your interests, not the insurance company's, to maximize your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Expert Negotiation.</strong> We leverage our industry knowledge to negotiate on your behalf for the best possible outcome.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We understand the nuances of hail and wind-driven rain claims and are committed to guiding you through every step of the process. Our goal is to restore your peace of mind and ensure that you can focus on recovery, not red tape.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Ally in Property Claims</h2>
              <p className="mt-6">
                With Palm Partners Public Adjusters, you're not just a claim number; you're a valued client. We stand by your side, providing personalized service, clear communication, and unwavering support. Choose us and experience the difference that a dedicated public adjuster makes.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/types-of-claims/wind-tornado" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Wind & Tornado
                </a>
                <a href="/services/comprehensive-claims-management" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Unmatched Claims Management →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
