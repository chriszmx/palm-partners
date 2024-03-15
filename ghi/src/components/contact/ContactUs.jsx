import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f4f8;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            font-size: 22px;
            color: #4A90E2;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .content {
            line-height: 1.6;
        }
        .signature {
            margin-top: 20px;
            font-style: italic;
            color: #888;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #aaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">New Message from Palm Partners Contact Form 🎉</div>
        <div class="content">
            <strong>Name:</strong> ${formData.firstName} ${formData.lastName}<br/>
            <strong>Message:</strong> ${formData.message}<br/>
            <strong>Phone:</strong> ${formData.phoneNumber}<br/>
            <strong>Email:</strong> ${formData.email}<br/>
        </div>
        <div class="signature">
            - Palm Partners Team
        </div>
        <div class="footer">
            Brought to you by Palm Partners' secret weapon: your favorite developer (who might just be a wizard in disguise). 🧙‍♂️✨
        </div>
    </div>
</body>
</html>
`;

            await addDoc(collection(db, "mail"), {
                to: ["mike@palmpts.com"],
                message: {
                    subject: "New Message from Palm Partners Contact Form",
                    text: `Name: ${formData.firstName} ${formData.lastName}, Message: ${formData.message}, Phone: ${formData.phoneNumber}, Email: ${formData.email}`,
                    html: htmlContent,
                },
            });

            toast.success(
                "Message successfully submitted! We will get back to you as soon as possible."
            );
            console.log("Document successfully written!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                message: "",
            });
        } catch (error) {
            toast.error("Error submitting message. Please try again later.");
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="relative isolate bg-white">
            <Helmet>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Palm Partners",
                            "alternateName": "PalmPTS",
                            "url": "https://palmpts.com/",
                            "logo": "https://palmpts.com/assets/Palm-Partners-transparent-cropped-rsDK4GZe.png",
                        }
                        `}
                </script>
            </Helmet>
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        x="100%"
                                        y={-1}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M130 200V.5M.5 .5H200"
                                            fill="none"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="white"
                                />
                                <svg
                                    x="100%"
                                    y={-1}
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-470.5 0h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Get in touch
                        </h2>
                        <p className="mt-6 text-md leading-8 text-gray-600">
                            At Palm Partners, we're dedicated to helping you
                            navigate through the complexities of insurance
                            claims. Whether you've suffered from property damage
                            due to storms, fire, water, or other unforeseen
                            events, our experienced team is here to advocate for
                            your best interests.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    6451 N Federal Highway
                                    <br />
                                    Suite 1202
                                    <br />
                                    Fort Lauderdale, FL 33308
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        className="hover:text-gray-900"
                                        href="tel:+1 (954) 641-2018"
                                    >
                                        +1 (954) 641-2018
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        className="hover:text-gray-900"
                                        href="mailto:admin@palmpts.com"
                                    >
                                        ADMIN@PALMPTS.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <form
                    action="#"
                    method="POST"
                    className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                >
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        autoComplete="given-name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        autoComplete="family-name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phone-number"
                                        autoComplete="tel"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        // defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
