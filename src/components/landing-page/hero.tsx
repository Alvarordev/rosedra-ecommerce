import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[430px] flex items-center justify-center text-white">
      <span className="absolute bottom-0 top-0 right-0 left-0 bg-primary/50 z-10"></span>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-section.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative text-center space-y-6 z-20 text-background">
        <h1 className="font-serif text-[40px] leading-8">
          Más Grandes, Más Verdes, Más Vivas
        </h1>
        <p className="text-xl font-serif">
          Decora tus espacios con toques naturales que aportan vida y calidez a
          tu hogar!
        </p>
        <Link href="/catalogo" className="flex justify-center max-w-80 mx-auto">
          <Button
            size="lg"
            className="bg-primary text-background text-lg rounded-full py-3"
          >
            Ver Todas las Plantas
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
