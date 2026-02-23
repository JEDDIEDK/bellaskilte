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
      "Løsningen tilpasses bygning, afstand og ønsket synlighed, så udtrykket er både professionelt og holdbart.",
      "Vi rådgiver om materialer, lys, montering og placering, så dit facadeskilt fungerer i praksis hele året.",
      "Facadeskilte produceres i høj kvalitet med fokus på læsbarhed, visuel identitet og lang levetid.",
      "Uanset om du har brug for et enkelt butiksskilt eller en komplet facadeopgradering, hjælper vi fra idé til færdig montage."
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
      "Vi hjælper med design, materialevalg og montering, så skiltningen fungerer i praksis.",
      "Indendørsskiltning kan bruges til reception, mødelokaler, afdelinger, sikkerhedsinformation og kundeguide.",
      "Vi sikrer ensartet visuel stil, så skiltene understøtter jeres brand og gør hverdagen nemmere for både kunder og medarbejdere.",
      "Fra små navneskilte til komplette skiltekoncepter leverer vi løsninger, der skaber overblik og professionalisme."
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
      "Vi producerer skilte med fokus på læsbarhed, synlighed og levetid.",
      "Udendørsskiltning kræver korrekt materialevalg, overfladebehandling og montering for at holde sig flot over tid.",
      "Vi rådgiver om størrelse, kontrast og placering, så budskabet kan ses tydeligt fra den rigtige afstand.",
      "Løsningen tilpasses både bygning, omgivelser og formål, så dit udendørsskilt giver maksimal værdi."
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
      "Vi planlægger montage sikkert og effektivt, så driften påvirkes mindst muligt.",
      "Vores montageteam arbejder struktureret med opmåling, forberedelse og afslutning, så resultatet står skarpt fra dag ét.",
      "Vi håndterer både enkeltopgaver og større montageforløb på tværs af flere lokationer.",
      "Når skilte monteres korrekt, får du både bedre holdbarhed, bedre synlighed og et mere professionelt helhedsindtryk."
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
      "Egnet til kampagner, dekoration og permanent branding.",
      "Vi producerer folieløsninger i høj printkvalitet med farver, der matcher jeres grafiske profil.",
      "Folieklæbere er en fleksibel måde at skabe synlighed i butik, kontor, showroom eller på messer.",
      "Du kan få både midlertidige kampagnefolier og permanente løsninger med professionel montering."
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
      "Vi rådgiver om materialer, ophæng og finish, så banneret passer til formålet.",
      "Et banner er en effektiv løsning, når du vil kommunikere hurtigt og tydeligt i stort format.",
      "Vi tilbyder bannerløsninger til både indendørs og udendørs brug med fokus på holdbarhed og skarp printkvalitet.",
      "Uanset om du skal bruge ét banner eller en serie, leverer vi en løsning, der er klar til montering."
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
      "Fra enkeltstående standere til komplette displaymiljøer.",
      "Et godt display skaber opmærksomhed og hjælper kunder med at forstå produktets værdi med det samme.",
      "Vi designer og producerer displays, der passer til både kampagner, sæsonvarer og faste præsentationer.",
      "Løsningen tilpasses format, materiale og placering, så den fungerer optimalt i dit salgsmiljø."
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
      "Ideelt til kampagner, butiksvinduer og intern kommunikation.",
      "Posters er en enkel og effektiv løsning til både kortvarige kampagner og længerevarende visuelle budskaber.",
      "Vi hjælper med korrekt format, papirtype og finish, så posterløsningen matcher dit formål og dit budget.",
      "Fra enkle informationsposters til stærke kampagnevisuals leverer vi skarpt print med hurtig levering."
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
      "Vi tilpasser designet til jeres visuelle identitet og køretøjstype.",
      "Bilindpakning giver høj synlighed i lokalområdet og gør hver køretur til en aktiv del af jeres markedsføring.",
      "Vi producerer og monterer folie med fokus på holdbarhed, præcision og et professionelt slutresultat.",
      "Uanset om du ønsker delvis eller fuld indpakning, får du en løsning der passer til både brand og budget."
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
      "Vi leverer en samlet løsning fra produktion til færdig montage.",
      "Professionel montage er afgørende for både udtryk, holdbarhed og funktion i den daglige brug.",
      "Vi planlægger opgaven effektivt, så installationen gennemføres sikkert og med mindst mulig forstyrrelse.",
      "Med én samlet leverandør får du bedre koordinering, hurtigere levering og et stærkere slutresultat."
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
