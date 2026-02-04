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
      label: "Início",
    },
    {
      url: "/vitrine",
      label: "Produtos",
    },
    {
      url: "#sobre",
      label: "Sobre Nós",
    },
  ];

  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image src="logo.svg" width={50} height={50} alt="Logo do sistema" />
        </Link>

        <ul className="nav-items justify-center items-center">
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
