import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export  async function GET(req:Request, res:NextResponse){
    const client = await clientPromise;
    const db = client.db("test");

    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')


    try {
        const blog = await db.collection("documents").findOne({slug:slug},)
        return NextResponse.json({success:true, blog:blog})
    } catch (error:any) {
        return NextResponse.json({success:false, error:error.message})
    }
}