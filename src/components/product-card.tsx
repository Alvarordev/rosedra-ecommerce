import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  size: string;
  color: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="rounded-none border-none bg-background shadow-none  pb-4 group">
      <CardContent className="p-0 space-y-4">
        <div className="relative">
          <Image
            src={product.image}
            width={360}
            height={460}
            alt={"1"}
            className="w-full object-cover aspect-[3/4]"
          />

          <div className="absolute bottom-0 left-0 w-full h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              className="w-full text-primary rounded-full mx-5 py-2 text-md border border-primary transition-all"
            >
              Agregar al Carrito
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between font-serif leading-3">
            <p>{product.name}</p>
            <p>S/{product.price}</p>
          </div>
          <div className="flex justify-between text-xs leading-3">
            <p>{product.color}</p>
            <p>{product.size}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
