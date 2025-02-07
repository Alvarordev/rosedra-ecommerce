import { User } from "lucide-react";
import Link from "next/link";

import CartDrawer from "../cart-drawer";
import { raleway } from "@/lib/fonts";

export default function Navbar() {
  const links = [
    {
      name: "Cátalogo",
      href: "/catalogo",
    },
    {
      name: "Sobre Nosotros",
      href: "/",
    },
    {
      name: "Contacto",
      href: "/",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background flex items-center justify-between py-5 px-10 text-primary border-b border-foreground">
        <div>
          <Link href="/" className="text-3xl font-recoleta">
            rosedra
          </Link>
        </div>
        <nav className={`${raleway.className} text-primary`}>
          <ul className="flex space-x-10 text-md pt-1 font-semibold">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button>
            <User className="w-5 h-5" />
          </button>
          <CartDrawer />
        </div>
      </header>
    </>
  );
}
