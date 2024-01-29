import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

        return [
            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}`
            },
            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact`
            },
            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/faqs`
            },

            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`
            },
            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/disclaimer`
            },
            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-disclosure`
            },
            {
                priority:1,
                lastModified: JSON.stringify(Date.now()),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/about-us`
            }

        ]
        
}