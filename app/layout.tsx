import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title:
    "Feesah Signature – Ankara Fabrics, Native Materials & Caps in Lagos",
  description:
    "Browse premium Ankara fabrics, native materials and caps in Lagos. Order easily via WhatsApp with nationwide delivery.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-1">
         {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}