import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: "Email",
                    placeholder: "Enter your email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            async authorize(credentials) {
                const users = [
                    {
                        id: "1",
                        email: "clashofgames229@gmail.com",
                        password: "123456788"
                    }
                ];

                const foundUser = users.find(user => user.email === credentials?.email);

                if (!foundUser) return null;

                const isPasswordMatch = foundUser.password === credentials?.password;

                if (!isPasswordMatch) return null;

                return foundUser;
            },
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut:"/auth/signout"
    },
};
