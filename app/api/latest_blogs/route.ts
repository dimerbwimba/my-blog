import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  const db = client.db("test");

  try {
    
      const documents = await db
        .collection("documents")
        .find(
          {isPublished:true},
          {
            projection: {
              slug: 1,
              title: 1,
              coverImage: 1,
              country_visit:1,
              description: 1,
              _id: 0,
            },
          },
        )
        .toArray();
        return NextResponse.json({ success: true, documents: documents });
  } catch (error:any) {
        return NextResponse.json({ success: false, error: error.message });
    
  }

}
