import { loc, useI18n } from "@/lib/i18n";

function ChairPortrait() {
  return (
    <svg
      viewBox="0 0 260 340"
      className="mx-auto h-auto w-full max-w-[240px]"
      role="img"
      aria-label="Profile of a man in the barber chair"
    >
      <rect x="18" y="228" width="58" height="96" rx="26" fill="#12100e" />
      <path d="M70 250h92c22 0 36 16 36 40v50H70V250z" fill="#12100e" />
      <path
        d="M92 236c8-18 22-28 44-30 28-2 50 10 62 32 8 14 10 30 4 46-6 18-22 30-42 36-16 4-32 2-44-6v-78z"
        fill="#12100e"
      />
      <path
        d="M108 74c-28 10-46 36-50 68-4 28 4 54 24 72 8 8 14 10 14 10v18c-22-6-40-22-50-44-14-30-12-66 6-94 20-32 56-50 94-48 34 2 64 22 78 52 12 26 10 56-4 80-6 10-14 18-22 24l-10-16c10-8 20-20 24-36 8-26 2-54-16-74-20-24-52-34-84-24-8 2-14 6-18 12z"
        fill="#12100e"
      />
      <path
        d="M142 118c18-6 36-2 48 12 10 12 14 28 8 42-4 10-12 18-22 22 2 8 0 16-6 22-10 10-24 12-36 6 6-10 8-22 6-34-2-14 0-26 2-70z"
        fill="#f4efe8"
      />
      <path d="M168 132c12 2 20 12 18 24-2 8-8 14-16 16 2-8 2-16-2-24-2-6 0-12 0-16z" fill="#f4efe8" />
      <path d="M186 154c8 6 10 16 4 24-6 8-16 10-24 8 6-8 12-16 20-32z" fill="#f4efe8" />
      <path d="M154 136c10 0 16 4 22 8" fill="none" stroke="#12100e" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="178" cy="150" r="3.2" fill="#12100e" />
      <path d="M188 166c6 3 8 8 4 12" fill="none" stroke="#12100e" strokeWidth="2.4" strokeLinecap="round" />
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
