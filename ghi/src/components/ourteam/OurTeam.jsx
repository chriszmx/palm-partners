const people = [
    {
        name: "Michael Reed Carr",
        role: "W233207",
        phone: "561-271-0399",
        email: "MIKE@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Mike is the proud owner of Palm Partners and has dedicated over 10 years to the property claims industry. He's handled large losses, including high-value properties and commercial claims. Throughout his career, Mike has also grown other public adjusting firms, taking them from just 2 adjusters to over 25 before starting PALM Partners. Over the years, Mike has built strong Relationships with insurance companies. His name is well0known, and this reputation often makes the claim process smoother due to his long-standing experience in the industry.",
    },
    {
        name: "Wyatt Hoke",
        role: "W376889",
        phone: "561-699-5490",
        email: "WYATT@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Wyatt is a seasoned state Public Adjuster, bringing over 7 years of industry experience, specializing in managing some of the largest claims in South Florida. A Finance graduate from FAU, he has adeptly represented and adjusted a myriad of both residential and commercial claims, focusing on delivering outstanding results for every client. Wyatt is deeply committed to alleviating the burden his clients face in trying times, exploring every viable avenue of recovery to ensure maximum compensation. This allows his clients the peace of mind to concentrate on rebuilding and progressing. His dedication and unparalleled drive to advocate on behalf of his clients set him apart in the field, exemplifying a relentless pursuit for their well-being and satisfaction.",
    },
    {
        name: "David Milchan",
        role: "W442773",
        phone: "954-415-8227",
        email: "DAVID@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "David is a South Florida native with a background in Territory Management and Claims Processing. He is one of our Senior Adjusters and 2023 Marks 6 years as a full time licensed Public Adjuster. David has handled small and large scale commercial and residential claims across the state, from Pensacola to Miami and everywhere in between. He handles damages from hurricane, windstorm, hail, water, mold, flood, and fre claims. With an obsession to do the job right and address all areas of the policy and property. David takes pride in his settlement results and leaving clients satisfied. Insurance companies don't disrespect policyholders when David is around!",
    },
    {
        name: "Taylor Banks",
        role: "W750249",
        phone: "561-789-5179",
        email: "TAYLOR@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Taylor is one of our most experienced adjusters with settling hundreds of claims resulting in millions of dollars recovered for homeowners. Whether it is a plumbing, fire, or hurricane claim. He has the knowledge to help you get what you deserve. He specializes in commercial claims and large losses. With a background in Finance and a Bachelor's degree from the University of Central Florida, Taylor Joined our team to help make a difference for our clients.",
    },
    {
        name: "Joseph Zanio",
        role: "W290547",
        phone: "561-401-7941",
        email: "JOEY@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "A seasoned Public Adjuster with over a decade of experience in the insurance industry. Joseph holds both a 320 Public Adjusting license and a 220 All Lines licenses. Graduating with honors in Communications from Florida International University, he leverages his academic background, industry training, and knowledge to expertly analyze policies, ensuring clients receive maximum compensation. Joseph has successfully recovered millions in insurance claims funds, handling a wide range of issues, from catastrophic events like hurricanes to common problems like fires and leaks. His commitment involves guiding clients through various claim scenarios, including but not limited to underfunded, denied, and delayed claims. This achieved with a focus on preserving policy rights for a secure financial recovery in the face of unexpected events.",
    },
    {
        name: "Brandon Vetti",
        role: "W718570",
        phone: "561-441-9742",
        email: "BRANDON@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Brandon is an experienced state licensed public adjuster who has been with our company since its inception. A graduate from University of Florida, and with a background in home renovations/restorations and a lifelong career of establishing and building relationships with clients. Brandon decided to pursue a career in public adjusting after learning about the industry through a good friend. With his forward thinking, problem solving ability, knowledge, and commitment to making sure clients are made whole through the stressful claims process, Brandon has been able to help residential and commercial clients recover millions of dollars from the insurance companies after their loss.",
    },
    {
        name: "Spencer Lee",
        role: "W599476",
        phone: "954-543-2895",
        email: "SPENCER@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "As a former Director of operations for Castle Group, Spencer brings a unique property management expertise to the commercial claims division. He has a proven track record for assisting community associations and property managers with a navigating the complex claims process from start to finish. Spencer values customer service and specializes in managers, Board of Directors, and residential homeowners with storm, roof, and plumbing damage.",
    },
    {
        name: "Sean O'Dell",
        role: "W523470",
        phone: "561-289-6330",
        email: "SEAN@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Sean has worked as a public Adjuster since 2017 in both Florida and Texas. He is certified in Xactimate for damage analysis/estimation and holds an FAA license for UAV flight operations to perform complex roof inspections utilizing a drone for high resolution 4k images. Additionally, he specializes in using Matterport technology to generate highly detailed spatial 3D renders of homes and businesses to provide a detailed and accurate estimate of damages. Sean has utilized these tools to achieve the best settlement possible even during litigation in both State and Federal courts.",
    },
    {
        name: "Michael Mastramino",
        role: "W742350",
        phone: "561-405-8599",
        email: "MIKE.M@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Mike, a seasoned Public Adjuster and UCF graduate, brings a wealth of expertise from his dual roles in managing and settling substantial residential and commercial claims, often exceeding six figures, spanning various damages including hurricanes, fires, mold, plumbing, and wind. His comprehensive understanding of the property industry has proven track record in securing significant settlements make him a pivotal asset in advocating for our clients rights and ensuring optimal outcomes.",
    },
    {
        name: "Frank Stallone",
        role: "W772871",
        phone: "561-722-9335",
        email: "FRANK@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Frank, a Florida native and a distinguished UCF alumnus, leverages his rich background in public adjusting and his family's legacy in the pool construction sector to deliver unparalleled service to our clients. He has adeptly handled and settled some of the largest, often six-figure, residential and commercial claims related to hurricanes, fires, mold, plumbing, and wind. Frank's extensive knowledge and unwavering commitment have established him as a trusted advocate, securing maximal settlements and alleviating the stress of navigating complex claims for our clients.",
    },
    {
        name: "Daniel Rumfelt",
        role: "W515147",
        phone: "323-378-8636",
        email: "DANIEL@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "With his background in home renovations, Daniel has been extremely successful in recovering money for new roofs, and plumbing claims. As a successful adjuster he demonstrates a passion for helping others with professionalism. Daniel is there when you nee him the most.",
    },
    {
        name: "Hamon Burkhardt",
        role: "W104067",
        phone: "561-699-9453",
        email: "HAMON@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Florida native, Hamon earned his B.S. in Accounting from Florida Atlantic University in 2010, launching his career in finance as an administrative bookkeeper. He diversified his experience in roles at Kaplan University and the mortgage sector before specializing in insurance. Acquiring his 2-15 Producer License in 2014, he build a successful agency and substantial client base, focusing on market guidance and long-term services in Health, Life & Annuities. Compelled by witnessing unjust property insurance claims outcomes, he became a certified Public Adjuster in 2020, joining Oakmount to address varied claims effectively across Florida. Hamon is dedicated to ensuring fair representation and comprehensive solutions for homeowners, specializing in overturning denied claims and adept negotiation.",
    },
    {
        name: "Fletcher Li",
        role: "W847792",
        phone: "954-461-9369",
        email: "FLETCHER@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Fletcher is a distinguished Public Adjuster who has notability specialized in managing claims on the West Coast, particularly those arising from the devastation of Hurricane Ian. With a deep commitment to aiding hundreds of affected homeowners, he has been instrumental in navigating the complexities of insurance claims, ensuring rightful compensation and aiding in swift recovery. His extensive experience and unwavering advocacy for policyholders make him a trusted asset, providing unparalleled guidance and support to those seeking to rebuild their lives post-disaster.",
    },
    {
        name: "Reynel Lavandera",
        role: "W890491",
        phone: "",
        email: "REY@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "With over 5 years in the property sector, Rey has gained valuable experience, especially as a lead manager at one of Florida's largest restoration firms. He's tackled everything from major commercial cases to individual residential loses. Rey's expertise in plumbing and roof claims has consistently led to successful settlements for his clients. Within our company, he manages a large number of claims, often because clients keep recommending him based on their positive experiences. His standout performance is making him a known figure in ths industry.",
    },
    {
        name: "Vladimir Victor",
        role: "W704408",
        phone: "561-245-3888",
        email: "VLAD@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Vladimir, one of our lead network adjusters, has consistently showcased his adeptness in handling property claims with remarkable efficiency. He maintains one of the highest success rates in property settlements within our team, testament to his skill and dedication. Vladimir's adept handling extends to a broad spectrum of property damage cases encompassing plumbing, roofing, fire, and flood-related incidents bringing in-dept expertise to these nuanced areas. His rich background in the insurance sector has seamlessly transitioned into his role as a public adjuster, ensuring that he approaches each claim with a holistic understanding and a client-focused perspective.",
    },
    {
        name: "Trey Steinberger",
        role: "W934171",
        phone: "561-576-6077",
        email: "TREY@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Trey comes from a lineage of excellence in construction, with his father being a renowned high-end builder overseeing projects valued at over $10 million. While Trey proudly serves as a firefighter, he also possesses an innate understanding of the construction industry, having spent significant time working alongside his family on upscale projects. His expertise extends to managing property claims for the firm, where he boasts one of the swiftest settlement turnaround times. Trey's proficiency encompasses both residential and commercial claims, making him an invaluable asset to the team.",
    },
    {
        name: "Howard Sanders",
        role: "W661991",
        phone: "561-208-5200",
        email: "HOWARD@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Howard Sanders is a Florida native who grew up in South Florida and has worked and lived in Tallahassee, Orlando, and South Florida. Howard graduating from UCF with a bachelors degree and worked as an independent insurance adjuster for 2+ years before switching to be a public adjuster assisting homeowners with their residential property claims.",
    },
    {
        name: "Veve Talerand",
        role: "Office Manager",
        phone: "",
        email: "",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "",
    },
    {
        name: "Jemimah Cruz",
        role: "Accounting Manager",
        phone: "",
        email: "",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "",
    },
    {
        name: "Mariana Esquival",
        role: "Accounting / Front Office",
        phone: "",
        email: "",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "",
    },
    {
        name: "Crystal Coakley",
        role: "Claims Specialist",
        phone: "",
        email: "",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "",
    },
    {
        name: "Shekeria Cook",
        role: "Claims Specialist",
        phone: "",
        email: "",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "",
    },
];

export default function OurTeam() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Meet our leadership
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate
                        about what we do and dedicated to delivering the best
                        results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person) => (
                        <li
                            key={person.name}
                            className="flex flex-col gap-6"
                        >
                            <img
                                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                                src={person.imageUrl}
                                loading="lazy"
                                alt={person.name}
                            />
                            <div className="flex-auto">
                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                    {person.name}
                                </h3>
                                <p className="text-base leading-7 text-gray-600">
                                    {person.role}
                                </p>
                                <p className="text-base leading-7 text-gray-600">
                                    <a
                                        href={`mailto:${person.email}`}
                                        className="hover:text-blue-600"
                                    >
                                        {person.email}
                                    </a>
                                </p>
                                <p className="text-base leading-7 text-gray-600">
                                    <a
                                        href={`tel:${person.phone}`}
                                        className="hover:text-blue-600"
                                    >
                                        {person.phone}
                                    </a>
                                </p>

                                <p className="mt-6 text-base leading-7 text-gray-600 text-justify">
                                    {person.bio}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
