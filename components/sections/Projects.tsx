import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";

export default function Projects() {
  return (
    <section className="dark:bg-[#2C2C2C] rounded-md px-4 py-[18px]">
      {/* Projects section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
          <h1 className="font-medium text-muted-foreground">Projetos</h1>
        </div>
        <Link
          className="flex items-center gap-2 text-xs font-medium dark:bg-[#373737] py-2 px-3 border rounded-md shadow"
          href="/projects"
        >
          View All <PiArrowRightBold className="size-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3"></div>
    </section>
  );
}
