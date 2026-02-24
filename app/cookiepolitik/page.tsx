import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookiepolitik | Bella Skilte & Print A/S",
  description: "Cookiepolitik for Bella Skilte & Print A/S."
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] pb-16 pt-24 md:pt-28">
      <h1 className="text-4xl font-black">Cookiepolitik</h1>
      <div className="mt-6 space-y-4 rounded-2xl border bg-white p-6 text-slate-700">
        <p>Vi anvender cookies for at få hjemmesiden til at fungere, forbedre brugeroplevelsen og måle trafik.</p>
        <p>Du kan til enhver tid ændre eller trække dit samtykke tilbage via din browsers cookieindstillinger.</p>
        <p>Nødvendige cookies bruges til basal funktionalitet, mens statistik- og marketingcookies kun anvendes med samtykke.</p>
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
