import {
    HandRaisedIcon,
    ScaleIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";
import { Helmet } from "react-helmet";

export default function Mediation() {
    return (
        <div className="relative bg-white">
            <Helmet>
                <title>
                    Efficient Online Mediation Services | Palm Partners Florida
                </title>
                <meta
                    name="description"
                    content=" Experience seamless online mediation services with Palm Partners. Navigate insurance claims with ease & get rightful compensation."
                />
                <link
                    rel="canonical"
                    href="https://palmpts.com/services/mediation"
                />
            </Helmet>
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <img
                            className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                            src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Mediation Meeting"
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-xxl lg:flex-none lg:pt-32 xl:w-1/2 xl:pl-10">
                        <p className="text-base font-semibold leading-7 text-indigo-600">
                            Expert Negotiation
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Mediation Services
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            In the complex world of insurance claims, Palm
                            Partners' Mediation services offer a beacon of hope.
                            Our seasoned adjusters are adept at facilitating
                            discussions to ensure you receive the rightful
                            compensation. We navigate the intricacies of
                            insurance policies and stand firm in negotiations on
                            your behalf.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                Our approach to mediation is strategic and
                                empathetic, ensuring that your voice is heard
                                and your interests are prioritized. We
                                understand that the aftermath of property damage
                                can be stressful, which is why we strive to make
                                the claims process as smooth as possible for our
                                clients in Florida.
                            </p>
                            <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <HandRaisedIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Professional Advocacy.
                                        </strong>{" "}
                                        We represent you with integrity and
                                        professionalism, ensuring your case is
                                        presented effectively.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ScaleIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Balanced Settlements.
                                        </strong>{" "}
                                        Our negotiation skills are unmatched,
                                        aiming for settlements that are just and
                                        balanced.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ChatBubbleBottomCenterTextIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Clear Communication.
                                        </strong>{" "}
                                        We keep you informed every step of the
                                        way, providing clarity and
                                        understanding.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                At Palm Partners, we are dedicated to your
                                financial recovery. Our expert team in Florida
                                works tirelessly to ensure that your claim is
                                handled with the utmost care and precision.
                                Choose us for peace of mind and the compensation
                                you deserve.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                Your Trusted Partner in Mediation
                            </h2>
                            <p className="mt-6">
                                We understand the value of your property and the
                                importance of a fair claim settlement. Trust
                                Palm Partners to be your ally in navigating the
                                mediation process. Our commitment to excellence
                                makes us the ideal choice for your public
                                adjusting needs.
                            </p>
                        </div>

                        <div className="mt-10 text-center">
                            <div
                                className="inline-flex rounded-md shadow-sm"
                                role="group"
                            >
                                <a
                                    href="/services/appraisals"
                                    className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-l-lg border border-r-0 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                >
                                    ← Appraisals
                                </a>
                                <a
                                    href="/types-of-claims/hurricane"
                                    className="py-2 px-4 text-sm font-medium text-indigo-600 bg-white rounded-r-lg border border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                                >
                                    Hurricane →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
