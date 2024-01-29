import Image from "next/image";

const HeroBird = () => {
    return ( 
       
                <Image
                    alt="bird"
                    src="/bird.png"
                    width={300}
                    height={300}
                    className=" absolute -bottom-0 left-[40%] right-[50%] -mb-1 transform-none opacity-100 z-10"
                    objectFit="cover"
                />

           
     );
}
 
export default HeroBird;