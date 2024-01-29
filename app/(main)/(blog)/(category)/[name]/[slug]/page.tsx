import axios from "axios";
import Image from "next/image";
import TableOfContent from "./_components/table_of_content";
import Sections from "./_components/sections";
import { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";


interface SingleBlogPageProps {
    params: { slug: string }
}

export const revalidate = 3600 


export async function generateStaticParams() {
    const response = await axios.get(`http://localhost:3000/api/latest_blogs`)
    const { documents } = await response.data

    return documents.map(({slug}:{slug:string})=>slug)
}

const getBlog = cache(async(slug:string) => {
    const response = await axios.get(`http://localhost:3000/api/single_blog?slug=${slug}`)
    const { blog } = await response.data
    if (!blog) {
        notFound()
    }
    return blog
})

export async function generateMetadata({ params }: SingleBlogPageProps): Promise<Metadata> {
    const blog = await getBlog(params.slug)
    const { title_seo, description, coverImage, author, created_at, updated_at } = blog
    return {
        authors:[
            {
                name:author
            }
        ],
        title: title_seo,
        description: description,
        twitter:{
            card:"summary_large_image",
            creator:"@dimer191996",
            site:"@dimer191996",
            description:description,
            images:[
                {
                    url:coverImage
                }
            ]
        },
        openGraph: {
            type:"article",
            url:"https://explorewisetips.com",
            authors:[author],
            modifiedTime:updated_at,
            publishedTime: created_at , 
            images: [
                {
                    url: coverImage
                }
            ]
        }
    }
}

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
    const blog = await getBlog(params.slug)
    return (
        <main className="flex min-h-screen flex-col lg:p-20 md:p-24 py-20">
            <section className=" md:flex justify-between">
                <div className="w-[35%] py-5">
                    <div className=" top-16 sticky">

                    </div>

                </div>
                <div className="md:w-5/6 p-2">
                    <h1 className=" text-3xl md:text-5xl font-black">
                        {blog?.title}
                    </h1>
                    <div className=" py-5">
                        <div className=" border-l-4 rounded-md">
                            <p className=" text-lg md:text-xl px-2">
                                {blog?.description}
                            </p>
                        </div>
                    </div>
                    <div className=" p-2">
                        <div className=" relative w-full h-[400px] rounded overflow-hidden">
                            <Image
                                src={blog?.coverImage}
                                fill
                                alt="Cover"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: `${blog.html_content}` }}></div>
                    <div>
                        <div className="">
                            <TableOfContent
                                _id={blog._id}
                            />
                        </div>
                    </div>
                    <Sections _id={blog._id} />
                </div>
                <div className="w-[35%] py-5">
                    <div className=" top-16 sticky">

                    </div>
                </div>
            </section>
        </main>
    );
}
