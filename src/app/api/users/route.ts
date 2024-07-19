import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
    const data = await req.json()
    const newuser = await prisma.user.create({
        data: {
            email: data?.email,
            name: data?.name
        }
    })
    return NextResponse.json({
        data: newuser,
        message: "user created successfully"
    })
}