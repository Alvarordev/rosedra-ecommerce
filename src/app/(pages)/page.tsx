import HeroSection from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";

export default function Home() {

  return (
    <main className="min-h-screen bg-background border-b">
      <Navbar/>
      <HeroSection/>
    </main>
  );
}
