import Hero from "../_components/hero";
import LatestBlog from "../_components/latest-blog";

export default function Home() { 
  
  return (
    <main className="flex min-h-screen flex-col">
       
      <Hero/>
      {/* <PopularDestination/> */}
      <LatestBlog/>
    </main>
  );
}
