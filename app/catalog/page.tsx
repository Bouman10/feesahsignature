export default function CatalogPage() {
  return (
    <section className="px-4 sm:px-10 py-16 max-w-3xl mx-auto text-center">
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-brand">
        Shop Fabrics & Caps
      </h1>

      <p className="mt-4 text-gray-600">
        Browse our full collection directly on WhatsApp.
        New fabrics and caps are updated regularly.
      </p>

      {/* Primary CTA */}
      <a
        href="https://wa.me/c/2349050943481"
        target="_blank"
        className="inline-block mt-8 px-6 py-4 bg-brand text-white rounded-lg font-medium"
      >
        Open WhatsApp Catalog
      </a>

      {/* Secondary reassurance */}
      <p className="mt-6 text-sm text-gray-500">
        You will be redirected to WhatsApp to view products and place your order.
      </p>
      
    </section>
  );
}