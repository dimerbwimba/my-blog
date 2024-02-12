import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  const db = client.db("test");

  try {
    
      const documents = await db
        .collection("documents")
        .aggregate([
          {
            $match:{ 
              isPublished:true
            }
          },
          {
            $lookup: {
              from: "categories",
              localField: "parentCategory",
              foreignField: "_id",
              as: "category"
            }
          },
          {
            $unwind: "$category"
          },
          {
            $project: {
              _id: 0,
              slug: 1,
              title:1,
              country_visit:1,
              updated_at:1,
              coverImage:1,
              category_name: "$category.name"
            }
          }
        ]).toArray();
        return NextResponse.json({ success: true, documents: documents });
  } catch (error:any) {
        return NextResponse.json({ success: false, error: error.message });
    
  }

}
