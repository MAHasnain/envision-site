import Reveal from "./Reveal";
import type { ServicePage } from "@/data/service-pages";

export default function ServiceBand({ band }: { band: NonNullable<ServicePage["band"]> }) {
  return (
    <section className="border-t border-white/10 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm text-picton-200">{band.partnersLabel}</p>
            <p className="mt-3 text-2xl font-medium leading-snug sm:text-3xl">{band.partnersText}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm text-picton-200">{band.missionLabel}</p>
            <p className="mt-3 text-xl leading-snug text-white/80 sm:text-2xl">{band.missionText}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
