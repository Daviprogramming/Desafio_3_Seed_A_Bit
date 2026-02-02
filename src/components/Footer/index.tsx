"use client";
import Link from "next/link";
import Image from "next/image";
import { FooterItemInterface } from "../Footeritem";
import NavItem from "../Navitem";
import "./styles.css";

export default function Footer() {
  const items: FooterItemInterface[] = [
    {
      url: "/",
      label: "Início",
    },
    {
      url: "/vitrine",
      label: "Produtos",
    },
    {
      url: "#",
      label: "Sobre Nós",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link href="/" className="logo">
          <Image src="logo.svg" width={40} height={40} alt="Logo SmartPink" />
          <span className="brand-name">SmartPink</span>
        </Link>
        <p className="footer-desc">Tecnologia e estilo em um só lugar.</p>
      </div>

      <div className="footer-nav">
        <h3>Navegação</h3>
        <ul className="footer-items">
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>
      </div>
      <div className="footer-copy">
        <p>C 2026 SmartPink</p>
      </div>
    </footer>
  );
}
