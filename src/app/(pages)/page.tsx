import HeroSection from "@/components/landing-page/hero";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/placeholders";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background border-b">
      <HeroSection />
      <section className="py-14 px-40">
        <div className="flex justify-between">
          <h2 className="text-3xl font-serif">Más Vendidos</h2>
          <Link href="/catalogo">
            <p className="underline text-lg">Ver Todos</p>
          </Link>
        </div>

        <div className="mt-5">
          <ul className="flex overflow-auto py-1">
            {products.map((product) => (
              <li key={product.id} className="mr-10 min-w-[360px]">
                <Link href="/">
                  <ProductCard product={product} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
