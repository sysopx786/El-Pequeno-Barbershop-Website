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
  reviewCount: 71,
  instagramHandle: "elpequenobarbershop01",
  instagramUrl: "https://www.instagram.com/elpequenobarbershop01/",
  tiktokHandle: "elpequenobarbershop01",
  tiktokUrl: "https://www.tiktok.com/@elpequenobarbershop01",
  googleReviewsUrl:
    "https://www.google.com/maps/place/El+Peque%C3%B1o+Barbershop/@40.3445208,-75.9177752,17z/data=!4m8!3m7!1s0x89c67748ca310c6d:0x42f2344c7e364043!8m2!3d40.3445208!4d-75.9177752!9m1!1b1!16s%2Fg%2F1pxwfq9w0",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJbQwxykh3xolDQDZ-TDTyQg",
  ownerName: "Edwin Torres",
  ownerEmail: "edwintorres34@gmail.com",
} as const;

export const WEEK_HOURS = [
  { key: "sun", open: 10 * 60, close: 16 * 60 },
  { key: "mon", open: 9 * 60, close: 19 * 60 },
  { key: "tue", open: 9 * 60, close: 19 * 60 },
  { key: "wed", open: 9 * 60, close: 17 * 60 },
  { key: "thu", open: 9 * 60, close: 19 * 60 },
  { key: "fri", open: 8 * 60, close: 20 * 60 },
  { key: "sat", open: 8 * 60, close: 20 * 60 },
] as const;

export const HOUR_LABELS = [
  { open: "10:00 AM", close: "4:00 PM" },
  { open: "9:00 AM", close: "7:00 PM" },
  { open: "9:00 AM", close: "7:00 PM" },
  { open: "9:00 AM", close: "5:00 PM" },
  { open: "9:00 AM", close: "7:00 PM" },
  { open: "8:00 AM", close: "8:00 PM" },
  { open: "8:00 AM", close: "8:00 PM" },
] as const;

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
  },
  {
    name: "Juan Gonzalez",
    stars: 5,
    quoteEn: "The best of the best — they’re part of my family. Eleven years of good service.",
    quoteEs: "La mejor de la mejor, ya parte de mi familia porque ya son 11 años tratándome con el buen servicio.",
  },
  {
    name: "Jose Fernandez",
    stars: 5,
    quoteEn: "This is the best place to get a haircut in Reading.",
    quoteEs: "Este es el mejor lugar para cortarse el pelo en Reading.",
  },
  {
    name: "Mike Ammouri",
    stars: 5,
    quoteEn: "First time here with my nephew and my son. The guys are very nice and very detailed. They got our business.",
    quoteEs: "Primera vez, vine con mi sobrino y mi hijo. Los muchachos son amables y detallistas. Ya somos clientes.",
  },
  {
    name: "Christopher Kichline",
    stars: 5,
    quoteEn: "Ask for Julian.",
    quoteEs: "Pide a Julian.",
  },
  {
    name: "Jabriel Rubirosa",
    stars: 5,
    quoteEn: "Very nice place to cut your hair.",
    quoteEs: "Muy buen lugar para cortarse el pelo.",
  },
  {
    name: "Dell-V B-llo",
    stars: 5,
    quoteEn: "Good place for all ages.",
    quoteEs: "Buen lugar para todas las edades.",
  },
  {
    name: "Eric Alvarado",
    stars: 5,
    quoteEn: "Good haircut.",
    quoteEs: "Buen corte.",
  },
  {
    name: "Jose Caballero",
    stars: 5,
    quoteEn: "Excellent.",
    quoteEs: "Excelente.",
  },
  {
    name: "Jeremiah Johnson",
    stars: 4,
    quoteEn: "They are friendly.",
    quoteEs: "Son amables.",
  },
  {
    name: "Leighton Long",
    stars: 4,
    quoteEn: "Friendly environment.",
    quoteEs: "Ambiente amable.",
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
    return { open: true as const, time: HOUR_LABELS[day].close };
  }
  if (minutes < hours.open) {
    return { open: false as const, time: HOUR_LABELS[day].open };
  }
  const next = (day + 1) % 7;
  return { open: false as const, time: HOUR_LABELS[next].open };
}
