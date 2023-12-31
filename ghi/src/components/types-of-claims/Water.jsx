import {
  BeakerIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon
} from '@heroicons/react/20/solid';

export default function PlumbingServices() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1562159937-194305937c6a?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional Plumbing Services"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Professional Plumbing Solutions</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Expert Plumbing Services</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Our certified plumbers provide top-notch water and plumbing services to ensure your systems are running smoothly and efficiently. With a focus on quality and customer satisfaction, we tackle everything from minor repairs to major installations.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                We're equipped to handle a wide range of plumbing needs, utilizing the latest technology and techniques to deliver reliable results. Our team is ready to respond promptly to your plumbing emergencies, maintenance, or new construction projects.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BeakerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Services.</strong> From leak detection to pipe installation, we cover all aspects of plumbing with precision and care.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchScrewdriverIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Efficient Repairs.</strong> Our skilled plumbers quickly diagnose and fix issues, minimizing downtime and inconvenience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Quality Assurance.</strong> We stand behind our work with a commitment to quality and a satisfaction guarantee.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Trust in our expertise to keep your plumbing systems in peak condition. Our proactive approach and attention to detail ensure that your water and plumbing needs are met with the highest standards.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Reliable Plumbing Partner</h2>
              <p className="mt-6">
                Choose our experienced team for dependable plumbing services that you can count on. We're dedicated to providing you with efficient, long-lasting solutions and the peace of mind that comes from knowing your plumbing is in expert hands.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/types-of-claims/fire" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  ← Fire
                </a>
                <a href="/types-of-claims/sinkhole" className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                  Sinkhole →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
