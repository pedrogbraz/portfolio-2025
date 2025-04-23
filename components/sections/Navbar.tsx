import Link from "next/link";
import ModeToggle from "../mode-toggle";
import {
  PiHouse,
  PiPlusCircle,
  PiUserCircle,
  PiFolderSimple,
} from "react-icons/pi";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-4 w-full md:max-w-[75vw] md:w-[75vw] lg:max-w-[45vw] lg:w-[45vw] flex items-center justify-between bg-[#FFFFFF] dark:bg-[#212121] px-3 py-3 rounded-lg border shadow-xl">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">
            <PiHouse className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <PiUserCircle className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <PiFolderSimple className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <PiHouse className="text-2xl" />
          </Link>
        </li>
      </ul>
      <aside className="space-x-1">
        <ModeToggle />
        <Button variant="outline" className="text-xs">
          <PiPlusCircle /> Fale Comigo
        </Button>
      </aside>
    </nav>
  );
}
