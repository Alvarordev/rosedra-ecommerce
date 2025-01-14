"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { montserrat } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useCartStore from "@/store/cart";
import { Button } from "./ui/button";

const CartDrawer = () => {
  const [counter, setCounter] = useState(1);

  const handleCounter = (type: string) => {
    if (type === "add") {
      setCounter(counter + 1);
    } else {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  };

  const totalItems = useCartStore((state) => state.getTotalItems());
  const cart = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingCart className="w-5 h-5" />
        <span
          className={`${montserrat.className} absolute rounded-full bg-primary text-background -top-2 -right-2 min-w-[18px] py-[1px] text-xs`}
        >
          {totalItems}
        </span>
      </SheetTrigger>
      <SheetContent className={`flex flex-col h-full ${montserrat.className}`}>
        <SheetHeader>
          <SheetTitle className="font-sans text-2xl">Tu Carrito</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col flex-1">
          <div className="border-t border-foreground mt-6 flex-1 overflow-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 pt-3">
                <Image
                  src={item.image}
                  width={80}
                  height={100}
                  alt="img"
                  className="object-cover aspect-[3/4]"
                />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between ">
                    <Link
                      href={`/product/${item.slug}`}
                      className="hover:underline"
                    >
                      <p className="font-semibold ">{item.name}</p>
                    </Link>
                    <p>S/{item.price}</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      {item.color}
                    </p>
                  </div>
                  <div className="flex justify-between mt-auto">
                    <div className="flex py-1.5 px-2 border rounded-full shadow-sm">
                      <button
                        onClick={() => handleCounter("")}
                        className="hover:bg-accent rounded-full"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <div className="px-4 text-sm">{counter}</div>
                      <button
                        onClick={() => handleCounter("add")}
                        className="hover:bg-accent rounded-full"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div>
                      <Button
                        variant={"link"}
                        className="ml-4 py-1 px-2 rounded-full text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SheetFooter className="mt-auto border-t-2 border-foreground">
          {totalItems !== 0 && (
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between my-4">
                <p className="text-base font-semibold">Total:</p>
                <p className="text-base text-foreground font-medium">
                  S/ {totalPrice}
                </p>
              </div>

              <Link href={"/checkout"}>
                <Button
                  size="lg"
                  className="w-full bg-primary text-base text-background py-3 rounded-full"
                >
                  Finalizar pedido
                </Button>
              </Link>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
