import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyContact } from "@/components/mobile-sticky-contact";
import { Tracking } from "@/components/tracking";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bellaskilte.dk"),
  title: "Bella Skilte | Moderne skilte, print og montage",
  description: "Ny, moderne udgave af Bellaskilte med alle kerneydelser, kontaktmuligheder og SEO-optimeret struktur.",
  openGraph: {
    title: "Bella Skilte",
    description: "Skilte, print, bilreklame og montage i Herlev.",
    type: "website",
    locale: "da_DK"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>
        <Tracking />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileStickyContact />
      </body>
    </html>
  );
}
