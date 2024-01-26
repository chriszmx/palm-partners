import { CameraIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/20/solid'

export default function PhotographicDocumentation() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1606146485652-75b352ce408a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Photographic evidence by a professional adjuster"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Evidence-Based Claims</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Photographic Documentation</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              At Palm Partners, we understand that comprehensive photographic evidence is pivotal in substantiating your insurance claim. Our seasoned adjusters are equipped with state-of-the-art technology to capture detailed images that accurately represent the extent of damage to your property.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                In the wake of property damage, clear and detailed photographs are essential for a successful claim process. Our experts meticulously document every aspect of the damage, ensuring that nothing is overlooked. We take pride in our precision and attention to detail, which sets the foundation for a robust claim.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CameraIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Precision in Every Pixel.</strong> Our high-resolution photography captures the nuances of damage, providing irrefutable evidence for your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Your Advocate in the Field.</strong> We act as your eyes and ears, ensuring that every detail is documented to fortify your position against insurers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Reporting.</strong> Alongside photographic evidence, our comprehensive reports leave no stone unturned, presenting a compelling case for your settlement.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We understand the stakes are high when it comes to your property and peace of mind. That's why Palm Partners is dedicated to delivering unparalleled service in photographic documentation to support your claim, ensuring you receive the compensation you deserve.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Experience the Palm Partners Difference</h2>
              <p className="mt-6">
                With Palm Partners, you're not just a claim number; you're part of our family. We navigate the complexities of insurance claims with expertise and care, so you don't have to. Trust us to be your partner in this journey, capturing every detail and advocating for your maximum settlement.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/sketch-and-home-dimensions" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Sketch & Home Dimensions
                </a>
                <a href="/services/thermal-imaging" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Thermal Imaging →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
