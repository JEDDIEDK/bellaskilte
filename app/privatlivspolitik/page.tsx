import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik | Bella Skilte & Print A/S",
  description: "Privatlivspolitik for Bella Skilte & Print A/S."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] pb-16 pt-24 md:pt-28">
      <h1 className="text-4xl font-black">Privatlivspolitik</h1>
      <div className="mt-6 space-y-4 rounded-2xl border bg-white p-6 text-slate-700">
        <p>Hos {company.name} behandler vi personoplysninger i overensstemmelse med gældende databeskyttelseslovgivning.</p>
        <p>Vi indsamler kun de oplysninger, der er nødvendige for at kunne besvare henvendelser, levere vores ydelser og opfylde lovkrav.</p>
        <p>
          Har du spørgsmål til vores behandling af personoplysninger, kan du kontakte os på{" "}
          <a className="font-semibold" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
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
