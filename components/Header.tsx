"use client";
// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Wansing.dev
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="#about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-xl">&#9776;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
