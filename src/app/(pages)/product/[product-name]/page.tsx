/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { montserrat, raleway } from "@/lib/fonts";
import { products } from "@/lib/placeholders";
import { Minus, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const [counter, setCounter] = useState(1);
  const params = useParams();

  const product = products.filter(
    (product) => product.slug === params["product-name"]
  );

  const handleCounter = (type: string) => {
    if (type === "add") {
      setCounter(counter + 1);
    } else {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  }


  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="max-w-[1440px] mx-auto pt-8">
        <div className="grid grid-cols-2 gap-10 px-10">
          <div>
            <img
              src={product[0].image}
              alt="product"
              className="w-full object-cover"
            />
          </div>

          <div className="pt-8 px-20">
            <div className="flex justify-between items-center mb-9 font-recoleta font-semibold text-2xl">
              <h1>{product[0].name}</h1>
              <p>S/ {product[0].price}</p>
            </div>
            <p className={`${montserrat.className} font-medium text-sm`}>
              {product[0].description}
            </p>
            <div className="flex gap-5 mt-5">
              <div className="flex py-3 px-2 border rounded-full">
                <button onClick={() => handleCounter('')} className="hover:bg-accent rounded-full">
                  <Minus className="h-5 w-5" />
                </button>
                <div className="px-5">{counter}</div>
                <button onClick={() => handleCounter('add')} className="hover:bg-accent rounded-full">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <Button
                size={"lg"}
                className={`py-3 rounded-full ${raleway.className} font-semibold text-base w-72`}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
