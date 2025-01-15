import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/navbar/navbar";
import {AuthProviders} from "@/app/context/authProviders";
import {Toaster} from "@/components/ui/toaster";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Adwait Investments",
    description: "Adwait Investments is a financial services company that provides a wide range of investment solutions to individuals.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProviders>
            <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <Navbar/>
            {children}
            <Footer/>
            <Toaster />
            </body>
            </html>
        </AuthProviders>
    );
}
