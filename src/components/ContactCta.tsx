import Link from "next/link";
import Reveal from "./Reveal";

export default function ContactCta() {
  return (
    <section className="py-24 text-center text-white sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-picton-200">Let&rsquo;s build together</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Start the Conversation
          </h2>
          <p className="mt-4 text-xl text-white/80">We&rsquo;re here to help</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Whether you have a specific project in mind or simply want to explore what&rsquo;s
            possible, we&rsquo;d love to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <Link
            href="/contact-us"
            className="mt-9 inline-block rounded-full bg-picton px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-picton-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
