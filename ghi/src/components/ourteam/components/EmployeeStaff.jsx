import Modal from "./Modal";
import { useState } from "react";

import brandonPic from "../../../assets/employee-images/brandon-vietti-min.jpg";
import brandonPicLarge from "../../../assets/employee-images/brandon-vietti-min.jpg";

import hamonPic from "../../../assets/employee-images/hamon-burkhardt.png";

import fletcherPic from "../../../assets/employee-images/fletcher-liu-min-min.jpg";
import fletcherPicLarge from "../../../assets/employee-images/fletcher-liu-min.jpg";

import michaelMPic from "../../../assets/employee-images/michael-maxtromarino-min-min.jpg";
import michaelMPicLarge from "../../../assets/employee-images/michael-maxtromarino-min.jpg";

import michaelPic from "../../../assets/employee-images/MichaelCarr-min-min.jpg";
import michaelPicLarge from "../../../assets/employee-images/MichaelCarr-min.jpg";

import davidPic from "../../../assets/employee-images/david-milchan-min-min.jpg";
import davidPicLarge from "../../../assets/employee-images/david-milchan-min.jpg";

import seanPic from "../../../assets/employee-images/sean-odell.png";

import danielPic from "../../../assets/employee-images/daniel-rumfelt-min.jpg";
import danielPicLarge from "../../../assets/employee-images/daniel-rumfelt-min.jpg";

import spencerPic from "../../../assets/employee-images/spencer-lee-min-min.jpg";
import spencerPicLarge from "../../../assets/employee-images/spencer-lee-min.jpg";

import frankPic from "../../../assets/employee-images/frank-stallone.png";

import taylorPic from "../../../assets/employee-images/taylor-banks-min-min.jpg";
import taylorPicLarge from "../../../assets/employee-images/taylor-banks-min.jpg";

import treyPic from "../../../assets/employee-images/trey-steinberger-min-min.jpg";
import treyPicLarge from "../../../assets/employee-images/trey-steinberger-min.jpg";

import vladPic from "../../../assets/employee-images/vladimir-victor-min-min.jpg";
import vladPicLarge from "../../../assets/employee-images/vladimir-victor-min.jpg";

import wyattPic from "../../../assets/employee-images/wyatt-hoke-min-min.jpg";
import wyattPicLarge from "../../../assets/employee-images/wyatt-hoke-min.jpg";

import josephPic from "../../../assets/employee-images/joseph-zaino-min-min.jpg";
import josephPicLarge from "../../../assets/employee-images/joseph-zaino-min.jpg";

import diegoSenaPic from "../../../assets/employee-images/DiegoSena0017-min-min.jpg";
import diegoSenaPicLarge from "../../../assets/employee-images/DiegoSena0017-min.jpg";

import keyanHasseliPic from "../../../assets/employee-images/KeyanHasseli-min-min.jpg";
import keyanHasseliPicLarge from "../../../assets/employee-images/KeyanHasseli-min.jpg";

import nickSammanPic from "../../../assets/employee-images/NickSamman-min-min.jpg";
import nickSammanPicLarge from "../../../assets/employee-images/NickSamman-min.jpg";

import reyLavanderaPic from "../../../assets/employee-images/ReyLavandera-min-min.jpg";
import reyLavanderaPicLarge from "../../../assets/employee-images/ReyLavandera-min.jpg";

const people = [
    {
        name: "Michael Reed Carr",
        position: "CEO",
        role: "W233207",
        phone: "954-641-2018",
        email: "MIKE@PALMPTS.COM",
        imageUrl: michaelPic,
        imageUrlLarge: michaelPicLarge,
        bio: "Mike is the proud owner of Palm Partners and has dedicated over ten years to the property claims industry. He's handled significant losses, including high-value properties and commercial claims. Mike has also grown other public adjusting firms throughout his career, taking them from just two adjusters to over 25 before starting PALM Partners. Over the years, Mike has built strong relationships with insurance companies. His name is well known, and this reputation often makes the claim process smoother due to his long-standing experience in the industry.",
    },
    {
        name: "Wyatt Hoke",
        position: "Vice President",
        role: "W376889",
        phone: "954-641-2018",
        email: "WYATT@PALMPTS.COM",
        imageUrl: wyattPic,
        imageUrlLarge: wyattPicLarge,
        bio: "Wyatt is a seasoned state Public Adjuster, bringing over seven years of industry experience, specializing in managing some of the most extensive claims in South Florida. A Finance graduate from FAU, he has adeptly represented and adjusted many residential and commercial claims, focusing on delivering outstanding results for every client. Wyatt is deeply committed to alleviating his clients' burden in trying times, exploring every viable avenue of recovery to ensure maximum compensation, and allowing his clients the peace of mind to concentrate on rebuilding and progressing. His dedication and unparalleled drive to advocate for his clients set him apart, exemplifying a relentless pursuit of their well-being and satisfaction.",
    },
    {
        name: "Diego Sena",
        role: "G084909",
        phone: "954-641-2018",
        email: "DIEGO@PALMPTS.COM",
        imageUrl: diegoSenaPic,
        imageUrlLarge: diegoSenaPicLarge,
        bio: "",
    },
    {
        name: "Keyan Hasseli",
        role: "",
        phone: "954-641-2018",
        email: "KEYAN@PALMPTS.COM",
        imageUrl: keyanHasseliPic,
        imageUrlLarge: keyanHasseliPicLarge,
        bio: "",
    },
    {
        name: "Nick Samman",
        role: "G056898",
        phone: "954-641-2018",
        email: "NICK@PALMPTS.COM",
        imageUrl: nickSammanPic,
        imageUrlLarge: nickSammanPicLarge,
        bio: "",
    },
    {
        name: "Vladimir Victor",
        role: "W704408",
        phone: "561-245-3888",
        email: "VLAD@PALMPTS.COM",
        imageUrl: vladPic,
        imageUrlLarge: vladPicLarge,
        bio: "Vladimir, one of our lead network adjusters, has consistently showcased his adeptness in handling property claims with remarkable efficiency. He maintains one of our team's highest success rates in property settlements, a testament to his skill and dedication. Vladimir's adept handling extends to a broad spectrum of property damage cases encompassing plumbing, roofing, fire, and flood-related incidents, bringing in-depth expertise to these nuanced areas. His rich background in the insurance sector has seamlessly transitioned into his role as a public adjuster, ensuring that he approaches each claim with a holistic understanding and a client-focused perspective.",
    },
    {
        name: "Trey Steinberger",
        role: "W934171",
        phone: "561-576-6077",
        email: "TREY@PALMPTS.COM",
        imageUrl: treyPic,
        imageUrlLarge: treyPicLarge,
        bio: "Trey comes from a family background of excellence in construction. His father is a renowned high-end builder overseeing over $10 million in projects. Though Trey serves as a firefighter, he also has a natural understanding of the construction industry because he has spent significant time working alongside his family on upscale projects. Trey is an expert in managing the firm's property claims and is known for having one of the swiftest settlement turnaround times. He can handle residential and commercial claims with equal proficiency, making him an invaluable asset to the team. Residential and commercial claims, making him a valuable asset to the team.",
    },
    {
        name: "Reynel Lavandera",
        role: "W890491",
        phone: "561-722-9335",
        email: "REY@PALMPTS.COM",
        imageUrl: reyLavanderaPic,
        imageUrlLarge: reyLavanderaPicLarge,
        bio: "With over five years in the property sector, Rey has gained valuable experience, especially as a lead manager at one of Florida's largest restoration firms. He's tackled everything from major commercial cases to individual residential losses. Rey's plumbing and roof claims expertise has consistently led to successful settlements for his clients. He often manages many claims within our company because clients keep recommending him based on their positive experiences. His standout performance is making him a known figure in the industry.",
    },
    {
        name: "David Milchan",
        role: "W442773",
        phone: "954-415-8227",
        email: "DAVID@PALMPTS.COM",
        imageUrl: davidPic,
        imageUrlLarge: davidPicLarge,
        bio: "David is a South Florida native with a Territory Management and Claims Processing background. He is one of our Senior Adjusters, and 2023 Marks 6 years as a full-time licensed Public Adjuster. David has handled small and large-scale commercial and residential claims across the state, from Pensacola to Miami and everywhere. He holds damages from hurricanes, windstorms, hail, water, mold, floods, and fire claims, with an obsession to do the job right and address all areas of the policy and property. David takes pride in his settlement results and leaving clients satisfied. Insurance companies don't disrespect policyholders when David is around!",
    },
    {
        name: "Taylor Banks",
        role: "W750249",
        phone: "561-789-5179",
        email: "TAYLOR@PALMPTS.COM",
        imageUrl: taylorPic,
        imageUrlLarge: taylorPicLarge,
        bio: "Taylor is one of our most experienced adjusters, settling hundreds of claims resulting in millions of dollars recovered for homeowners. Whether it is a plumbing, fire, or hurricane claim, he has the knowledge to help you get what you deserve. He specializes in commercial claims and significant losses. With a background in Finance and a Bachelor's degree from the University of Central Florida, Taylor Joined our team to help make a difference for our clients.",
    },
    {
        name: "Joseph Zaino",
        role: "W290547",
        phone: "561-401-7941",
        email: "JOEY@PALMPTS.COM",
        imageUrl: josephPic,
        imageUrlLarge: josephPicLarge,
        bio: "Joseph is a seasoned Public Adjuster with over a decade of experience in the insurance industry. Joseph holds a 320 Public Adjusting license and a 220 All Lines license. After graduating with honors in Communications from Florida International University, he leverages his academic background, industry training, and knowledge to analyze policies expertly, ensuring clients receive maximum compensation. Joseph has successfully recovered millions in insurance claims funds, handling various issues, from catastrophic events like hurricanes to common problems like fires and leaks. His commitment involves guiding clients through different claim scenarios, including but not limited to underfunded, denied, and delayed claims. He achieved this by focusing on preserving policy rights for a secure financial recovery in the face of unexpected events.",
    },
    {
        name: "Spencer Lee",
        role: "W599476",
        phone: "954-543-2895",
        email: "SPENCER@PALMPTS.COM",
        imageUrl: spencerPic,
        imageUrlLarge: spencerPicLarge,
        bio: "As a former Director of operations for Castle Group, Spencer brings a unique property management expertise to the commercial claims division. He has a proven track record for assisting community associations and property managers with navigating the complex claims process from start to finish. Spencer values customer service and specializes in managers, the Board of Directors, and residential homeowners with storm, roof, and plumbing damage.",
    },
    {
        name: "Michael Maxtromarino",
        role: "W742350",
        phone: "561-405-8599",
        email: "MIKE.M@PALMPTS.COM",
        imageUrl: michaelMPic,
        imageUrlLarge: michaelMPicLarge,
        bio: "Mike, a seasoned Public Adjuster and UCF graduate, brings a wealth of expertise from his dual roles in managing and settling substantial residential and commercial claims, often exceeding six figures, spanning various damages, including hurricanes, fires, mold, plumbing, and wind. His comprehensive understanding of the property industry and proven track record in securing significant settlements make him a pivotal asset in advocating for our client's rights and ensuring optimal outcomes.",
    },
    {
        name: "Daniel Rumfelt",
        role: "W515147",
        phone: "323-378-8636",
        email: "DANIEL@PALMPTS.COM",
        imageUrl: danielPic,
        imageUrlLarge: danielPicLarge,
        bio: "With his background in home renovations, Daniel has successfully recovered money for new roofs and plumbing claims. As a successful adjuster, he demonstrates a passion for helping others professionally. Daniel is there when you need him the most.",
    },
    {
        name: "Fletcher Liu",
        role: "W847792",
        phone: "954-461-9369",
        email: "FLETCHER@PALMPTS.COM",
        imageUrl: fletcherPic,
        imageUrlLarge: fletcherPicLarge,
        bio: "Fletcher is a distinguished public adjuster with notability specializing in managing claims on the West Coast, particularly those arising from the devastation of Hurricane Ian. With a deep commitment to aiding hundreds of affected homeowners, he has been instrumental in navigating the complexities of insurance claims, ensuring rightful compensation, and assisting in swift recovery. His extensive experience and unwavering advocacy for policyholders make him a trusted asset, providing unparalleled guidance and support to those seeking to rebuild their lives post-disaster.",
    },
    {
        name: "Brandon Vetti",
        role: "W718570",
        phone: "561-441-9742",
        email: "BRANDON@PALMPTS.COM",
        imageUrl: brandonPic,
        imageUrlLarge: brandonPicLarge,
        bio: "Brandon has been our company's experienced state-licensed public adjuster since its inception. He is a graduate of the University of Florida with a background in home renovations/restorations and a lifelong career establishing and building client relationships. Brandon decided to pursue a career in public adjusting after learning about the industry through a good friend. With his forward-thinking, problem-solving ability, knowledge, and commitment to making sure clients are made whole through the stressful claims process, Brandon has been able to help residential and commercial clients recover millions of dollars from insurance companies after their losses.",
    },
    {
        name: "Sean O'Dell",
        role: "W523470",
        phone: "561-289-6330",
        email: "SEAN@PALMPTS.COM",
        // imageUrl: seanPic,
        imageUrlLarge: seanPic,
        bio: "Sean has worked as a public Adjuster since 2017 in both Florida and Texas. He is certified in Xactimate for damage analysis/estimation and holds an FAA license for UAV flight operations to perform complex roof inspections utilizing a drone for high-resolution 4k images. Additionally, he specializes in using Matterport technology to generate highly detailed spatial 3D renders of homes and businesses to provide a precise and accurate estimate of damages. Sean has utilized these tools to achieve the best settlement possible, even during litigation in both State and Federal courts.",
    },
    {
        name: "Frank Stallone",
        role: "W772871",
        phone: "561-722-9335",
        email: "FRANK@PALMPTS.COM",
        // imageUrl: frankPic,
        imageUrlLarge: frankPic,
        bio: "Frank, a Florida native and a distinguished UCF alumnus, leverages his rich background in public adjusting and his family's legacy in the pool construction sector to deliver unparalleled service to our clients. He has adeptly handled and settled some of the largest, often six-figure, residential and commercial claims related to hurricanes, fires, mold, plumbing, and wind. Frank's extensive knowledge and unwavering commitment have established him as a trusted advocate, securing maximal settlements and alleviating the stress of navigating complex claims for our clients.",
    },
    {
        name: "Hamon Burkhardt",
        role: "W104067",
        phone: "561-699-9453",
        email: "HAMON@PALMPTS.COM",
        // imageUrl: hamonPic,
        imageUrlLarge: hamonPic,
        bio: "Florida native Hamon earned his B.S. in Accounting from Florida Atlantic University in 2010, launching his career in finance as an administrative bookkeeper. He diversified his experience in roles at Kaplan University and the mortgage sector before specializing in insurance and acquiring his 2-15 Producer License in 2014, building a successful agency and substantial client base, focusing on market guidance and long-term services in Health, Life, & Annuities. Compelled by witnessing unjust property insurance claims outcomes, he became a certified Public Adjuster in 2020, joining Oakmount to address varied claims effectively across Florida. He is dedicated to ensuring fair representation and comprehensive solutions for homeowners, specializing in overturning denied claims and adept negotiation.",
    },
];

export default function EmployeeStaff() {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const openModal = (person) => {
        setSelectedPerson(person);
    };

    const closeModal = () => {
        setSelectedPerson(null);
    };

    return (
        <div className="bg-white py-12 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl sm:text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        Meet our leadership
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg lg:text-xl">
                        We’re a dynamic group of individuals passionate
                        about what we do and dedicated to delivering the best
                        results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 lg:gap-x-8"
                >
                    {people.map((person) => (
                        <li
                            key={person.name}
                            className="flex flex-col items-center"
                        >
                            <button
                                onClick={() => openModal(person)}
                                className="focus:outline-none"
                            >
                                {person.imageUrl && (
                                    <img
                                        className="w-full max-w-xs flex-none rounded-2xl object-cover"
                                        src={person.imageUrl}
                                        loading="lazy"
                                        alt={person.name}
                                    />
                                )}
                                <div className="mt-4 flex flex-col items-center">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                        {person.name}
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        {person.position}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        {person.role}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        <a
                                            href={`mailto:${person.email}`}
                                            className="hover:text-blue-600"
                                        >
                                            {person.email}
                                        </a>
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        <a
                                            href={`tel:${person.phone}`}
                                            className="hover:text-blue-600"
                                        >
                                            {person.phone}
                                        </a>
                                    </p>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
                <Modal
                    isOpen={!!selectedPerson}
                    closeModal={closeModal}
                    content={
                        selectedPerson && (
                            <div>
                                {/* Responsive image container */}
                                {selectedPerson.imageUrlLarge && (
                                    <div className="mb-4">
                                        <img
                                            src={selectedPerson.imageUrlLarge}
                                            alt={`${selectedPerson.name}`}
                                            className="w-full h-auto object-cover object-center rounded-lg" // Tailwind classes for responsiveness and styling
                                        />
                                    </div>
                                )}

                                <h3 className="text-lg font-semibold leading-tight text-gray-900 mb-2">
                                    {selectedPerson.name}
                                </h3>
                                <p className="text-base leading-relaxed text-gray-600 mb-4">
                                    {selectedPerson.bio}
                                </p>
                                <div className="text-sm font-semibold text-gray-900 mb-1">
                                    <span className="font-normal text-gray-700">
                                        {selectedPerson.role}
                                    </span>
                                </div>
                                <a
                                    href={`mailto:${selectedPerson.email}`}
                                    className="block text-sm font-semibold text-blue-600 hover:text-blue-800 leading-tight tracking-tight mb-1"
                                >
                                    Email:{" "}
                                    <span className="font-normal underline">
                                        {selectedPerson.email}
                                    </span>
                                </a>
                                <a
                                    href={`tel:${selectedPerson.phone}`}
                                    className="block text-sm font-semibold text-blue-600 hover:text-blue-800 leading-tight tracking-tight"
                                >
                                    Phone:{" "}
                                    <span className="font-normal underline">
                                        {selectedPerson.phone}
                                    </span>
                                </a>
                            </div>
                        )
                    }
                />
            </div>
        </div>
    );
}
