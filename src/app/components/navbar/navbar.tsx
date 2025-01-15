"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {UserProfile} from "@/app/components/navbar/user-profile";
import ThemeToggle from "@/app/components/ui/theme-toggle";
import {signIn, useSession} from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();
    // console.log(JSON.stringify(session));
    const LoginLogoutButton = () => {
        if (session) {
            const userName = session.user?.name ?? "Test User";
            const userEmail = session.user?.email ?? "test@test.com";
            const userAvatar = session.user?.image ?? "";
            return <UserProfile userName={userName} userEmail={userEmail} userAvatar={userAvatar}/>
        } else {
            return (
                <Button className="rounded bg-blue-600 hover:bg-gray-700" onClick={() => signIn()}>
                    Login
                </Button>
            );
        }
    };


    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/org/navbar.webp" alt="Adwait Investments" width={90} height={50}/>
                    <h1 className="text-2xl font-bold text-blue-600 md:text-xl sm:text-sm">Adwait Investments</h1>
                </Link>
                <p className="text-lg italic text-gray-500 hidden md:block sm:flex">Investments Simplified</p>
                <nav className="space-x-6 flex">
                    {/*<Link href="/trading" className="text-gray-700 hover:text-blue-500">*/}
                    {/*    Trading*/}
                    {/*</Link>*/}
                    {/*<Link href="/investment" className="text-gray-700 hover:text-blue-500">*/}
                    {/*    Investment*/}
                    {/*</Link>*/}
                    <ThemeToggle/>
                    {LoginLogoutButton()}
                </nav>
            </div>
        </header>
    );
}
