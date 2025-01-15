// const options = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//         }),
//         // Add more providers here
//     ],
//     pages: {
//         signIn: '/auth/signin',
//     },
//     callbacks: {
//         // if user is logged in, redirect to home page
//         authorized({request: {nextUrl}, auth}) {
//             const isLoggedIn = !!auth?.user;
//             const {pathname} = nextUrl;
//
//             if(pathname.startsWith('/auth/signin') && isLoggedIn) {
//                 return Response.redirect('/');
//             }
//             return !!auth;
//         },
//         async signIn({user}) {
//             const authorizedUsers = process.env.AUTHORIZED_USERS.split(',');
//             return authorizedUsers.includes(user.email);
//         },
//         async session(session, user) {
//             session.user.id = user.id;
//             return session;
//         },
//     },
//     events: {
//         error: (message) => {
//             console.error("NextAuth error:", message);
//         },
//     },
// };
//
// const handler = async (req: Request) => {
//     const response = await NextAuth(options);
//     return NextResponse.json(response);
// };
//
// export const {GET, POST} = handlers

import { handlers } from "@/auth"
export const { GET, POST } = handlers