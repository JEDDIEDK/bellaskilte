"use client";

import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { servicePages } from "@/content/site";

type FormState = { name: string; email: string; phone: string; service: string; message: string };

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", service: "", message: "" });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [attachmentError, setAttachmentError] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const editorRef = useRef<HTMLDivElement | null>(null);
  const serviceOptions = [...servicePages.map((item) => item.title), "Andre"];
  const maxFileSizeMb = 10;
  const maxFileSizeBytes = maxFileSizeMb * 1024 * 1024;
  const messagePlainTextLength = form.message.replace(/<[^>]*>/g, "").trim().length;

  const valid = useMemo(
    () =>
      form.name.trim().length > 1 &&
      /.+@.+\..+/.test(form.email) &&
      form.service.trim().length > 0 &&
      messagePlainTextLength > 8 &&
      !attachmentError,
    [form, attachmentError, messagePlainTextLength]
  );

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    if (!file) {
      setAttachment(null);
      setAttachmentError("");
      return;
    }
    if (file.size > maxFileSizeBytes) {
      setAttachment(null);
      setAttachmentError(`Filen er for stor. Maks ${maxFileSizeMb} MB.`);
      return;
    }
    setAttachment(file);
    setAttachmentError("");
  }

  function applyFormat(command: string, value?: string) {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setForm((prev) => ({ ...prev, message: editorRef.current?.innerHTML ?? "" }));
    }
  }

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
      <select
        className="w-full rounded-lg border bg-white p-3"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      >
        <option value="">Vælg ydelse</option>
        {serviceOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="overflow-hidden rounded-lg border">
        <div className="flex flex-wrap items-center gap-2 border-b bg-slate-50 p-2">
          <button type="button" className="rounded border bg-white px-2 py-1 text-xs font-semibold" onClick={() => applyFormat("bold")}>Fed</button>
          <button type="button" className="rounded border bg-white px-2 py-1 text-xs font-semibold" onClick={() => applyFormat("italic")}>Kursiv</button>
          <button type="button" className="rounded border bg-white px-2 py-1 text-xs font-semibold" onClick={() => applyFormat("underline")}>Understreg</button>
          <button type="button" className="rounded border bg-white px-2 py-1 text-xs font-semibold" onClick={() => applyFormat("insertUnorderedList")}>Liste</button>
          <label className="inline-flex items-center gap-2 rounded border bg-white px-2 py-1 text-xs font-semibold">
            Farve
            <input type="color" defaultValue="#1f2937" onChange={(e) => applyFormat("foreColor", e.target.value)} />
          </label>
        </div>
        <div
          ref={editorRef}
          contentEditable
          className="min-h-36 w-full p-3 focus:outline-none"
          onInput={(e) => setForm({ ...form, message: (e.target as HTMLDivElement).innerHTML })}
          suppressContentEditableWarning
          data-placeholder="Beskriv opgaven"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="attachment">
          Vedhæft fil (valgfrit, maks 10 MB)
        </label>
        <input
          id="attachment"
          type="file"
          className="w-full rounded-lg border p-3 text-sm"
          onChange={onFileChange}
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.zip"
        />
        {attachment ? <p className="mt-2 text-xs text-slate-600">Valgt fil: {attachment.name}</p> : null}
        <p className="mt-2 text-xs text-slate-600">
          Filer over 10 MB kan sendes via{" "}
          <a
            href="https://www.wetransfer.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-coral underline underline-offset-2"
          >
            www.wetransfer.com
          </a>.
        </p>
        {attachmentError ? <p className="mt-2 text-xs font-semibold text-red-600">{attachmentError}</p> : null}
      </div>
      <Button type="submit">Send en forespørgsel</Button>
      {status === "error" ? <p className="text-sm font-semibold text-red-600">Udfyld navn, gyldig e-mail, vælg ydelse og skriv en besked på mindst 8 tegn.</p> : null}
      {status === "success" ? <p className="text-sm font-semibold text-emerald-700">Tak. Din forespørgsel er registreret{attachment ? ` med filen "${attachment.name}"` : ""}. TODO: Kobl til mail/API.</p> : null}
    </form>
  );
}
