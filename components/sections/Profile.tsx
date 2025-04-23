import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiPlusCircle, PiCopy } from "react-icons/pi";

export function Profile() {
  return (
    <section className="space-y-6 px-4 py-[18px]">
      {/* Profile section */}
      <div className="flex flex-col xxs:flex-row gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
          <h1 className="font-medium text-muted-foreground">
            Desenvolvedor Full-Stacks
          </h1>
        </div>
        <Badge className="bg-green-400/25 dark:bg-green-800/25 gap-2 text-green-800 dark:text-green-700 uppercase font-semibold rounded-full">
          <div className="bg-green-700 size-1.5 rounded-full" />
          Disponível para serviços
        </Badge>
      </div>
      <div className="flex flex-col xxs:flex-row items-center justify-between gap-10">
        <aside className="space-y-3.5 order-2 xxs:order-1">
          <h1 className="text-3xl font-bold">Pedro Gontijo</h1>
          <p className="text-muted-foreground">
            Desenvolvedor Full-Stacks com foco em desenvolvimento web e
            softwares.
          </p>
          <div className="space-y-2 space-x-3">
            <Button className="text-xs">
              <PiPlusCircle /> Fale Comigo
            </Button>
            <Button className="text-xs" variant="outline">
              <PiCopy /> Copie meu email
            </Button>
          </div>
        </aside>
        <aside className="order-1 xxs:order-2">
          <div className="rounded-3xl border p-2">
            <div className="relative w-[84vw] h-96 xxs:size-36">
              <Image
                src="/user.jpg"
                alt="avatar"
                fill
                className="rounded-2xl"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
