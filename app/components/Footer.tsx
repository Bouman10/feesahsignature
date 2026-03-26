export default function Footer() {
  return (
    <footer className="mt-16 border-t border-brand/30 px-4 sm:px-10 py-6">
      
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">

        {/* BRAND */}
        <div>
          <h3 className="text-brand font-semibold text-lg">
            FeesahSignature
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Premium fabrics and caps, delivered nationwide.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="https://www.instagram.com/feesahsignature?igsh=MTA2Y3JscGh2aHNqOQ==" className="hover:text-brand">Instagram</a>
          <a href="https://wa.me/2349050943481" className="hover:text-brand">
            WhatsApp
          </a>
        </div>

      </div>

    </footer>
  );
}