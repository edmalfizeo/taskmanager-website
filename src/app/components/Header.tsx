"use client";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center shadow-md px-6 py-4">
      {/* Centro em mobile, normal em telas maiores */}
      <div className="flex items-center space-x-2 mx-auto md:mx-0">
        <Image src="/icons/logo.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </div>

      {/* Esconde a nav e botão no mobile */}
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-900 hover:text-emerald-600">
          Home
        </a>
        <a href="#" className="text-gray-900 hover:text-emerald-600">
          About
        </a>
        <a href="#" className="text-gray-900 hover:text-emerald-600">
          Pricing
        </a>
        <a href="#" className="text-gray-900 hover:text-emerald-600">
          Features
        </a>
      </nav>

      <button className="hidden md:block bg-emerald-400 text-gray-900 px-4 py-2 rounded hover:bg-emerald-600 transition duration-300">
        <span>Download</span>
      </button>
    </header>
  );
}
