import prisma from "@/prisma/prisma";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
    const {password, email} = await request.json() as {email: string; password: string};

    const user  = await prisma.user.findUnique({
        where:{
            email:email,
        },
    })
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
