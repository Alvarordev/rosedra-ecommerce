import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { montserrat, raleway } from "@/lib/fonts";
import { products } from "@/lib/placeholders";
import { SelectValue } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const CatalogoPage = () => {
  const filters = [
    {
      name: "LUZ INTERIOR",
      options: ["Baja/Artificial", "Media/Luz Indirecta", "Luz Directa"],
    },
    {
      name: "TAMAÑO",
      options: ["XS", "S", "M", "L"],
    },
    {
      name: "DIFICULTAD",
      options: ["Nula", "Facil", "Moderada"],
    },
    {
      name: "PRECIO",
      options: ["Menos de S/50", "S/50-S/100", "S/100-S/150", "Más de S/150"],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex items-center justify-between py-5 px-10">
          <h1 className="text-[40px] font-serif">Cátalogo</h1>

          <Select>
            <SelectTrigger
              className={`font-semibold ${montserrat.className} w-[300px] rounded-none py-3 h-auto`}
            >
              <SelectValue placeholder="ORDENAR POR" />
            </SelectTrigger>
            <SelectContent
              className={`rounded-none font-semibold ${montserrat.className}`}
            >
              <SelectItem value="default">ORDENAR POR</SelectItem>
              <SelectItem value="light">PRECIO: MÁS ALTO A MÁS BAJO</SelectItem>
              <SelectItem value="dark">PRECIO: MÁS BAJO A MÁS ALTO</SelectItem>
            </SelectContent>
          </Select>
        </header>

        <div
          className={`max-w-[1440px] mx-auto py-5 px-10 ${montserrat.className}`}
        >
          <div className="grid grid-cols-5 space-x-5 text-secondary">
            <aside className="col-span-1">
              <div className="w-full sticky top-[75px] z-40">
                {filters.map((filter) => (
                  <div key={filter.name}>
                    <Collapsible>
                      <CollapsibleTrigger className="flex justify-between text-start w-full border-t font-medium text-sm py-3">
                        <span>{filter.name}</span>
                        <ChevronDown />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul className="mb-3">
                          {filter.options.map((option) => (
                            <li key={option} className="text-sm mb-1">
                              <label className="flex items-center space-x-2 font-semibold cursor-pointer">
                                <Checkbox />
                                <span>{option}</span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}

                <Button
                  size={"lg"}
                  variant={"outline"}
                  className={`${raleway.className} text-primary w-full rounded-full py-3 text-md`}
                >
                  Limpiar Filtros
                </Button>
              </div>
            </aside>

            <div className="col-span-4">
              <ul className="grid grid-cols-3 gap-y-6 gap-x-10">
                {products.map((product) => (
                  <li key={product.id} className="  col-span-1">
                    <Link href={`/product/${product.slug}`}>
                      <ProductCard product={product} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CatalogoPage;
