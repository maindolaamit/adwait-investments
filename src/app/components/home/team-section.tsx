import Image from "next/image";
import React from "react";

const teamContent = {
    title: "Meet Our Team",
    teamMembers: [
        {
            name: "Amit Maindola",
            role: "Founder & Chief Investment Strategist",
            expertise: "10+ years in equity markets",
            background: "MBA in Finance, Certified Financial Analyst",
            image: "/org/team/amit.jpg"
        },
        {
            name: "Pritam Negi",
            role: "Senior Market Analyst & Trading Strategist",
            expertise: "Specializes in equity research and market trend analysis",
            background: "MSc. in Economics, 8 years of market research experience",
            image: "/org/team/pritam.jpg"
        },
    ]
}

function TeamSection() {
    return (
        <section id="team" className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-600">{teamContent.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {teamContent.teamMembers.map((member, index) => (
                        <div key={`team-${index}`} className="flex flex-col items-center space-y-4">
                            <Image src={member.image} alt={member.name} width={200} height={200}
                                   className="rounded-full"/>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-lg text-gray-600">{member.role}</p>
                                <p className="text-sm text-gray-500">{member.expertise}</p>
                                <p className="text-sm text-gray-500">{member.background}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection;