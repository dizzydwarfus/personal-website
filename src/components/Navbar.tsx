"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
}

export default function Navbar() {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <header className="w-full bg-transparent h-20 flex items-center mt-6">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Nav Links */}
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`text-white text-lg relative hover:text-pink-500 transition
                    ${isActive ? "text-pink-500 after:w-full" : ""}
                    after:absolute after:bottom-[-6px] after:left-0 after:h-[3px] after:bg-pink-500 after:w-0 hover:after:w-full after:transition-all`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
