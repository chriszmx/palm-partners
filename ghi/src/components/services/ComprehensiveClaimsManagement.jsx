import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/20/solid'

export default function ComprehensiveClaimsManagement() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Palm Partners - Your Trusted Public Adjusters"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expertise in Action</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unmatched Claims Management</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              At Palm Partners, we pride ourselves on our meticulous approach to claims management. Our seasoned public adjusters in Florida are skilled in the art of negotiation and dedicated to ensuring that every detail of your claim is thoroughly documented and fairly settled.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                We understand that dealing with property insurance claims can be daunting. That's why our team is committed to providing you with the support and expertise necessary to navigate the complexities of insurance policies and maximize your settlement.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Detailed Documentation.</strong> Our experts meticulously document every aspect of your claim, ensuring nothing is overlooked.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Client Advocacy.</strong> We stand as your staunch advocate, challenging the insurance companies to honor the full value of your policy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ScaleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Fair Settlements.</strong> Leveraging our expertise to negotiate settlements that truly reflect the value of your loss.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our commitment to you goes beyond claim management. We are your partner in ensuring that the process is as stress-free as possible, and that you receive the compensation you deserve.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Ally in Claim Settlement</h2>
              <p className="mt-6">
                Choose Palm Partners for a partner who brings unparalleled expertise to the table. Whether it's a natural disaster, property damage, or any other insurable loss, we are here to ensure that your interests are fully represented and that your peace of mind is restored.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/types-of-claims/hail-wind-driven-rain" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Hail & Wind Driven Rain
                </a>
                <a href="/services/matterport" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Matterport 4D Home Imaging →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
