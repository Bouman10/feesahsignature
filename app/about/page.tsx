export default function AboutPage() {
  return (
    <main className="px-4 sm:px-10 py-16 max-w-3xl mx-auto">

      {/* PAGE HEADER */}
      <section className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-medium text-brand">
          About Feesah Signature
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          A Lagos-based fabric brand focused on helping men and women dress with confidence,
          culture and quality.
        </p>
      </section>

      {/* BRAND STORY */}
      <section className="mb-14 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-medium text-gray-900">Our Story</h2>

        <p>
          Feesah Signature was built from a simple idea — finding premium fabrics
          should feel personal, easy and trustworthy.
        </p>

        <p>
          Many customers discover fabrics on social media but struggle with
          availability, pricing clarity and slow ordering.  
          We created a smoother experience by combining a clean online catalog
          with fast WhatsApp ordering.
        </p>

        <p>
          Our goal is simple: help you find fabrics you love and get them delivered
          anywhere in Nigeria without stress.
        </p>
      </section>

      {/* WHAT WE SELL */}
      <section className="mb-14 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-medium text-gray-900">What We Offer</h2>

        <ul className="space-y-2">
          <li>• Premium Ankara</li>
          <li>• Quality Fabrics</li>
          <li>• Hula caps and accessories</li>
          <li>• Carefully sourced materials</li>
        </ul>
      </section>

      {/* HOW ORDERING WORKS */}
      <section className="mb-14 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-medium text-gray-900">How Ordering Works</h2>

        <p>
          We run a WhatsApp-first store to keep ordering fast and personal.
        </p>

        <ol className="space-y-2">
          <li>1. Browse our catalog</li>
          <li>2. Send your order via WhatsApp or Instagram</li>
          <li>3. Confirm availability and delivery</li>
          <li>4. Receive your fabrics anywhere in Nigeria</li>
        </ol>
      </section>

      {/* LOCATION & DELIVERY */}
      <section className="mb-16 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-medium text-gray-900">Location & Delivery</h2>

        <p>
          Based in Fadeyi, Lagos, Nigeria.
        </p>

        <p>
          We deliver nationwide through trusted delivery partners.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-brand/30 pt-10 text-center">
        <p className="text-gray-700 mb-6">
          Ready to place an order or ask a question?
        </p>

        <a
          href="https://wa.me/2349050943481?text=Hello%20Feesah%20Signature,%20I%20would%20like%20to%20make%20an%20enquiry."
          className="inline-block bg-brand text-white px-6 py-3"
        >
          Chat on WhatsApp
        </a>
      </section>

    </main>
  );
}