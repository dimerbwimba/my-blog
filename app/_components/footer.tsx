import { ChevronRight, Globe2, PlaneTakeoff } from "lucide-react";

const Footer = () => {
    return (
        <footer
            className="flex flex-col items-center text-center">
            <div className="container">
                <div className=" flex justify-center items-center border-b-2 border-t-2 my-2  py-2">
                    <form action="" className="">
                        <div
                            className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                            <div className=" md:ml-auto">
                                <p className="">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            {/* <!-- Newsletter sign-up input field --> */}
                            <div className="relative " data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border  px-3 py-[0.32rem] leading-[1.6]  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark: dark:placeholder: [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="Email address" />
                                <label
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus: peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark: dark:peer-focus:"
                                >Email address
                                </label>
                            </div>

                            {/* <!-- Newsletter sign-up submit button --> */}
                            <div className=" md:mr-auto">
                                <button
                                    type="submit"
                                    className="inline-block bg-green-800 rounded  text-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out "
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* <!-- Copyright information --> */}
                <div className="mb-6 text-start flex justify-center ">
                    <div className="md:w-3/4 grid gap-4 lg:grid-cols-2">
                        <div className="mb-6 md:mb-0">
                            <h5 className="mb-2 font-medium uppercase">About us</h5>
                            <ul>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/contact"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div>
                                            <ChevronRight className=" h-5 w-5" />

                                        </div>
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                Contact Information
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Company address, Phone number , Email address
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/disclaimer"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div>
                                            <ChevronRight className=" h-5 w-5" />

                                        </div>
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                            Disclaimer  Information:
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Include the Disclaimer  notice for <span className=" font-black">Explore Wise Tips.</span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/privacy-policy"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div>
                                            <ChevronRight className=" h-5 w-5" />

                                        </div>
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                Privacy Policy and Terms of Use
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Links to your <span className=" font-black">Explore Wise Tips.</span>&apos;s privacy policy and terms of use.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/affiliate-disclosure"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div>
                                            <ChevronRight className=" h-5 w-5" />

                                        </div>
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                Affiliate Disclosures
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                We  <span className=" font-black">explorewisetips.com</span> uses affiliate links, we disclose them here.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/faqs"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div>
                                            <ChevronRight className=" h-5 w-5" />

                                        </div>
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                FAQs
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Frequently asked questions.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6 md:mb-0">
                            <h5 className="mb-2 font-medium uppercase">TRAVEL TIPS</h5>
                            <ul>
                                <li className="row-span-3">
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end  border-t from-muted/50 to-muted no-underline outline-none hover:bg-gray-100 "
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            LATEST POSTS
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Heading to Peru? Here&#039;s my list of the best hostels in Cusco to help you plan your trip,
                                            have fun, and save money during your visit
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <PlaneTakeoff className=" h-5 w-5" />
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                Explore
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Explore the world, and discover hidden gems
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <Globe2 className=" h-5 w-5" />
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                Destination
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Where do you want to go ?
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-full w-full select-none flex-row justify-start items-center space-x-3  border-t from-muted/50 to-muted px-6 no-underline outline-none hover:bg-gray-100 "
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div>
                                            <ChevronRight className=" h-5 w-5" />

                                        </div>
                                        <div>
                                            <div className=" flex text-lg font-medium">
                                                Smart Travel
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Smart travel solutions , travel with intelligence , budget-friendly exploration and affordable adventures
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Copyright section --> */}
            <div
                className="w-full p-4 text-center shadow">
                © 2023 Copyright Reserve to
                <a className=" font-black px-2">BwCode</a>
            </div>
        </footer>
    );
}

export default Footer;