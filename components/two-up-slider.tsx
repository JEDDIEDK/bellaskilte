"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  title: string;
};

export function TwoUpSlider({ images, title }: Props) {
  const pages = useMemo(() => {
    const grouped: string[][] = [];
    for (let i = 0; i < images.length; i += 2) {
      grouped.push([images[i], images[i + 1] ?? images[0]]);
    }
    return grouped;
  }, [images]);
  const pageCount = Math.max(1, pages.length);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (pageCount < 2) return;
    const timer = window.setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pageCount);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  function prev() {
    setPageIndex((prev) => (prev - 1 + pageCount) % pageCount);
  }

  function next() {
    setPageIndex((prev) => (prev + 1) % pageCount);
  }

  if (!pages.length) return null;
  const activePair = pages[pageIndex];

  return (
    <div className="rounded-2xl border border-slate-300 bg-[#2f3136] p-3 shadow-soft">
      <div className="relative overflow-hidden rounded-xl">
        <div key={`slide-${pageIndex}`} className="grid grid-cols-2 gap-3">
          {activePair.map((img, offset) => (
            <div
              key={`${img}-${offset}`}
              className="relative h-72 overflow-hidden rounded-lg border border-white/10 sm:h-[420px]"
            >
              <Image
                src={img}
                alt={`${title} foto ${pageIndex * 2 + offset + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={pageIndex === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-3 text-white backdrop-blur-sm hover:bg-black/50"
          aria-label="Forrige billeder"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-3 text-white backdrop-blur-sm hover:bg-black/50"
          aria-label="Næste billeder"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-sm">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => setPageIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === pageIndex ? "bg-white" : "bg-slate-300/70"}`}
              aria-label={`Gå til slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
