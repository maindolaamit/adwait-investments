import nodemailer from "nodemailer";

type EmailRequestData = {
    fromEmail: string;
    toEmail: string;
    subject: string;
    message: string;
};

export default async function sendMail(subscriptionFormData: EmailRequestData) {

    console.log('Request body:', subscriptionFormData);
    const {toEmail, fromEmail, subject, message} = subscriptionFormData;

    // Create a transporter object using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email service
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASSWORD, // Your email password or app password
        },
    });

    // Email options
    const mailOptions = {
        from: fromEmail, // Your email address
        to: toEmail, // Send it to the user who submitted the form
        subject: subject, // Subject of the email
        html: message  // Use HTML for formatted emails
    };

    console.log('Sending email:', mailOptions);
    // Send the email
    return await transporter.sendMail(mailOptions);
}