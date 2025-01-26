import {NextResponse} from "next/server";
import sendMail from "@/lib/mailer";

type SubscriptionFormData = {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
};


export function GET_MAIL_OPTIONS(formData: SubscriptionFormData, url: string) {
    const {searchParams} = new URL(url);
    const name = searchParams.get('name') || 'Guest';
    const toEmail = formData.email;
    const fromEmail = process.env.ADWAIT_TEAM_EMAIL_ID;
    const subject = `I want to subscribe to your ${formData.serviceType}`;
    const message = `
          <h1>Thank you for contacting us!!</h1>
          <p>Dear ${formData.name},</p>
          <p>We have received your message:</p>
          <p>Thank you for showing interest in our services ${formData.serviceType}. One of our team members will reach out to you shortly.</p>
        `
    return {fromEmail, toEmail, subject, message}
}

export async function POST(request: Request) {
    const formData: SubscriptionFormData = await request.json();

    // Send the email
    try {
        const options = GET_MAIL_OPTIONS(formData, request.url)
        return sendMail(options).then((res) => {
            console.log('Email sent:', res);
            return NextResponse.json(
                {success: true, message: 'Email sent successfully!'}
            );
        }).catch((error) => {
            return NextResponse.json(
                {success: false, error: 'Failed to send email.' + error},
            );
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export async function GET(){
    return NextResponse.json("Hello");
}
