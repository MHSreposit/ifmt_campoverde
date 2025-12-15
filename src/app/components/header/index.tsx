"use client";
import Link from "next/link";
import { useState } from "react";
import "./header.css"; // você pode criar esse arquivo para os estilos

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <Link href="/">
        <img src="/ifmt_logo.png" alt="Logo IFMT" className="logo-img" />
        <h1 className="logo-text">IFMT - Campo Verde</h1>
      </Link>

      <nav className={`menu ${menuAberto ? "ativo" : ""}`}>
        <ul>
          <li>
            <Link href="/aulas">Home</Link>
          </li>
          <li>
            <Link href="/aulas">Blog</Link>
          </li>
          <li>
            <Link href="/contatos">Quem somos</Link>
          </li>
          <li>
            <Link href="/contatos">Portifólio</Link>
          </li>
          <li>
            <Link href="/contatos">Trabalhe conosco</Link>
          </li>
          <li>
            <Link href="/contatos">Trabalhos publicados</Link>
          </li>
        </ul>
      </nav>

      <button className="hamburguer" onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>
    </header>
  );
}