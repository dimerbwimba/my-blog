import { fetcher } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


interface BlogProps {
   _id: string;
   title: string;
   coverImage: string;
   slug: string;
   country_visit: string;
   category_name:string
}

export default async function LatestBlog() {
   const response = await fetcher("/api/latest_blogs")   
   const blogs = await response.documents
   return (
      <section className="flex justify-center flex-col items-center">

         <div className=" grid grid-cols-2 gap-4 w-2/3">
            {blogs?.map((blog: BlogProps) => (
               <div key={blog._id} className="">
                  <div className="flex flex-col items-end justify-center rounded-md">
                     <div className=" relative h-52 w-full rounded">
                        <Image
                           src={blog.coverImage}
                           alt={blog.slug}
                           layout="fill" // required
                           objectFit="cover" // change to suit your needs
                           className=" rounded" // just an example
                        />
                     </div>
                     <div className=" px-2 border rounded-lg">
                        <p className=" font-bold text-muted-foreground">{blog.country_visit}</p>

                        <Link href={`${blog.category_name}/${blog.slug}`}>
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
