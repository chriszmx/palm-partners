import { CameraIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/20/solid'

export default function Matterport() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1635107625030-ea216e1ce6dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="4D Home Imaging Technology"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Precision in Every Detail</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">4D Home Imaging</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              With Palm Partners' state-of-the-art Matterport technology, we transform your property insurance claims with unparalleled precision and clarity. Our 4D imaging captures every corner of your property, ensuring that no detail is overlooked.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our detailed itemized estimating process, enhanced by Matterport's 4D imaging, allows us to document and accurately assess the condition of your property. This ensures that every aspect of your claim is thoroughly accounted for, leaving no room for discrepancies.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CameraIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Advanced Imaging.</strong> Our cutting-edge 4D imaging technology captures your property with the highest level of detail, providing a comprehensive visual record for your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Itemized Estimating.</strong> We meticulously itemize every aspect of your claim, ensuring full transparency and accuracy in the settlement process.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartBarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Maximized Settlements.</strong> Our strategic approach to claim documentation helps maximize your settlement, so you receive the compensation you deserve.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                As your partner, Palm Partners leverages this innovative technology to ensure that your claim is handled with the utmost care and expertise. Our team is dedicated to providing you with a seamless claim experience and the peace of mind that comes with knowing every detail is covered.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Empower Your Claim with Technology</h2>
              <p className="mt-6">
                Choose Palm Partners and experience the difference that professional public adjusting and advanced 4D home imaging can make. Our commitment to excellence is your key to a successful claim resolution in Florida.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/comprehensive-claims-management" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Unmatched Claims Management
                </a>
                <a href="/services/sketch-and-home-dimensions" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Sketch & Home Dimensions →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
