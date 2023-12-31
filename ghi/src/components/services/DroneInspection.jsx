import { CameraIcon, ShieldCheckIcon, EyeIcon } from '@heroicons/react/20/solid';

export default function DroneInspection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
              alt="Drone Inspection"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Advanced Technology</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Drone Inspection Services</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              At Palm Partners, we utilize cutting-edge drone technology to provide comprehensive aerial inspections of your property. Our high-resolution cameras capture detailed images, enabling us to assess damage with precision and accuracy that traditional methods cannot match.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our Florida-based team of certified public adjusters leverages drone inspections to identify potential issues before they escalate. This proactive approach ensures that no damage goes unnoticed and that your insurance claims are thoroughly documented, leading to fair and just settlements.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CameraIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">High-Resolution Imagery.</strong> Our drones are equipped with advanced cameras to capture every detail from above, providing clear evidence for your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Safety and Security.</strong> Drone inspections minimize the need for risky manual assessments, ensuring the safety of our team and your property.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <EyeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Oversight.</strong> Our drones provide a bird's eye view, ensuring a complete assessment of your property's condition.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Choose Palm Partners for a modern approach to claim management. Our drone inspection services are a testament to our commitment to innovation and client satisfaction. When it comes to protecting your property and securing your insurance claim, we go above and beyond—literally.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Elevate Your Claim Experience</h2>
              <p className="mt-6">
                Partner with us and experience the peace of mind that comes with knowing your claim is in expert hands. Our drone technology is just one of the many tools we use to ensure you receive the maximum compensation you deserve. Let's navigate your insurance claim together, with precision from above and expertise on the ground.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/detailed-roof-inspections" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Roof Inspection
                </a>
                <a href="/services/in-depth-policy-review" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Policy Review →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
