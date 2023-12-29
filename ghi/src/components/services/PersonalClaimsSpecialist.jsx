import { UserGroupIcon, ShieldCheckIcon, ClipboardDocumentIcon } from '@heroicons/react/20/solid';

export default function PersonalClaimsSpecialist() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Expert Public Adjuster"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expert Advocacy</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal Claims Specialist</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              At Palm Partners, we provide you with a personal claims specialist dedicated to managing your insurance claim with precision and priority. Our specialists are trained to navigate complex claims processes, ensuring that you receive the maximum settlement you're entitled to.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our specialists act as your personal advocate, meticulously reviewing your policy and the details of your claim. They handle all communications with your insurance carrier, relieving you of the stress and burden during a challenging time.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dedicated Support.</strong> Our team of personal claims specialists are committed to providing you with individualized attention and support throughout the entire claims process.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Your Interests Protected.</strong> We stand as your shield against the tactics of insurance companies, ensuring your rights and interests are safeguarded.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClipboardDocumentIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Thorough Documentation.</strong> Every aspect of your claim is documented with meticulous detail, building a robust case for your settlement.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                With Palm Partners, you gain more than just a claims specialist; you gain a steadfast ally in Florida who is as invested in your recovery as you are. We understand the local regulations and nuances that can impact your claim, positioning you for success.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Experience You Can Trust</h2>
              <p className="mt-6">
                Trust in our experience and local expertise to guide you through the complexities of your personal claim. Our goal is to ensure that you are fully and fairly compensated, and we won't settle for anything less. Choose Palm Partners and experience the peace of mind that comes with having a dedicated expert on your side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
