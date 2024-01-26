import {
  BuildingOfficeIcon,
  ScaleIcon,
  ShieldCheckIcon
} from '@heroicons/react/20/solid'

export default function LossOfBusiness() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1576165768014-18add4ea6716?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Florida business district"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expertise in Business Claims</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loss of Business</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              In the wake of unforeseen events, your business's financial stability can be shaken. Palm Partners' public adjusters are here to safeguard your interests, ensuring that your business in Florida receives the compensation it deserves for lost revenue.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our team of seasoned adjusters excels in the art of negotiation and possesses a deep understanding of the complexities of business interruption claims. We stand as a bulwark against undervalued settlements, advocating tirelessly on your behalf.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BuildingOfficeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Business Continuity.</strong> We meticulously analyze your coverage and business records to maximize your claim and minimize disruption.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ScaleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Equitable Solutions.</strong> Our adjusters employ strategic negotiation techniques to ensure just compensation for your loss.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Protection.</strong> We leave no stone unturned, from policy analysis to claim presentation, to protect your enterprise.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Don't let the intricacies of insurance claims hinder your recovery. Partner with Palm Partners and experience the peace of mind that comes with having an expert advocate navigate your loss of business claim.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Business, Our Priority</h2>
              <p className="mt-6">
                At Palm Partners, we understand that your business is more than just a livelihood—it's a legacy. That's why we commit to delivering results that not only meet but exceed your expectations. Choose us, and let's secure your business's future together.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/types-of-claims/vandalism" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Vandalism & Theft
                </a>
                <a href="/types-of-claims/wind-tornado" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Wind & Tornado →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
