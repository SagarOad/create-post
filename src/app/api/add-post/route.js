import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";

export async function POST(request){
    const res  = await request.json()
    const {title, content} = res;
    console.log({res})

    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {create: {
                name: 'Sagar'
            }}
        }
    })
        
    return NextResponse.json({result})
}