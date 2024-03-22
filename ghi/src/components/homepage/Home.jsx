import React from "react";
import VideoHeader from "./VideoHeader";
import ChoosePalmPartners from "./components/ChoosePalmPartners";
import PalmPartnersIntro from "./components/PalmPartnersIntro";
import TypesOfClaims from "./components/TypesOfClaims";
import RecoveriesMap from "./components/RecoveriesMap";
import FAQ from "./components/FAQ";
import ContactToday from "./components/ContactToday";
import Reviews from "./components/Reviews";
import ClaimForm from "./components/ClaimForm";
import { Helmet } from "react-helmet";

// import ChatBot from "../chatbot/ChatBot";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Trusted Property Claims Adjusters - Palm Partners</title>
                <meta name="description" content="Protect your rights with Palm Partners. Expert property claims adjusters ensure fair settlements for insurance claims. Get professional help today." />
                <link rel="canonical" href="https://palmpts.com/" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Palm Partners",
                            "image": "https://palmpts.com/assets/Palm-Partners-transparent-cropped-rsDK4GZe.png",
                            "@id": "",
                            "url": "https://palmpts.com/",
                            "telephone": "+1 (954) 641-2018",
                            "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "6451 N Federal Highway Suite 1202",
                            "addressLocality": "Fort Lauderdale",
                            "addressRegion": "FL",
                            "postalCode": "33308",
                            "addressCountry": "US"
                            }
                        }
                        `}
                </script>
                {/* <!-- FAQ Schema --> */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is a public adjuster?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A public adjuster is a licensed professional who represents policyholders in appraising and negotiating insurance claims. Unlike adjusters who work for insurance companies, public adjusters work exclusively for the claimant to help them get the maximum settlement they're entitled to under their policy."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why should I hire a public adjuster?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Hiring a public adjuster can be beneficial because they bring expertise in insurance policies and claim negotiation, which can help ensure that you receive a fair and just settlement. They handle the complex claims process, allowing you to focus on rebuilding and recovering from your loss."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "When should I contact a public adjuster?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "It's best to contact a public adjuster as soon as possible after experiencing property damage or loss. Early involvement can help ensure that your claim is properly documented and filed, which can lead to a more favorable outcome."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What types of claims can a public adjuster help with?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Public adjusters can assist with a wide range of property claims, including damage from hurricanes, floods, fires, theft, vandalism, and other covered perils under residential or commercial insurance policies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How are public adjusters paid?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Public adjusters typically work on a contingency fee basis, meaning they receive a percentage of the settlement amount. This ensures that they are motivated to obtain the best possible outcome for you. The fee structure and percentage are agreed upon before services are rendered."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can a public adjuster reopen a claim?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, if you believe your insurance claim was underpaid or denied unjustly, a public adjuster can review the claim and potentially reopen it to negotiate for a more accurate settlement."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the difference between a public adjuster and an insurance company adjuster?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "An insurance company adjuster works on behalf of the insurance company and may prioritize the company's interests. In contrast, a public adjuster represents your interests and works to ensure you receive fair treatment and compensation for your claim."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What should I do immediately after property damage occurs?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "After ensuring everyone's safety, you should document the damage with photos and videos, take steps to prevent further damage, notify your insurance company of the loss, and consider contacting a public adjuster to discuss your options."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does the claims process take?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The length of the claims process can vary depending on the complexity of the claim, the extent of the damage, and the responsiveness of the insurance company. A public adjuster can help expedite the process by ensuring timely submission of documents and advocating on your behalf."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is a public adjuster licensed and regulated?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, public adjusters in Florida are licensed by the Florida Department of Financial Services and must adhere to strict regulatory standards and ethical guidelines."
                                }
                            }
                            ]
                        }
                        `}
                </script>
            </Helmet>

            {/* <ChatBot /> */}

            <VideoHeader />
            <ChoosePalmPartners />
            <div className="block md:hidden">
                <ClaimForm />
            </div>
            <PalmPartnersIntro />
            <TypesOfClaims />
            <Reviews />
            <RecoveriesMap />
            <FAQ />
            <ContactToday />
        </div>
    );
};

export default Home;
