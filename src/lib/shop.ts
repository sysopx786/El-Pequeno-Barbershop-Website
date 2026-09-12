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

export const BLUEPRINTS = [
  {
    src: "/images/blueprint/00-services-overview.png",
    altEn: "Services overview — cuts, times, and how to reach the shop",
    altEs: "Resumen de servicios — cortes, tiempos y cómo contactar la barbería",
    altPt: "Visão geral dos serviços — cortes, tempos e como falar com a barbearia",
  },
  {
    src: "/images/blueprint/02-neighborhood-institution.png",
    altEn: "More than a barbershop — a neighborhood institution",
    altEs: "Más que una barbería — una institución del barrio",
    altPt: "Mais que uma barbearia — uma instituição do bairro",
  },
  {
    src: "/images/blueprint/03-reviews-foundation.png",
    altEn: "The foundation of 73 five-star reviews",
    altEs: "La base de 73 reseñas de cinco estrellas",
    altPt: "A base de 73 avaliações de cinco estrelas",
  },
  {
    src: "/images/blueprint/04-service-architecture.png",
    altEn: "The service architecture — from a quick shape-up to custom artistry",
    altEs: "La arquitectura del servicio — del arreglo rápido al trabajo a medida",
    altPt: "A arquitetura do serviço — do retoque rápido ao trabalho sob medida",
  },
  {
    src: "/images/blueprint/05-full-chair.png",
    altEn: "Anatomy of The Full Chair — fade, lineup, brows, beard",
    altEs: "Anatomía de The Full Chair — fade, lineup, cejas y barba",
    altPt: "Anatomia do Full Chair — fade, lineup, sobrancelhas e barba",
  },
  {
    src: "/images/blueprint/06-specialized-skills.png",
    altEn: "Specialized skills — kids’ cuts and custom braids",
    altEs: "Habilidades especiales — cortes de niños y trenzas a medida",
    altPt: "Habilidades especiais — cortes infantis e tranças sob medida",
  },
  {
    src: "/images/blueprint/08-loyalty-quotes.png",
    altEn: "What Reading says — eleven years of loyalty",
    altEs: "Lo que dice Reading — once años de lealtad",
    altPt: "O que Reading diz — onze anos de lealdade",
  },
  {
    src: "/images/blueprint/09-neighborhood-vibe.png",
    altEn: "What Reading says — the neighborhood vibe",
    altEs: "Lo que dice Reading — la vibra del barrio",
    altPt: "O que Reading diz — a vibe do bairro",
  },
  {
    src: "/images/blueprint/10-the-week.png",
    altEn: "The week at 603 N 10th St — walk-ins welcome, Saturday is peak",
    altEs: "La semana en 603 N 10th St — walk-ins bienvenidos, sábado es hora pico",
    altPt: "A semana no 603 N 10th St — walk-ins bem-vindos, sábado é o pico",
  },
] as const;
