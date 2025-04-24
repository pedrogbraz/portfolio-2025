"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <section className="px-4 py-[18px] space-y-8">
        <div className="flex flex-col xxs:flex-row gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
            <h1 className="font-medium text-muted-foreground">Fale Comigo</h1>
          </div>
          <Badge className="bg-green-400/25 dark:bg-green-800/25 gap-2 text-green-800 dark:text-green-700 uppercase font-semibold rounded-full">
            <div className="bg-green-700 size-1.5 rounded-full" />
            Disponível para serviços
          </Badge>
        </div>
        <section>
          <h1 className="text-3xl font-medium">Full Stacks</h1>
          <p className="text-muted-foreground mt-1">
            Precisa de um desenvolvedor Full-Stacks?
          </p>
          <div className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Nome" />
              <Input placeholder="Email" />
            </div>
            <Textarea placeholder="Mensagem" className="resize-none h-40" />
            <Button className="w-full" onClick={() => console.log("Enviado")}>
              Enviar
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
