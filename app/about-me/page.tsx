import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <section className="px-4 py-[18px] space-y-6">
        <div className="flex flex-col xxs:flex-row gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
            <h1 className="font-medium text-muted-foreground">Sobre Mim</h1>
          </div>
        </div>
        <div className="space-y-8 text-lg">
          <div className="flex flex-col xxs:flex-row items-start  gap-4">
            <div className="rounded-3xl border p-2">
              <div className="relative w-[76vw] h-96 xxs:size-52">
                <Image
                  src="/user.jpg"
                  alt="avatar"
                  fill
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div>
              <Dialog>
                <DialogTrigger className="hover:cursor-pointer">
                  <h1 className="text-muted-foreground">seguindo</h1>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quem eu sigo</DialogTitle>
                    <DialogDescription>
                      Veja todas as pessoas que eu sigo
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <h1>Teste</h1>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Sou{" "}
              <b className="text-black dark:text-white">Pedro Gontijo Braz</b>,
              um{" "}
              <b className="text-black dark:text-white">
                Desenvolvedor Front End
              </b>{" "}
              apaixonado por tecnologia e motivado pela{" "}
              <b className="text-black dark:text-white">
                criação de soluções digitais inovadoras
              </b>
              . Estou avançando meu conhecimento através do{" "}
              <b className="text-black dark:text-white">
                Programa de Certificação Profissional em Ciência da Computação
                da Universidade de Harvard
              </b>
              , onde sou reconhecido por minha{" "}
              <b className="text-black dark:text-white">
                participação ativa em atividades e sociedades
              </b>
              , incluindo o{" "}
              <b className="text-black dark:text-white">
                renomado HarvardX CS50s
              </b>
              .
            </p>
            <p className="text-muted-foreground">
              Estou constantemente buscando expandir meu conhecimento em
              <b className="text-black dark:text-white">
                Java, Spring Boot e .NET
              </b>
              , com uma{" "}
              <b className="text-black dark:text-white">
                paixão inabalável por enfrentar desafios complexos
              </b>
              . Estou preparado para fazer{" "}
              <b className="text-black dark:text-white">
                contribuições significativas
              </b>
              com minhas{" "}
              <b className="text-black dark:text-white">
                diversas habilidades e expertise valiosa
              </b>{" "}
              em qualquer ambiente profissional.
            </p>
            <p className="text-muted-foreground">
              Como{" "}
              <b className="text-black dark:text-white">
                Desenvolvedor Front End
              </b>
              , destaco-me na{" "}
              <b className="text-black dark:text-white">
                criação de soluções inovadoras
              </b>{" "}
              que{" "}
              <b className="text-black dark:text-white">superam expectativas</b>{" "}
              e{" "}
              <b className="text-black dark:text-white">
                impulsionam o sucesso dos projetos
              </b>
              . Meu foco é criar{" "}
              <b className="text-black dark:text-white">
                experiências digitais dinâmicas e visualmente atraentes
              </b>
              , priorizando a{" "}
              <b className="text-black dark:text-white">
                colaboração e a comunicação
              </b>{" "}
              para garantir{" "}
              <b className="text-black dark:text-white">
                resultados excepcionais
              </b>{" "}
              que atendam às{" "}
              <b className="text-black dark:text-white">
                necessidades atuais e futuras do cenário digital
              </b>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
