"use client"
import Image from "next/image";
import Hero from "../_components/hero";
import PopularDestination from "../_components/popular-destination";
import LatestBlog from "../_components/latest-blog";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
 
  
  return (
    <main className="flex min-h-screen flex-col">
       
      <Hero/>
      {/* <PopularDestination/> */}
      <LatestBlog/>
    </main>
  );
}
