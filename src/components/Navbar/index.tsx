import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "../Navitem";
import "./index.css";

export default function Navbar() {
  const items: NavItemInterface[] = [
    {
      url: "/",
      label: "Ínicio",
    },
    {
      url: "/about",
      label: "Sobre",
    },
    {
      url: "/products",
      label: "Produtos",
    },
    {
      url: "/services",
      label: "Serviços",
    },
    {
      url: "/contacts",
      label: "Contatos",
    },
  ];

  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} alt="Logo do sistema" />
        </Link>

        <ul className="nav-items">
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>

        <button className="btn-default">Contatar</button>
      </nav>
    </header>
  );
}
