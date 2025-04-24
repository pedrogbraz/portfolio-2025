"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiHouse,
  PiPlusCircle,
  PiUserCircle,
  PiFolderSimple,
  PiGithubLogo,
  PiList,
} from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "../mode-toggle";

const navItems = [
  { href: "/", icon: PiHouse },
  { href: "/about-me", icon: PiUserCircle },
  { href: "/projects", icon: PiFolderSimple },
  { href: "/my-profile", icon: PiGithubLogo },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 w-[94vw] md:max-w-[75vw] md:w-[75vw] lg:max-w-[50vw] lg:w-[50vw] flex items-center justify-between bg-white dark:bg-[#212121] pl-3 xxs:pl-4 pr-3 py-3 rounded-lg border shadow-xl">
      <Sheet>
        <SheetTrigger className="xxs:hidden">
          <div className="bg-black dark:bg-[#383838] size-9 flex items-center justify-center rounded-md">
            <PiList className="text-xl" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <ul className="hidden xxs:flex items-center gap-6 text-muted-foreground">
        {navItems.map(({ href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? "text-black dark:text-white" : ""}
            >
              <Icon className="text-2xl" />
            </Link>
          </li>
        ))}
      </ul>
      <aside className="space-x-1 flex items-center">
        <ModeToggle />
        <Link
          className="bg-black dark:bg-[#383838] text-white flex items-center gap-2 text-xs font-medium py-2 px-2.5 border rounded-md shadow"
          href="/contact"
        >
          <PiPlusCircle className="text-muted-foreground" />
          Fale Comigo
        </Link>
      </aside>
    </nav>
  );
}
