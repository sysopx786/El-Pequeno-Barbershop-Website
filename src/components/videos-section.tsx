import { InstagramMark } from "@/components/brand-marks";
import { SocialLinks } from "@/components/social-links";
import { VIDEOS } from "@/lib/shop";
import { useI18n } from "@/lib/i18n";
import { asset } from "@/lib/utils";

export function VideosSection() {
  const { t } = useI18n();

  return (
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
          {VIDEOS.map((v, i) => (
            <li key={v.id} className="w-full max-w-[400px]">
              <video
                controls
                playsInline
                preload={i === 0 ? "metadata" : "none"}
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
  );
}
