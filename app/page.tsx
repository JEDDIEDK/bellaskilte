import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroSlider } from "@/components/hero-slider";
import { ShowcaseSlider } from "@/components/showcase-slider";
import { ServiceCardsGrid } from "@/components/service-cards-grid";
import { company, faq, frontGallery, heroImage, heroSliderImages, serviceImages, servicePages } from "@/content/site";

const primaryServices = servicePages.slice(0, 6);

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: company.phoneDisplay,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marielundvej 45C",
      postalCode: "2730",
      addressLocality: "Herlev",
      addressCountry: "DK"
    }
  };

  return (
    <main>
      <section className="bg-[#2f3136]">
        <div className="mx-auto w-[min(1200px,92vw)] py-14 lg:py-20">
          <div className="mb-6 max-w-[860px]">
            <Badge>Siden 1965</Badge>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              BellaSkilte & Print.......
              <span className="mt-2 block">- Vi løfter din synlighed</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-100">
              Bella Skilte & Print A/S leverer skilte, storformatprint, folier og montage for virksomheder i hele
              Danmark. Fra hurtige kampagner til komplette løsninger.
            </p>
          </div>

          <HeroSlider images={heroSliderImages} />

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Link
              href="/kontakt"
              className="flex min-h-[108px] flex-col justify-start rounded-xl border border-slate-600 bg-[#3a3d43] px-4 py-4 transition-colors hover:bg-[#454a52]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Handling</p>
              <p className="mt-1 text-[1.05rem] font-semibold leading-snug text-white">Kontakt os for tilbud</p>
            </Link>
            <a
              href={company.phoneHref}
              className="flex min-h-[108px] flex-col justify-start rounded-xl border border-slate-600 bg-[#3a3d43] px-4 py-4 transition-colors hover:bg-[#454a52]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Kontakt</p>
              <p className="mt-1 text-[1.05rem] font-semibold leading-snug text-white">
                Ring til os på <span className="whitespace-nowrap">{company.phoneDisplay}</span>
              </p>
            </a>
            <div className="flex min-h-[108px] flex-col justify-start rounded-xl border border-slate-600 bg-[#3a3d43] px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Levering</p>
              <p className="mt-1 text-[1.05rem] font-semibold leading-snug text-white">Vi leverer og monterer i hele Skandinavien</p>
            </div>
            <div className="flex min-h-[108px] flex-col justify-start rounded-xl border border-slate-600 bg-[#3a3d43] px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Specialer</p>
              <p className="mt-1 text-[1.05rem] font-semibold leading-snug text-white">Alt i skilte & print</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-[min(1200px,92vw)] gap-5 py-7 text-sm font-semibold text-slate-700 md:grid-cols-3">
          <p>Strategi, produktion og montage samlet ét sted</p>
          <p>Skalerbare løsninger fra enkeltopgaver til landsdækkende kampagner</p>
          <p>Fokus på holdbare materialer, tydelig kommunikation og kvalitet i udførelse</p>
        </div>
      </section>

      <section id="ydelser" className="bg-[#eceff4] py-16 lg:py-20">
          <div className="mx-auto w-[min(1200px,92vw)]">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">Udvalgte ydelser</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Alle dine nuværende ydelser er bevaret i den nye struktur, men præsenteret i et mere overskueligt og
              moderne layout.
            </p>

            <ServiceCardsGrid items={primaryServices} serviceImages={serviceImages} fallbackImage={heroImage} />
          </div>
      </section>

      <section className="mx-auto w-[min(1200px,92vw)] py-16 lg:py-20">
          <h2 className="text-3xl font-black text-ink sm:text-4xl">Lidt inspiration</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Et udvalg af opgaver i høj opløsning, så du kan få en bedre fornemmelse af stil, materialer og kvalitet.
          </p>
          <div className="mt-8">
          <ShowcaseSlider images={frontGallery} />
          </div>
      </section>

      <section className="bg-[#2f3136] py-16 text-white lg:py-20">
          <div className="mx-auto grid w-[min(1200px,92vw)] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Klar til dit næste projekt?</h2>
              <p className="mt-4 max-w-2xl text-slate-200">
                Få sparring om materialer, format og produktionstid. Vi hjælper dig med at vælge den løsning, der giver
                mest synlighed for budgettet.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kontakt">
                  <Button variant="accent" size="lg">
                    Send en forespørgsel
                  </Button>
                </Link>
                <a href={company.phoneHref}>
                  <Button variant="outline" size="lg">
                    {company.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>
            <Card className="rounded-2xl border-white/10 bg-white/5 p-6 text-slate-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">FAQ</p>
              <Accordion type="single" collapsible className="mt-2">
                {faq.map((item, idx) => (
                  <AccordionItem key={item.q} value={`item-${idx}`} className="border-white/15">
                    <AccordionTrigger className="text-left text-white">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-200">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </main>
  );
}
