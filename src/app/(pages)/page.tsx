import HeroSection from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import ProductCard, { Product } from "@/components/product-card";
import Link from "next/link";

export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      size: "M",
      image: "/hero-section.avif",
      color: "NEGRO",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 100,
      size: "M",
      image: "/hero-section.avif",
      color: "NEGRO",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 100,
      size: "M",
      image: "/hero-section.avif",
      color: "NEGRO",
    },
    {
      id: 4,
      name: "Producto 4",
      price: 100,
      size: "M",
      image: "/hero-section.avif",
      color: "NEGRO",
    },
    {
      id: 5,
      name: "Producto 5",
      price: 100,
      size: "M",
      image: "/hero-section.avif",
      color: "NEGRO",
    },
    {
      id: 6,
      name: "Producto 6",
      price: 100,
      size: "M",
      image: "/hero-section.avif",
      color: "NEGRO",
    },
  ];

  return (
    <main className="min-h-screen bg-background border-b">
      <Navbar />
      <HeroSection />
      <section className="py-14 px-40">
        <div className="flex justify-between">
          <h2 className="text-3xl font-serif">Más Vendidos</h2>
          <Link href='/'>
            <p className="underline text-lg">Ver Todos</p>
          </Link>
        </div>

        <div className="mt-5">
          <ul className="flex overflow-auto py-1">
            {products.map((product) => (
              <li key={product.id} className="mr-10">
                <Link href="/">
                  <ProductCard product={product}/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
