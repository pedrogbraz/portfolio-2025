import { Badge } from "@/components/ui/badge";

export default function Contact() {
  return (
    <>
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
      <div>
        <h1>Teste</h1>
      </div>
    </>
  );
}
