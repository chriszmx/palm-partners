import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import transparentLogoCropped from "../../assets/Palm-Partners-white-transparent-cropped.png";
import "react-toastify/dist/ReactToastify.css";

const SubscribeForm = () => {
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div class="header">Subscription Confirmation 🎉</div>
        <div class="content">
            <strong>Email:</strong> ${formData.email}<br/>
        </div>
        <div class="signature">
            - Palm Partners Subscription Form
        </div>
    </div>
</body>
</html>
`;
            await addDoc(collection(db, "mail"), {
                to: ["mike@palmpts.com"],
                message: {
                    subject: "Subscription Confirmation",
                    html: htmlContent,
                },
            });

            toast.success("You've successfully subscribed!");
            setFormData({
                email: "",
            });
        } catch (error) {
            toast.error("Error during subscription. Please try again.");
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div>
            <a href="/">
                <img
                    className="h-12"
                    src={transparentLogoCropped}
                    alt="Company name"
                />
            </a>
            <p className="mt-4 text-gray-400 text-sm">
                The latest news, articles, and resources, sent to your inbox
                weekly.
            </p>
            {/* Simplified subscription form */}
            <form className="mt-4 flex" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-md border-0 bg-white/10 px-4 py-2 mr-2 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                    required
                />
                <button className="rounded-md bg-indigo-500 px-4 py-2 text-sm text-white">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SubscribeForm;
