import axios from "axios";
import { AlertOctagon } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { isURL } from "@/lib/utils";

interface SectionsProps {
  _id: string;
}

interface SectionItem {
  _id: string;
  title: string;
  html_content: string;
  image_url:string;
}


const  HtmlContent = ({...props}) => {
    const clean = DOMPurify.sanitize(props.html)
    return (
        <div dangerouslySetInnerHTML={{__html:clean}}></div>
    )
}

export default async function Sections({ _id }: SectionsProps) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/single_blog_sections?id=${_id}`
    );
    const { sections } = await response.data;
    return (
      <div className=" prose prose-lg">
        {sections.map((item: SectionItem) => (
          <div key={item._id} id={item.title}>
             <div className=" relative w-full flex justify-center rounded">
                { isURL(item.image_url) && <Image
                    src={item.image_url}
                    
                    width={600}
                    height={600}
                    alt="Cover"
                    className="object-cover rounded"
                />}
            </div>
            <h2>{item.title}</h2>
            <HtmlContent html={item.html_content} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className=" p-5 rounded border flex flex-col justify-center items-center  text-red-800 border-red-700">
        <AlertOctagon className=" h-10 w-10 py-2" />
        <h2 className=" text-3xl font-bold  text-center">
          Fail To Load <br /> The Blog Sections{" "}
        </h2>
      </div>
    );
  }
}
