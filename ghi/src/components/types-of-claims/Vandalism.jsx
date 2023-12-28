import { ShieldCheckIcon, HandRaisedIcon, DocumentTextIcon } from '@heroicons/react/20/solid';

export default function Vandalism() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1549285159-f472fffa06c6?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Broken window as a result of vandalism"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Advocacy</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vandalism & Theft Claims</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              When you're facing the aftermath of vandalism or theft, Palm Partners provides the expertise and support to navigate your insurance claims. Our Florida-based adjusters specialize in securing the compensation you deserve, with meticulous attention to detail and steadfast negotiation.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our approach is comprehensive and personalized, ensuring every aspect of your claim is addressed—from property damage assessments to loss inventory. We understand the emotional toll of these incidents and strive to alleviate your stress with our dedicated service.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Protection.</strong> Our public adjusters are your shield against undervalued claims, ensuring comprehensive protection for your property and interests.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HandRaisedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hands-On Service.</strong> We offer a hands-on approach, guiding you through each step of the claims process with expertise and care.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Detailed Documentation.</strong> Our team meticulously documents all evidence to build a robust case for your claim, ensuring nothing is overlooked.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                With Palm Partners, you gain a relentless advocate who navigates the complexities of insurance claims on your behalf. We're committed to securing the maximum settlement, so you can focus on restoring your property and peace of mind.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trust, Our Commitment</h2>
              <p className="mt-6">
                Trust Palm Partners to be the expert ally in your corner. Just as you wouldn't face legal challenges without a lawyer, don't confront vandalism and theft claims alone. Partner with us for expert guidance and the fair settlement you're entitled to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
