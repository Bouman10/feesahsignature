import Link from "next/link";
import Statement from "./Statement";

export default function Hero() {
  return (
    <section className="px-4 sm:px-10 py-16 sm:py-24 max-w-6xl mx-auto">

      {/* HERO CONTENT */}
      <div className="max-w-xl">

        {/* HEADLINE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-gray-900">
          Premium Fabrics <br className="sm:hidden" />
          and Caps for Men
        </h1>

        {/* SUBTEXT */}
        <p className="mt-3 text-sm sm:text-base text-gray-500">
          Male fabrics • Ankara • Hula Caps
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-row flex-wrap gap-3">

          <Link
            href="/catalog"
            className="px-5 py-3 bg-brand text-white text-sm sm:text-base"
          >
            Shop Fabrics
          </Link>

          <a
            href="https://wa.me/2349050943481?text=Hello%20Feesah%20Signature,%20I%20would%20like%20to%20place%20an%20order."
            className="px-5 py-3 border border-gray-300 text-sm sm:text-base"
          >
            Order via WhatsApp
          </a>

        </div>
      </div>

      {/* DIVIDER + STATEMENT */}
      <div className="mt-12 border-t border-brand pt-6 relative">

        <Statement />

      </div>

    </section>
  );
}