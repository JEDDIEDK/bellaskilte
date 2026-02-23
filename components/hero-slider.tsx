"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export function HeroSlider({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [images.length]);

  function prev() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div className="rounded-2xl border border-slate-600 bg-[#2f3136] p-3 shadow-soft">
      <div className="relative h-[340px] overflow-hidden rounded-xl sm:h-[420px] lg:h-[520px]">
        <Image
          src={encodeURI(images[index])}
          alt={`Bella Skilte slider billede ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority
        />

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-3 text-white backdrop-blur-sm hover:bg-black/50"
          aria-label="Forrige billede"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-3 text-white backdrop-blur-sm hover:bg-black/50"
          aria-label="Næste billede"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-white" : "bg-slate-300/70"}`}
              aria-label={`Gå til billede ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
