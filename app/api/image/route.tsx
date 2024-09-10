import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const imageId = searchParams.get("id");

    const path = `./public/uploads/${imageId}`;
    // delete the file from the uploads folder
    await fs.unlink(path);
    revalidatePath("/admin/gallery");
    return NextResponse.json({ status: "success", path });
}

export async function PATCH(request: Request) {}
