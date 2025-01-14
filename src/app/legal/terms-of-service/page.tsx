import React from "react";
import Head from "next/head";
import LastUsedDate from "@/app/components/ui/last-used";

const TermsOfService = () => {
    return (
        <section id={"terms-of-service"} className={"bg-gradient-to-r from-blue-500 to-green-500 text-white py-20"}>
            <Head>
                <title>Terms of Service - Adwait Investments</title>
            </Head>
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
                    <p className="mb-4">
                        These Terms of Service ("Terms") govern your use of the Adwait Investments platform. By
                        accessing or using our website, you agree to these Terms.
                    </p>
                </div>
                <h2 className="text-2xl font-semibold mt-6 mb-4">1. Use of Services</h2>
                <ul className="list-disc pl-6 mb-4 text-left max-w-2xl">
                    <li>You must be an authorized user to access investment recommendations.</li>
                    <li>You agree not to misuse the platform or attempt unauthorized access.</li>
                    <li>The platform is provided "as is" without warranties of any kind.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-4">2. User Accounts</h2>
                <p className="mb-4 max-w-2xl text-left">
                    You are responsible for maintaining the confidentiality of your login credentials and for all
                    activities under your account.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
                <p className="mb-4 max-w-2xl text-left">
                    All content on this platform, including text, graphics, logos, and software, is the property of
                    Adwait Investments and protected by intellectual property laws.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
                <p className="mb-4 max-w-2xl text-left">
                    Adwait Investments is not liable for any losses resulting from the use of our services.
                    Investment decisions are made at your own discretion.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">5. Termination</h2>
                <p className="mb-4 max-w-2xl text-left">
                    We reserve the right to suspend or terminate access to our platform if you violate these Terms.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">6. Governing Law</h2>
                <p className="mb-4 max-w-2xl text-left">
                    These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in
                    courts located in [Your City/State].
                </p>
                <LastUsedDate/>
            </div>
        </section>
    );
};

export default TermsOfService;
