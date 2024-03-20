import React, { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderClaimForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        address: "",
        claimNumber: "",
        email: "",
        descriptionOfLoss: "",
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
            // Construct the HTML content for the email
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
        <div class="header">New Claim Submission 📝</div>
        <div class="content">
            <strong>Name:</strong> ${formData.name}<br/>
            <strong>Phone Number:</strong> ${formData.phoneNumber}<br/>
            <strong>Address:</strong> ${formData.address}<br/>
            <strong>Claim Number:</strong> ${formData.claimNumber}<br/>
            <strong>Email:</strong> ${formData.email}<br/>
            <strong>Description of Loss:</strong> ${formData.descriptionOfLoss}<br/>
        </div>
        <div class="signature">
            - The Claim Processing Team
        </div>
    </div>
</body>
</html>
`;

            await addDoc(collection(db, "mail"), {
                to: ["mike@palmpts.com"],
                message: {
                    subject: "New Claim Submission",
                    html: htmlContent,
                },
            });

            toast.success(
                "Claim successfully submitted! We will process it as soon as possible."
            );
            // Reset the form
            setFormData({
                name: "",
                phoneNumber: "",
                address: "",
                claimNumber: "",
                email: "",
                descriptionOfLoss: "",
            });
        } catch (error) {
            toast.error("Error submitting claim. Please try again.");
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white/60 p-6 lg:p-8 shadow-md rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-1 lg:space-y-6">
                <h2 className="text-lg lg:text-2xl font-semibold text-gray-800">
                    Need help with a claim?
                </h2>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-sm font-bold text-gray-800">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 lg:p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-800">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 lg:p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/20"
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-800">
                            Address:
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 lg:p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-800">
                            Claim Number:
                        </label>
                        <input
                            type="text"
                            name="claimNumber"
                            value={formData.claimNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 lg:p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/20"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-800">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 lg:p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/20"
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-800">
                            Description of Loss:
                        </label>
                        <textarea
                            name="descriptionOfLoss"
                            value={formData.descriptionOfLoss}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 lg:p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/20"
                            rows="1"
                            required
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full md:w-auto px-3 lg:px-6 py-1 lg:py-3 bg-blue-600/70 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit Claim
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default HeaderClaimForm;
