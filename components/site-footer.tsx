"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bellaLogo, company } from "@/content/site";

export function SiteFooter() {
  const [open, setOpen] = useState(true);

  return (
    <footer className="bg-white text-slate-100">
      <div className="mx-auto w-[min(1200px,92vw)] py-10">
        <section
          role="button"
          tabIndex={0}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setOpen((v) => !v);
            }
          }}
          aria-expanded={open}
          aria-controls="footer-group"
          className="cursor-pointer rounded-2xl border border-slate-600 bg-[#2f3136] p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold lowercase tracking-wide text-slate-200">
              info, adresse, cvr og det med småt
            </h3>
            <span className="text-2xl leading-none">{open ? "-" : "+"}</span>
          </div>

          {open ? (
            <div id="footer-group" className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-500 bg-[#3a3d43] px-4 py-3">
                <p className="text-2xl font-bold">Bella Skilte</p>
                <div className="mt-4">
                  <Image
                    src={encodeURI(bellaLogo)}
                    alt="Bella Skilte logo"
                    width={180}
                    height={80}
                    className="h-auto w-40 object-contain"
                  />
                  <p className="mt-3 text-sm text-slate-300">Skilte, print og montage med høj kvalitet og hurtig levering.</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-500 bg-[#3a3d43] px-4 py-3">
                <p className="text-2xl font-bold">Kontakt</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>
                    <div className="group relative inline-block">
                      <a
                        href={company.maps}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-help underline decoration-dotted underline-offset-4 hover:text-white"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {company.address}
                      </a>
                      <div className="absolute left-0 top-full z-20 mt-2 hidden w-80 rounded-xl border border-white/20 bg-[#3f434a] p-3 shadow-soft group-hover:block group-focus-within:block">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">Google Maps</p>
                        <div className="overflow-hidden rounded-lg">
                          <iframe
                            title="Bella Skilte map preview"
                            className="h-36 w-full"
                            loading="lazy"
                            src="https://www.google.com/maps?q=Marielundvej+45C,+2730+Herlev&output=embed"
                          />
                        </div>
                        <a
                          href={company.maps}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-xs font-semibold text-white underline underline-offset-4"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Åbn i Google Maps
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href={company.phoneHref}
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {company.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {company.email}
                    </a>
                  </li>
                  <li>CVR: {company.cvr}</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-500 bg-[#3a3d43] px-4 py-3">
                <p className="text-2xl font-bold">Links</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>
                    <Link href="/" className="hover:text-white" onClick={(event) => event.stopPropagation()}>
                      Forside
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/om-bella-skilte-print-a-s"
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Om os
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="hover:text-white" onClick={(event) => event.stopPropagation()}>
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <a
                      href={company.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/privatlivspolitik"
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Privatlivspolitik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookiepolitik"
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Cookiepolitik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/handelsbetingelser"
                      className="hover:text-white"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Handelsbetingelser
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </footer>
  );
}
