import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaChevronRight } from "react-icons/fa6";
import { AnimationLink } from "../animations/animation-link";

export function Projects() {
  return (
    <section className="dark:bg-[#2C2C2C] rounded-md px-4 py-[18px] space-y-5">
      {/* Projects section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
          <h1 className="font-medium text-muted-foreground">Projetos</h1>
        </div>
        <AnimationLink
          className="flex items-center gap-2 text-xs font-medium dark:bg-[#373737] py-2 px-3 border rounded-md shadow"
          href="/projects"
        >
          View All <PiArrowRightBold className="size-3.5" />
        </AnimationLink>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/projects/cooudpay"
          className="shadow-lg dark:shadow-none dark:bg-[#373737] border rounded-lg px-4 py-3 flex items-center justify-between"
        >
          <aside className="flex items-center gap-4">
            <Avatar className="size-14">
              <AvatarImage src="/cooudpay.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-bold">Cooud Pay</h1>
              <p className="text-sm text-muted-foreground font-medium">
                Desenvolvimento de uma plataforma de pagamento
              </p>
            </div>
          </aside>
          <div className="bg-black dark:bg-[#383838] size-9 flex items-center justify-center rounded-md">
            <FaChevronRight className="text-md text-muted-foreground" />
          </div>
        </Link>
      </div>
    </section>
  );
}
