import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

const REVIEWS_PER_PAGE = 3;

const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
      <p>Early this year I experienced a pipe leak in my house that resulted in significant damage and disruption in my household.  I was recommended to Spencer Lee of Palm Partners Public Adjusting.  Mr. Lee was the only good part of this experience.  The insurance company dragged their feet and played hardball throughout this entire ordeal, and I do not know how I would have managed without my public adjuster, Mr. Spencer Lee.  Mr. Lee went toe to toe with the insurance company, kept me informed every step of the way even on weekends, explaining everything in a way that a lay person could understand.  His professionalism, experience, honesty and guidance got me through this trying episode; he was easy to work with.  He has so many contacts in his field, and even after the settlement he did not forget me; he reached out to me providing me with contractors who could repair the damage to my house.  I hope never to be in this situation again, but if I am, I am calling Spencer Lee at Palm Partners Public Adjusting!  Mr. Spencer Lee knows what he is doing, he will work hard for you too!    Highly Recommended.</p>
    `,
        date: "2 months ago",
        datetime: "2021-07-16",
        author: "Sharon Gooden Mais",
        avatarSrc:
            "https://lh3.googleusercontent.com/a-/ALV-UjXdutCt4cR6hWRbtl-ROLkn6TfAU9x0EMGmj-YoW6vGl-8=w60-h60-p-rp-mo-br100",
    },
    {
        id: 2,
        rating: 5,
        content: `
      <p>After a flood in my kitchen I needed help.  Taylor did a great job of keeping me informed and fighting with the insurance to get us a fair settlement.  This was no easy task since our claim happen just before Hurricane Ian and Nicole so I know our claim hit the bottom of the pile at the insurance company. It’s was a team effort Kurt and Shekeria also helped to get us the best settlement.  Would highly recommended Palm Partners, especially Taylor.  Thank you.</p>
    `,
        date: "9 months ago",
        datetime: "2021-07-12",
        author: "Sandra Alapont",
        avatarSrc:
            "https://lh3.googleusercontent.com/a-/ALV-UjXEr53F2DyvW0o-KeXklmbLmHljeNFIKlshSPhn2U32iQ=w60-h60-p-rp-mo-br100",
    },
    {
        id: 3,
        rating: 5,
        content: `
      <p>I am writing this review with immense gratitude and excitement to share my remarkable experience with Palm Partners Public Adjusting and, in particular, the outstanding work of their talented public adjuster, Mr. Spencer Lee.

      When disaster struck our home with devastating water damage, we were not only emotionally shaken but also overwhelmed by the prospect of navigating the complex and daunting process of an insurance claim. In our time of need, we were fortunate to have Spencer Lee by our side as our trusted advocate.

      From our very first interaction with Spencer, he exuded professionalism, empathy, and a genuine commitment to helping us through this challenging time. His expertise in insurance claims was immediately evident, and he took the time to patiently explain every step of the process to us. Spencer's ability to simplify the complex terminology and procedures involved in the claim was incredibly reassuring, making us feel at ease.

      One of the most striking qualities about Spencer is his unwavering dedication to his clients. He meticulously documented the extent of the damage, ensuring that no detail was overlooked. His attention to detail was truly impressive, and it was evident that he was determined to secure the best possible outcome for us...</p>
    `,
        date: "3 months ago",
        datetime: "2021-07-12",
        author: "Zach Mangones",
        avatarSrc:
            "https://lh3.googleusercontent.com/a-/ALV-UjXtlSCYC2WcvGvQGLY5u8_2fRnwSkVjLOAPmNrs5A4qGg=w60-h60-p-rp-mo-br100",
    },
    {
        id: 4,
        rating: 5,
        content: `
      <p>After getting an unsatisfactory response from my homeowners insurance, we didn't know where to turn. A friend recommended Palm Partners Public Adjusters and Spencer Lee in particular. We contacted him and you meet very few young men in this world with the integrity of Spencer.  He fought for us for 5 months and finally got us a settlement from the insurance company. With his professionalism and caring he made a very bad situation bearable. I would highly recommend to anyone needing a public adjuster to contact Spencer. You will not be disappointed! Thank you Spencer!!</p>
    `,
        date: "5 months ago",
        datetime: "2021-07-12",
        author: "Richard Hunt",
        avatarSrc:
            "https://lh3.googleusercontent.com/a-/ALV-UjX4QPsivT5VtCCc7FbBUfE8aj2_GcCyCaNMyw2b926ue6M=w60-h60-p-rp-mo-br100",
    },
    {
        id: 5,
        rating: 5,
        content: `
      <p>I’ve always been weary making an insurance claim knowing the payout is usually dragged out and thinking the premium will increase afterwards, however earlier this year when I discovered a bathroom water leak that spread into my master bedroom and to the patio beneath it, the damage was too extensive to try and fix on my own. A friend suggested using Oakmont Public Adjusting, more specifically recommended Spencer Lee, and it turned out to be the best thing for these circumstances. Even with the workload of claims from the fallout of hurricane Ian, Spencer and his associates were prompt, knowledgeable, efficient, and pleasant throughout the entire process of filing the claim and working with the insurance company to obtain me compensation swiftly. Not only did he obtain a reasonable payout, but exceeded my expectations and got me enough to restore the damages the right way! I will definitely be recommending Spencer Lee and OPA to friends and family in the future!</p>
    `,
        date: "4 months ago",
        datetime: "2021-07-12",
        author: "Badal Patel",
        avatarSrc:
            "https://lh3.googleusercontent.com/a/ACg8ocIT-2usrA97Sg0uS757-rcSdX8q1VtkZsZ2X6vHRtvYVg=w60-h60-p-rp-mo-br100",
    },
    {
        id: 6,
        rating: 5,
        content: `
      <p>I was anxious about dealing with the insurance company after a pipe burst in our residence. However, a friend suggested Oakmont Public Adjusting, and it turned out to be the finest choice! Their adjusters were prompt, courteous, and efficient throughout the entire process of filing a claim for residential property insurance. They meticulously recorded every detail, ensuring that nothing was neglected. We received the compensation we deserved without unnecessary delays or tension due to their expertise. I wholeheartedly endorse Oakmont Public Adjusting for any assistance with property damage claims!</p>
    `,
        date: "5 months ago",
        datetime: "2021-07-12",
        author: "Richard Fifield",
        avatarSrc:
            "https://lh3.googleusercontent.com/a/ACg8ocK2m3Z9zTat0e_1Ks1UdidTxpBMljbHhEe-RiaEMEZm=w60-h60-p-rp-mo-br100",
    },
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
        const intervalId = setInterval(goToNextPage, 15000); // Change every 6 seconds
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
