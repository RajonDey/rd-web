// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Connect", href: "/connect" },
];

export default function Header() {
  return (
    <header className="bg-secondary py-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <Link href="/">
          <Image
            src="/rajon-dey.png"
            alt="Rajon Dey Logo"
            width={200}
            height={50}
            className="mx-auto"
          />
        </Link>
        <div className="relative mt-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm uppercase font-roboto text-primary hover:text-gray-700 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
