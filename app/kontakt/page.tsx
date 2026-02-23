import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt Bella Skilte & Print A/S",
  description: "Kontakt Bellaskilte i Herlev. Ring, skriv eller send en forespørgsel via formularen."
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-16">
      <h1 className="text-4xl font-black">Kontakt</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 rounded-2xl border bg-white p-6 text-slate-700">
          <p className="text-lg font-bold text-ink">{company.name}</p>
          <p>{company.address}</p>
          <p>
            Tlf.: <a className="font-semibold" href={company.phoneHref}>{company.phoneDisplay}</a>
          </p>
          <p>
            Sekundær tlf.: <a className="font-semibold" href={company.secondaryPhoneHref}>{company.secondaryPhoneDisplay}</a>
          </p>
          <p>
            Mail: <a className="font-semibold" href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>CVR: {company.cvr}</p>
          <p>
            <a className="font-semibold text-coral" href={company.maps} target="_blank" rel="noreferrer">Find os på Google Maps</a>
          </p>
          <iframe
            title="Bella Skilte map"
            className="h-64 w-full rounded-xl"
            loading="lazy"
            src="https://www.google.com/maps?q=Marielundvej+45C,+2730+Herlev&output=embed"
          />
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
