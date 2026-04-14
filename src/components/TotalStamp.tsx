const STAMP_GREEN = "#2ca84a";

function seededRandom(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function random(key: string) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0;
  }
  return seededRandom(hash);
}

const generateBorderSegments = () => {
  const segments: { x: number; y: number; width: number; height: number; opacity: number }[] = [];
  const size = 220;
  const pad = 10;

  // Top
  let x = pad;
  while (x < size - pad) {
    const len = random(`t-${x}`) * 30 + 8;
    const thick = random(`tt-${x}`) * 4 + 2;
    if (random(`tg-${x}`) > 0.3) {
      segments.push({ x, y: pad, width: Math.min(len, size - pad - x), height: thick, opacity: random(`to-${x}`) * 0.5 + 0.4 });
    }
    x += len + random(`ts-${x}`) * 12;
  }

  // Bottom
  x = pad;
  while (x < size - pad) {
    const len = random(`b-${x}`) * 28 + 10;
    const thick = random(`bt-${x}`) * 4 + 2;
    if (random(`bg-${x}`) > 0.25) {
      segments.push({ x, y: size - pad - thick, width: Math.min(len, size - pad - x), height: thick, opacity: random(`bo-${x}`) * 0.5 + 0.35 });
    }
    x += len + random(`bs-${x}`) * 14;
  }

  // Left
  let y = pad;
  while (y < size - pad) {
    const len = random(`l-${y}`) * 25 + 10;
    const thick = random(`lt-${y}`) * 4 + 2;
    if (random(`lg-${y}`) > 0.3) {
      segments.push({ x: pad, y, width: thick, height: Math.min(len, size - pad - y), opacity: random(`lo-${y}`) * 0.5 + 0.4 });
    }
    y += len + random(`ls-${y}`) * 12;
  }

  // Right
  y = pad;
  while (y < size - pad) {
    const len = random(`r-${y}`) * 28 + 8;
    const thick = random(`rt-${y}`) * 4 + 2;
    if (random(`rg-${y}`) > 0.25) {
      segments.push({ x: size - pad - thick, y, width: thick, height: Math.min(len, size - pad - y), opacity: random(`ro-${y}`) * 0.5 + 0.35 });
    }
    y += len + random(`rs-${y}`) * 14;
  }

  return segments;
};

const borderSegments = generateBorderSegments();

export default function TotalStamp({
  size = 50,
  rotation = -6,
  opacity = 0.3,
  className,
}: {
  size?: number;
  rotation?: number;
  opacity?: number;
  className?: string;
}) {
  const scale = size / 220;
  const logoSize = size * 0.65;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
        opacity,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Irregular border segments with ghost shadows */}
      {borderSegments.map((seg, i) => (
        <div key={i}>
          {/* Ghost shadow */}
          <div
            style={{
              position: "absolute",
              left: seg.x * scale + 2,
              top: seg.y * scale + 1.5,
              width: seg.width * scale,
              height: seg.height * scale,
              backgroundColor: STAMP_GREEN,
              opacity: seg.opacity * 0.15,
              borderRadius: 1,
              filter: "blur(2px)",
            }}
          />
          {/* Main segment */}
          <div
            style={{
              position: "absolute",
              left: seg.x * scale,
              top: seg.y * scale,
              width: seg.width * scale,
              height: seg.height * scale,
              backgroundColor: STAMP_GREEN,
              opacity: seg.opacity * 0.85,
              borderRadius: 1,
              filter: "blur(0.3px)",
            }}
          />
        </div>
      ))}

      {/* Logo ghost shadow */}
      <img
        src="/images/total-assistente-logo.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "calc(50% + 2px)",
          left: "calc(50% + 3px)",
          width: logoSize,
          height: logoSize,
          transform: "translate(-50%, -50%)",
          filter: "blur(2.5px) brightness(0) invert(42%) sepia(93%) saturate(450%) hue-rotate(100deg) brightness(92%)",
          opacity: 0.15,
        }}
      />

      {/* Logo main — green silhouette with faded streak */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: logoSize,
          height: logoSize,
          transform: "translate(-50%, -50%) skew(-3deg, 2deg) scaleX(1.06)",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/total-assistente-logo.webp"
          alt="Total Assistente"
          style={{
            width: "100%",
            height: "100%",
            filter: "blur(0.8px) brightness(0) invert(42%) sepia(93%) saturate(450%) hue-rotate(100deg) brightness(92%)",
            maskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.12) 82%, rgba(0,0,0,0.18) 84%, rgba(0,0,0,1) 86%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.12) 82%, rgba(0,0,0,0.18) 84%, rgba(0,0,0,1) 86%, rgba(0,0,0,1) 100%)",
          }}
        />
      </div>

      {/* Cut on the star edge */}
      <div
        style={{
          position: "absolute",
          left: size * 0.62,
          top: size * 0.22,
          width: 28 * scale,
          height: 5 * scale,
          backgroundColor: "#161616",
          transform: "rotate(-35deg)",
          borderRadius: 2,
          zIndex: 2,
        }}
      />
    </div>
  );
}
