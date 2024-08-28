const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const { EMAIL_USER, EMAIL_PASS } = process.env;

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Function to send email
const sendMail = (to, subject, text, attachments = []) => {
    const mailOptions = {
        from: EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
        attachments: attachments,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
                reject(error);
            } else {
                console.log('Email sent:', info.response);
                resolve(info.response);
            }
        });
    });
};

module.exports = sendMail;
