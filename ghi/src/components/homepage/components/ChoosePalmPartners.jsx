import { StarIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '30+ Years Combined Experience',
    description:
      'Our team of experienced adjusters brings over three decades of expertise in handling complex claims, ensuring you get the best possible outcome.',
    icon: StarIcon,
  },
  {
    name: '10,000+ Satisfied Clients',
    description:
      'With a track record of over 10,000 satisfied clients, we have a proven history of success in representing a wide range of cases.',
    icon: UsersIcon,
  },
  {
    name: '$300 Million+ Recovered Settlements',
    description:
      'Our skilled negotiation has led to the recovery of over $300 million in settlements, highlighting our commitment to securing maximum compensation.',
    icon: CurrencyDollarIcon,
  },
]

export default function ChoosePalmPartners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Palm Partners</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Public Adjusters vs Dealing with the Carrier on Your Own
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choosing a public adjuster means getting a professional on your side who understands the ins and outs of insurance claims. Our team ensures that your rights are protected and that you get the fairest settlement possible.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
