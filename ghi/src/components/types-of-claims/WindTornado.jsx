import {
    CloudIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "@heroicons/react/20/solid";
import { Helmet } from "react-helmet";

export default function WindTornado() {
    return (
        <div className="relative bg-white">
            <Helmet>
                <title>
                    Maximize Your Claim: Wind Damage Insurance Claim Experts |
                    Palm Partners
                </title>
                <meta
                    name="description"
                    content="Navigate wind damage insurance claim with Palm Partners. Our Florida-based team ensures maximum entitlement and swift recovery. Contact us today for expert assistance!"
                />
                <link
                    rel="canonical"
                    href="https://palmpts.com/types-of-claims/wind-tornado"
                />
            </Helmet>
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <img
                            className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                            src="https://images.unsplash.com/photo-1596571580550-549b05bb3048?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Wind damage"
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
                        <p className="text-base font-semibold leading-7 text-indigo-600">
                            Expert Claims Handling
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Wind and Tornado Claims
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            When disaster strikes, Palm Partners is your
                            steadfast ally in navigating wind and tornado
                            claims. Our Florida-based team of public adjusters
                            brings unmatched expertise and a compassionate
                            approach to ensure you receive the maximum
                            entitlement for your property damage.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                With years of experience in dealing with the
                                aftermath of severe weather, we understand the
                                urgency and emotional toll that comes with such
                                events. Our adjusters are skilled in assessing
                                damage, interpreting policy details, and
                                negotiating with insurance carriers to advocate
                                for your interests.
                            </p>
                            <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <CloudIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Comprehensive Damage Assessment.
                                        </strong>{" "}
                                        Our team performs thorough evaluations
                                        to document every aspect of your wind or
                                        tornado damage, ensuring nothing is
                                        overlooked.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ShieldCheckIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Policy Expertise.
                                        </strong>{" "}
                                        We dissect the complexities of your
                                        insurance policy to safeguard your
                                        rights and maximize your claim's
                                        potential.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <SparklesIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Personalized Claim Strategy.
                                        </strong>{" "}
                                        Each claim is unique, and we tailor our
                                        approach to align with your specific
                                        situation and recovery goals.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                We're dedicated to providing you with a seamless
                                claim process and peace of mind. From initial
                                assessment to final settlement, Palm Partners
                                stands with you every step of the way, ensuring
                                your recovery is swift and just.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                Unmatched Advocacy in Your Time of Need
                            </h2>
                            <p className="mt-6">
                                In the wake of a wind or tornado event, you
                                deserve a partner who will fight for your
                                interests without compromise. Choose Palm
                                Partners and experience the difference that
                                professional representation can make in your
                                claim outcome.
                            </p>
                        </div>

                        <div className="mt-10 text-center">
                            <div
                                className="inline-flex rounded-md shadow-sm"
                                role="group"
                            >
                                <a
                                    href="/types-of-claims/loss-of-business"
                                    className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                >
                                    ← Loss of Business
                                </a>
                                <a
                                    href="/types-of-claims/hail-wind-driven-rain"
                                    className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                >
                                    Hail & Wind-Driven Rain →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
