import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frenquently asked questions",
    twitter:{
      card:"summary_large_image"
    }
  
  };

const Faqs = () => {
    return ( 
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-20 md:p-24 py-20">
            Faqs
        </main>
     );
}
 
export default Faqs;