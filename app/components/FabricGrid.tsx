import { fabrics } from "../data/fabrics";
import FabricCard from "./FabricCard";

export default function FabricGrid() {
    return (
        <div className="grid md:grid-cols-3 gap-8 px-10 py-16">
            {fabrics.map((fabric) => (
                <FabricCard key={fabric.id} fabric={fabric} />
            ))}
        </div>
    )
}