import nodemailer from 'nodemailer';
import {NextResponse} from "next/server";

type SubscriptionFormData = {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    // ... other form fields
};

export default async function POST(request: Request) {
    console.log('Request body:', request.body);
    try {
        const formData: SubscriptionFormData = await request.json();

        // Create a transporter object using Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASSWORD, // Your email password or app password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "maindola.amit@gmail.com", // Send to the user who submitted the form
            subject: `I want to subscribe to your ${formData.serviceType}`,
            html: `
          <h1>Thank you for contacting us!!</h1>
          <p>Dear ${formData.name},</p>
          <p>We have received your message:</p>
          <p>Thank you for showing interest in our services ${formData.serviceType}. One of our team members will reach out to you shortly.</p>
        `, // Use HTML for formatted emails
            // Or use text for plain text emails
            // text: `Thank you for your submission!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        };

        console.log('Sending email:', mailOptions);
        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully!' },
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email.' },
        );
    }
}