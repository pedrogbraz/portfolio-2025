import Image from "next/image";

type SetupItem = {
  src: string;
  alt: string;
  label: string;
  width: string;
};

const ItemCard = ({ src, alt, label, width }: SetupItem) => (
  <div className="border-[--border] border inline-flex flex-col gap-6 items-center justify-center px-2 py-10 rounded-3xl hover:bg-white/10 hover:scale-[1.02] duration-300">
    <div className={`relative ${width} h-[100px] hover:scale-105 duration-300`}>
      <Image src={src} className="object-cover" fill alt={alt} />
    </div>
    <h1 className="text-[--text-color] text-sm text-center">{label}</h1>
  </div>
);

const hardwares: SetupItem[] = [
  {
    src: "/processador.png",
    alt: "Processador",
    label: "i7 8700K\n3200Ghz",
    width: "w-[120px]",
  },
  {
    src: "/placa-de-video.png",
    alt: "Placa de vídeo",
    label: "ASRock\nRX 6600",
    width: "w-[180px]",
  },
  {
    src: "/placa-mae.png",
    alt: "Placa-mãe",
    label: "Gigabyte\nB360-M",
    width: "w-[110px]",
  },
  {
    src: "/memoria-ram.png",
    alt: "Memória RAM",
    label: "2x\n8gb Hyperx",
    width: "w-[140px]",
  },
  { src: "/ssd.png", alt: "SSD", label: "Sandisk 240GB", width: "w-[130px]" },
  {
    src: "/fonte.png",
    alt: "Fonte",
    label: "Corsair\nCV550",
    width: "w-[140px]",
  },
  { src: "/hd.png", alt: "HD", label: "2x\nSeagate 1TB", width: "w-[75px]" },
  {
    src: "/hd-externo.png",
    alt: "HD Externo",
    label: "Samsung\n500GB",
    width: "w-[120px]",
  },
  {
    src: "/gabinete.png",
    alt: "Gabinete",
    label: "Gabinete\nMontech",
    width: "w-[110px]",
  },
  {
    src: "/fans.png",
    alt: "Fans",
    label: "6x\nFans Montech",
    width: "w-[120px]",
  },
];

const perifericos: SetupItem[] = [
  {
    src: "/mouse.png",
    alt: "Mouse",
    label: "Redragon\nCobra V2",
    width: "w-[100px]",
  },
  {
    src: "/teclado.png",
    alt: "Teclado",
    label: "Ajazz AK820 Pro Rgb",
    width: "w-[140px]",
  },
  {
    src: "/fone-1.png",
    alt: "Fone 1",
    label: "Fortrek\nPRO H2",
    width: "w-[110px]",
  },
  {
    src: "/iphone.png",
    alt: "Iphone",
    label: "Iphone 7 Plus",
    width: "w-[100px]",
  },
  {
    src: "/suporte.png",
    alt: "Suporte",
    label: "Suporte de\nCelular Ergo",
    width: "w-[100px]",
  },
  {
    src: "/monitor.png",
    alt: "Monitor",
    label: "Monitor\nLG 120Hz",
    width: "w-[120px]",
  },
  {
    src: "/dell-monitor.png",
    alt: "Monitor Dell",
    label: "Monitor\nDell 75Hz",
    width: "w-[120px]",
  },
  {
    src: "/fone-2.png",
    alt: "Fone 2",
    label: "Onikuma\nCamouflage Gray",
    width: "w-[80px]",
  },
];

const Section = ({ title, items }: { title: string; items: SetupItem[] }) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-center py-8">
    <div className="flex flex-col justify-between items-center w-full lg:w-[10%]">
      <h1 className="text-2xl lg:text-3xl font-medium text-nowrap lg:-rotate-90">
        {title}
      </h1>
    </div>
    <div className="grid grid-cols-1 ep:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full px-6 lg:pl-0">
      {items.map((item, idx) => (
        <ItemCard key={idx} {...item} />
      ))}
    </div>
  </div>
);

export default function MySetup() {
  return (
    <>
      <Section title="Meus Hardwares" items={hardwares} />
      <Section title="Meus Periféricos" items={perifericos} />
    </>
  );
}
