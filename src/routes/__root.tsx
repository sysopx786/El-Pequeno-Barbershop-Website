import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { asset } from "@/lib/utils";
import appCss from "../styles.css?url";

const SITE_URL = "https://sysopx786.github.io/El-Pequeno-Barbershop-Website/";
const OG_IMAGE = `${SITE_URL}og.jpg`;
const TITLE = "El Pequeño Barbershop | Haircuts, Fades & Braids in Reading, PA";
const DESCRIPTION =
  "Walk-in barbershop at 603 N 10th St, Reading, PA. Fades, haircuts, kids’ cuts, braids, beard trims, and razor shaves. Open 7 days. Se habla español.";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: "El Pequeño Barbershop",
  alternateName: "El Pequeño",
  url: SITE_URL,
  telephone: "+16102689290",
  email: "edwintorres34@gmail.com",
  image: [OG_IMAGE, `${SITE_URL}images/shop-storefront.jpg`],
  logo: `${SITE_URL}images/logo-el-peque.jpg`,
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "603 N 10th St",
    addressLocality: "Reading",
    addressRegion: "PA",
    postalCode: "19604",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.3445208,
    longitude: -75.9177752,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "20:00" },
  ],
  sameAs: [
    "https://www.instagram.com/elpequenobarbershop01/",
    "https://www.tiktok.com/@elpequenobarbershop01",
    "https://www.google.com/maps/place/El+Peque%C3%B1o+Barbershop/@40.3445208,-75.9177752,17z/data=!4m6!3m5!1s0x89c67748ca310c6d:0x42f2344c7e364043!8m2!3d40.3445208!4d-75.9177752!16s%2Fg%2F1pxwfq9w0",
  ],
  hasMap:
    "https://www.google.com/maps/place/El+Peque%C3%B1o+Barbershop/@40.3445208,-75.9177752,17z/data=!4m6!3m5!1s0x89c67748ca310c6d:0x42f2344c7e364043!8m2!3d40.3445208!4d-75.9177752!16s%2Fg%2F1pxwfq9w0",
  areaServed: {
    "@type": "City",
    name: "Reading",
    containedInPlace: {
      "@type": "State",
      name: "Pennsylvania",
    },
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "El Pequeño Barbershop" },
      { name: "geo.region", content: "US-PA" },
      { name: "geo.placename", content: "Reading" },
      { name: "geo.position", content: "40.3445208;-75.9177752" },
      { name: "ICBM", content: "40.3445208, -75.9177752" },
      { name: "theme-color", content: "#12100e" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "es_US" },
      { property: "og:site_name", content: "El Pequeño Barbershop" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: asset("/favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: asset("/__grok/manifest.webmanifest") },
      { rel: "apple-touch-icon", href: asset("/__grok/icon-180.png") },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
      </head>
      <body>
        <PreviewHostBridge />
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});
