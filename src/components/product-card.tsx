import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export interface Product {
    id: number,
    name: string,
    price: number,
    size: string,
    color: string,
    image: string
}

const ProductCard = ({product}: {product: Product}) => {
  return (
    <Card className="rounded-none border-none bg-background shadow-none min-w-[360px] pb-4">
      <CardContent className="p-0 space-y-4">
        <div className="relative">
          <Image
            src={product.image}
            width={360}
            height={460}
            alt={"1"}
            className="w-full object-cover aspect-[3/4]"
          />
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
