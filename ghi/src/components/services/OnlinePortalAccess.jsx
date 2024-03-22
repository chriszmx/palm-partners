import {
  DeviceTabletIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet';

export default function OnlinePortalAccess() {
  return (
      <div className="relative bg-white">
          <Helmet>
              <title>
                  Secure Access to Your Claim | Online Portal Login | Palm
                  Partners
              </title>
              <meta
                  name="description"
                  content="Stay informed and empowered with our intuitive online portal login. Accessible anywhere, manage documents, and gain insightful analytics effortlessly. Partner with Palm Partners for unparalleled support."
              />
              <link
                  rel="canonical"
                  href="https://palmpts.com/services/online-portal-access"
              />
          </Helmet>
          <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
              <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                  <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                      <img
                          className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                          alt="Online Portal Screen"
                      />
                  </div>
              </div>
              <div className="px-6 lg:contents">
                  <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
                      <p className="text-base font-semibold leading-7 text-indigo-600">
                          Real-time Updates
                      </p>
                      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                          Stay Informed with Online Portal Access
                      </h1>
                      <p className="mt-6 text-xl leading-8 text-gray-700">
                          Our intuitive online portal keeps you in the loop with
                          real-time updates and comprehensive insights into your
                          claim's progress. Experience unparalleled transparency
                          and control with Palm Partners' innovative claim
                          tracking technology.
                      </p>
                      <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                          <p>
                              Our platform is designed to simplify the claim
                              process, offering you a user-friendly interface to
                              view documents, communicate with your adjuster,
                              and monitor settlement negotiations. Empower
                              yourself with all the information you need at your
                              fingertips.
                          </p>
                          <ul
                              role="list"
                              className="mt-8 space-y-8 text-gray-600"
                          >
                              <li className="flex gap-x-3">
                                  <DeviceTabletIcon
                                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                      aria-hidden="true"
                                  />
                                  <span>
                                      <strong className="font-semibold text-gray-900">
                                          Accessible Anywhere.
                                      </strong>{" "}
                                      Log in from any device, anywhere, to check
                                      the status of your claim, ensuring you're
                                      always informed and up-to-date.
                                  </span>
                              </li>
                              <li className="flex gap-x-3">
                                  <DocumentTextIcon
                                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                      aria-hidden="true"
                                  />
                                  <span>
                                      <strong className="font-semibold text-gray-900">
                                          Document Management.
                                      </strong>{" "}
                                      Easily upload and manage claim documents
                                      within the portal for a streamlined and
                                      organized experience.
                                  </span>
                              </li>
                              <li className="flex gap-x-3">
                                  <ChartBarIcon
                                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                      aria-hidden="true"
                                  />
                                  <span>
                                      <strong className="font-semibold text-gray-900">
                                          Insightful Analytics.
                                      </strong>{" "}
                                      Gain valuable insights with visual
                                      analytics and reports that help you
                                      understand every aspect of your claim.
                                  </span>
                              </li>
                          </ul>
                          <p className="mt-8">
                              Partner with Palm Partners and benefit from our
                              commitment to clear communication and exceptional
                              service. Our online portal is just one of the many
                              ways we ensure you're supported every step of the
                              way towards a fair settlement.
                          </p>
                      </div>

                      <div className="mt-10 text-center">
                          <div
                              className="inline-flex rounded-md shadow-sm"
                              role="group"
                          >
                              <a
                                  href="/services/personal-claims-specialist"
                                  className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                              >
                                  ← Personal Claims Specialist
                              </a>
                              <a
                                  href="/services/appraisals"
                                  className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                              >
                                  Appraisals →
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
