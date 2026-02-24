"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ComponentType } from "react";
import { useState } from "react";
import { Car, ChevronDown, Facebook, Flag, ImageIcon, LayoutPanelLeft, Menu, Monitor, Package, PanelsTopLeft, Sticker, Store, X } from "lucide-react";
import { bellaLogo, company, navigation, servicePages } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [ydelserOpen, setYdelserOpen] = useState(false);
  const [mobileYdelserOpen, setMobileYdelserOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const skilte = servicePages.filter((item) => item.section === "skilte");
  const reklame = servicePages.filter((item) => item.section === "reklame");
  const serviceStyle: Record<
    string,
    {
      icon: ComponentType<{ size?: number; className?: string; style?: CSSProperties }>;
      iconClass: string;
      activeBg: string;
      activeText: string;
      iconActive: string;
    }
  > = {
    facadeskilte: { icon: Store, iconClass: "text-sky-600", activeBg: "#dbeafe", activeText: "#0c4a6e", iconActive: "#075985" },
    indendoersskilte: { icon: LayoutPanelLeft, iconClass: "text-emerald-600", activeBg: "#d1fae5", activeText: "#064e3b", iconActive: "#065f46" },
    udendoersskilte: { icon: Flag, iconClass: "text-amber-600", activeBg: "#fef3c7", activeText: "#78350f", iconActive: "#92400e" },
    "montage-af-skilte": { icon: PanelsTopLeft, iconClass: "text-rose-600", activeBg: "#ffe4e6", activeText: "#881337", iconActive: "#9f1239" },
    folieklaebere: { icon: Sticker, iconClass: "text-violet-600", activeBg: "#ede9fe", activeText: "#4c1d95", iconActive: "#5b21b6" },
    bannere: { icon: Flag, iconClass: "text-cyan-600", activeBg: "#cffafe", activeText: "#164e63", iconActive: "#155e75" },
    displays: { icon: Monitor, iconClass: "text-lime-700", activeBg: "#ecfccb", activeText: "#365314", iconActive: "#3f6212" },
    posters: { icon: ImageIcon, iconClass: "text-fuchsia-600", activeBg: "#fae8ff", activeText: "#701a75", iconActive: "#86198f" },
    "folieindpakning-af-bil--bilreklame": { icon: Car, iconClass: "text-orange-600", activeBg: "#ffedd5", activeText: "#7c2d12", iconActive: "#9a3412" },
    montage: { icon: Package, iconClass: "text-indigo-600", activeBg: "#e0e7ff", activeText: "#312e81", iconActive: "#3730a3" }
  };

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-28 w-[min(1120px,92vw)] items-center justify-between md:h-32">
        <Link className="relative flex items-center gap-3 text-lg font-black tracking-tight text-ink" href="/">
          <Image
            src={encodeURI(bellaLogo)}
            alt="Bella Skilte logo"
            width={480}
            height={168}
            className="relative z-10 h-[195px] w-auto object-contain translate-y-2 sm:h-[229px] sm:translate-y-4 md:h-[257px] md:translate-y-8"
          />
        </Link>
        <button className="rounded-lg border p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) =>
            item.label === "Ydelser" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setYdelserOpen(true)}
                onMouseLeave={() => setYdelserOpen(false)}
              >
                <Link href={item.href} className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-ink">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${ydelserOpen ? "rotate-180" : ""}`} />
                </Link>

                <div
                  className={`absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl transition-all ${
                    ydelserOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Skilte</p>
                      <div className="mt-2 grid gap-1">
                        {skilte.map((service) => (
                          (() => {
                            const style = serviceStyle[service.slug];
                            const Icon = style?.icon ?? PanelsTopLeft;
                            const isActive = hoveredService === service.slug;
                            return (
                              <Link
                                key={service.slug}
                                href={`/${service.section}/${service.slug}`}
                                className="inline-flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-700 transition-all duration-150"
                                onMouseEnter={() => setHoveredService(service.slug)}
                                onMouseLeave={() => setHoveredService(null)}
                                onFocus={() => setHoveredService(service.slug)}
                                onBlur={() => setHoveredService(null)}
                                style={isActive ? { backgroundColor: style?.activeBg, color: style?.activeText } : undefined}
                              >
                                <Icon
                                  size={16}
                                  className={`transition-colors ${isActive ? "" : (style?.iconClass ?? "text-slate-500")}`}
                                  style={isActive ? { color: style?.iconActive } : undefined}
                                />
                                {service.title}
                              </Link>
                            );
                          })()
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Reklame</p>
                      <div className="mt-2 grid gap-1">
                        {reklame.map((service) => (
                          (() => {
                            const style = serviceStyle[service.slug];
                            const Icon = style?.icon ?? PanelsTopLeft;
                            const isActive = hoveredService === service.slug;
                            return (
                              <Link
                                key={service.slug}
                                href={`/${service.section}/${service.slug}`}
                                className="inline-flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-700 transition-all duration-150"
                                onMouseEnter={() => setHoveredService(service.slug)}
                                onMouseLeave={() => setHoveredService(null)}
                                onFocus={() => setHoveredService(service.slug)}
                                onBlur={() => setHoveredService(null)}
                                style={isActive ? { backgroundColor: style?.activeBg, color: style?.activeText } : undefined}
                              >
                                <Icon
                                  size={16}
                                  className={`transition-colors ${isActive ? "" : (style?.iconClass ?? "text-slate-500")}`}
                                  style={isActive ? { color: style?.iconActive } : undefined}
                                />
                                {service.title}
                              </Link>
                            );
                          })()
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} className="font-semibold text-slate-700 hover:text-ink" href={item.href}>
                {item.label}
              </Link>
            )
          )}
          <a
            href={company.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:text-ink"
            aria-label="Bella Skilte på Facebook"
          >
            <Facebook size={16} />
          </a>
        </nav>
      </div>
      {open ? (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto grid w-[min(1120px,92vw)] gap-2 py-3">
            {navigation.map((item) =>
              item.label === "Ydelser" ? (
                <div key={item.href} className="rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setMobileYdelserOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-2 font-semibold text-slate-700"
                  >
                    Ydelser
                    <ChevronDown size={16} className={`transition-transform ${mobileYdelserOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileYdelserOpen ? (
                    <div className="grid gap-1 border-t border-slate-200 p-2">
                      {servicePages.map((service) => (
                        (() => {
                          const style = serviceStyle[service.slug];
                          const Icon = style?.icon ?? PanelsTopLeft;
                          const isActive = hoveredService === service.slug;
                          return (
                            <Link
                              key={service.slug}
                              className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-slate-700 transition-all duration-150"
                              href={`/${service.section}/${service.slug}`}
                              onClick={() => setOpen(false)}
                              onMouseEnter={() => setHoveredService(service.slug)}
                              onMouseLeave={() => setHoveredService(null)}
                              onFocus={() => setHoveredService(service.slug)}
                              onBlur={() => setHoveredService(null)}
                              style={isActive ? { backgroundColor: style?.activeBg, color: style?.activeText } : undefined}
                            >
                              <Icon
                                size={16}
                                className={`transition-colors ${isActive ? "" : (style?.iconClass ?? "text-slate-500")}`}
                                style={isActive ? { color: style?.iconActive } : undefined}
                              />
                              {service.title}
                            </Link>
                          );
                        })()
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={item.href} className="py-2 font-semibold text-slate-700" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
            <a
              href={company.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 font-semibold text-slate-700"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
