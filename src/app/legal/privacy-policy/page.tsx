import React from "react";
import Head from "next/head";
import LastUsedDate from "@/app/components/ui/last-used";

const PrivacyPolicy = () => {
    return (
        <section id={"privacy-policy"} className={"bg-gradient-to-r from-blue-500 to-green-500 text-white py-20"}>
            <Head>
                <title>Privacy Policy - Adwait Investments</title>
            </Head>
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl text-center mb-8 font-bold">Privacy Policy</h1>
                <p className="mb-4">
                    At <strong>Adwait Investments</strong>, we are committed to protecting your privacy. This Privacy
                    Policy outlines how we collect, use, and safeguard your personal information when you use our
                    website and services.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Personal identifiers such as name, email address, and phone number.</li>
                    <li>Login credentials used for authentication via Google.</li>
                    <li>Usage data such as IP address, browser type, and activity on our platform.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>To provide personalized investment recommendations.</li>
                    <li>To improve the functionality and user experience of our platform.</li>
                    <li>To communicate updates, offers, or changes to our services.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Data Sharing</h2>
                <p className="mb-4">
                    We do not sell or share your personal data with third parties except as required by law or to
                    provide services (e.g., Google authentication).
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
                <p className="mb-4">
                    We implement industry-standard encryption and security measures to protect your data from
                    unauthorized access.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, update, or delete your personal information. For any requests, contact
                    us at support@adwaitinvestments.com.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. The latest version will always be available on
                    this page.
                </p>
                <LastUsedDate/>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
