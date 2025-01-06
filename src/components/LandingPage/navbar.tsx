import { Link, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="flex items-center justify-between py-5 px-10">
      <div>
        <Link href="/" className="text-2xl">
          rosedra
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-5">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button>
          <User className="w-5 h-5" />
        </button>
        <button>
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
