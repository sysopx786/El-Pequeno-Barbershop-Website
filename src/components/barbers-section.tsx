import { loc, useI18n } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import { EDWIN_PHOTO } from "@/lib/barber-photos/edwin";
import { GABRIEL_PHOTO } from "@/lib/barber-photos/gabriel";
import { JULIAN_PHOTO } from "@/lib/barber-photos/julian";

const BARBERS = [
  {
    id: "edwin",
    src: EDWIN_PHOTO,
    name: "Edwin \u201cEl Peque\u00f1o\u201d Torres",
    pos: "center" as const,
    role: {
      en: "The one who built the shop",
      es: "El que arm\u00f3 la barber\u00eda",
      pt: "Quem montou a barbearia",
    },
    bio: {
      en: "Edwin owns the place. He doesn\u2019t rush the cut. Some of these clients have been in his chair for years. You want the owner? Ask for him.",
      es: "Edwin es el due\u00f1o. No te apura el corte. Hay clientes que llevan a\u00f1os en su silla. \u00bfQuieres al owner? P\u00eddelo.",
      pt: "Edwin \u00e9 o dono. Ele n\u00e3o apressa o corte. Tem cliente que est\u00e1 na cadeira dele h\u00e1 anos. Quer o owner? Pede ele.",
    },
    alt: {
      en: "Edwin Torres at the chair",
      es: "Edwin Torres en la silla",
      pt: "Edwin Torres na cadeira",
    },
  },
  {
    id: "gabriel",
    src: GABRIEL_PHOTO,
    name: "Gabriel",
    pos: "left" as const,
    role: {
      en: "Master of the Fade",
      es: "El maestro del fade",
      pt: "Mestre do fade",
    },
    bio: {
      en: "Ask for Gabriel. That\u2019s what the shop tells you at the door. Skin fades, sharp lineups, the cut people clock from across the room.",
      es: "Pide a Gabriel. Eso te dicen en la puerta. Skin fades, l\u00edneas filosas, el corte que se nota desde el otro lado del local.",
      pt: "Pe\u00e7a o Gabriel. \u00c9 o que a loja fala na porta. Skin fade, linha afiada, o corte que a gente v\u00ea do outro lado da sala.",
    },
    alt: {
      en: "Gabriel cutting a lineup",
      es: "Gabriel perfilando",
      pt: "Gabriel fazendo o pezinho",
    },
  },
  {
    id: "julian",
    src: JULIAN_PHOTO,
    name: "Julian",
    pos: "left" as const,
    role: {
      en: "The precision chair",
      es: "La silla de precisi\u00f3n",
      pt: "A cadeira da precis\u00e3o",
    },
    bio: {
      en: "Ask for Julian too. Tight lines, no guessing. People book him when they want it sharp today and still sharp next week.",
      es: "Pide a Julian tambi\u00e9n. L\u00edneas prietas, sin adivinar. Lo buscan cuando quieren verse bien hoy y seguir vi\u00e9ndose bien la semana que viene.",
      pt: "Pe\u00e7a o Julian tamb\u00e9m. Linha justa, sem chute. Marcam com ele quando querem sair afiado hoje e continuar afiado na semana que vem.",
    },
    alt: {
      en: "Julian working a precise cut",
      es: "Julian en un corte preciso",
      pt: "Julian em um corte preciso",
    },
  },
];

export function BarbersSection() {
  const { lang } = useI18n();

  return (
    <section id="barbers" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
          {loc(lang, "The chairs", "Las sillas", "As cadeiras")}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
          {loc(lang, "Ask for a name.", "Pide un nombre.", "Pe\u00e7a um nome.")}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/80">
          {loc(
            lang,
            "Ask for a name or take the next open seat.",
            "Pide un nombre o t\u00f3mate la siguiente silla.",
            "Pe\u00e7a um nome ou pegue a pr\u00f3xima cadeira.",
          )}
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BARBERS.map((barber) => (
            <li key={barber.id} className="overflow-hidden rounded-xl border border-ink/10 bg-white">
              <img
                src={asset(barber.src)}
                alt={loc(lang, barber.alt.en, barber.alt.es, barber.alt.pt)}
                className={
                  barber.pos === "left"
                    ? "aspect-[4/5] w-full object-cover object-left"
                    : "aspect-[4/5] w-full object-cover object-center"
                }
              />
              <div className="p-5 sm:p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-oxblood">
                  {loc(lang, barber.role.en, barber.role.es, barber.role.pt)}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold uppercase leading-tight">
                  {barber.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                  {loc(lang, barber.bio.en, barber.bio.es, barber.bio.pt)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
