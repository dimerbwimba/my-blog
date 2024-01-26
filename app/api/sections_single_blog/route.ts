import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const client = await clientPromise;
    const db = client.db("test");

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id !== null) {
        const _id = new ObjectId(id);

        try {
            const sections = await db.collection("sections").find({
                document: _id
            }, {
                projection: {
                    _id: 1,
                    title: 1
                }
            }).toArray();

            return NextResponse.json({ success: true, sections: sections });
        } catch (error) {
            // Handle error appropriately
        }
    } else {
        // Handle the case where id is null (e.g., return an error response)
    }
}
