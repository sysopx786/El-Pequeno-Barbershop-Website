import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { LanguageProvider, SERVICE_NAME, loc, useI18n } from "@/lib/i18n";
import {
  FEATURED_VIDEO,
  GALLERY,
  HIGHLIGHTS,
  PHOTOS,
  RATING_BARS,
  REVIEWS,
  SERVICES,
  SHOP,
  VIDEOS,
} from "@/lib/shop";
import { LangCircles, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BarbersSection } from "@/components/barbers-section";
import { BarberPole } from "@/components/barber-pole";
import { GoogleG, GoogleStars, InstagramMark } from "@/components/brand-marks";
import { SocialLinks } from "@/components/social-links";
import { cn, asset } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const REVIEW_PREVIEW = 8;

function Home() {
  return (
    <LanguageProvider>
      <ShopPage />
    </LanguageProvider>
  );
}

function ShopPage() {
  const { t, lang } = useI18n();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  return (
    <div id="top" className="min-h-dvh bg-ink text-paper pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <SiteHeader />

      <section className="bg-ink pt-[5.5rem] text-paper md:pt-32">
        <h1 className="sr-only">
          {t.heroTitle} {t.heroSub}
        </h1>
        <div className="mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
          <img
            src={asset("/images/logo-el-peque.jpg")}
            alt="El Peque Barber"
            className="mx-auto h-auto w-full max-h-[320px] object-contain md:max-h-none"
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-14">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-signal">
            {t.heroKicker}
          </p>
          <p className="mt-4 max-w-xl text-lg text-paper sm:text-xl">{t.heroLead}</p>
          <a
            href="#reviews"
            className="mt-8 flex w-full max-w-xl items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-ink shadow-sm"
          >
            <GoogleG className="size-6 shrink-0" />
            <span className="font-display text-[1.75rem] font-semibold leading-none">
              {SHOP.rating}
            </span>
            <GoogleStars count={5} className="flex shrink-0 gap-px" />
            <span className="truncate text-sm text-neutral-500">
              {SHOP.reviewCount} {t.reviewsWord}
            </span>
          </a>
        </div>
      </section>

      <section id="featured" className="scroll-mt-32 bg-ink text-paper">
        <div className="mx-auto w-full max-w-[360px] px-4 py-12 sm:py-16">
          <video
            controls
            playsInline
            preload="metadata"
            poster={asset(FEATURED_VIDEO.poster)}
            className="aspect-[9/16] w-full rounded-xl bg-ink-2 object-cover"
          >
            <source src={asset(FEATURED_VIDEO.src)} type="video/mp4" />
          </video>
          <p className="mt-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-cream">
            {t.featuredCut}
          </p>
        </div>
      </section>

      <div className="stripe-rule" />

      <main id="main">
        <section id="about" className="scroll-mt-32 bg-paper text-ink">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:py-28">
            <div className="min-w-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
                {t.aboutKicker}
              </p>
              <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{t.aboutP1}</p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">{t.aboutP2}</p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">{t.aboutP3}</p>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
                <div>
                  <dt className="font-display text-3xl font-semibold sm:text-4xl">
                    {t.aboutStat1Value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {t.aboutStat1Label}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-3xl font-semibold sm:text-4xl">
                    {t.aboutStat2Value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {t.aboutStat2Label}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-3xl font-semibold sm:text-4xl">
                    {t.aboutStat3Value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {t.aboutStat3Label}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <img
                src={asset("/images/shop-chairs.jpg")}
                alt={loc(lang, "Barber chairs", "Sillas de la barber\u00eda", "Cadeiras da barbearia")}
                className="aspect-[16/10] w-full rounded-xl object-cover"
              />
              <div className="absolute -left-3 bottom-8 hidden items-center gap-3 rounded-lg bg-ink px-4 py-3 text-paper sm:flex">
                <BarberPole height={36} />
                <span className="text-sm">
                  {SHOP.address}
                  <br />
                  <span className="text-cream/80">{SHOP.city}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <BarbersSection />

        <section id="services" className="scroll-mt-32 bg-paper text-ink">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
              {t.servicesKicker}
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
              {t.servicesTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-ink/80">{t.servicesLead}</p>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.id} className="flex items-start justify-between gap-4 bg-white p-5 sm:p-6">
                  <div>
                    <p className="font-display text-2xl font-semibold uppercase tracking-wide">
                      {t[SERVICE_NAME[s.id].en]}
                    </p>
                    <p className="mt-1 text-sm text-ink/60">{t[SERVICE_NAME[s.id].d]}</p>
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-oxblood">
                    {s.mins} {t.mins}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-32 bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream">
              {t.galleryKicker}
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
              {t.galleryTitle}
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
              {HIGHLIGHTS.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group relative block size-full overflow-hidden rounded-lg"
                  >
                    <img
                      src={asset(img.src)}
                      alt={loc(lang, img.altEn, img.altEs)}
                      className="aspect-[3/4] size-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="font-display mt-16 max-w-xl text-3xl font-semibold uppercase leading-[0.9] sm:text-4xl">
              {t.galleryShop}
            </h3>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {GALLERY.map((img, i) => (
                <li key={img.src} className={cn(img.wide && "col-span-2")}>
                  <button
                    type="button"
                    onClick={() => setLightbox(HIGHLIGHTS.length + i)}
                    className="group relative block size-full overflow-hidden rounded-lg"
                  >
                    <img
                      src={asset(img.src)}
                      alt={loc(lang, img.altEn, img.altEs)}
                      className={cn(
                        "size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]",
                        img.wide ? "aspect-[16/9]" : "aspect-[4/5] sm:aspect-[4/3]",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="videos" className="scroll-mt-32 bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream">
              {t.videosKicker}
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
              {t.videosTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-cream/85">{t.videosLead}</p>
            <ul className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VIDEOS.map((v) => (
                <li key={v.id} className="w-full max-w-[400px]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={asset(v.poster)}
                    className="aspect-[9/16] w-full rounded-xl bg-ink-2 object-cover"
                  >
                    <source src={asset(v.src)} type="video/mp4" />
                  </video>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-cream hover:text-paper"
                  >
                    <InstagramMark className="size-5" />
                    {t.watchIg}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-32 bg-paper text-ink">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
              {t.reviewsKicker}
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
              {t.reviewsTitle}
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/70">
                  <GoogleG className="size-5" />
                  Google
                </p>
                <div className="mt-4 flex items-end gap-3">
                  <p className="font-display text-7xl font-semibold leading-none">{SHOP.rating}</p>
                  <div className="pb-1">
                    <GoogleStars count={5} className="flex gap-0.5" />
                    <p className="mt-1 text-sm text-muted">
                      {SHOP.reviewCount} {t.reviewsWord}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-xl text-ink">{t.reviewsPeople}</p>
                <p className="mt-3 border-l-2 border-oxblood/40 pl-3 text-sm leading-relaxed text-ink/80">
                  “{loc(lang, REVIEWS[0].quoteEn, REVIEWS[0].quoteEs, REVIEWS[0].quotePt)}”
                  <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-muted">
                    {REVIEWS[0].name} · Google
                  </span>
                </p>
                <ul className="mt-6 space-y-2">
                  {RATING_BARS.map((row) => (
                    <li key={row.stars} className="flex items-center gap-3 text-sm">
                      <span className="w-3 tabular-nums text-ink/70">{row.stars}</span>
                      <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                        <span
                          className="block h-full rounded-full bg-[#FBBC04]"
                          style={{ width: `${row.pct}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={SHOP.googleWriteReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex min-h-12 items-center justify-center rounded-lg bg-ink px-4 text-center text-sm font-semibold text-paper hover:bg-ink-2"
                >
                  {t.reviewsWrite}
                </a>
                <a
                  href={SHOP.googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex min-h-11 items-center justify-center text-sm text-oxblood underline-offset-4 hover:underline"
                >
                  {t.reviewsGoogle}
                </a>
              </div>
              <div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {(showAllReviews ? REVIEWS.slice(1) : REVIEWS.slice(1, 1 + REVIEW_PREVIEW)).map((r) => (
                    <li
                      key={r.name}
                      className="flex flex-col justify-between rounded-xl border border-ink/10 bg-white p-5"
                    >
                      <div>
                        <GoogleStars count={r.stars} className="flex gap-0.5" />
                        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">
                          “{loc(lang, r.quoteEn, r.quoteEs, r.quotePt)}”
                        </p>
                      </div>
                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-oxblood">
                        {r.name}
                      </p>
                    </li>
                  ))}
                </ul>
                {REVIEWS.length - 1 > REVIEW_PREVIEW ? (
                  <button
                    type="button"
                    className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl border border-ink/15 bg-white text-sm font-semibold text-ink hover:border-ink/30"
                    onClick={() => setShowAllReviews((open) => !open)}
                  >
                    {showAllReviews ? t.reviewsLess : t.reviewsMore}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="stripe-rule" />
      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center justify-items-center">
          <LangCircles />
          <a
            href={`tel:${SHOP.phoneTel}`}
            aria-label={`${t.call} ${SHOP.phone}`}
            className="inline-flex size-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-sm hover:bg-[#16a34a]"
          >
            <Phone className="size-7" />
          </a>
          <a
            href={SHOP.smsHref}
            aria-label={`${t.text} ${SHOP.sms}`}
            className="inline-flex size-14 items-center justify-center rounded-full bg-[#3b82f6] text-white shadow-sm hover:bg-[#2563eb]"
          >
            <MessageSquare className="size-7" />
          </a>
        </div>
      </div>

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 size-11 text-paper"
            onClick={() => setLightbox(null)}
            aria-label={t.closePhoto}
          >
            <X className="size-7" />
          </button>
          <img
            src={asset(PHOTOS[lightbox].src)}
            alt={loc(lang, PHOTOS[lightbox].altEn, PHOTOS[lightbox].altEs)}
            className="max-h-[88vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
