import SearchBar from "./search_bar";

const Hero = () => {
    return ( 
        <section className=" flex justify-center items-center">
            <div className=" text-center space-y-4 lg:w-3/4">
                <h1 className=" font-black lg:text-6xl text-3xl text-muted-foreground">
                Travel Smarter, Save More, Stay Longer : Affordable and Intelligent Travel Solutions
                </h1>
                <h2 className="font-black text-3xl">
                    Where do you want to go?
                </h2>
                
                <SearchBar/>
                
            </div>
        </section>
     );
}
 
export default Hero;