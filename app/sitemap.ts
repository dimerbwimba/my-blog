import { fetcher } from "@/lib/utils";
import axios from "axios";
import { MetadataRoute } from "next";
import moment from "moment"
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    try {
        const response = await fetcher(`/api/sitemap/blogs`)
        const { documents } = await response
    
        const blogEntries:MetadataRoute.Sitemap = documents.map(({slug, category_name, coverImage}:{slug:string, category_name:string, coverImage:string})=>({
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/${category_name}/${slug}`,
            lastModified: JSON.stringify(moment(Date.now()).format()),
            changeFrequency:"daily",
            priority:1,
        }))
    
        return [
            {
                priority:1,
                changeFrequency:"daily",
                lastModified: moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/faqs`
            },

            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`
            },
            {
                priority:1,
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/disclaimer`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-disclosure`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/about-us`
            },
            
            ...blogEntries
        ]
        
    } catch (error) {
        return [
            
        ]
    }
}