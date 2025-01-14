import Footer from "@/components/landing-page/footer";
import Navbar from "@/components/landing-page/navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
