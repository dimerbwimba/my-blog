import { fetcher } from "@/lib/utils";
import axios from "axios";
import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    try {
        const response = await fetcher(`/api/sitemap/blogs`)
        const { documents } = await response.data
    
        const blogEntries:MetadataRoute.Sitemap = documents.map(({slug, category_name, coverImage}:{slug:string, category_name:string, coverImage:string})=>({
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/${category_name}/${slug}`,
            // lastModified: new Date(updated_at),
            changeFrequency:"daily",
            priority:1,
        }))
    
        return [
            ...blogEntries
        ]
        
    } catch (error) {
        return [
            
        ]
    }
}