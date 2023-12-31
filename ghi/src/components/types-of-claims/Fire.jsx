import { FireIcon, ShieldCheckIcon, BanknotesIcon } from '@heroicons/react/20/solid'

export default function FireClaim() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.pexels.com/photos/5687983/pexels-photo-5687983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Fire damaged property"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Fire Claim Handling</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fire Damage Claims</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              When fire strikes, the damage can be overwhelming. Our experienced public adjusters at Palm Partners are
              here to guide you through the complex process of filing a fire damage claim, ensuring that every detail is
              accounted for so you can rebuild with confidence.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                We understand the emotional and financial toll a fire can take. Our team specializes in thorough damage
                assessment, policy review, and aggressive negotiation with insurance providers to secure the maximum
                compensation you deserve.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FireIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Damage Analysis.</strong>
                    Our adjusters meticulously document all fire-related damages to ensure nothing is overlooked.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Policy Expertise.</strong>
                    We interpret the complexities of your insurance policy to advocate for your rights.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BanknotesIcon className="mt-1 h-5 w-5 flex-none text-yellow-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Maximized Settlements.</strong>
                    Negotiation skills that aim to secure the funds you need to fully restore your property.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Don't let the aftermath of a fire overwhelm you. Trust Palm Partners to handle your claim with the
                dedication and expertise it requires. We're committed to helping you get back on your feet with a
                settlement that truly reflects the value of your loss.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Advocate in Recovery</h2>
              <p className="mt-6">
                At Palm Partners, we stand by your side every step of the way. From initial assessment to final
                settlement, we fight for your best interests. Experience the peace of mind that comes with having
                an expert advocate in your corner.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/types-of-claims/hurricane" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Hurricane
                </a>
                <a href="/types-of-claims/water" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Water / Plumbing →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
