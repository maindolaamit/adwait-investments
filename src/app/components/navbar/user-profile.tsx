import React, {useEffect, useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {signOut} from "next-auth/react";
import {LogOut} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

type UserProfileProps = {
    userName: string;
    userEmail: string;
    userAvatar?: string;
}

function logOut() {
    console.log("Signing out");
    signOut().then(r => console.log(r));
}

export function UserProfile({userName, userEmail, userAvatar}: UserProfileProps) {
    const [userDetails, setUserDetails] = useState(null);
    const userAvatarFallback = "AM";

    async function fetchUserDetails() {
        try {
            const response = await fetch(`/api/get-user-data?email=${userEmail}`);
            if (response.ok) {
                const data = await response.json();
                setUserDetails(data.data);
            } else {
                console.error('Error fetching user details:', response.json());
            }
            // const data = readUserDataFromLocalStorage
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    }

    useEffect(() => {
        fetchUserDetails();
    }, [userEmail]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="h-8 w-8 rounded-lg">
                    <Avatar className="">
                        <AvatarImage src={userAvatar} alt={userName}/>
                        <AvatarFallback className="rounded-lg">{userAvatarFallback}</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={userAvatar} alt={userName}/>
                            <AvatarFallback className="rounded-lg">{userAvatarFallback}</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">Hi, {userName}</span>
                            <span className="truncate text-xs">{userEmail}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={() => logOut()}>
                    <LogOut/>Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
