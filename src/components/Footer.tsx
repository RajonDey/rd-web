// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";

const reachLinks = [
  { label: "Sylhet, Bangladesh", href: "#" },
  { label: "contact@rajondey.com", href: "mailto:contact@rajondey.com" },
];

const footerLinks = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajondey/" },
  { icon: Github, href: "https://github.com/RajonDey" },
  { icon: Twitter, href: "https://twitter.com/rajjon_dey" },
  { icon: Youtube, href: "https://youtube.com/@rajon_dey" },
  { icon: Instagram, href: "https://instagram.com/rajjon.dey" },
  { icon: Facebook, href: "https://www.facebook.com/rajjon.dey" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="divider" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Title */}
          <div>
            <Link href="/">
              <Image
                src="/rajon-dey.png"
                alt="Rajon Dey Logo"
                width={100}
                height={50}
                className="mx-auto md:mx-0"
              />
            </Link>
            <p className="footer-text mt-2">Software Developer</p>
          </div>

          {/* Reach Section */}
          <div>
            <h3 className="text-sm uppercase font-roboto text-primary mb-4">
              Reach
            </h3>
            <ul className="space-y-2">
              {reachLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-text hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Stay Close Button */}
            <div className="mt-2">
              <Link
                href="/connect"
                className="inline-block px-6 py-2 bg-primary text-secondary rounded-md text-sm font-roboto uppercase hover:bg-gray-800 transition"
              >
                Stay Close!
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm uppercase font-roboto text-primary mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-text hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="decorative-divider" />

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gray-700 transition"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-text text-center mt-6">
          © 2020 - 2025 | Made with{" "}
          <Heart className="inline text-red-500" size={14} /> by Rajon Dey
        </p>
      </div>
    </footer>
  );
}
