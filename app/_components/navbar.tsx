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
    <div className=" fixed w-full bg-white z-[999999] sm:flex shadow items-center justify-between">
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
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <b className=" flex flex-col items-center"><Globe2 className="h-4 w-4 mx-1" /><span>Destinations</span></b>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>  <b className=" flex flex-col items-center"><CarFront className="h-4 w-4 font-black  mx-1" /><span className="text-green-900 font-black">Explore</span></b></NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                       <Icons.logo className="h-6 w-6" /> 
                      <div className="mb-2 mt-4 text-lg font-medium">
                        LATEST POSTS
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      Heading to Peru? Here&#039;s my list of the best hostels in Cusco to help you plan your trip, 
                      have fun, and save money during your visit
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
               
                <NavBarItemList href="/docs/installation" title="Adventure">
                Embark on your next adventure , thrilling journeys await
                </NavBarItemList>
                <NavBarItemList href="/docs/primitives/typography" title="Smart Travel">
                Smart travel solutions , travel with intelligence , budget-friendly exploration and affordable adventures
                </NavBarItemList>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
            <b className=" flex flex-col items-center"><Plane className="h-4 w-4 mx-1" /><span>Travel Tips</span></b>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <NavBarItemList
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </NavBarItemList>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
        </NavigationMenuList>
      </NavigationMenu>

      </div>
      <SettingsMenu/>
    </div>
  )
}