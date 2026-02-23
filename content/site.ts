export type ServicePage = {
  slug: string;
  section: "skilte" | "reklame";
  title: string;
  summary: string;
  body: string[];
  cta: string;
};

export const company = {
  name: "BELLA SKILTE & PRINT A/S",
  phoneDisplay: "36 77 30 40",
  phoneHref: "tel:+4536773040",
  secondaryPhoneDisplay: "26 88 30 02",
  secondaryPhoneHref: "tel:+4526883002",
  email: "michael@bellaskilte.dk",
  address: "Marielundvej 45C, 2730 Herlev",
  cvr: "30234340",
  facebook: "https://www.facebook.com/pages/Bella-Skilte-Og-Print-AS/1542993605943091",
  maps: "https://www.google.com/maps/dir//Marielundvej+45c,+2730+Herlev/@55.7146813,12.4282405,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46525053942ba4e5:0x4e736c3e33676981!2m2!1d12.4304292!2d55.7146783"
};

export const navigation = [
  { label: "Forside", href: "/" },
  { label: "Ydelser", href: "/#ydelser" },
  { label: "Om os", href: "/om-bella-skilte-print-a-s" },
  { label: "Kontakt", href: "/kontakt" }
];

export const servicePages: ServicePage[] = [
  {
    slug: "facadeskilte",
    section: "skilte",
    title: "Facadeskilte",
    summary: "Facadeskilte hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "Vi leverer facadeskilte, logoer og profilskilte til virksomheder, butikker og institutioner.",
      "Løsningen tilpasses bygning, afstand og ønsket synlighed, så udtrykket er både professionelt og holdbart."
    ],
    cta: "Få et tilbud på facadeskilte"
  },
  {
    slug: "indendoersskilte",
    section: "skilte",
    title: "Indendørsskilte",
    summary: "Indendørsskiltning hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "Indendørsskilte til wayfinding, information og branding i kontorer, butikker og fællesarealer.",
      "Vi hjælper med design, materialevalg og montering, så skiltningen fungerer i praksis."
    ],
    cta: "Få rådgivning om indendørsskilte"
  },
  {
    slug: "udendoersskilte",
    section: "skilte",
    title: "Udendørsskilte",
    summary: "Udendørsskilte hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "Robuste udendørsskilte der holder til vind, vejr og daglig eksponering.",
      "Vi producerer skilte med fokus på læsbarhed, synlighed og levetid."
    ],
    cta: "Få pris på udendørsskilte"
  },
  {
    slug: "montage-af-skilte",
    section: "skilte",
    title: "Montage af skilte",
    summary: "Montering af skilte for optimal synlighed og effekt.",
    body: [
      "Montering af skilte, hvilket sikrer korrekt installation og placering af skiltene for optimal synlighed og effekt.",
      "Vi planlægger montage sikkert og effektivt, så driften påvirkes mindst muligt."
    ],
    cta: "Book montage af skilte"
  },
  {
    slug: "folieklaebere",
    section: "reklame",
    title: "Folieklæbere",
    summary: "Folietekster og folieløsninger hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "Folieklæbere til vinduer, vægge, gulve og andre overflader med fokus på stærk visuel identitet.",
      "Egnet til kampagner, dekoration og permanent branding."
    ],
    cta: "Få tilbud på folieklæbere"
  },
  {
    slug: "bannere",
    section: "reklame",
    title: "Bannere",
    summary: "Bannere hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "Storformat bannere til facader, events, stilladser og kampagner.",
      "Vi rådgiver om materialer, ophæng og finish, så banneret passer til formålet."
    ],
    cta: "Bestil bannere"
  },
  {
    slug: "displays",
    section: "reklame",
    title: "Displays",
    summary: "Displays hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "Displays til butiks- og messeløsninger, der løfter produktpræsentation og budskab.",
      "Fra enkeltstående standere til komplette displaymiljøer."
    ],
    cta: "Hør om displays"
  },
  {
    slug: "posters",
    section: "reklame",
    title: "Posters",
    summary: "Posters hos BELLA SKILTE & PRINT A/S i Herlev.",
    body: [
      "4-farve print af div. storformat posters på pænt posterpapir, PP eller folie.",
      "Ideelt til kampagner, butiksvinduer og intern kommunikation."
    ],
    cta: "Bestil storformat posters"
  },
  {
    slug: "folieindpakning-af-bil--bilreklame",
    section: "reklame",
    title: "Bilindpakning",
    summary: "Folieindpakning og bilreklame udføres i Herlev.",
    body: [
      "Bilreklame og folieindpakning der gør firmabilen til en stærk, mobil reklameflade.",
      "Vi tilpasser designet til jeres visuelle identitet og køretøjstype."
    ],
    cta: "Få tilbud på bilreklame"
  },
  {
    slug: "montage",
    section: "reklame",
    title: "Montage",
    summary: "Montering af folie og skilte for korrekt placering.",
    body: [
      "Montering af folie og skilte, hvilket sikrer korrekt installation og placering af folierne og skiltene for optimal synlighed og effekt.",
      "Vi leverer en samlet løsning fra produktion til færdig montage."
    ],
    cta: "Book montage"
  }
];

export const faq = [
  {
    q: "Hvilke opgaver kan I løse?",
    a: "Vi producerer og monterer skilte, folieløsninger, bilreklame, bannere, posters og displays."
  },
  {
    q: "Tilbyder I både design og montage?",
    a: "Ja. Vi kan hjælpe fra idé og layout til færdig produktion og professionel montage."
  },
  {
    q: "Kan vi få et hurtigt tilbud?",
    a: "Ja. Ring eller send en forespørgsel via kontaktformularen, så vender vi hurtigt tilbage."
  }
];

const mediaBase = "https://www.bellaskilte.dk";

export const heroImage = `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/profiloptik_451.jpg`;
export const bellaLogo = `${mediaBase}/CustomerData/Files/Images/Archive/4-logo/logo_2_167.png`;
export const heroSliderImages = [
  `${mediaBase}/CustomerData/Files/Images/Gallery/folieklæbere_2239/img_95621_295.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/folieklæbere_2239/folie_(8)_343.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/folieklæbere_2239/img_221511_204.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/folieklæbere_2239/img_917511_208.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/5_128.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/3_120.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/2_116.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/4_124.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/bilreklame_2238/img_19231_236.jpg`,
  `${mediaBase}/CustomerData/Files/Images/Gallery/udendørsskilte_2236/udendoers_411.jpg`
];

export const frontGallery = [
  ...Array.from({ length: 8 }, (_, index) => `/images/services/facadeskilte/${String(index + 1).padStart(2, "0")}.jpg`),
  ...Array.from({ length: 8 }, (_, index) => `/images/services/folieklaebere/${String(index + 1).padStart(2, "0")}.jpg`),
  ...Array.from({ length: 4 }, (_, index) => `/images/services/folieindpakning-af-bil--bilreklame/${String(index + 1).padStart(2, "0")}.jpg`),
  ...Array.from({ length: 4 }, (_, index) => `/images/services/bannere/${String(index + 1).padStart(2, "0")}.jpg`)
];

const serviceGalleryCounts: Record<string, number> = {
  facadeskilte: 16,
  indendoersskilte: 3,
  udendoersskilte: 2,
  "montage-af-skilte": 6,
  folieklaebere: 18,
  bannere: 4,
  displays: 2,
  posters: 4,
  "folieindpakning-af-bil--bilreklame": 7,
  montage: 7
};

const serviceGalleryPaths = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/images/services/${slug}/${String(index + 1).padStart(2, "0")}.jpg`);

export const serviceGalleries: Record<string, string[]> = Object.fromEntries(
  Object.entries(serviceGalleryCounts).map(([slug, count]) => [slug, serviceGalleryPaths(slug, count)])
);

export const serviceImages: Record<string, string> = {
  facadeskilte: `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/5_128.jpg`,
  indendoersskilte: `${mediaBase}/CustomerData/Files/Images/Gallery/indendørsskiltning_1702/iskilt_355.jpg`,
  udendoersskilte: `${mediaBase}/CustomerData/Files/Images/Gallery/udendørsskilte_2236/udendoers_411.jpg`,
  "montage-af-skilte": `${mediaBase}/CustomerData/Files/Images/Gallery/facadeskilte_1688/img_5092_283.jpg`,
  folieklaebere: `${mediaBase}/CustomerData/Files/Images/Gallery/folieklæbere_2239/img_95621_295.jpg`,
  bannere: `${mediaBase}/CustomerData/Files/Images/Gallery/bannere_1716/banner_399.jpg`,
  displays: `${mediaBase}/CustomerData/Files/Images/Gallery/displays_2237/display_415.jpg`,
  posters: `${mediaBase}/CustomerData/Files/Images/Gallery/bannere_1716/banner_(2)_403.jpg`,
  "folieindpakning-af-bil--bilreklame": `${mediaBase}/CustomerData/Files/Images/Gallery/bilreklame_2238/img_19231_236.jpg`,
  montage: `${mediaBase}/CustomerData/Files/Images/Gallery/bilreklame_2238/img_0210_228.jpg`
};
