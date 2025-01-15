"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {UserProfile} from "@/app/components/navbar/user-profile";

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [session, setSession] = useState(false);
    const LoginLogoutButton = () => {
        if (!session) {
            return <Button className="rounded bg-blue-600 hover:bg-gray-700" onClick={() => setSession(true)}>
                Login
            </Button>
        }
        return (
            <UserProfile userName={"Amit"} userEmail={"Maindola"}/>
        );
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/public" className="flex items-center space-x-2">
                    <Image src="/org/navbar.webp" alt="Adwait Investments" width={90} height={50}/>
                    <h1 className="text-2xl font-bold text-blue-600">Adwait Investments</h1>
                </Link>
                <p className="text-lg italic text-gray-500 hidden md:block sm:flex">Investments Simplified</p>
                <nav className="space-x-6 flex">
                    {/*<Link href="/trading" className="text-gray-700 hover:text-blue-500">*/}
                    {/*    Trading*/}
                    {/*</Link>*/}
                    {/*<Link href="/investment" className="text-gray-700 hover:text-blue-500">*/}
                    {/*    Investment*/}
                    {/*</Link>*/}
                    <Button onClick={toggleTheme}
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                    {LoginLogoutButton()}
                </nav>
            </div>
        </header>
    );
}
