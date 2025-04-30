import Link from "next/link";
import { PiInstagramLogo, PiGithubLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const footerItems = [
  { href: "https://www.instagram.com/pedrogbraz/", icon: PiInstagramLogo },
  { href: "https://github.com/pedrogbraz", icon: PiGithubLogo },
];

export function Footer() {
  return (
    <footer className="space-y-1.5">
      <section className="w-full bg-[#FFFFFF] dark:bg-[#2C2C2C] px-4 py-[18px] rounded-sm space-y-7">
        <div className="flex gap-2 items-center justify-between">
          <aside className="flex items-center gap-2">
            <div className="bg-zinc-400 dark:bg-zinc-600 size-1.5 rounded-full" />
            <h1 className="text-lg font-medium text-muted-foreground">
              Follow Me
            </h1>
          </aside>
          <aside className="text-xl text-muted-foreground">
            <ul className="flex items-center gap-3">
              {footerItems.map(({ href, icon: Icon }) => (
                <li className="bg-background p-1.5 rounded-full" key={href}>
                  <Link href={href} target="_blank">
                    <Icon className="text-2xl" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="w-full bg-[#FFFFFF] dark:bg-[#2C2C2C] px-4 py-[18px] rounded-sm flex flex-col xxs:flex-row items-start justify-between text-xs text-muted-foreground">
        <h1>© 2025 Pedro Gontijo - Todos os direitos reservados</h1>
        <p>
          by{" "}
          <Link
            className="underline text-blue-500"
            href="https://github.com/pedrogbraz"
            target="_blank"
          >
            Pedro Gontijo
          </Link>
        </p>
      </section>
    </footer>
  );
}
