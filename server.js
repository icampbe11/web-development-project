// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Outlook365', // Use the email service provider
    auth: {
        user: process.env.EMAIL_USER, // The email from environment variable
        pass: process.env.EMAIL_PASS // The email password from environment variable
    }
});
