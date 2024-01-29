import axios from "axios";
import { AlertCircle, AlertOctagon } from "lucide-react";
import Link from "next/link";

export default  async function  TableOfContent({...props}) {
    try {
        const response = await axios.get(`http://localhost:3000/api/sections_single_blog?id=${props?._id}`)
        const {sections} = await response.data
            return ( 
                <div className=" flex justify-center">
                    <div className="px-2 mx-2 w-4/5 ">
                        <h2 className=" text-center  font-bold pb-4">Table Of Content</h2>
                        <ul className=" ">
                        {sections?.map((item:{_id:string, title:string}, index:number)=>(
                            <Link key={item._id} href={`#${item.title}`}>
                                <li className=" border-b hover:bg-foreground/5 cursor-pointer px-1 py-2 text-sm font-bold">
                                    {index+1}. {item.title}
                                </li>
                            </Link>
                        )) 
                            }
                        </ul>
                    </div>
        
                </div>
            );
        
    } catch (error) {
        return (
            <div className=" p-5 rounded border flex flex-col justify-center items-center  text-red-800 border-red-700">
                <AlertOctagon className=" h-10 w-10 py-2"/>
               <h2 className=" text-3xl font-bold  text-center">Fail To Load <br/> The Table Of Content </h2>
            </div>
        );
    }
                
}
