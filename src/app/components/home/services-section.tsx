"use client";
import React from "react";
import {SubscriptionModal} from "@/app/components/home/subscriptionModal";

const servicesContent = {
    title: "Our Comprehensive Investment Services",
    services: [
        {
            title: "Trading Recommendations",
            description: "Receive buy and sell report for equity trading and market opportunities.",
            about: "Suitable for traders, targeting short-term gains. Ideal for candidates with Portfolio size of 1L+",
            price: "INR 12000 (GST Included)",
            subscription: "1 Year Subscription",
            icon: "📈",
            backgroundImage: "url('/org/trading-recommendations.jpg')",
        },
        {
            title: "Investment Research",
            description: "Receive data-driven buy and sell research reports for equity investments.",
            about: "Suitable for investors, targeting long-term growth. Ideal for candidates with Portfolio size of 5L+",
            price: "INR 15000 (GST Included)",
            subscription: "1 Year Subscription",
            icon: "📊",
            backgroundImage: "url('/org/investment-research.jpg')",
        },
        {
            title: "Trading & Investment",
            description: "Combines trading and investment research for a comprehensive approach.",
            about: "Suitable for those looking for both short-term gains and long-term growth. Ideal for candidates with Portfolio size of 10L+",
            price: "INR 25000 (GST Included)",
            subscription: "1 Year Subscription",
            icon: "📈📊",
            backgroundImage: "url('/org/portfolio-analysis.jpg')",
        }
    ],
    addOn: {
        title: "Portfolio Analysis & Balancing",
        description: "Get in-depth analysis of your current portfolio, identifying strengths, potential risks, and optimization strategies.",
        about: "Subscribers can avail this service at no additional cost with any of our offered services.;We will connect with our subscribers on monthly basis to review your portfolio.",
        backgroundImage: "url('/org/portfolio-analysis.jpg')"
    }
};

const ServicesSection = () => {
    return (
        <section id="services" className="bg-gray-100 bg-gradient-to-r from-blue-500 to-green-500 py-20 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <hr className="border-gray-300 my-8"/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesContent.services.map((service, index) => (
                        <div key={`service-${index}`} className="relative bg-gray-700 shadow-lg rounded-lg p-6"
                             style={{
                                 backgroundImage: service.backgroundImage,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center'
                             }}>
                            <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm rounded-lg"></div>
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-blue-600
                            text-white rounded-full mb-1">
                                {service.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                <p>{service.description}</p>
                                <br/>
                                <p className="font-bold mt-2">{service.price}</p>
                                <p className="text-sm text-gray-300">{service.subscription}</p>
                                <br/>
                                <hr className="border-gray-300 mb-3"/>
                                <p className="text-sm text-gray-300 mt-2 min-h-[50px]">{service.about}</p>
                                <SubscriptionModal/>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="border-gray-100 my-8"/>
                <h2 className="text-xl font-bold mb-8">Additional Services, comes with Subscription</h2>
                <div className="relative bg-gray-700 shadow-lg rounded-lg p-6 mx-auto max-w-md"
                     style={{
                         backgroundImage: servicesContent.addOn.backgroundImage,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                    <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm rounded-lg"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-semibold mb-4">{servicesContent.addOn.title}</h3>
                        <p>{servicesContent.addOn.description}</p>
                        <br/>
                        {servicesContent.addOn.about.split(';').map((paragraph, i) => (
                            <p key={i} className="text-sm text-gray-300 mt-2 min-h-[50px]">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;