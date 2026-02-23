import Link from "next/link";
import Image from "next/image";
import { ServicePage, company, serviceGalleries, serviceImages, heroImage } from "@/content/site";
import { Button } from "@/components/ui/button";
import { TwoUpSlider } from "@/components/two-up-slider";

export function ServicePageTemplate({ page }: { page: ServicePage }) {
  const image = encodeURI(serviceImages[page.slug] ?? heroImage);
  const gallery = serviceGalleries[page.slug] ?? [];
  const hasSlider = gallery.length >= 2;
  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-16">
      <p className="text-sm font-bold uppercase tracking-wide text-coral">{page.section}</p>
      <h1 className="mt-2 text-4xl font-black text-ink">{page.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-700">{page.summary}</p>
      {hasSlider ? (
        <div className="mt-8">
          <TwoUpSlider images={gallery} title={page.title} />
        </div>
      ) : (
        <div className="relative mt-8 h-72 overflow-hidden rounded-2xl border">
          <Image src={image} alt={page.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" priority />
        </div>
      )}
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
        <article className="space-y-4 rounded-2xl border bg-white p-6">
          {page.body.map((p) => (
            <p key={p} className="text-slate-700">{p}</p>
          ))}
        </article>
        <aside className="space-y-4 rounded-2xl border border-slate-600 bg-[#2f3136] p-6 text-slate-100">
          <h2 className="text-xl font-bold text-white">Klar til næste skridt?</h2>
          <p className="text-slate-200">
            Få hurtig afklaring på materialer, pris og levering. Ring på{" "}
            <a href={company.phoneHref} className="font-semibold text-white underline underline-offset-4">
              {company.phoneDisplay}
            </a>{" "}
            eller send en forespørgsel.
          </p>
          <div>
            <Link href="/kontakt"><Button variant="outline">{page.cta}</Button></Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
