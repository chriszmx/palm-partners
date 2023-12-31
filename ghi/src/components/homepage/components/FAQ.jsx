import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "What is a public adjuster?",
        answer: "A public adjuster is a licensed professional who represents policyholders in appraising and negotiating insurance claims. Unlike adjusters who work for insurance companies, public adjusters work exclusively for the claimant to help them get the maximum settlement they're entitled to under their policy.",
    },
    {
        question: "Why should I hire a public adjuster?",
        answer: "Hiring a public adjuster can be beneficial because they bring expertise in insurance policies and claim negotiation, which can help ensure that you receive a fair and just settlement. They handle the complex claims process, allowing you to focus on rebuilding and recovering from your loss.",
    },
    {
        question: "When should I contact a public adjuster?",
        answer: "It's best to contact a public adjuster as soon as possible after experiencing property damage or loss. Early involvement can help ensure that your claim is properly documented and filed, which can lead to a more favorable outcome.",
    },
    {
        question: "What types of claims can a public adjuster help with?",
        answer: "Public adjusters can assist with a wide range of property claims, including damage from hurricanes, floods, fires, theft, vandalism, and other covered perils under residential or commercial insurance policies.",
    },
    {
        question: "How are public adjusters paid?",
        answer: "Public adjusters typically work on a contingency fee basis, meaning they receive a percentage of the settlement amount. This ensures that they are motivated to obtain the best possible outcome for you. The fee structure and percentage are agreed upon before services are rendered.",
    },
    {
        question: "Can a public adjuster reopen a claim?",
        answer: "Yes, if you believe your insurance claim was underpaid or denied unjustly, a public adjuster can review the claim and potentially reopen it to negotiate for a more accurate settlement.",
    },
    {
        question: "What is the difference between a public adjuster and an insurance company adjuster?",
        answer: "An insurance company adjuster works on behalf of the insurance company and may prioritize the company's interests. In contrast, a public adjuster represents your interests and works to ensure you receive fair treatment and compensation for your claim.",
    },
    {
        question: "What should I do immediately after property damage occurs?",
        answer: "After ensuring everyone's safety, you should document the damage with photos and videos, take steps to prevent further damage, notify your insurance company of the loss, and consider contacting a public adjuster to discuss your options.",
    },
    {
        question: "How long does the claims process take?",
        answer: "The length of the claims process can vary depending on the complexity of the claim, the extent of the damage, and the responsiveness of the insurance company. A public adjuster can help expedite the process by ensuring timely submission of documents and advocating on your behalf.",
    },
    {
        question: "Is a public adjuster licensed and regulated?",
        answer: "Yes, public adjusters in Florida are licensed by the Florida Department of Financial Services and must adhere to strict regulatory standards and ethical guidelines.",
    },
];

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure
                                as="div"
                                key={faq.question}
                                className="pt-6"
                            >
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel
                                            as="dd"
                                            className="mt-2 pr-12"
                                        >
                                            <p className="text-base leading-7 text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
