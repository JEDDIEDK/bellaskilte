"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ServicePage } from "@/content/site";

type Props = {
  items: ServicePage[];
  serviceImages: Record<string, string>;
  fallbackImage: string;
};

export function ServiceCardsGrid({ items, serviceImages, fallbackImage }: Props) {
  const [active, setActive] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const src = encodeURI(serviceImages[item.slug] ?? fallbackImage);
          return (
            <Card key={item.slug} className="overflow-hidden p-0">
              <button
                type="button"
                onClick={() => setActive({ src, title: item.title })}
                className="group relative block h-48 w-full overflow-hidden text-left"
                aria-label={`Åbn stort billede for ${item.title}`}
              >
                <Image
                  src={src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Klik for større
                </span>
              </button>
              <div className="p-5">
                <p className="text-xl font-extrabold text-ink">{item.title}</p>
                <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
                <Link
                  href={`/${item.section}/${item.slug}`}
                  className="mt-4 inline-flex font-semibold text-coral hover:text-ink"
                >
                  Se løsning
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[90] bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-[91] rounded-full border border-white/30 bg-black/40 p-3 text-white"
            aria-label="Luk"
          >
            <X size={26} />
          </button>
          <div className="relative mx-auto h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={active.src} alt={active.title} fill className="object-contain" sizes="100vw" priority />
          </div>
        </div>
      ) : null}
    </>
  );
}
