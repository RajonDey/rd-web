// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  Menu,
  X,
  FileText,
  Video,
  Newspaper,
  Star,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: <Home size={16} /> },
  { label: "About", href: "/about", icon: <User size={16} /> },
  { label: "Projects", href: "/projects", icon: <Briefcase size={16} /> },
  {
    label: "Resources",
    href: "/resources",
    icon: <BookOpen size={16} />,
    subLinks: [
      {
        label: "Articles",
        href: "/resources/articles",
        icon: <FileText size={16} />,
      },
      { label: "Videos", href: "/resources/videos", icon: <Video size={16} /> },
      {
        label: "Newsletter",
        href: "/resources/newsletter",
        icon: <Newspaper size={16} />,
      },
      {
        label: "Recommendations",
        href: "/resources/recommendations",
        icon: <Star size={16} />,
      },
    ],
  },
  { label: "Connect", href: "/connect", icon: <Mail size={16} /> },
];

export default function Header() {
  const pathname = usePathname();
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-secondary py-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Logo and Hamburger Menu */}
        <div className="relative">
          <Link href="/">
            <Image
              src="/rajon-dey.png"
              alt="Rajon Dey Logo"
              width={200}
              height={50}
              className="mx-auto"
            />
          </Link>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="relative mt-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        {/* Desktop Navigation */}
        <nav className="mt-4 hidden md:block">
          <ul className="flex justify-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                {link.subLinks ? (
                  <>
                    <button
                      className={`text-sm uppercase font-roboto flex items-center gap-1 ${
                        pathname === link.href ||
                        link.subLinks.some(
                          (subLink) => pathname === subLink.href
                        )
                          ? "text-accent"
                          : "text-primary"
                      } hover:text-gray-700 transition focus:outline-none`}
                      onClick={() =>
                        setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
                      }
                      onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                      aria-haspopup="true"
                      aria-expanded={isResourcesDropdownOpen}
                    >
                      {link.icon}
                      {link.label}
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 w-48 bg-secondary border border-gray-200 rounded-lg shadow-lg z-30 ${
                        isResourcesDropdownOpen ? "block" : "hidden"
                      } group-hover:block`}
                      onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                    >
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-roboto text-left ${
                              pathname === subLink.href
                                ? "text-accent"
                                : "text-primary"
                            } hover:bg-gray-100 transition w-full`}
                          >
                            {subLink.icon}
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm uppercase font-roboto flex items-center gap-1 ${
                      pathname === link.href ? "text-accent" : "text-primary"
                    } hover:text-gray-700 transition`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation with Slide-In Animation */}
        <nav
          className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.subLinks ? (
                  <>
                    <button
                      className={`text-sm uppercase font-roboto flex items-center gap-1 justify-center w-full ${
                        pathname === link.href ||
                        link.subLinks.some(
                          (subLink) => pathname === subLink.href
                        )
                          ? "text-accent"
                          : "text-primary"
                      } hover:text-gray-700 transition focus:outline-none`}
                      onClick={() =>
                        setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
                      }
                      aria-haspopup="true"
                      aria-expanded={isResourcesDropdownOpen}
                    >
                      {link.icon}
                      {link.label}
                    </button>
                    <ul
                      className={`space-y-2 mt-2 ${
                        isResourcesDropdownOpen ? "block" : "hidden"
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className={`text-sm font-roboto flex items-center gap-2 justify-center ${
                              pathname === subLink.href
                                ? "text-accent"
                                : "text-primary"
                            } hover:text-gray-700 transition block`}
                          >
                            {subLink.icon}
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm uppercase font-roboto flex items-center gap-1 justify-center ${
                      pathname === link.href ? "text-accent" : "text-primary"
                    } hover:text-gray-700 transition block`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
