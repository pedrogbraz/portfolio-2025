import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiPlusCircle, PiCopy } from "react-icons/pi";

export default function Home() {
  return (
    <main className="w-full m-4 md:max-w-[75vw] md:w-[75vw] lg:max-w-[45vw] lg:w-[45vw] bg-[#FFFFFF] dark:bg-[#212121] px-4 py-6 rounded-lg border shadow-xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#616161] size-1.5 rounded-full" />
          <h1 className="font-medium">Desenvolvedor Full-Stacks</h1>
        </div>
        <Badge className="bg-green-400/25 dark:bg-green-800/25 gap-2 text-green-800 dark:text-green-700 uppercase font-semibold rounded-full">
          <div className="bg-green-700 size-1.5 rounded-full" />
          Disponível para serviços
        </Badge>
      </div>
      <div className="flex items-center justify-between gap-10">
        <aside className="space-y-3">
          <h1 className="text-3xl font-bold">Pedro Gontijo</h1>
          <h2 className="text-muted-foreground">
            Desenvolvedor Full-Stacks com foco em desenvolvimento web e
            softwares.
          </h2>
          <div className="space-x-3">
            <Button className="text-xs">
              <PiPlusCircle /> Fale Comigo
            </Button>
            <Button className="text-xs" variant="outline">
              <PiCopy /> Copie meu email
            </Button>
          </div>
        </aside>
        <aside>
          <div className="rounded-3xl border p-2">
            <div className="relative size-36">
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
    </main>
  );
}
