import {
  CameraIcon,
  AdjustmentsHorizontalIcon,
  EyeIcon
} from '@heroicons/react/20/solid';

export default function ThermalImaging() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://www.ratioseven.co.uk/wp-content/uploads/2021/12/Thermal-Imaging-and-Heat-Loss-Surveys-1024x1024.jpeg"
              alt="State-of-the-art Thermal Imaging Technology"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Advanced Detection</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thermal Imaging Services</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Uncover hidden issues with Palm Partners' cutting-edge thermal imaging technology. Our state-of-the-art tools detect and visualize temperature differences in buildings, revealing potential problems invisible to the naked eye.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our expert adjusters in Florida utilize thermal imaging to identify a range of issues, from energy inefficiencies to moisture intrusion, ensuring that no stone is left unturned in your insurance claim. Experience the peace of mind that comes with comprehensive claim documentation.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CameraIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Precision Imaging.</strong> Our thermal cameras provide precise, high-resolution images, enabling us to pinpoint problem areas with remarkable accuracy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AdjustmentsHorizontalIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Detailed Analysis.</strong> We conduct a thorough analysis of thermal data to interpret the condition of your property, ensuring that all concerns are addressed.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <EyeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Unseen Problem Detection.</strong> Our technology reveals issues that would otherwise go unnoticed, from electrical faults to hidden water damage.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Beyond mere detection, our team at Palm Partners provides comprehensive solutions and advocacy throughout the insurance claim process. We are your trusted ally in securing the maximum settlement you deserve.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Maximize Your Claim with Expert Insight</h2>
              <p className="mt-6">
                Don't let unseen issues diminish your claim's potential. Trust Palm Partners' thermal imaging expertise to illuminate the full scope of damage and strengthen your position. Choose the experts who stand with you every step of the way.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/photographic-documentation" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Photographic Documentation
                </a>
                <a href="/services/moisture-reading" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Moisture Reading →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
