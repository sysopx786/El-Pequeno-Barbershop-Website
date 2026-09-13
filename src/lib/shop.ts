export const SHOP = {
  name: "El Pequeño Barbershop",
  shortName: "El Pequeño",
  phone: "(610) 268-9290",
  phoneTel: "+16102689290",
  phoneAlt: "(484) 794-9965",
  phoneAltTel: "+14847949965",
  sms: "(484) 794-9965",
  smsHref: "sms:+14847949965",
  address: "603 N 10th St",
  city: "Reading, PA 19604",
  mapsQuery: "603 N 10th St, Reading, PA 19604",
  mapsUrl:
    "https://www.google.com/maps/place/El+Peque%C3%B1o+Barbershop/@40.3445208,-75.9177752,17z/data=!4m6!3m5!1s0x89c67748ca310c6d:0x42f2344c7e364043!8m2!3d40.3445208!4d-75.9177752!16s%2Fg%2F1pxwfq9w0",
  mapsEmbed:
    "https://maps.google.com/maps?q=603%20N%2010th%20St%2C%20Reading%20PA%2019604&z=16&output=embed",
  rating: 4.7,
  reviewCount: 73,
  instagramHandle: "elpequenobarbershop01",
  instagramUrl: "https://www.instagram.com/elpequenobarbershop01/",
  tiktokHandle: "elpequenobarbershop01",
  tiktokUrl: "https://www.tiktok.com/@elpequenobarbershop01",
  googleReviewsUrl:
    "https://www.google.com/maps/place/El+Peque%C3%B1o+Barbershop/@40.3445208,-75.9177752,17z/data=!4m8!3m7!1s0x89c67748ca310c6d:0x42f2344c7e364043!8m2!3d40.3445208!4d-75.9177752!9m1!1b1!16s%2Fg%2F1pxwfq9w0",
  googleWriteReviewUrl:
    "https://www.google.com/search?q=El+Peque%C3%B1o+Barbershop%2C+603+N+10th+St%2C+Reading%2C+PA&ludocid=4823975654006865987#lrd=0x89c67748ca310c6d:0x42f2344c7e364043,3,,,",
  ownerName: "Edwin Torres",
  ownerEmail: "edwintorres34@gmail.com",
} as const;

export const WEEK_HOURS = [
  { key: "sun", jsonLd: "Sunday", open: 10 * 60, close: 16 * 60 },
  { key: "mon", jsonLd: "Monday", open: 9 * 60, close: 19 * 60 },
  { key: "tue", jsonLd: "Tuesday", open: 9 * 60, close: 19 * 60 },
  { key: "wed", jsonLd: "Wednesday", open: 9 * 60, close: 17 * 60 },
  { key: "thu", jsonLd: "Thursday", open: 9 * 60, close: 19 * 60 },
  { key: "fri", jsonLd: "Friday", open: 8 * 60, close: 20 * 60 },
  { key: "sat", jsonLd: "Saturday", open: 8 * 60, close: 20 * 60 },
] as const;

export type WeekdayKey = (typeof WEEK_HOURS)[number]["key"];

export function minutesToClock(mins: number): string {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const suffix = h24 < 12 ? "AM" : "PM";
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Header chip: "10 AM" instead of "10:00 AM". */
export function minutesToClockCompact(mins: number): string {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const suffix = h24 < 12 ? "AM" : "PM";
  const h12 = h24 % 12 || 12;
  if (m === 0) return `${h12} ${suffix}`;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function minutesToJsonLd(mins: number): string {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h24).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export const HOUR_LABELS = WEEK_HOURS.map((day) => ({
  open: minutesToClock(day.open),
  close: minutesToClock(day.close),
}));

export function hoursByKey(key: WeekdayKey) {
  const day = WEEK_HOURS.find((row) => row.key === key);
  if (!day) throw new Error(`Unknown weekday ${key}`);
  return {
    ...day,
    openLabel: minutesToClock(day.open),
    closeLabel: minutesToClock(day.close),
  };
}

export function openingHoursJsonLd() {
  return WEEK_HOURS.map((day) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: day.jsonLd,
    opens: minutesToJsonLd(day.open),
    closes: minutesToJsonLd(day.close),
  }));
}


export const SERVICES = [
  { id: "mens", mins: 40 },
  { id: "kids", mins: 30 },
  { id: "braids", mins: 90 },
  { id: "design", mins: 25 },
  { id: "lineup", mins: 15 },
  { id: "beard", mins: 20 },
  { id: "mohawk", mins: 35 },
  { id: "brows", mins: 10 },
  { id: "shave", mins: 30 },
  { id: "combo", mins: 55 },
] as const;

export type ServiceId = (typeof SERVICES)[number]["id"];

export const REVIEWS = [
  {
    name: "Melquiades Santana",
    stars: 5,
    quoteEn:
      "Since I arrived in this city I found personalized service. The guys at the barbershop take excellent care of you — especially the manager and owner. I’ve been coming almost three years.",
    quoteEs:
      "Desde que llegué a esta ciudad encontré un servicio personalizado, los muchachos de la barbería brindan un excelente servicio. Especialmente el gerente y propietario. Ya tengo casi tres años disfrutando de sus servicios.",
    quotePt:
      "Desde que cheguei nesta cidade encontrei um atendimento personalizado. Os rapazes da barbearia cuidam muito bem de você — especialmente o gerente e o dono. Já venho há quase três anos.",
  },
  {
    name: "Juan Gonzalez",
    stars: 5,
    quoteEn: "The best of the best — they’re part of my family. Eleven years of good service.",
    quoteEs: "La mejor de la mejor, ya parte de mi familia porque ya son 11 años tratándome con el buen servicio.",
    quotePt: "O melhor dos melhores — já fazem parte da minha família. Onze anos de bom atendimento.",
  },
  {
    name: "Kevin Paula",
    stars: 5,
    quoteEn:
      "Great place to get a clean gentleman’s haircut. Kids friendly — I always go there with my children. The staff is bilingual, which helps if other shops are hard to communicate with. Strongly recommend.",
    quoteEs:
      "Excelente lugar para un corte de caballero. Amigable con los niños — siempre voy con mis hijos. El personal es bilingüe, lo que ayuda si en otras barberías cuesta comunicarse. Lo recomiendo mucho.",
    quotePt:
      "Ótimo lugar para um corte de cavalheiro. Amigável para crianças — sempre vou com os meus filhos. A equipe é bilíngue, o que ajuda se em outras barbearias é difícil se comunicar. Recomendo muito.",
  },
  {
    name: "Mike Ammouri",
    stars: 5,
    quoteEn:
      "This was a great experience, my first time here. The guys are very nice and very detailed. I came with my nephew and son so we all got haircuts — we’re very happy. They got our business.",
    quoteEs:
      "Gran experiencia, mi primera vez. Los muchachos son amables y muy detallistas. Vine con mi sobrino y mi hijo para que nos cortaran a todos — salimos contentos. Ya somos clientes.",
    quotePt:
      "Foi uma ótima experiência, minha primeira vez. Os rapazes são muito legais e detalhistas. Fui com meu sobrinho e meu filho para todos cortarem o cabelo — saímos muito felizes. Já somos clientes.",
  },
  {
    name: "Darlyn Mejia",
    stars: 5,
    quoteEn:
      "One of the best places to get a haircut. Cheap, great vibe, and a good time. I did a high fade — the best high fade I’ve gotten from a barber.",
    quoteEs:
      "De los mejores lugares para cortarse el pelo. Precio bueno, buena vibra y se pasa bien. Pedí un high fade — el mejor que me ha hecho un barbero.",
    quotePt:
      "Um dos melhores lugares para cortar o cabelo. Preço bom, ótima vibe e a gente se diverte. Pedi um high fade — o melhor que já ganhei de um barbeiro.",
  },
  {
    name: "Cam Towing",
    stars: 5,
    quoteEn:
      "El Pequeño has to be one of the best barbers in Reading, PA. Edwin — they call him El Pequeño — is very good and professional. Clean, and he takes his time to give the cut you want. All the barbers here are skilled. My kids get their hair cut here too. Never had any complaints.",
    quoteEs:
      "El Pequeño es de los mejores barberos de Reading, PA. Edwin — le dicen El Pequeño — es muy bueno y profesional. Limpio, y se toma el tiempo para darte el corte que quieres. Todos los barberos del local son hábiles. Mis hijos también se cortan aquí. Nunca una queja.",
    quotePt:
      "O El Pequeño é um dos melhores barbeiros de Reading, PA. O Edwin — chamam ele de El Pequeño — é muito bom e profissional. Limpo, e ele tem paciência para fazer o corte que você quer. Todos os barbeiros da loja são habilidosos. Meus filhos também cortam aqui. Nunca tive reclamação.",
  },
  {
    name: "Bryant Goodwin",
    stars: 5,
    quoteEn: "Owner is a really good guy and I got a great haircut. I will be going back.",
    quoteEs: "El dueño es un tipo muy bueno y me hicieron un gran corte. Voy a volver.",
    quotePt: "O dono é um cara muito legal e eu saí com um ótimo corte. Vou voltar.",
  },
  {
    name: "Mario Batista",
    stars: 5,
    quoteEn: "Amazing cuts, great chairs. And a shout to Gabriel, my barber.",
    quoteEs: "Cortes increíbles, sillas de lujo. Un saludo a Gabriel, mi barbero.",
    quotePt: "Cortes incríveis, cadeiras ótimas. Um salve pro Gabriel, meu barbeiro.",
  },
  {
    name: "J.R. Hurtado",
    stars: 5,
    quoteEn: "Love this place. Everyone is friendly and they have great barbers.",
    quoteEs: "Me encanta este lugar. Todos son amables y tienen excelentes barberos.",
    quotePt: "Adoro esse lugar. Todo mundo é simpático e eles têm ótimos barbeiros.",
  },
  {
    name: "Phil Rookard",
    stars: 5,
    quoteEn:
      "Good hospitality. Some of the best barbers around — always warm and welcoming. Try them out. Good group of guys.",
    quoteEs:
      "Buena hospitalidad. De los mejores barberos del área — siempre cálidos y acogedores. Pruébenlos. Buen grupo de muchachos.",
    quotePt:
      "Boa hospitalidade. Alguns dos melhores barbeiros da região — sempre calorosos e acolhedores. Experimentem. Bom grupo de rapazes.",
  },
  {
    name: "Jose Fernandez",
    stars: 5,
    quoteEn: "This is the best place to get a haircut in Reading.",
    quoteEs: "Este es el mejor lugar para cortarse el pelo en Reading.",
    quotePt: "Este é o melhor lugar para cortar o cabelo em Reading.",
  },
  {
    name: "Rosario Transportation",
    stars: 5,
    quoteEn: "Great spot. Good conversation and the barbers are phenomenal.",
    quoteEs: "Gran lugar. Buena conversación y los barberos son un fenómeno.",
    quotePt: "Ótimo lugar. Boa conversa e os barbeiros são um fenômeno.",
  },
  {
    name: "Anthony Ortega",
    stars: 5,
    quoteEn: "Nice environment and barbers do good work.",
    quoteEs: "Buen ambiente y los barberos hacen buen trabajo.",
    quotePt: "Ambiente legal e os barbeiros fazem um bom trabalho.",
  },
  {
    name: "I. Manuel Guzman",
    stars: 5,
    quoteEn: "Good place, excellent services, nice barbers.",
    quoteEs: "Buen lugar, excelente servicio, buenos barberos.",
    quotePt: "Bom lugar, excelentes serviços, bons barbeiros.",
  },
  {
    name: "Christopher Kichline",
    stars: 5,
    quoteEn: "Ask for Julian.",
    quoteEs: "Pide a Julian.",
    quotePt: "Peça o Julian.",
  },
  {
    name: "Jabriel Rubirosa",
    stars: 5,
    quoteEn: "Very nice place to cut your hair.",
    quoteEs: "Muy buen lugar para cortarse el pelo.",
    quotePt: "Lugar muito bom para cortar o cabelo.",
  },
  {
    name: "Dell-V B-llo",
    stars: 5,
    quoteEn: "Good place for all ages.",
    quoteEs: "Buen lugar para todas las edades.",
    quotePt: "Bom lugar para todas as idades.",
  },
] as const;

export const RATING_BARS = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 9 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 5 },
] as const;

export const HIGHLIGHTS = [
  { src: "/images/highlights/hi-01.jpg", altEn: "Kids’ curly fade", altEs: "Fade rizado de niño", pos: "top" },
  { src: "/images/highlights/hi-02.jpg", altEn: "Star-parted braids", altEs: "Trenzas con raya de estrella", pos: "top" },
  { src: "/images/highlights/hi-03.jpg", altEn: "Braids with a temple design", altEs: "Trenzas con diseño en la sien", pos: "top" },
  { src: "/images/highlights/hi-04.jpg", altEn: "Skin fade and beard lineup", altEs: "Skin fade y perfilado de barba", pos: "top" },
  { src: "/images/highlights/hi-05.jpg", altEn: "Taper fade and beard", altEs: "Taper fade y barba", pos: "top" },
  { src: "/images/highlights/hi-06.jpg", altEn: "Low fade and shape-up", altEs: "Low fade y shape-up", pos: "top" },
  { src: "/images/highlights/hi-07.jpg", altEn: "Kids’ curls and lineup", altEs: "Rizos de niño y perfilado", pos: "top" },
  { src: "/images/highlights/hi-08.jpg", altEn: "Braids with beads", altEs: "Trenzas con cuentas", pos: "top" },
  { src: "/images/highlights/hi-09.jpg", altEn: "Box-parted braids", altEs: "Trenzas en cuadrícula", pos: "top" },
  { src: "/images/highlights/hi-10.jpg", altEn: "Braids with a mid fade", altEs: "Trenzas con fade", pos: "top" },
  { src: "/images/highlights/hi-11.jpg", altEn: "Kids’ fade", altEs: "Fade de niño", pos: "top" },
  { src: "/images/highlights/hi-12.jpg", altEn: "Kids’ taper fade", altEs: "Taper fade de niño", pos: "top" },
  { src: "/images/highlights/hi-13.jpg", altEn: "Burst fade and beard", altEs: "Burst fade y barba", pos: "top" },
  { src: "/images/highlights/hi-14.jpg", altEn: "Skin fade in the chair", altEs: "Skin fade en la silla", pos: "top" },
  { src: "/images/highlights/hi-15.jpg", altEn: "Drop fade and beard", altEs: "Drop fade y barba", pos: "top" },
  { src: "/images/highlights/hi-16.jpg", altEn: "Feed-in braids", altEs: "Trenzas feed-in", pos: "top" },
  { src: "/images/highlights/hi-17.jpg", altEn: "Cornrows from behind", altEs: "Trenzas de atrás", pos: "top" },
  { src: "/images/highlights/hi-18.jpg", altEn: "Infinity braid design", altEs: "Diseño de trenza infinito", pos: "top" },
  { src: "/images/highlights/hi-19.jpg", altEn: "Braids and a side fade", altEs: "Trenzas y fade lateral", pos: "top" },
  { src: "/images/highlights/hi-20.jpg", altEn: "Clean fade and beard", altEs: "Fade limpio y barba", pos: "top" },
] as const;

export const GALLERY = [
  {
    src: "/images/shop-storefront.jpg",
    altEn: "El Pequeño storefront at 603 N 10th Street",
    altEs: "Fachada de El Pequeño en la 603 N 10th",
    wide: true,
    pos: "center",
  },
  {
    src: "/images/shop-window.jpg",
    altEn: "Inside the shop, looking out to 10th Street",
    altEs: "Adentro, mirando hacia la 10th Street",
    wide: false,
    pos: "center",
  },
  {
    src: "/images/shop-chairs.jpg",
    altEn: "Chairs and stations inside El Pequeño",
    altEs: "Sillas y estaciones adentro",
    wide: false,
    pos: "center",
  },
  {
    src: "/images/shop-storefront-day.jpg",
    altEn: "Unisex barbershop window on North 10th",
    altEs: "Ventana unisex en la North 10th",
    wide: false,
    pos: "center",
  },
] as const;

export const PHOTOS = [...HIGHLIGHTS, ...GALLERY];

export const FEATURED_VIDEO = {
  src: "/videos/featured-cut.mp4",
  poster: "/images/reels/featured-cut.jpg",
} as const;

export const VIDEOS = [
  {
    id: "DUWivqBgS3K",
    src: "/videos/reel-01.mp4",
    poster: "/images/reels/reel-01.jpg",
    href: "https://www.instagram.com/reel/DUWivqBgS3K/",
    titleEn: "From the chair",
    titleEs: "Desde la silla",
  },
  {
    id: "C_ZPYg-PvAG",
    src: "/videos/reel-02.mp4",
    poster: "/images/reels/reel-02.jpg",
    href: "https://www.instagram.com/reel/C_ZPYg-PvAG/",
    titleEn: "In the shop",
    titleEs: "En la barbería",
  },
  {
    id: "C_ZOs4yPzFz",
    src: "/videos/reel-03.mp4",
    poster: "/images/reels/reel-03.jpg",
    href: "https://www.instagram.com/reel/C_ZOs4yPzFz/",
    titleEn: "The cut",
    titleEs: "El corte",
  },
  {
    id: "C_ZNo9KPjmN",
    src: "/videos/reel-04.mp4",
    poster: "/images/reels/reel-04.jpg",
    href: "https://www.instagram.com/reel/C_ZNo9KPjmN/",
    titleEn: "Fade work",
    titleEs: "Trabajo de fade",
  },
  {
    id: "C_ZN-JqvltK",
    src: "/videos/reel-05.mp4",
    poster: "/images/reels/reel-05.jpg",
    href: "https://www.instagram.com/reel/C_ZN-JqvltK/",
    titleEn: "Lineup",
    titleEs: "Perfilado",
  },
  {
    id: "Cj-y9A9LcGq",
    src: "/videos/reel-06.mp4",
    poster: "/images/reels/reel-06.jpg",
    href: "https://www.instagram.com/reel/Cj-y9A9LcGq/",
    titleEn: "El Pequeño reel",
    titleEs: "Reel de El Pequeño",
  },
] as const;

const WEEKDAY_SHORT: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function getReadingNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
      hour12: false,
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value]),
  );
  const day = WEEKDAY_SHORT[parts.weekday ?? "Sun"] ?? 0;
  const hour = Number(parts.hour);
  const minute = Number(parts.minute);
  return { day, minutes: hour * 60 + minute };
}

export function getShopStatus() {
  const { day, minutes } = getReadingNow();
  const hours = WEEK_HOURS[day];
  if (minutes >= hours.open && minutes < hours.close) {
    return { open: true as const, time: minutesToClockCompact(hours.close) };
  }
  if (minutes < hours.open) {
    return { open: false as const, time: minutesToClockCompact(hours.open) };
  }
  const next = WEEK_HOURS[(day + 1) % 7];
  return { open: false as const, time: minutesToClockCompact(next.open) };
}
