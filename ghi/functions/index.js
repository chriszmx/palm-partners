/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure your email and SMTP credentials
const mailTransport = nodemailer.createTransport({
    service: "gmail", // For testing; switch to a more robust service for production
    auth: {
        user: "c.r.zambito@gmail.com",
        pass: "your-email-password",
    },
});

// Send email function
exports.sendContactEmail = functions.https.onCall((data, context) => {
    const mailOptions = {
        from: "Your Website <noreply@yourdomain.com>",
        to: "your-receiving-email@example.com",
        subject: `New Contact Form Submission from ${data.name}`,
        text: `You received a new submission from your contact form.\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    return mailTransport
        .sendMail(mailOptions)
        .then(() => {
            return { success: true };
        })
        .catch((error) => {
            console.error("There was an error while sending the email:", error);
            return { success: false };
        });
});
