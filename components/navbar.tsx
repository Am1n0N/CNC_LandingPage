"use client"
import { cn } from "@/lib/utils"
import { BookOpen, MenuIcon } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { Dialog, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./navigation-menu"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import ModeToggle from "./mode-toggle"

export function NavBar() {
    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
            <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
                <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>SOUTHSIDE Engineering.</SheetTitle>
                            <SheetDescription>
                                Scale and launch products with expert developers, on-demand, at a flat monthly fee
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Home</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/industries">
                                    <Button variant="outline" className="w-full">industries</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/about">
                                    <Button variant="outline" className="w-full">About us</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/capabilities">
                                    <Button variant="outline" className="w-full">capabilities</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/contact">
                                    <Button variant="outline" className="w-full">Contact us</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/quote">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get a Quote</Button>
                                </Link>
                            </DialogClose>
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Dialog>
                <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:hidden ">
                        <Link href="/" className="pl-2">
                            <h1 className="font-bold">SOUTHSIDE Engineering.</h1>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <Link href="/industries">
                        <Button variant="ghost">industries</Button>
                    </Link>
                    <Link href="/capabilities">
                        <Button variant="ghost">capabilities</Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost">About us</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="ghost">Contact us</Button>
                    </Link>
                    <Link href="/quote">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get a Quote</Button>
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"