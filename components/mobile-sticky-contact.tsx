import { company } from "@/content/site";

export function MobileStickyContact() {
  return (
    <div className="fixed bottom-3 left-1/2 z-50 flex w-[min(420px,94vw)] -translate-x-1/2 gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-soft md:hidden">
      <a className="flex-1 rounded-lg bg-ink px-3 py-2 text-center text-sm font-bold text-white" href={company.phoneHref}>
        Ring nu
      </a>
      <a className="flex-1 rounded-lg bg-coral px-3 py-2 text-center text-sm font-bold text-white" href={`mailto:${company.email}`}>
        Få tilbud
      </a>
    </div>
  );
}
