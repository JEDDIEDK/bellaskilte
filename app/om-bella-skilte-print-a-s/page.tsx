import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Om Bella Skilte & Print A/S | Skilte og print i Herlev",
  description: "Læs mere om Bella Skilte & Print A/S, vores produkter og kompetencer inden for skilte- og printløsninger."
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-16">
      <h1 className="text-4xl font-black">Om Bella Skilte</h1>
      <div className="mt-6 space-y-4 rounded-2xl border bg-white p-6 text-slate-700">
        <h2 className="text-2xl font-bold text-ink">Professionel visuel kommunikation</h2>
        <p>
          Bella Skilte & Print A/S har siden 1965 været leverandør af byens skilte og fra 1996 af storformat print
          løsninger. Fra de mindste streamers til de største stof bannere.
        </p>
        <p>
          Der er derfor i virksomheden opsamlet en viden og erfaring, som sikrer at du får den rette rådgivning til
          din skilte- eller print løsning.
        </p>
        <p>
          Her på sitet kan du se prøver på noget af alt det, vi kan. Men skilte- og print løsningerne er mangfoldige,
          så tøv ikke med at udfordre os med de opgaver som du ikke kan finde her på siden.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/kontakt"><Button>Få tilbud</Button></Link>
        <a href={company.phoneHref}><Button variant="outline">Ring {company.phoneDisplay}</Button></a>
      </div>
    </main>
  );
}
