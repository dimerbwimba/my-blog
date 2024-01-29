"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import NavBarItemList from "./navbar_item_list"
import HomeLogo from "./home_logo"
import SettingsMenu from "./settings_menu"
import { CarFront, Globe, Globe2, Home, HomeIcon, Plane, TrendingUp } from "lucide-react"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "SOLO FEMALE TRAVEL ADVICE",
    href: "/docs/primitives/alert-dialog",
    description:
      "Empowering solo journeys , fearless female exploration , safe solo travel tips , secure adventures for women",
  },
  {
    title: "FAMILY AND SENIOR TRAVEL",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
]
 
export function NavBar() {
  return (
    <div className=" fixed p-1 w-full bg-white z-[999999] sm:flex border-b items-center justify-between">
      <HomeLogo/>
      <div className=" sm:flex hidden justify-center">
      <NavigationMenu>
        
        <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <b className=" flex flex-col items-center"><HomeIcon className="h-4 w-4 mx-1" /><span className=" font-black text-green-900">Home</span></b>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>     
        </NavigationMenuList>
      </NavigationMenu>

      </div>
      <SettingsMenu/>
    </div>
  )
}