import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.bellaskilte.dk" }]
  },
  async redirects() {
    return [
      { source: "/kontakt.aspx", destination: "/kontakt", permanent: true },
      { source: "/om-bella-skilte-print-a-s.aspx", destination: "/om-bella-skilte-print-a-s", permanent: true },
      { source: "/skilte/facadeskilte.aspx", destination: "/skilte/facadeskilte", permanent: true },
      { source: "/skilte/indendoersskilte.aspx", destination: "/skilte/indendoersskilte", permanent: true },
      { source: "/skilte/udendoersskilte.aspx", destination: "/skilte/udendoersskilte", permanent: true },
      { source: "/skilte/montage-af-skilte.aspx", destination: "/skilte/montage-af-skilte", permanent: true },
      { source: "/reklame/folieklaebere.aspx", destination: "/reklame/folieklaebere", permanent: true },
      { source: "/reklame/bannere.aspx", destination: "/reklame/bannere", permanent: true },
      { source: "/reklame/displays.aspx", destination: "/reklame/displays", permanent: true },
      { source: "/reklame/posters.aspx", destination: "/reklame/posters", permanent: true },
      { source: "/reklame/folieindpakning-af-bil--bilreklame.aspx", destination: "/reklame/folieindpakning-af-bil--bilreklame", permanent: true },
      { source: "/reklame/montage.aspx", destination: "/reklame/montage", permanent: true }
    ];
  }
};

export default nextConfig;
