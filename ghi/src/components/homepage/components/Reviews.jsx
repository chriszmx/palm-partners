import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

const REVIEWS_PER_PAGE = 3;

const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
        date: "July 16, 2021",
        datetime: "2021-07-16",
        author: "Emily Selman",
        avatarSrc:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
        id: 2,
        rating: 5,
        content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        author: "Hector Gibbons",
        avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
        id: 3,
        rating: 5,
        content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
        date: "July 16, 2021",
        datetime: "2021-07-16",
        author: "Emily Selman",
        avatarSrc:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
        id: 4,
        rating: 5,
        content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        author: "Hector Gibbons",
        avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
        id: 5,
        rating: 5,
        content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
        date: "July 16, 2021",
        datetime: "2021-07-16",
        author: "Emily Selman",
        avatarSrc:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
        id: 6,
        rating: 4,
        content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        author: "Hector Gibbons",
        avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
    // State to keep track of the current page index
    const [currentPage, setCurrentPage] = useState(0);
    // Calculate the total number of pages
    const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

    // Function to go to the next page, wrapping around if necessary
    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    // Effect to change pages every few seconds
    useEffect(() => {
        const intervalId = setInterval(goToNextPage, 6000); // Change every 6 seconds
        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    // Calculate the slice of reviews to display
    const currentReviews = reviews.slice(
        currentPage * REVIEWS_PER_PAGE,
        (currentPage + 1) * REVIEWS_PER_PAGE
    );
    return (
        <div className="bg-white mb-20">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-4">
                    Customer Reviews
                </h2>

                <div className="-my-10 p-4 sm:ml-20 sm:mr-20">
                    {currentReviews.map((review, reviewIdx) => (
                        <div
                            key={review.id}
                            className="flex space-x-4 text-sm text-gray-500"
                        >
                            <div className="flex-none py-10">
                                <img
                                    src={review.avatarSrc}
                                    alt=""
                                    className="h-10 w-10 rounded-full bg-gray-100"
                                />
                            </div>
                            <div
                                className={classNames(
                                    reviewIdx === 0
                                        ? ""
                                        : "border-t border-gray-200",
                                    "flex-1 py-10"
                                )}
                            >
                                <h3 className="font-medium text-gray-900">
                                    {review.author}
                                </h3>
                                <p>
                                    <time dateTime={review.datetime}>
                                        {review.date}
                                    </time>
                                </p>

                                <div className="mt-4 flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                review.rating > rating
                                                    ? "text-yellow-400"
                                                    : "text-gray-300",
                                                "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">
                                    {review.rating} out of 5 stars
                                </p>

                                <div
                                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                                    dangerouslySetInnerHTML={{
                                        __html: review.content,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
