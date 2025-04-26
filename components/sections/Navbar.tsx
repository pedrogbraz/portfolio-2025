"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiHouse,
  PiUserCircle,
  PiGithubLogo,
  PiList,
  PiPlusCircle,
  PiGear,
} from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ModeToggle from "../mode-toggle";
import { AnimationLink } from "../animations/animation-link";

const navItems = [
  { href: "/", icon: PiHouse, label: "Início" },
  { href: "/about-me", icon: PiUserCircle, label: "Sobre mim" },
  { href: "/my-profile", icon: PiGithubLogo, label: "Meu GitHub" },
  { href: "/my-setup", icon: PiGear, label: "Meu Setup" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 mb-4 z-50 w-full flex items-center justify-between bg-white dark:bg-[#212121] pl-3 xxs:pl-4 pr-3 py-3 rounded-lg border shadow-xl">
      <Sheet>
        <SheetTrigger className="xxs:hidden">
          <div className="bg-black dark:bg-[#383838] size-9 flex items-center justify-center rounded-md">
            <PiList className="text-xl" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-2">
          <SheetHeader className="mb-6 p-3">
            <SheetTitle className="text-lg">Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            {navItems.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    pathname === href
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }
                `}
              >
                <Icon className="text-xl" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 border-t pt-4 flex items-center justify-between">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-black text-white dark:bg-zinc-800 dark:text-white"
            >
              <PiPlusCircle className="text-base" />
              Fale Comigo
            </Link>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>

      <TooltipProvider>
        <ul className="hidden xxs:flex items-center gap-6 text-muted-foreground">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    className={
                      pathname === href
                        ? "text-black dark:text-white"
                        : "hover:text-zinc-500 duration-300"
                    }
                  >
                    <Icon className="text-2xl" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">{label}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>

      <aside className="space-x-1 flex items-center">
        <ModeToggle />
        <AnimationLink
          className="bg-black dark:bg-[#383838] text-white flex items-center gap-2 text-xs font-medium py-2 px-2.5 border rounded-md shadow"
          href="/contact"
        >
          <PiPlusCircle className="text-muted-foreground" />
          Fale Comigo
        </AnimationLink>
      </aside>
    </nav>
  );
}
