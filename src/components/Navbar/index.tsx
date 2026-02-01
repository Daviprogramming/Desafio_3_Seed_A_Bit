"use client";
import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "../Navitem";
import "./index.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const items: NavItemInterface[] = [
    {
      url: "/",
      label: "Ínicio",
    },
    {
      url: "/vitrine",
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

  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image src="logo.svg" width={50} height={50} alt="Logo do sistema" />
        </Link>

        <ul className="nav-items">
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
            />
          ))}
        </ul>

        <button className="btn-default">Contatar</button>
      </nav>
    </header>
  );
}
