import { MessageSquare, Phone } from "lucide-react";
import { LangCircles } from "@/components/site-header";
import { SHOP } from "@/lib/shop";
import { useI18n } from "@/lib/i18n";

export function MobileDock() {
  const { t } = useI18n();

  return (
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
  );
}
