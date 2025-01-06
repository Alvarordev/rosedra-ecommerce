import ProductCard from "@/components/product-card";
import { products } from "@/lib/placeholdedrs";
import Link from "next/link";

const CatalogoPage = () => {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="max-w-[1440px] mx-auto">
        <header className="py-5 px-10">
          <h1 className="text-[40px] font-serif">Cátalogo</h1>
        </header>

        <div className="max-w-[1440px] mx-auto py-5 px-10">
          <div className="grid grid-cols-5 space-x-5">
            <aside className="col-span-1">filters</aside>

            <div className="col-span-4">
              <ul className="grid grid-cols-3 gap-y-6 gap-x-10">
                {products.map((product) => (
                  <li key={product.id} className="  col-span-1">
                    <Link href="/">
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
