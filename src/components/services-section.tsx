import { SERVICE_NAME, useI18n } from "@/lib/i18n";
import { SERVICES } from "@/lib/shop";

export function ServicesSection() {
  const { t } = useI18n();

  return (
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
  );
}
