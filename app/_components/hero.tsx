import { Button } from "@/components/ui/button";
import SearchBar from "./search_bar";
import HeroSvgSeparator from "./hero_svg_separator";
import HeroBird from "./hero_bird";
import { ArrowDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
    return (
        <section className=" items-center mb-10  ">
            <div className=" grid grid-cols-2 relative">
                <div className=" h-screen px-20 py-12 bg-gray-100 border-r ">
                    <div>
                        <div className=" py-4">
                            <h2 className=" font-black lg:text-6xl text-3xl text-mutedforground  ">
                                Best <span className=" text-green-800">travel blog </span>for nomads
                            </h2>

                        </div>
                        <div>
                            <p className=" font-bold text-2xl pr-5 py-5 text-muted-foreground">
                                Travel Smarter, Save More, Stay Longer : <span className=" text-green-800">Affordable</span> and  <span className=" text-green-800">Intelligent</span> Travel Solutions
                            </p>

                        </div>
                        <div>

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
                <div className="h-screen px-20 py-12">
                    <div className=" md:flex pl-10 flex-col justify-left ">
                        <div className=" ">
                            <h2 className=" text-right font-black lg:text-6xl text-3xl text-mutedforground  ">
                                <span className=" text-green-800"> Discover </span> Your Next Horizon
                            </h2>
                            <h3 className="font-black text-right py-5 w-full text-3xl">
                                Where do you want to go?
                            </h3>
                        </div>
                        <div>

                            <div className=" flex justify-end">
                                <Input className="w-4/5 bg-gray-100 focus-visible:ring-offset-secondary " placeholder="Find Your Destination" />
                            </div>
                            <h3 className="font-bold text-muted-foreground text-right pr-5 py-3 w-full text-2xl">
                                Popular Searches :
                            </h3>
                            <div className=" flex flex-row justify-end w-full ">
                                <div className="w-2/3">
                                    <ul className=" space-x-2 space-y-1 text-right">
                                        {
                                            ["Costa Rica", "Paris", "Spain", "Travel Safty", "Travel Insurance"].map((item, index) => (
                                                <span className=" cursor-pointer text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 border rounded hover:bg-gray-100 ease-in-out transition" key={index}>
                                                    {item}
                                                </span>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" absolute z-20 bottom-0 left-[0%] text-lg right-[30%]">
                    <div className=" cursor-pointer flex items-center flex-col justify-center">
                        <ArrowDown className="" />
                        <h4 className=" font-bold">Our Latest Travel Tips</h4>
                    </div>
                </div>
                <HeroBird />
                <HeroSvgSeparator />
            </div>
        </section>
    );
}

export default Hero;