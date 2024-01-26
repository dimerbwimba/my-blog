import Image from "next/image";
import Hero from "../_components/hero";
import PopularDestination from "../_components/popular-destination";
import LatestBlog from "../_components/latest-blog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:p-20 md:p-24 py-20">
      <Hero/>
      {/* <PopularDestination/> */}
      <LatestBlog/>
    </main>
  );
}
