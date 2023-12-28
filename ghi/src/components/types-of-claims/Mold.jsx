import { ShieldCheckIcon, ScaleIcon, HomeIcon } from '@heroicons/react/20/solid';

export default function MoldClaim() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1579463462535-3fdc9ac56bd3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mold Damage"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Expertise in Mold Claims</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mold Damage Claims</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              In the humid Florida climate, mold damage is a common but serious issue that can severely impact your property and health. Palm Partners' public adjusters are seasoned in handling mold claims, ensuring that your insurance company acknowledges the full scope of the damage for appropriate compensation.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Our team is dedicated to providing a comprehensive assessment of mold damage, navigating complex policy language, and negotiating with insurance carriers to secure the settlement you deserve. We understand the intricacies of mold remediation and will advocate for your rights throughout the claim process.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Protection & Advocacy.</strong> Our adjusters act as your personal advocate, ensuring your claim is handled fairly and efficiently.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ScaleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Fair Settlements.</strong> We level the playing field with insurance companies to fight for the maximum settlement.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HomeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Home Restoration.</strong> We help you navigate the process of restoring your home to its pre-damage condition.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Don’t let mold damage undermine the value of your property or the health of your loved ones. Trust Palm Partners to provide the expertise and support you need to recover fully from mold damage. Choose smart. Choose Palm Partners. Because your peace of mind is worth it.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Experience You Can Trust</h2>
              <p className="mt-6">
                With years of experience in the Florida insurance landscape, Palm Partners has the knowledge and resources to handle your mold claim with the utmost professionalism. Let us take the burden off your shoulders, so you can focus on what matters most—your recovery and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
