import Reveal from "./Reveal";
import BlueImage from "./BlueImage";

// Apni landmark photos in naamon se public/images/presence/ mein rakho
const countries = [
  { name: "Saudi Arabia", src: "/images/presence/saudia-arabia.jpg" },
  { name: "United Arab Emirates", src: "/images/presence/uae.jpg" },
  { name: "Germany", src: "/images/presence/germany.jpg" },
  { name: "France", src: "/images/presence/france.jpg" },
];

export default function Presence() {
  return (
    <section className="border-t border-white/10 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-sm text-picton-200">Our presence</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Global Expertise. Local Presence
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg text-lg leading-relaxed text-white/65 lg:pt-8">
              Built on 15+ years of technology delivery across GCC, Envision brings proven
              enterprise expertise closer to clients across Europe.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {countries.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={i * 0.08}>
                <div className="relative isolate aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <BlueImage
                    src={c.src}
                    alt={c.name}
                    sizes="(min-width: 1024px) 300px, 50vw"
                    strength="full"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/60 to-transparent p-4 pt-20 sm:p-5 sm:pt-24">
                    <h3 className="text-base font-semibold sm:text-lg">{c.name}</h3>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}