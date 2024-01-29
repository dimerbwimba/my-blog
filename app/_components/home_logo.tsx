import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Cross, Menu, XCircle } from "lucide-react";
import Image from "next/image";

const HomeLogo = () => {
    const menu = useMobileMenu()
    return ( 
        <div className=" flex justify-between items-center px-1">
            <div className=" sm:hidden flex">
                {!menu.isOpen ?  <Menu onClick={menu.onOpen} className=" h-7 w-7"/> : <XCircle onClick={menu.onClose} className=" h-7w-7"/>}
            </div>
            <div className="px-4 flex justify-center py-1 h-[40px]">
                <Image
                    width={100}
                    height={100}
                    objectFit="cover"
                    alt="Logo"
                    src={"/logo.png"}
                />
            </div>
        </div>
     );
}
 
export default HomeLogo;