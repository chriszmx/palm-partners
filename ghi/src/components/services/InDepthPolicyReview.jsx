import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/20/solid'

export default function InDepthPolicyReview() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="In-Depth Policy Review"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Analysis</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">In-Depth Policy Review</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Understanding your insurance policy's fine print is vital to ensuring you're fully covered. Our meticulous policy review process demystifies complex terms and maximizes your benefits.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                At Palm Partners, we delve into the nuances of your policy, ensuring you're not blindsided by exclusions or limitations. Our Florida-based team brings clarity to your coverage, empowering you with knowledge and peace of mind.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Reviews.</strong> With an eye for detail, our adjusters scrutinize every aspect of your policy to uncover hidden coverage opportunities.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Risk Management.</strong> We identify potential risks and advise on the best strategies to fortify your insurance defense.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ScaleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Fair Settlement Advocacy.</strong> Our negotiation prowess ensures that your claim settlements are just and equitable.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We believe that knowledge is power, especially when it comes to insurance coverage. Our team works tirelessly to provide you with a transparent and thorough policy understanding.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Trusted Policy Ally</h2>
              <p className="mt-6">
                With Palm Partners, you're not just reading lines of text; you're uncovering the full potential of your policy. Let us navigate the complexities and advocate for your maximum benefit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
