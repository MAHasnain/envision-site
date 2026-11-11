import {
  Send, BarChart3, ShieldCheck, Lightbulb, Server, Layers, Lock, Leaf,
  Eye, RefreshCw, ClipboardCheck, Zap, Brain, TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import type { ServicePage, IconName } from "@/data/service-pages";

const icons: Record<IconName, LucideIcon> = {
  send: Send, chart: BarChart3, shield: ShieldCheck, bulb: Lightbulb, server: Server,
  layers: Layers, lock: Lock, leaf: Leaf, eye: Eye, refresh: RefreshCw,
  clipboard: ClipboardCheck, zap: Zap, brain: Brain, trending: TrendingUp,
};

export default function ServiceOverview({ overview }: { overview: ServicePage["overview"] }) {
  return (
    <section className="border-t border-white/10 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-sm text-picton-200">Overview</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {overview.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-lg leading-relaxed text-white/65 lg:pt-8">{overview.text}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {overview.benefits.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <li key={b.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-picton/30 bg-picton/10 text-picton-200">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{b.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
