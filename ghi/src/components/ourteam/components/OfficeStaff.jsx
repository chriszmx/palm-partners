const people = [
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

export default function OfficeStaff() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Office Staff
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our office staff is here to help you with any questions
                        you may have.
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
