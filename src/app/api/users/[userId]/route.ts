import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,
    { params }: { params: { userId: string } }
) {

    const id = +params.userId;
    if (isNaN(id)) return new NextResponse("please provide an integer id", { status: 400 })
    const foundUser = await prisma.user.findFirst({
        where: { id: id }
    })
    if (!foundUser) return new NextResponse("user not found", { status: 400 });
    return NextResponse.json({
        data: foundUser
    })
}