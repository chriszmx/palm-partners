import {
  ScaleIcon, // Represents appraisals
  ShieldCheckIcon, // Represents protection and advocacy
  ClipboardDocumentCheckIcon // Represents thorough documentation
} from '@heroicons/react/20/solid'

export default function Appraisals() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Insurance claim appraisal"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Appraisal Services</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Claim Appraisals</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Palm Partners offers unparalleled appraisal services for all types of insurance claims in Florida. Our seasoned public adjusters are proficient in evaluating the true extent of your loss, ensuring no detail is overlooked. We advocate for your interests, not the insurance company's, to secure the maximum settlement you're entitled to.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                With our extensive industry knowledge and negotiation expertise, we navigate the complexities of insurance policies and claims with precision. Our commitment is to deliver a transparent and just appraisal process, tailored to the unique circumstances of your case.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ScaleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Accurate Valuations.</strong> Our experts conduct thorough assessments to ensure fair and accurate claim valuations, reflecting the true value of your loss.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Protection of Rights.</strong> We safeguard your rights throughout the claims process, ensuring you're not short-changed by insurance tactics.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Detailed Documentation.</strong> We meticulously document every aspect of your claim to support a robust and indisputable case for compensation.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our approach is proactive and results-driven, with a focus on expediting the claim process while maintaining the highest standards of service. Partner with Palm Partners to experience the peace of mind that comes with having a dedicated advocate by your side.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Ally in Insurance Appraisals</h2>
              <p className="mt-6">
                Don't navigate the challenging waters of insurance claims alone. Our public adjusters are your strategic partners, committed to achieving a fair and just outcome for your appraisal. With Palm Partners, you gain more than a service; you gain a steadfast ally.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/services/online-portal-access" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Online Portal
                </a>
                <a href="/services/mediation" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Mediation →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
