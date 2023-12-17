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
        bio: "...",
    },
    {
        name: "Frank Stallone",
        role: "W772871",
        phone: "561-722-9335",
        email: "FRANK@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Daniel Rumfelt",
        role: "W515147",
        phone: "323-378-8636",
        email: "DANIEL@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Hamon Burkhardt",
        role: "W104067",
        phone: "561-699-9453",
        email: "HAMON@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Fletcher Li",
        role: "W847792",
        phone: "954-461-9369",
        email: "FLETCHER@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Reynel Lavandera",
        role: "W890491",
        phone: "",
        email: "REY@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Vladimir Victor",
        role: "W704408",
        phone: "561-245-3888",
        email: "VLAD@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Trey Steinberger",
        role: "W934171",
        phone: "561-576-6077",
        email: "TREY@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Howard Sanders",
        role: "W661991",
        phone: "561-208-5200",
        email: "HOWARD@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
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
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person) => (
                        <li
                            key={person.name}
                            className="flex flex-col gap-6 lg:flex-row"
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

                                <p className="mt-6 text-base leading-7 text-gray-600">
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
