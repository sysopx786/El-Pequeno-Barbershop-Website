import { loc, useI18n } from "@/lib/i18n";

const DAYS = [
  { key: "mon", short: "Mon", label: "Monday", close: "7:00 PM" },
  { key: "tue", short: "Tue", label: "Tuesday", close: "7:00 PM" },
  { key: "wed", short: "Wed", label: "Wednesday", close: "5:00 PM" },
  { key: "thu", short: "Thu", label: "Thursday", close: "7:00 PM" },
  { key: "fri", short: "Fri", label: "Friday", close: "8:00 PM" },
  { key: "sat", short: "Sat", label: "Saturday", close: "8:00 PM", peak: true },
  { key: "sun", short: "Sun", label: "Sunday", close: "4:00 PM", wind: true },
] as const;

export function WeekAt603() {
  const { lang } = useI18n();

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
              "Open 7 days. Walk-ins welcome. Friday and Saturday until 8. Sunday 10–4.",
              "Abierto 7 días. Walk-ins bienvenidos. Viernes y sábado hasta las 8. Domingo 10–4.",
              "Aberto 7 dias. Walk-ins bem-vindos. Sexta e sábado até às 8. Domingo 10–4.",
            )}
          </p>

          <div className="mt-10">
            <div className="flex overflow-hidden rounded-full border border-ink/20">
              {DAYS.map((day) => (
                <div
                  key={day.key}
                  className={
                    day.peak
                      ? "flex min-h-12 flex-1 items-center justify-center bg-signal px-1 text-center text-[0.7rem] font-bold uppercase tracking-wide text-ink sm:min-h-14 sm:px-2 sm:text-sm"
                      : "flex min-h-12 flex-1 items-center justify-center border-r border-white/15 bg-ink px-1 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-paper last:border-r-0 sm:min-h-14 sm:px-2 sm:text-sm"
                  }
                >
                  <span className="md:hidden">{day.short}</span>
                  <span className="hidden md:inline">{day.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li className="rounded-xl border border-ink/10 bg-white px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-oxblood">
                {loc(lang, "Mon–Thu", "Lun–Jue", "Seg–Qui")}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {loc(lang, "Walk-ins welcome", "Walk-ins bienvenidos", "Walk-ins bem-vindos")}
              </p>
              <p className="mt-1 text-sm text-ink/70">
                {loc(lang, "Closes 7 PM. Wednesday at 5.", "Cierra a las 7. Miércoles a las 5.", "Fecha às 19h. Quarta às 17h.")}
              </p>
            </li>
            <li className="rounded-xl border border-signal bg-signal/25 px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink">
                {loc(lang, "Friday + Saturday", "Viernes y sábado", "Sexta e sábado")}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {loc(lang, "Peak hours. Booking recommended.", "Hora pico. Mejor reservar.", "Horário de pico. Melhor reservar.")}
              </p>
              <p className="mt-1 text-sm text-ink/80">
                {loc(lang, "Open 8 AM–8 PM.", "Abierto 8 AM–8 PM.", "Aberto 8h–20h.")}
              </p>
            </li>
            <li className="rounded-xl border border-ink/10 bg-white px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-oxblood">
                {loc(lang, "Sunday", "Domingo", "Domingo")}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {loc(lang, "Weekend wind-down", "Cierre de fin de semana", "Encerramento do fim de semana")}
              </p>
              <p className="mt-1 text-sm text-ink/70">
                {loc(lang, "Walk-ins welcome. 10 AM–4 PM.", "Walk-ins bienvenidos. 10 AM–4 PM.", "Walk-ins bem-vindos. 10h–16h.")}
              </p>
            </li>
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
            {loc(lang, "Visit us at 603 N 10th St, Reading, PA 19604.", "Visítanos en 603 N 10th St, Reading, PA 19604.", "Visite 603 N 10th St, Reading, PA 19604.")}
          </p>
        </div>
      </div>
    </section>
  );
}
