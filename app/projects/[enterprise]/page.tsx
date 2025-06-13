import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";

const enterpriseInfos = [
  {
    image_url: "/cooudpay.png",
    name: "Cooud Pay",
    stacks: "Todo o Front End e Integrações com a API",
    year: "2025",
    link: "https://cooudpay.com.br",
    description:
      "Esse projeto eu desenvolvi para uma empresa de pagamento eletrônico. É empresa de pagamento eletrônico que atua no mercado brasileiro e internacional.",
  },
];

export default function CooudPay() {
  return (
    <section className="px-4 py-[18px] space-y-5">
      {enterpriseInfos.map((info) => (
        <div key={info.name} className="space-y-10">
          <div className="[&>div]:flex [&>div]:justify-between space-y-2 text-xs xxs:max-w-1/2">
            <div className="font-medium">
              <span className="text-muted-foreground">Cliente</span>
              <h1>{info.name}</h1>
            </div>
            <div className="font-medium">
              <span className="text-muted-foreground">Empresa</span>
              <h1>{info.name}</h1>
            </div>
            <div className="font-medium">
              <span className="text-muted-foreground">Minha Stacks</span>
              <h1>{info.stacks}</h1>
            </div>
            <div className="font-medium">
              <span className="text-muted-foreground">Data</span>
              <h1>{info.year}</h1>
            </div>
          </div>
          <div className="space-y-2.5">
            <Avatar className="size-12">
              <AvatarImage src={info.image_url} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">{info.name}</h1>
            <p className="text-sm xxs:text-base text-muted-foreground">
              {info.description}
            </p>
            <Link
              className="bg-black dark:bg-[#383838] mt-2 text-white inline-flex items-center gap-2 text-xs font-medium py-2 px-2.5 border-b rounded-md shadow"
              href="/contact"
            >
              Visite o site <PiArrowRightBold className="size-3.5" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
