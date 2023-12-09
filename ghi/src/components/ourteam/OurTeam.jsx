const people = [
    {
        name: "Michael Reed Carr",
        role: "W233207",
        phone: "561-271-0399",
        email: "MIKE@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "",
    },
    {
        name: "Wyatt Hoke",
        role: "W376889",
        phone: "561-699-5490",
        email: "WYATT@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "David Milchan",
        role: "W442773",
        phone: "954-415-8227",
        email: "DAVID@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Taylor Banks",
        role: "W750249",
        phone: "561-789-5179",
        email: "TAYLOR@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Joseph Zanio",
        role: "W290547",
        phone: "561-401-7941",
        email: "JOEY@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Brandon Vetti",
        role: "W718570",
        phone: "561-441-9742",
        email: "BRANDON@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Spencer Lee",
        role: "W599476",
        phone: "954-543-2895",
        email: "SPENCER@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
    },
    {
        name: "Sean O'Dell",
        role: "W523470",
        phone: "561-289-6330",
        email: "SEAN@PALMPTS.COM",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "...",
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