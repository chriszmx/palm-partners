import vevePic from "../../../assets/employee-images/veve-talerand.jpg";
import jemimahPic from "../../../assets/employee-images/jemimah-cruz.jpg";
import marianaPic from "../../../assets/employee-images/mariana-esquival-min.jpg";
import tiannaCornileusPic from "../../../assets/employee-images/TiannaCornileus-min.jpg";

const people = [
    {
        name: "Mariana Esquival",
        role: "Accounting / Front Office",
        phone: "",
        email: "",
        imageUrl:
            marianaPic,
        bio: "",
    },
    {
        name: "Tianna Cornileus",
        role: "Accounting / Front Office",
        phone: "",
        email: "",
        imageUrl:
            tiannaCornileusPic,
        bio: "",
    },
    {
        name: "Veve Talerand",
        role: "Office Manager",
        phone: "",
        email: "",
        imageUrl:
            vevePic,
        bio: "",
    },
    {
        name: "Jemimah Cruz",
        role: "Accounting Manager",
        phone: "",
        email: "",
        imageUrl:
            jemimahPic,
        bio: "",
    },
    {
        name: "Crystal Coakley",
        role: "Claims Specialist",
        phone: "",
        email: "",
        imageUrl:
            "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg",
        bio: "",
    },
];

export default function OfficeStaff() {
    return (
        <div className="bg-white py-12 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl sm:text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        Office Staff
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg lg:text-xl">
                        Our office staff is here to help you with any questions
                        you may have.
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
            </div>
        </div>
    );
}
