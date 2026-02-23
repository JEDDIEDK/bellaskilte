"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = { name: string; email: string; phone: string; message: string };

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const valid = useMemo(() => form.name.trim().length > 1 && /.+@.+\..+/.test(form.email) && form.message.trim().length > 8, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) {
      setStatus("error");
      return;
    }
    await new Promise((r) => setTimeout(r, 500));
    setStatus("success");
  }

  return (
    <form className="space-y-4 rounded-2xl border bg-white p-6" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-lg border p-3" placeholder="Navn" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="rounded-lg border p-3" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <input className="w-full rounded-lg border p-3" placeholder="Telefon" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <textarea className="min-h-36 w-full rounded-lg border p-3" placeholder="Beskriv opgaven" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <Button type="submit">Send en forespørgsel</Button>
      {status === "error" ? <p className="text-sm font-semibold text-red-600">Udfyld navn, gyldig e-mail og en besked på mindst 8 tegn.</p> : null}
      {status === "success" ? <p className="text-sm font-semibold text-emerald-700">Tak. Din forespørgsel er registreret. TODO: Kobl til mail/API.</p> : null}
    </form>
  );
}
