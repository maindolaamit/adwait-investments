import Image from "next/image";

const footerContent = {
    companyName: "Adwait Investments",
    contactEmail: "support@adwaitinvestments.com",
    socialLinks: {
        twitter: "https://twitter.com/adwaitinvest",
        instagram: "https://instagram.com/adwait_investments",
        youtube: "https://youtube.com/adwaitinvestments"

    },
    legalLinks: [
        {name: "Privacy Policy", href: "/legal/privacy-policy"},
        {name: "Terms of Service", href: "/legal/terms-of-service"}
    ]
}
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center space-y-4">
                <p>&copy; 2024 {footerContent.companyName}. All rights reserved.</p>
                <nav className="space-x-6">
                    {footerContent.legalLinks.map((link, index) => (
                        <a key={`footer-link-${index}`} href={link.href} target="_blank" rel="noopener noreferrer"
                           className="hover:underline">{link.name}</a>
                    ))}
                </nav>
                {/*<div className="flex justify-around space-x-4">*/}
                {/*    /!* Social Media Icons *!/*/}
                {/*    {Object.entries(footerContent.socialLinks).map(([name, href], index) => (*/}
                {/*        <Image key={`footer-media-${index}`} src={`/icons/${name}.svg`} alt={name} width={40} height={40}*/}
                {/*               className="rounded"/>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div>
                    Built with ❤️ in the beautiful city of Kotdwara, India.
                </div>
            </div>
        </footer>
    );
}
