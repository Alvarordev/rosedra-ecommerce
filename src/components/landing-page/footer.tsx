import { montserrat, raleway } from "@/lib/fonts";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-background w-full">
      <div
        className={`flex space-x-20 max-w-[1440px] mx-auto py-12 px-10 ${montserrat.className}`}
      >
        <div>
          <h4 className={`font-bold text-sm ${raleway.className} opacity-75`}>
            SOBRE NOSOTROS
          </h4>
          <div className="text-sm mt-6">
            <p className="font-semibold ">Direccion:</p>
            <p>Cercado de Lima, Lima, Peru</p>
          </div>
          <div className="text-sm mt-6">
            <p className="font-semibold ">WhatsApp:</p>
            <p>Lima: (+51) 999 999 999</p>
          </div>
          <div className="text-sm mt-6">
            <p className="font-semibold ">Correo:</p>
            <p>contacto@rosedra.com</p>
          </div>
        </div>

        <div>
          <h4 className={`font-bold text-sm ${raleway.className} opacity-75`}>
            POLITICAS
          </h4>
          <div className="mt-6">
            <p className="text-sm mt-6">Términos y Condiciones</p>
            <p className="text-sm mt-6">Política de Privacidad</p>
            <p className="text-sm mt-6">Formas de Pago</p>
            <p className="text-sm mt-6">Envíos y Entregas</p>
            <p className="text-sm mt-6">Política de Devoluciones</p>
          </div>
        </div>
      </div>
      <div className="border-t mt-10">
        <div className="flex justify-between max-w-[1440px] mx-auto py-5 px-10">
          <p className={`${montserrat.className} text-sm`}>
            © {year}, <span className="font-medium text-base">rosedra</span>
          </p>

          <div className="flex gap-4">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
