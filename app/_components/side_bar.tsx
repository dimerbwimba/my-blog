"use client"
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";
import { ArrowBigLeftIcon, ChevronLeft, ChevronRight, Globe2, Home, PlaneTakeoff, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";

const SideBar = () => {
    
    const menu = useMobileMenu()
   
    return ( 
        <aside  className={cn(
            " group/sidebar absolute h-full bg-white overflow-y-auto flex w-full flex-col z-[9999]",
            !menu.isOpen && "hidden"
          
          )}>
           
            <ul className="grid gap-3 p-4  lg:grid-rows-[.75fr_1fr]">
                <li className="row-span-3">
                    <a
                    className="flex h-full w-full select-none flex-col justify-end  border-t from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                    >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                        LATEST POSTS
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Heading to Peru? Here&#039;s my list of the best hostels in Cusco to help you plan your trip, 
                    have fun, and save money during your visit
                    </p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                         <Home className=" h-5 w-5" />  
                         <div>
                            <div className=" flex text-lg font-medium">
                                Home
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Explore the home page
                            </p>
                         </div>
                    </a>
                </li>
                <li>
                    <a
                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                         <Globe2 className=" h-5 w-5" />  
                         <div>
                            <div className=" flex text-lg font-medium">
                                Destination
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Where do you want to go ?
                            </p>
                         </div>
                    </a>
                </li>

                <li>
                    <a
                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                         <PlaneTakeoff className=" h-5 w-5" />  
                         <div>
                            <div className=" flex text-lg font-medium">
                                Explore
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Explore the world, and discover hidden gems
                            </p>
                         </div>
                    </a>
                </li>

                <li>
                    <a
                        className="flex pl-10 h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div>
                         <ChevronRight className=" h-5 w-5" />  

                        </div>
                         <div>
                            <div className=" flex text-lg font-medium">
                                Adventure
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Embark on your next adventure , thrilling journeys await
                            </p>
                         </div>
                    </a>
                </li>

                <li>
                    <a
                        className="flex pl-10 h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div>
                         <ChevronRight className=" h-5 w-5" />  

                        </div>
                         <div>
                            <div className=" flex text-lg font-medium">
                                Smart Travel
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                                Smart travel solutions , travel with intelligence , budget-friendly exploration and affordable adventures
                            </p>
                         </div>
                    </a>
                </li>
                <li>
                    <a
                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                         <TrendingUp className=" h-5 w-5" />  
                         <div>
                            <div className=" flex text-lg font-medium">
                                Travel Tips
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Where do you want to go ?
                            </p>
                         </div>
                    </a>
                </li>
                <li>
                    <a
                        className="flex pl-10 h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div>
                         <ChevronRight className=" h-5 w-5" />  

                        </div>
                         <div>
                            <div className=" flex text-lg font-medium">
                            SOLO FEMALE TRAVEL ADVICE
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Empowering solo journeys , fearless female exploration , safe solo travel tips , secure adventures for women
                            </p>
                         </div>
                    </a>
                </li>
                <li>
                    <a
                        className="flex pl-10 h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div>
                         <ChevronRight className=" h-5 w-5" />  

                        </div>
                         <div>
                            <div className=" flex text-lg font-medium">
                                FAMILY AND SENIOR TRAVEL
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                                For sighted users to preview content available behind a link.
                            </p>
                         </div>
                    </a>
                </li>
            </ul>
                
        </aside>
     );
}
 
export default SideBar;