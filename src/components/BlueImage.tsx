import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  /** full = poori photo blue duotone, soft = sirf halka blue tint */
  strength?: "full" | "soft";
  priority?: boolean;
};

// Parent ko `relative overflow-hidden isolate` hona chahiye.
// Kisi bhi photo ko brand blue shade mein ek jaisa dikhata hai.
export default function BlueImage({ src, alt, sizes, strength = "full", priority }: Props) {
  const full = strength === "full";

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${full ? "grayscale contrast-110 brightness-105" : ""}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 mix-blend-color ${
          full ? "bg-picton opacity-90" : "bg-azure opacity-45"
        }`}
      />
    </>
  );
}