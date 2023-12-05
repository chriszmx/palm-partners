import {
    CloudIcon,
    FireIcon,
    ArrowTrendingDownIcon,
    BanknotesIcon,
    ShieldExclamationIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    BeakerIcon,
  } from '@heroicons/react/24/outline'

  const features = [
    {
      name: 'Hurricane',
      description: 'Providing expert guidance and support for all aspects of hurricane-related claims, ensuring comprehensive coverage and fair settlements.',
      href: '#',
      icon: CloudIcon,
    },
    {
      name: 'Fire',
      description: 'Offering thorough assistance for fire damage claims, from initial assessment to final settlement, helping you rebuild and recover.',
      href: '#',
      icon: FireIcon,
    },
    {
      name: 'Water / Plumbing',
      description: 'Specializing in water damage claims, we navigate the complexities of plumbing issues, ensuring every detail is addressed for maximum compensation.',
      href: '#',
      icon: BeakerIcon,
    },
    {
      name: 'Sinkhole',
      description: 'Providing dedicated and specialized support for sinkhole damages, focusing on securing full entitlements under your policy.',
      href: '#',
      icon: ArrowTrendingDownIcon,
    },
    {
      name: 'Collapse',
      description: 'Expertly managing claims for structural collapses, our team works diligently to assess and document all damages for a fair claim.',
      href: '#',
      icon: BanknotesIcon,
    },
    {
      name: 'Vandalism / Theft',
      description: 'Offering expert guidance and robust advocacy in vandalism and theft incidents, ensuring your claim is fully and fairly resolved.',
      href: '#',
      icon: ShieldExclamationIcon,
    },
    {
      name: 'Loss of Business Income',
      description: 'Specializing in business interruption claims, we work tirelessly to secure the compensation you deserve for loss of income due to unforeseen events.',
      href: '#',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Wind / Tornado',
      description: 'Expert handling of wind and tornado damage claims, ensuring all impacts are thoroughly assessed and compensated.',
      href: '#',
      icon: ArrowPathIcon,
    },
    {
      name: 'Hail / Wind Driven Rain',
      description: 'Providing skilled representation for hail and wind driven rain damage claims, ensuring comprehensive coverage and maximum recovery.',
      href: '#',
      icon: CloudIcon,
    },
  ]

  export default function OurServices() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At Palm Partners, we offer a wide range of specialized services to ensure your insurance claims are handled professionally and effectively.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
