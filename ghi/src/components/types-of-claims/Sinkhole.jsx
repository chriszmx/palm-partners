import { ArchiveBoxIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/20/solid';

export default function SinkholeClaim() {
  return (
    <div className="relative bg-white py-12">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
          <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1561738787-6d6baf5dd18c?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mold Damage"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Claims Handling</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sinkhole Claims</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              When sinkholes threaten your property, Palm Partners stands as your steadfast ally. Our public adjusters bring unmatched expertise to navigate the complexities of sinkhole claims, ensuring that you receive the compensation you deserve for the damages incurred.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Sinkholes can cause severe structural damage, and dealing with insurance claims can be overwhelming. Palm Partners provides personalized service, using our deep understanding of Florida's geological challenges to advocate for your best interests.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArchiveBoxIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Documentation.</strong> We meticulously document all aspects of the damage to build a robust case for your claim.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Relentless Advocacy.</strong> Our adjusters are tenacious negotiators, fighting to secure the maximum settlement on your behalf.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ScaleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Fair Representation.</strong> We ensure that your claim is fairly represented and that your rights are upheld throughout the process.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                With Palm Partners, you gain a partner with a proven track record of success in securing favorable outcomes for sinkhole damage claims. We handle all the details, so you can focus on recovering from the event.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Partner in Crisis</h2>
              <p className="mt-6">
                Don't let sinkhole damage undermine your financial stability. Trust Palm Partners to deliver the professionalism, dedication, and results you need during this critical time.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/types-of-claims/water" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Water / Plumbing
                </a>
                <a href="/types-of-claims/mold" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Mold →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
