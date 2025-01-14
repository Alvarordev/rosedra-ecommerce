"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { montserrat, raleway } from "@/lib/fonts";
import { distritos } from "@/lib/placeholders";
import useCartStore from "@/store/cart";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <main
      className={`${montserrat.className} min-h-screen h-screen bg-background text-primary`}
    >
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full h-full px-36">
          <header className="flex justify-between items-center w-full border-b px-4 py-7">
            <div className="text-3xl font-recoleta">rosedra</div>

            <Link href={"/catalogo"}>
              <Button
                variant={"link"}
                className="text-xs text-muted-foreground pt-3"
              >
                seguir comprando
              </Button>
            </Link>
          </header>

          <div className="flex w-full h-full">
            <form className="w-full">
              <div className="pt-4">
                <span
                  className={`${raleway.className} text-xl font-semibold text-primary`}
                >
                  Contacto
                </span>
                <div className="pt-3 w-full">
                  <Label className="text-xs pl-2">email</Label>
                  <Input className="rounded-none" />
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-5">
                <span
                  className={`${raleway.className} text-xl font-semibold text-primary`}
                >
                  Entrega
                </span>
                <div className="flex gap-5 pt-3">
                  <div className="w-full">
                    <Label className="text-xs pl-2 ">nombre</Label>
                    <Input className="rounded-none" />
                  </div>
                  <div className="w-full">
                    <Label className="text-xs pl-2">apellidos</Label>
                    <Input className="rounded-none" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs pl-2">
                    dni / carnet de extranjeria
                  </Label>
                  <Input className="rounded-none" />
                </div>
                <div>
                  <Label className="text-xs pl-2">dirección</Label>
                  <Input className="rounded-none" />
                </div>
                <div>
                  <Label className="text-xs pl-2 text-muted-foreground">
                    referencia de la dirección (opcional)
                  </Label>
                  <Input className="rounded-none" />
                </div>
                <div className="flex gap-5 ">
                  <div className="w-full">
                    <Label className="text-xs pl-2">departamento</Label>
                    <Select>
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Departamento" />
                      </SelectTrigger>

                      <SelectContent className="rounded-none">
                        <SelectItem className="rounded-none" value="light">
                          Lima Metropolitana
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label className="text-xs pl-2">distrito</Label>
                    <Select>
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Distrito" />
                      </SelectTrigger>

                      <SelectContent className="rounded-none">
                        {distritos.map((distrito) => (
                          <SelectItem
                            key={distrito}
                            className="rounded-none"
                            value={distrito}
                          >
                            {distrito}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label className="text-xs pl-2 text-muted-foreground">
                      código postal (opcional)
                    </Label>
                    <Input className="rounded-none" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs pl-2">teléfono</Label>
                  <Input className="rounded-none" />
                </div>
              </div>

              <div className="pt-5">
                <span
                  className={`${raleway.className} text-xl font-semibold text-primary`}
                >
                  Metodos de Envio
                </span>
                <div className="pt-3 w-full">
                  <Label className="text-xs pl-2">email</Label>
                  <Input className="rounded-none" />
                </div>
              </div>

              <div className="pt-5">
                <span
                  className={`${raleway.className} text-xl font-semibold text-primary`}
                >
                  Pago
                </span>
                <div className="pt-3 w-full">
                  <Label className="text-xs pl-2">email</Label>
                  <Input className="rounded-none" />
                </div>
              </div>

              <div className="pt-5">
                <span
                  className={`${raleway.className} text-xl font-semibold text-primary`}
                >
                  Direccion de facturación
                </span>
                <div className="pt-3 w-full">
                  <Label className="text-xs pl-2">email</Label>
                  <Input className="rounded-none" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex w-full h-full bg-primary text-background">
          <div className="pl-20 pr-36 pt-8 w-full">
            <ul className="border-b pb-12">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pt-3">
                  <Image
                    src={item.image}
                    width={100}
                    height={120}
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
                  </div>
                </div>
              ))}
            </ul>

            <div className="flex flex-col gap-4 py-6 border-b">
              <div className="flex w-full justify-between text-sm">
                <span>Subtotal</span>
                <span>S/ {totalPrice}</span>
              </div>

              <div className="flex w-full justify-between text-sm">
                <span>Envío</span>
                <span>S/ 11</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex w-full justify-between font-medium">
                <span>Total</span>
                <span>S/ {totalPrice + 11}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
