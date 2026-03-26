import Link from "next/link";
import { Fabric } from "../types/fabric";

export default function FabricCard({ fabric }: { fabric: Fabric }) {
    const message = 'Hello, I would like to order ${fabric.name}'

    return (
        <div className="border rounded p-4">
            <img
              src={fabric.image}
              alt={fabric.name}
              className="mb-4 rounded"
            />

            <h3 className="font-medium">{fabric.name}</h3>

            <p className="text-sm text-gray-500">
                ₦{fabric.pricePerYard} per yard
            </p>

            <p className="text-sm">
                Available: {fabric.availableYards} yards
            </p>

            <a
              href={'https://wa.me/2349050943481?text=${encodeURIComponent(message)}'}
              className="mt-3 inline-block text-sm underline"
              >
                order via WhatsApp
              </a>
        </div>
    )
}