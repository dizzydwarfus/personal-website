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
    { name: "Beneath the Surface", path: "/" },
    { name: "Trail & Timeline", path: "/resume" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 shadow-sm transition-all duration-300">
      <nav className="max-w-6xl mx-auto flex justify-center px-6 py-4">
        <ul className="flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`text-white text-base md:text-lg font-medium tracking-wide relative hover:text-teal-400 transition-all duration-200 ${
                    isActive ? "text-teal-400 after:w-full" : ""
                  } after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:bg-teal-400 after:w-0 hover:after:w-full after:transition-all`}
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
