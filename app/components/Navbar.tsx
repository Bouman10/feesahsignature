"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Shop Fabrics" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 py-6 border-b border-brand/30">
      
      {/* Logo */}
      <span className="text-xl font-semibold text-brand">
        FeesahSignature
      </span>

      {/* Right Nav */}
      <div className="flex gap-6 sm:gap-8 text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                transition-colors
                ${isActive 
                  ? "text-brand font-medium" 
                  : "text-gray-600 hover:text-brand-light"}
              `}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

    </nav>
  )
}