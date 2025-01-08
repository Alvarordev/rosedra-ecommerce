"use client";

import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { montserrat, raleway } from "@/lib/fonts";
import useCartStore from "@/store/cart";

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

  const totalItems = useCartStore((state) => state.getTotalItems());
  const cart = useCartStore((state) => state.items);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background flex items-center justify-between py-5 px-10 text-primary border-b border-foreground">
        <div>
          <Link href="/" className="text-3xl font-recoleta">
            rosedra
          </Link>
        </div>
        <nav className={`${raleway.className} text-primary`}>
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
            <SheetTrigger className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className={`${montserrat.className} absolute rounded-full bg-primary text-background -top-2 -right-2 min-w-[18px] py-[1px] text-xs`}>
                {totalItems}
              </span>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Tu carrito</SheetTitle>
              </SheetHeader>
              <div>
                {cart.map((item) => (
                  <div key={item.id}>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
