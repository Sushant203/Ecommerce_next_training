import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions:NextAuthOptions={
        providers:[
            CredentialsProvider({
                name: 'Credentials',
                credentials:{
                    email:{
                        label:"Email",
                        placeholder:"enter your email",
                        type:"email",
                    },
                    password:{
                        label:"Password",
                        type:"password",
                    }
                },
                async authorize(credentials) {
                    const user=[{
                        id:"1",
                        email:"clashofgames229@gmail.com",
                        password:"123456788"
                    }]
                    const founduser=user.find(user=>user.email === credentials?.email)

                    if(!founduser) return null;

                    const isPasswordMatch=  user.find(user=> user.password === credentials?.password)

                    if(!isPasswordMatch)return null;

                    return founduser
                    
                },
            })
        ]
}