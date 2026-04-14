const AMBER = "#f5a623";

// Simple seeded random (mulberry32)
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

const generateCircleSegments = (radius: number, cx: number, cy: number) => {
  const segments: {
    x: number; y: number; width: number; height: number;
    rotation: number; opacity: number;
  }[] = [];
  const totalSegments = 40;

  for (let i = 0; i < totalSegments; i++) {
    if (random(`cs-${i}`) > 0.7) continue;
    const angle = (i / totalSegments) * Math.PI * 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const len = random(`cl-${i}`) * 18 + 8;
    const thick = random(`ct-${i}`) * 3 + 1.5;
    const opacity = random(`co-${i}`) * 0.4 + 0.4;
    const rotationDeg = (angle * 180) / Math.PI + 90 + (random(`cr-${i}`) * 10 - 5);
    segments.push({ x: x - len / 2, y: y - thick / 2, width: len, height: thick, rotation: rotationDeg, opacity });
  }
  return segments;
};

const starPath = (cx: number, cy: number, outerR: number, innerR: number) => {
  let path = "";
  for (let i = 0; i < 5; i++) {
    const outerAngle = (i * 72 - 90) * (Math.PI / 180);
    const innerAngle = ((i * 72 + 36) - 90) * (Math.PI / 180);
    const ox = cx + Math.cos(outerAngle) * outerR;
    const oy = cy + Math.sin(outerAngle) * outerR;
    const ix = cx + Math.cos(innerAngle) * innerR;
    const iy = cy + Math.sin(innerAngle) * innerR;
    path += `${i === 0 ? "M" : "L"} ${ox} ${oy} L ${ix} ${iy} `;
  }
  return path + "Z";
};

export default function StarStamp({
  size = 200,
  rotation = -8,
  opacity = 0.25,
  color = AMBER,
  className,
}: {
  size?: number;
  rotation?: number;
  opacity?: number;
  color?: string;
  className?: string;
}) {
  const center = size / 2;
  const circleR = size * 0.44;
  const starOuter = size * 0.28;
  const starInner = size * 0.12;
  const circleSegs = generateCircleSegments(circleR, center, center);
  const maskId = `star-flaw-${size}`;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        opacity,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {circleSegs.map((seg, i) => (
        <div key={i}>
          <div
            style={{
              position: "absolute",
              left: seg.x + 2, top: seg.y + 1.5,
              width: seg.width, height: seg.height,
              backgroundColor: color, opacity: seg.opacity * 0.15,
              borderRadius: 1, filter: "blur(2px)",
              transform: `rotate(${seg.rotation}deg)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: seg.x, top: seg.y,
              width: seg.width, height: seg.height,
              backgroundColor: color, opacity: seg.opacity * 0.85,
              borderRadius: 1, filter: "blur(0.3px)",
              transform: `rotate(${seg.rotation}deg)`,
            }}
          />
        </div>
      ))}

      <svg width={size} height={size} style={{ position: "absolute", top: 0, left: 0, filter: "blur(0.8px)" }}>
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="white" />
            <rect x={size * 0.55} y={0} width={size * 0.04} height={size} fill="black" transform={`rotate(15, ${center}, ${center})`} />
          </mask>
        </defs>
        <path d={starPath(center, center, starOuter, starInner)} fill={color} mask={`url(#${maskId})`} opacity={0.9} />
      </svg>

      <svg width={size} height={size} style={{ position: "absolute", top: 2, left: 3, filter: "blur(2.5px)", opacity: 0.15 }}>
        <path d={starPath(center, center, starOuter, starInner)} fill={color} />
      </svg>
    </div>
  );
}
