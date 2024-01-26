import {
  CloudIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid';

export default function MoistureReading() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1593081849794-ff9b66f8cb4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="High-tech moisture detection equipment"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Precision Detection</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Moisture Reading Services</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Unseen water damage can lead to significant structural issues and mold growth, compromising the integrity of your property. At Palm Partners, we utilize cutting-edge technology to perform comprehensive moisture readings, ensuring that every potential problem area is meticulously identified and documented for your insurance claim.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our Florida-based team of public adjusters is equipped with the latest moisture detection equipment, enabling us to uncover hidden water damage that often goes unnoticed. Our detailed assessments form the foundation of a robust claim, maximizing your settlement and safeguarding your property's value.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Advanced Technology.</strong> With our sophisticated moisture meters and thermal imaging cameras, we can detect water intrusion with pinpoint accuracy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Protection.</strong> Our expertise extends beyond detection; we advocate for your full entitlement under your insurance policy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Real-Time Reporting.</strong> We provide immediate, detailed reports that are essential for timely insurance claims and remediation processes.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Don't let hidden moisture devalue your property and lead to costly future repairs. Trust Palm Partners to provide a thorough moisture reading service that ensures your claim covers all necessary repairs for a fully restored property.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Expertise You Can Rely On</h2>
              <p className="mt-6">
                When you partner with Palm Partners, you're not just hiring a public adjuster; you're securing a dedicated ally in your corner. Our commitment to excellence and client advocacy sets us apart, making us the premier choice for Floridians facing property insurance claims.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/thermal-imaging" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Thermal Imaging
                </a>
                <a href="/services/detailed-roof-inspections" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Detailed Roof Inspection →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
