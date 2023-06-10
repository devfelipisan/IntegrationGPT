"use client";

import ButtonFloat from "@/components/ButtonFloat";
import { useState } from "react";

export default function Home() {
  const [isIframeOpen, setIsIframeOpen] = useState(false);

  const handleButtonClick = () => {
    setIsIframeOpen(true);
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="logo text-white font-bold text-lg">
          <a href="/">Logo</a>
        </div>
        <ul className="menu flex space-x-4 text-white">
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </nav>

      <div className="content p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Seja bem-vindo à nossa página inicial!
        </h1>
      </div>
      <div>
        <ButtonFloat onClick={handleButtonClick} />
      </div>
    </div>
  );
}
