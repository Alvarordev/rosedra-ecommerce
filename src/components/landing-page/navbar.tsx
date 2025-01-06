import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Navbar() {
  const links = [
    {
      name: "Cátalogo",
      href: "/",
    },
    {
      name: "Sobre Nosotros",
      href: "/about",
    },
    {
      name: "Contacto",
      href: "/contact",
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between py-5 px-10 text-primary">
        <div>
          <Link href="/" className="text-3xl font-recoleta">
            rosedra
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-10 text-md pt-1">
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
          <Sheet>
            <SheetTrigger>
              <ShoppingCart className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Tu carrito</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
