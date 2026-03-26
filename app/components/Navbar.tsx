import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-10 py-5 border-b border-brand/30">
      
      {/* Logo */}
      <Link href="/" className="text-lg sm:text-xl font-semibold text-brand-light">
        FeesahSignature
      </Link>

      {/* Right Nav */}
      <div className="flex gap-6 sm:gap-10 text-sm">
        <Link href="/" className="text-gray-700 hover:text-brand transition">
          Home
        </Link>

        <Link href="/catalog" className="text-gray-700 hover:text-brand transition">
          Shop Fabrics
        </Link>

        <Link href="/about" className="text-gray-700 hover:text-brand transition">
          About
        </Link>
      </div>
    </nav>
  );
}