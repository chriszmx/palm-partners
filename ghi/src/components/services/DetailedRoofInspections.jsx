import {
  HomeIcon,
  ShieldCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/20/solid';

export default function DetailedRoofInspections() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="Detailed Roof Inspection"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expertise in Action</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Roof Inspections</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              In the subtropical climate of Florida, your roof endures a lot. That's why Palm Partners provides detailed roof inspections to safeguard your home against the elements. Our seasoned adjusters meticulously assess every inch to ensure no damage goes unnoticed.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                We understand that the roof is a critical component of your property's defense system. Our thorough inspections are designed to identify potential issues before they become costly repairs, giving you peace of mind and saving you money in the long run.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HomeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Protect Your Investment.</strong> With our detailed roof inspections, we ensure that your property remains secure and your investments protected.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Peace of Mind.</strong> Our expert adjusters provide the assurance you need that your roof will stand strong against Florida's unpredictable weather.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Detailed Reporting.</strong> After every inspection, you receive a comprehensive report detailing the condition of your roof and any recommendations for maintenance or repair.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our commitment to excellence means that when you choose Palm Partners, you're choosing a partner who will fight to ensure your property is valued correctly and that you receive the maximum compensation for any claims. Don't wait for the next storm to test your roof; schedule a detailed inspection today.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Ally in Property Protection</h2>
              <p className="mt-6">
                At Palm Partners, we're more than just public adjusters; we're your advocates in property protection. Trust us to deliver a meticulous roof inspection that leaves no shingle unturned. Contact us now to secure your home's defense against the Florida skies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
