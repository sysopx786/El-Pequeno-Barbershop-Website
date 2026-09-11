import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { BarberPole } from "@/components/barber-pole";
import { Button } from "@/components/ui/button";
import { GoogleG, GoogleStars } from "@/components/brand-marks";
import { SHOP, getShopStatus } from "@/lib/shop";
import { LANG_NAME, LANG_SHORT, otherLangs, useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", key: "navAbout" },
  { href: "#services", key: "navServices" },
  { href: "#gallery", key: "navGallery" },
  { href: "#featured", key: "navFeatured" },
  { href: "#videos", key: "navCuts" },
] as const;

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 6" className={cn("shrink-0 rounded-[2px]", className)} aria-hidden>
      <rect width="9" height="6" fill="#c60b1e" />
      <rect y="1.5" width="9" height="3" fill="#ffc400" />
    </svg>
  );
}

function UsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 10" className={cn("shrink-0 rounded-[2px]", className)} aria-hidden>
      <rect width="19" height="10" fill="#bf0a30" />
      <rect y="1.1" width="19" height="1.1" fill="#fff" />
      <rect y="3.3" width="19" height="1.1" fill="#fff" />
      <rect y="5.5" width="19" height="1.1" fill="#fff" />
      <rect y="7.7" width="19" height="1.1" fill="#fff" />
      <rect width="7.6" height="5.4" fill="#002868" />
    </svg>
  );
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={cn("shrink-0 rounded-[2px]", className)} aria-hidden>
      <rect width="20" height="14" fill="#009b3a" />
      <polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="2.5" fill="#002776" />
    </svg>
  );
}

function LangFlag({ lang, className }: { lang: Lang; className?: string }) {
  if (lang === "es") return <SpainFlag className={className} />;
  if (lang === "pt") return <BrazilFlag className={className} />;
  return <UsFlag className={className} />;
}

export function LangChip({
  full = false,
  className,
}: {
  full?: boolean;
  className?: string;
}) {
  const { lang, setLang } = useI18n();
  const options = otherLangs(lang);
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex min-h-14 overflow-hidden rounded-xl bg-signal text-ink shadow-sm",
        className,
      )}
    >
      {options.map((option, i) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          className={cn(
            "inline-flex min-h-14 flex-1 items-center justify-center gap-1.5 px-2 hover:bg-[#ffd34d] sm:gap-2 sm:px-3",
            i === 0 && "border-r border-ink/25",
          )}
        >
          <LangFlag lang={option} className="h-4 w-[1.25rem] sm:h-5 sm:w-[1.6rem]" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] sm:text-sm">
            {full ? LANG_NAME[option] : LANG_SHORT[option]}
          </span>
        </button>
      ))}
    </div>
  );
}

function StatusTablet() {
  const { t } = useI18n();
  const [status, setStatus] = useState(() => getShopStatus());

  useEffect(() => {
    const tick = () => setStatus(getShopStatus());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border-2 px-3 py-1.5 sm:flex-none sm:px-4",
        status.open
          ? "border-signal bg-signal/25 text-paper"
          : "status-flash border-signal bg-signal text-ink",
      )}
      aria-live="polite"
    >
      <span
        className={cn(
          "size-3 shrink-0 rounded-full",
          status.open ? "status-dot bg-signal" : "status-dot bg-ink",
        )}
      />
      <span className="leading-tight">
        <span className="block text-base font-bold uppercase tracking-wide">
          {status.open ? t.open : t.closed}
        </span>
        <span className="block text-xs font-semibold sm:text-sm">
          {status.open ? t.closesAt : t.opensAt} {status.time}
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const menuBtn = (
    <button
      type="button"
      className="relative z-[92] inline-flex size-14 items-center justify-center rounded-md text-paper"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-controls="site-menu"
      aria-label={open ? t.closeMenu : t.openMenu}
    >
      {open ? <X className="size-8" /> : <Menu className="size-8" />}
    </button>
  );

  const phoneBtn = (
    <a
      href={`tel:${SHOP.phoneTel}`}
      aria-label={`${t.call} ${SHOP.phone}`}
      className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-sm hover:bg-[#16a34a]"
    >
      <Phone className="size-6" />
    </a>
  );

  const menu = open ? (
    <div
      className="fixed inset-0 z-[80]"
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t.openMenu}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/50"
        aria-label={t.closeMenu}
        onClick={closeMenu}
      />
      <div className="absolute inset-x-0 top-[7.25rem] max-h-[min(85dvh,44rem)] overflow-y-auto border-b border-line bg-ink px-4 py-5 shadow-2xl sm:top-24 sm:px-6">
        <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Menu">
          <a
            href="#top"
            onClick={closeMenu}
            className="flex min-h-12 items-center text-lg text-paper"
          >
            {t.navHome}
          </a>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center text-lg text-paper"
            >
              {t[link.key]}
            </a>
          ))}
          <a
            href="#reviews"
            onClick={closeMenu}
            className="flex min-h-12 items-center gap-2.5 text-lg font-medium text-[#4285F4]"
          >
            <GoogleG className="size-6 shrink-0" />
            {t.navReviews}
            <GoogleStars count={5} className="ml-1 flex gap-0.5" />
          </a>
          <a
            href="#visit"
            onClick={closeMenu}
            className="flex min-h-12 items-center text-lg text-paper"
          >
            {t.navVisit}
          </a>
        </nav>
        <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-3">
          <Button asChild variant="call">
            <a href={`tel:${SHOP.phoneTel}`} onClick={closeMenu}>
              <Phone className="size-4" />
              {t.callShop} · {SHOP.phone}
            </a>
          </Button>
          <Button asChild variant="line">
            <a href={`tel:${SHOP.phoneAltTel}`} onClick={closeMenu}>
              <Phone className="size-4" />
              {t.call} {SHOP.phoneAlt}
            </a>
          </Button>
          <Button asChild variant="paper">
            <a href={SHOP.smsHref} onClick={closeMenu}>
              <MessageSquare className="size-4" />
              {t.textShop} · {SHOP.sms}
            </a>
          </Button>
          <LangChip full className="h-14 w-full" />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <header className="fixed inset-x-0 top-0 z-[90] overflow-visible border-b border-line bg-ink/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        {t.skip}
      </a>
      <div className="relative z-[91] mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2.5 sm:px-6 md:h-24 md:flex-row md:items-center md:justify-between md:gap-3 md:py-0">
        <div className="flex items-center justify-between gap-2">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 text-paper">
            <BarberPole height={40} />
            <span className="leading-none">
              <span className="font-display block truncate text-[1.25rem] font-semibold uppercase tracking-[0.06em] sm:text-[1.5rem] sm:tracking-[0.08em]">
                El Pequeño
              </span>
              <span className="block text-[0.7rem] uppercase tracking-[0.28em] text-cream/80">
                Barbershop
              </span>
            </span>
          </a>
          <div className="md:hidden">{menuBtn}</div>
        </div>

        <div className="flex items-stretch gap-2 md:hidden">
          <LangChip className="flex-1" />
          <StatusTablet />
          {phoneBtn}
        </div>

        <div className="hidden shrink-0 items-center gap-2.5 md:flex">
          <LangChip full />
          <StatusTablet />
          {phoneBtn}
          <Button asChild variant="call" size="sm" className="h-14">
            <a href={`tel:${SHOP.phoneTel}`}>{t.callShop}</a>
          </Button>
          {menuBtn}
        </div>
      </div>
      {mounted ? createPortal(menu, document.body) : null}
    </header>
  );
}
