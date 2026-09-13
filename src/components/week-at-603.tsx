import { DAY_NAME, loc, useI18n, type Lang } from "@/lib/i18n";
import { WEEK_HOURS, hoursByKey, minutesToClock, type WeekdayKey } from "@/lib/shop";

const DAY_ORDER: WeekdayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const DAY_SHORT: Record<WeekdayKey, Record<Lang, string>> = {
  sun: { en: "Sun", es: "Dom", pt: "Dom" },
  mon: { en: "Mon", es: "Lun", pt: "Seg" },
  tue: { en: "Tue", es: "Mar", pt: "Ter" },
  wed: { en: "Wed", es: "Mié", pt: "Qua" },
  thu: { en: "Thu", es: "Jue", pt: "Qui" },
  fri: { en: "Fri", es: "Vie", pt: "Sex" },
  sat: { en: "Sat", es: "Sáb", pt: "Sáb" },
};

const DAY_FULL: Record<WeekdayKey, Record<Lang, string>> = {
  sun: { en: "Sunday", es: "Domingo", pt: "Domingo" },
  mon: { en: "Monday", es: "Lunes", pt: "Segunda" },
  tue: { en: "Tuesday", es: "Martes", pt: "Terça" },
  wed: { en: "Wednesday", es: "Miércoles", pt: "Quarta" },
  thu: { en: "Thursday", es: "Jueves", pt: "Quinta" },
  fri: { en: "Friday", es: "Viernes", pt: "Sexta" },
  sat: { en: "Saturday", es: "Sábado", pt: "Sábado" },
};

export function WeekAt603() {
  const { t, lang } = useI18n();
  const sat = hoursByKey("sat");
  const sun = hoursByKey("sun");

  return (
    <section id="week" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="overflow-hidden rounded-2xl border border-ink/15 bg-[#f4efe8] px-4 py-10 sm:px-8 sm:py-12">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
            {loc(lang, "The week", "La semana", "A semana")}
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
            {loc(lang, "The week at 603.", "La semana en la 603.", "A semana no 603.")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/80">
            {loc(
              lang,
              `Open 7 days. Walk-ins welcome. Friday and Saturday until ${sat.closeLabel}. Sunday ${sun.openLabel}–${sun.closeLabel}.`,
              `Abierto 7 días. Walk-ins bienvenidos. Viernes y sábado hasta las ${sat.closeLabel}. Domingo ${sun.openLabel}–${sun.closeLabel}.`,
              `Aberto 7 dias. Walk-ins bem-vindos. Sexta e sábado até ${sat.closeLabel}. Domingo ${sun.openLabel}–${sun.closeLabel}.`,
            )}
          </p>

          <div className="mt-10">
            <div className="flex overflow-hidden rounded-full border border-ink/20">
              {DAY_ORDER.map((key) => {
                const peak = key === "sat";
                return (
                  <div
                    key={key}
                    className={
                      peak
                        ? "flex min-h-12 flex-1 items-center justify-center bg-signal px-1 text-center text-[0.7rem] font-bold uppercase tracking-wide text-ink sm:min-h-14 sm:px-2 sm:text-sm"
                        : "flex min-h-12 flex-1 items-center justify-center border-r border-white/15 bg-ink px-1 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-paper last:border-r-0 sm:min-h-14 sm:px-2 sm:text-sm"
                    }
                  >
                    <span className="md:hidden">{DAY_SHORT[key][lang]}</span>
                    <span className="hidden md:inline">{DAY_FULL[key][lang]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <ul className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-xl border border-ink/10 bg-white">
            {WEEK_HOURS.map((day, i) => (
              <li
                key={day.key}
                className={`flex items-center justify-between gap-4 px-4 py-3 text-sm sm:px-5 ${
                  day.key === "sat" ? "bg-signal/25 font-semibold" : ""
                }`}
              >
                <span>{t[DAY_NAME[i]]}</span>
                <span className="tabular-nums text-ink/80">
                  {minutesToClock(day.open)} – {minutesToClock(day.close)}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm italic text-ink/70">
            {loc(
              lang,
              "No appointment required, but booking a chair beats waiting.",
              "No hace falta cita, pero reservar silla gana a la espera.",
              "Não precisa de hora marcada, mas reservar cadeira ganha da fila.",
            )}
          </p>
          <p className="mt-3 text-sm font-medium text-ink">
            {loc(
              lang,
              "Visit us at 603 N 10th St, Reading, PA 19604.",
              "Visítanos en 603 N 10th St, Reading, PA 19604.",
              "Visite 603 N 10th St, Reading, PA 19604.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
