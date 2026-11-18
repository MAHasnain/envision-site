import type { SVGProps } from "react";

const P = (props: SVGProps<SVGPathElement>) => <path pathLength={1} {...props} />;
const C = (props: SVGProps<SVGCircleElement>) => <circle pathLength={1} {...props} />;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 160 140"
      aria-hidden
      className="landmark h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <P d="M8 128 H152" />
      {children}
    </svg>
  );
}

export function KingdomCentre() {
  return (
    <Frame>
      <P d="M54 128 V120 H114 V128" />
      <P d="M62 120 V24 L68 16 H100 L106 24 V120" />
      <P d="M71 16 C71 74 77 104 84 104 C91 104 97 74 97 16" />
      <P d="M75 16 C75 70 80 96 84 96 C88 96 93 70 93 16" />
      <P d="M71 26 H97 M71 29.5 H97" />
      <P d="M62 42 H67 M62 54 H68 M62 66 H69 M62 78 H71 M62 90 H73 M106 42 H101 M106 54 H100 M106 66 H99 M106 78 H97 M106 90 H95" />
      <P d="M62 108 H106 M62 114 H106" />
      <P d="M30 128 V84 L33 78 H43 L46 84 V128" />
      <P d="M33 78 L38 60 L43 78 M38 60 V46" />
      <P d="M30 104 H46 M30 112 H46 M30 120 H46" />
      <P d="M118 128 V82 H127 V96 H136 V108 H152 V128" />
      <P d="M122.5 82 V74" />
      <P d="M10 128 V112 L18 106 L26 112 V128" />
      <C cx="38" cy="43" r="1.8" />
      <C cx="38" cy="94" r="5" />
      <C cx="38" cy="94" r="1.2" />
    </Frame>
  );
}

export function BurjKhalifa() {
  return (
    <Frame>
      {/* Burj Khalifa */}
      <P d="M66 128 V106 H69 V88 H71.5 V68 H73.2 V50 H74.6 V32 H77.4 V50 H78.8 V68 H80.5 V88 H83 V106 H86 V128" />
      <P d="M76 32 V8" />
      {/* Burj Al Arab */}
      <P d="M112 128 V56" />
      <P d="M112 62 C138 72 144 104 140 128" />
      <P d="M112 86 C128 91 133 108 131 128" />
      {/* Dome + minaret */}
      <P d="M30 128 V112 C30 98 52 98 52 112 V128" />
      <P d="M41 101 V94" />
      <P d="M16 128 V104 L19.5 98 L23 104 V128" />
      <P d="M56 128 V116 H62 V128" />
    </Frame>
  );
}

export function BrandenburgGate() {
  const cols = [30, 50, 70, 90, 110, 130];
  return (
    <Frame>
      <P d="M18 120 H142" />
      {cols.map((c) => (
        <P key={c} d={`M${c - 4} 120 V64 M${c + 4} 120 V64 M${c - 5.5} 64 H${c + 5.5}`} />
      ))}
      <P d="M22 50 H138 V62 H22 Z M22 56 H138" />
      <P d="M34 38 H126 V50 M34 38 V50 M58 38 V50 M80 38 V50 M102 38 V50" />
      {/* Quadriga */}
      <P d="M62 38 V33 H98 V38" />
      <C cx="68" cy="30" r="3.6" />
      <C cx="92" cy="30" r="3.6" />
      <P d="M80 33 V19" />
      <C cx="80" cy="16" r="2.4" />
      <P d="M80 24 Q72 14 65 19 M80 24 Q88 14 95 19" />
      <P d="M58 33 Q53 23 61 20 M102 33 Q107 23 99 20" />
    </Frame>
  );
}

export function EiffelTower() {
  return (
    <Frame>
      <P d="M50 128 C58 112 62 100 65 88 C68 74 71 64 72 56 C74 46 76 40 77 34 C78 28 79.5 18 80 8" />
      <P d="M110 128 C102 112 98 100 95 88 C92 74 89 64 88 56 C86 46 84 40 83 34 C82 28 80.5 18 80 8" />
      <P d="M57 128 C63 114 66 102 68 90 M103 128 C97 114 94 102 92 90" />
      <P d="M61 128 C63 110 97 110 99 128" />
      <P d="M66 128 C68 116 92 116 94 128" />
      <P d="M62 88 H98 M63.5 91 H96.5" />
      <P d="M70 56 H90 M71 58.5 H89" />
      <P d="M76 34 H84 M77.5 24 H82.5" />
      <P d="M65.5 88 L91 72 M94.5 88 L69 72 M69 72 L88.5 56 M91 72 L71.5 56 M68.5 72 H91.5" />
      <P d="M73 55 L82.5 41 M87 55 L77.5 41" />
      <P d="M53.5 118 H60 M57.8 108 H63.5 M61.2 98 H65.8 M106.5 118 H100 M102.2 108 H96.5 M98.8 98 H94.2" />
      <P d="M80 22 V8" />
      <P d="M30 128 C30 121 38 121 38 128 M122 128 C122 121 130 121 130 128" />
    </Frame>
  );
}