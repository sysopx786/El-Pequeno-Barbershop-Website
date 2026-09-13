import { loc, useI18n } from "@/lib/i18n";

function ChairPortrait() {
  return (
    <svg viewBox="0 0 280 340" className="mx-auto h-auto w-full max-w-[280px]" aria-hidden>
      <rect x="38" y="232" width="52" height="86" rx="18" fill="#12100e" />
      <path d="M86 248h78c18 0 28 14 28 32v60H86V248z" fill="#12100e" />
      <path d="M118 168c38-4 70 18 76 52 2 14-2 28-10 38-18 22-48 28-78 22-22-4-40-16-48-34-10-22-4-52 18-66 14-10 28-14 42-12z" fill="#12100e" />
      <path d="M148 96c38 2 62 28 64 62 1 18-6 34-18 44-8 6-16 8-18 8l-2-18c8-2 16-10 18-24 4-22-10-44-36-50-18-4-36 2-48 16-4 6-8 12-8 12l-16-10c8-16 28-40 64-40z" fill="#12100e" />
      <path d="M132 78c28-22 70-18 92 8 16 18 20 42 12 64-4 12-12 22-18 26l-8-16c8-6 16-18 18-32 4-20-4-40-22-52-20-14-48-12-66 4-6 6-12 14-14 16l-12-14c8-10 20-20 36-24z" fill="#12100e" />
      <path d="M176 128c8 2 14 10 16 18 1 6-1 12-6 16-2-8-8-14-16-16 2-6 4-12 6-18z" fill="#f4efe8" />
      <path d="M198 148c10 4 14 16 8 26-8 12-20 16-28 14 6-8 10-16 12-26 2-6 4-10 8-14z" fill="#f4efe8" />
      <path d="M186 176c8 2 12 10 10 18-4 10-16 16-26 14 4-8 8-16 16-32z" fill="#f4efe8" />
      <ellipse cx="204" cy="168" rx="3.2" ry="2.2" fill="#12100e" />
      <path d="M208 176c8 4 10 10 6 14" fill="none" stroke="#12100e" strokeWidth="2" />
    </svg>
  );
}

export function FullChair() {
  const { lang } = useI18n();

  const items = [
    {
      title: loc(lang, "The Fade", "El fade", "O fade"),
      body: loc(
        lang,
        "Skin fade, taper, or classic cut executed with absolute precision.",
        "Skin fade, taper, o corte clásico con precisión.",
        "Skin fade, taper ou corte clássico com precisão.",
      ),
    },
    {
      title: loc(lang, "The Lineup", "El perfilado", "O pezinho"),
      body: loc(
        lang,
        "Crisp, sharp edges defining the profile.",
        "Líneas prietas que marcan el perfil.",
        "Linhas afiadas que marcam o perfil.",
      ),
    },
    {
      title: loc(lang, "The Eyebrows", "Las cejas", "As sobrancelhas"),
      body: loc(
        lang,
        "Cleaned up and lined for a polished finish.",
        "Limpias y perfiladas para un acabado limpio.",
        "Limpas e alinhadas para um acabamento caprichado.",
      ),
    },
    {
      title: loc(lang, "The Beard Trim & Shave", "Barba y afeitado", "Barba e barbear"),
      body: loc(
        lang,
        "Shaped, lined, and kept tight, often with a straight razor.",
        "Forma, línea y queda prieta, a menudo con navaja.",
        "Forma, linha e fica justa, muitas vezes na navalha.",
      ),
    },
  ];

  return (
    <section id="full-chair" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="rounded-2xl border border-ink/15 bg-[#f4efe8] px-4 py-10 sm:px-8 sm:py-12">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
            {loc(lang, "The combo", "El combo", "O combo")}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
            {loc(lang, "Anatomy of The Full Chair.", "Anatomía de The Full Chair.", "Anatomia do Full Chair.")}
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            {loc(
              lang,
              "55 minutes. Hair and beard in one sit.",
              "55 minutos. Pelo y barba en una sentada.",
              "55 minutos. Cabelo e barba numa sentada.",
            )}
          </p>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <ul className="space-y-5">
              {items.slice(0, 2).map((item) => (
                <li key={item.title} className="border-l-2 border-signal pl-4">
                  <p className="font-display text-xl font-semibold uppercase">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.body}</p>
                </li>
              ))}
            </ul>
            <ChairPortrait />
            <ul className="space-y-5">
              {items.slice(2).map((item) => (
                <li key={item.title} className="border-l-2 border-signal pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4 lg:text-right">
                  <p className="font-display text-xl font-semibold uppercase">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
