"use client"
import axios from "axios";
import { PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";


interface BlogProps{
   _id:string;
   title:string;
   coverImage: string;
   slug:string;
   country_visit:string;
}

const LatestBlog = () => {

   const [blogs, setBlogs] = useState([])
   const [loading, setLoading] = useState(false)
   const HandleGetDocuments = async () => {
      setLoading(true)
      await axios.get("/api/latest_blogs").then(({ data }) => {
         if (data.success) {
            setLoading(false)
            setBlogs(data.documents)
         }
      })
   }

   useEffect(() => {
      HandleGetDocuments()
   }, [])

   return (
      <section className="flex justify-center flex-col items-center">
         <h2 className=" text-xl font-bold py-5">Latest from the Blog</h2>
         {
            loading && <div className="relative flex justify-center items-center">
               <div className="absolute animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-800"></div>
               <div className="rounded-full h-12 w-12 flex justify-center items-center">
                  <PlaneTakeoff className="h-5 w-5" />
               </div>
            </div>
         }
         <div className=" grid grid-cols-3 gap-4 w-2/3">
            {blogs.map((blog:BlogProps) => (
               <div key={blog._id} className="">
                  <div className="flex flex-col items-end justify-center rounded-md">
                     <div className=" relative h-52 w-full">
                        <Image 
                           src={blog.coverImage}
                           alt={blog.slug}
                           layout="fill" // required
                           objectFit="cover" // change to suit your needs
                           className="" // just an example
                        />
                     </div>
                     <div className=" px-2">
                        <p className=" font-bold text-muted-foreground">{blog.country_visit}</p>

                        <Link href={`/travel-destination/${blog.slug}`}>
                           <h2 className=" leading-tight text-lg font-bold">{blog.title}</h2>
                        </Link>
                       
                     </div>
                  </div>
               </div>
            ))
            }
         </div>
      </section>
   );
}

export default LatestBlog;