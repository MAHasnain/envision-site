import Image from "next/image";

type Props = { className?: string; priority?: boolean };


export default function Logo({ className = "h-9 w-auto", priority }: Props) {
  return (
    <>
      <Image
        src="/images/logo-white.png"
        alt="Envision Consulting"
        width={128}
        height={55}
        priority={priority}
        className={`${className} logo-for-dark`}
      />

      <Image
        src="/images/logo-black.png"
        alt=""
        aria-hidden
        width={128}
        height={55}
        className={`${className} logo-for-light`}
      />
    </>
  );
}