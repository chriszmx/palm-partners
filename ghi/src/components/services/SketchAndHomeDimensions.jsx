import {
    ScaleIcon,
    DocumentTextIcon,
    HomeIcon,
} from "@heroicons/react/20/solid";
import { Helmet } from "react-helmet";

export default function SketchAndHomeDimensions() {
    return (
        <div className="relative bg-white">
            <Helmet>
                <title>
                    House Floor Plans by Palm Partners: Precision for Claims
                </title>
                <meta
                    name="description"
                    content="Palm Partners offers precise house floor plans for insurance claims. Get accurate sketches & measurements to support your claim. Trust our expertise."
                />
                <link
                    rel="canonical"
                    href="https://palmpts.com/services/sketch-and-home-dimensions"
                />
            </Helmet>
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src="https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Blueprints and measuring tools"
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
                        <p className="text-base font-semibold leading-7 text-indigo-600">
                            Precision in Every Measurement
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Sketch and Home Dimensions
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            When it comes to insurance claims, precise
                            documentation of your property's layout and
                            structure is critical. Our Sketch and Home
                            Dimensions service provides accurate blueprints and
                            detailed measurements, ensuring that every aspect of
                            your claim is substantiated with professional
                            accuracy.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                Our team of experienced public adjusters
                                utilizes the latest technology to create
                                comprehensive sketches and diagrams of your
                                home. This meticulous approach to documenting
                                your property can make a significant difference
                                in the outcome of your claim.
                            </p>
                            <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <ScaleIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Accurate Scaling.
                                        </strong>{" "}
                                        Our precise scaling techniques ensure
                                        that every inch of your property is
                                        accounted for, leaving no detail
                                        overlooked.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <DocumentTextIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Detailed Documentation.
                                        </strong>{" "}
                                        We provide thorough documentation to
                                        support your claim, from floor plans to
                                        elevation drawings.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <HomeIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Comprehensive Analysis.
                                        </strong>{" "}
                                        Our team conducts a full analysis of
                                        your home's dimensions to ensure that
                                        your claim reflects the true extent of
                                        your property's value.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                At Palm Partners, we understand that your
                                property is more than just an asset—it's a part
                                of your life. That's why we're dedicated to
                                providing you with the highest level of service
                                and support throughout the claims process. Let
                                us handle the complexities of your claim, so you
                                can focus on what matters most.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                Expertise You Can Trust
                            </h2>
                            <p className="mt-6">
                                With Palm Partners, you're partnering with a
                                team of public adjusters who are committed to
                                protecting your interests. Our expertise in
                                Sketch and Home Dimensions is just one aspect of
                                our dedication to ensuring that you receive the
                                full compensation you deserve. Trust us to be by
                                your side every step of the way.
                            </p>
                        </div>

                        <div className="mt-10 text-center">
                            <div
                                className="inline-flex rounded-md shadow-sm"
                                role="group"
                            >
                                <a
                                    href="/services/matterport"
                                    className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                >
                                    ← 4D Home Imaging
                                </a>
                                <a
                                    href="/services/photographic-documentation"
                                    className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                >
                                    Comprehensive Photographic Documentation →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
