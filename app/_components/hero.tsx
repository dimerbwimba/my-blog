import { Button } from "@/components/ui/button";
import SearchBar from "./search_bar";
import HeroSvgSeparator from "./hero_svg_separator";
import HeroBird from "./hero_bird";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section className=" items-center mb-10  ">
            <div className=" grid grid-cols-2 relative">
                <div className=" h-screen px-20 py-12 bg-gray-100 ">
                    <div>
                        <div className=" py-4">
                            <h1 className=" font-black lg:text-6xl text-3xl text-mutedforground  ">
                                Best <span className=" text-green-800">travel advice </span>For Nomads
                            </h1>

                        </div>
                        <div>
                            <p className=" font-bold text-xl py-5 text-muted-foreground">
                                Travel Smarter, Save More, Stay Longer : <span className=" text-green-800">Affordable</span> and  <span className=" text-green-800">Intelligent</span> Travel Solutions
                            </p>

                        </div>
                        <div>
                            <h2 className="font-black text-3xl">
                                Where do you want to go?
                            </h2>
                            <div className="py-3">
                                <Button variant={"link"}>
                                    <h4 className=" text-lg font-bold">
                                        Visit Popular Destinations
                                    </h4>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-screen px-20 py-12 bg-green-100">
                    <div className=" ">
                        <div className=" py-4">
                           
                        </div>
                       
                    </div>
                </div>
                <div className=" absolute z-20 bottom-0 left-[0%] text-lg right-[30%]">
                    <div className=" cursor-pointer flex items-center flex-col justify-center">
                        <ArrowDown className=""/>
                        <h4 className=" font-bold">Our Latest Travel Tips</h4>
                    </div>
                </div>
            <HeroBird/>
            <HeroSvgSeparator/>
            </div>
        </section>
    );
}

export default Hero;