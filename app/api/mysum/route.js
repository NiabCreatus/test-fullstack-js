import { NextResponse } from "next/server";

export async function POST(req){
    const body = await req.json();

    // TODO: Code here

    return NextResponse.json({
        success:true,
        data:{
            a:1,
            b:1,
            sum:2
        }
    })
}