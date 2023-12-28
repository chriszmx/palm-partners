import { MagnifyingGlassIcon, HomeIcon, ShieldCheckIcon } from '@heroicons/react/20/solid';

export default function CollapseClaims() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.pexels.com/photos/15533273/pexels-photo-15533273/free-photo-of-rescue-team-after-earthquake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Collapsed Building"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Claim Expertise</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Expertise in Collapse Claims</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              When structural integrity fails, Palm Partners is there to support your collapse claim with precision and care.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MagnifyingGlassIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Detailed Assessments.</strong> Our adjusters meticulously evaluate the cause and extent of the collapse to maximize your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HomeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Property Protection.</strong> We help protect your property from further damage and handle emergency board-ups.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Advocacy.</strong> From documentation to negotiation, we advocate for your full entitlements under your policy.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Navigating collapse claims can be overwhelming. Trust Palm Partners to guide you through the process and help restore your property and peace of mind.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Ally in Complex Claims</h2>
              <p className="mt-6">
                Let our expertise in collapse claims be the foundation for rebuilding. Choose Palm Partners for steadfast support and expert claim handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
