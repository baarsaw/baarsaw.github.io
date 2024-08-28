const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const router = express.Router();

// Multer setup for handling file uploads
const upload = multer();

// Load environment variables from .env file
const { EMAIL_USER, EMAIL_PASS } = process.env;

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Handle POST requests to the contact route
router.post('/', upload.single('attachment'), (req, res) => {
    const { name, jobTitle, company, message } = req.body;
    const attachment = req.file;

    const mailOptions = {
        from: EMAIL_USER,
        to: 'sawyer.projects.acct@gmail.com', // Your email address
        subject: 'New Contact Form Submission',
        text: `You have received a new message from ${name}.\n\nJob Title: ${jobTitle}\nCompany: ${company}\n\nMessage:\n${message}`,
        attachments: attachment
            ? [
                  {
                      filename: attachment.originalname,
                      content: attachment.buffer,
                  },
              ]
            : [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to send email.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully!' });
        }
    });
});

module.exports = router;
