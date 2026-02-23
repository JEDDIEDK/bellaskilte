"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
};

export function ShowcaseSlider({ images }: Props) {
  const [start, setStart] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(4);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxStart = useMemo(() => Math.max(0, images.length - perView), [images.length, perView]);

  useEffect(() => {
    if (start > maxStart) setStart(maxStart);
  }, [maxStart, start]);

  useEffect(() => {
    if (active === null) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") setActive((prev) => (prev === null ? prev : (prev - 1 + images.length) % images.length));
      if (event.key === "ArrowRight") setActive((prev) => (prev === null ? prev : (prev + 1) % images.length));
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${start * (100 / perView)}%)` }}
          >
            {images.map((src, idx) => (
              <button
                key={src}
                type="button"
                className="group relative p-2 text-left"
                style={{ flex: `0 0 ${100 / perView}%` }}
                onClick={() => setActive(idx)}
                aria-label={`Åbn billede ${idx + 1}`}
              >
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image src={encodeURI(src)} alt={`Showcase ${idx + 1}`} fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40 group-focus-visible:bg-black/40" />
                  <p className="absolute bottom-3 left-3 rounded-md bg-black/65 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    Klik for at se større
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setStart((v) => Math.max(0, v - 1))}
          disabled={start === 0}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 p-3 disabled:opacity-40"
          aria-label="Forrige"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => setStart((v) => Math.min(maxStart, v + 1))}
          disabled={start === maxStart}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 p-3 disabled:opacity-40"
          aria-label="Næste"
        >
          <ChevronRight />
        </button>
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-[90] bg-black/85 p-4 sm:p-8" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-[91] rounded-full border border-white/30 bg-black/40 p-3 text-white"
            aria-label="Luk"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={() => setActive((prev) => (prev === null ? prev : (prev - 1 + images.length) % images.length))}
            className="absolute left-4 top-1/2 z-[91] -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-4 text-white"
            aria-label="Forrige stort billede"
          >
            <ChevronLeft size={38} />
          </button>
          <button
            type="button"
            onClick={() => setActive((prev) => (prev === null ? prev : (prev + 1) % images.length))}
            className="absolute right-4 top-1/2 z-[91] -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-4 text-white"
            aria-label="Næste stort billede"
          >
            <ChevronRight size={38} />
          </button>

          <div className="relative mx-auto h-full w-full max-w-6xl">
            <Image
              src={encodeURI(images[active])}
              alt={`Stort billede ${active + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
