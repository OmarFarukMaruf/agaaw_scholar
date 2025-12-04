"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/home" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Countries", href: "/countries" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="w-full sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/home" className="text-2xl font-bold text-teal-700">
          Agaaw Scholar
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium ${
                pathname === link.href
                  ? "text-teal-700 border-b-2 border-teal-700"
                  : "text-gray-700 hover:text-teal-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 text-lg"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}