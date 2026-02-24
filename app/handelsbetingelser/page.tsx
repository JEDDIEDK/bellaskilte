import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Handelsbetingelser | Bella Skilte & Print A/S",
  description: "Handelsbetingelser for Bella Skilte & Print A/S."
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] pb-16 pt-24 md:pt-28">
      <h1 className="text-4xl font-black">Handelsbetingelser</h1>
      <div className="mt-6 space-y-4 rounded-2xl border bg-white p-6 text-slate-700">
        <p>Alle tilbud og ordrer hos {company.name} er underlagt gældende dansk lovgivning og de aftalte leveringsvilkår.</p>
        <p>Leveringstid, pris og omfang fremgår af tilbud eller ordrebekræftelse. Eventuelle ændringer aftales skriftligt.</p>
        <p>Reklamation skal ske hurtigst muligt efter modtagelse. Ved tvivl hjælper vi med en løsning.</p>
        <p className="text-sm text-slate-500">
          Denne side kan opdateres løbende. Senest opdateret: 23. februar 2026.
        </p>
      </div>
      <div className="mt-8">
        <Link href="/kontakt" className="font-semibold text-coral">Kontakt os</Link>
      </div>
    </main>
  );
}
