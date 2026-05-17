import React from "react";

/**
 * Creative section badges — replace the boring "—  LABEL" pattern.
 * Each section uses one of these decorative shapes with the label inside.
 */

const SHAPES = {
  spike: {
    // 20-point spiked burst (sun-burst star)
    clip: "polygon(50% 0%, 55% 11%, 65% 5%, 67% 17%, 78% 13%, 76% 25%, 88% 24%, 82% 35%, 95% 39%, 86% 49%, 100% 55%, 88% 62%, 95% 75%, 82% 75%, 88% 87%, 76% 84%, 78% 96%, 67% 91%, 65% 100%, 55% 92%, 50% 100%, 45% 92%, 35% 100%, 33% 91%, 22% 96%, 24% 84%, 12% 87%, 18% 75%, 5% 75%, 12% 62%, 0% 55%, 14% 49%, 5% 39%, 18% 35%, 12% 24%, 24% 25%, 22% 13%, 33% 17%, 35% 5%, 45% 11%)",
  },
  cloud: {
    // organic cloud / blob shape
    borderRadius: "60% 40% 55% 45% / 55% 45% 55% 45%",
  },
  cloudAlt: {
    borderRadius: "45% 55% 40% 60% / 50% 60% 40% 50%",
  },
  fruity: {
    // strawberry / pear / leaf shape
    borderRadius: "30% 70% 70% 30% / 50% 50% 50% 50%",
  },
  apple: {
    borderRadius: "65% 35% 70% 30% / 60% 60% 40% 40%",
  },
  diamond: {
    clip: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  },
  scallop: {
    // scalloped circle
    clip: "polygon(50% 0%, 60% 10%, 70% 4%, 76% 14%, 88% 12%, 90% 24%, 100% 30%, 94% 42%, 100% 56%, 88% 60%, 88% 76%, 76% 76%, 70% 90%, 56% 84%, 50% 100%, 40% 86%, 30% 90%, 24% 80%, 12% 80%, 10% 68%, 0% 60%, 8% 46%, 0% 32%, 12% 24%, 12% 12%, 24% 14%, 30% 4%, 40% 10%)",
  },
  hex: {
    clip: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  },
  badge: {
    // 12-point award-badge gear
    clip: "polygon(50% 0%, 60% 8%, 71% 5%, 75% 16%, 87% 17%, 86% 29%, 96% 35%, 90% 46%, 100% 52%, 90% 62%, 96% 73%, 84% 76%, 86% 88%, 73% 86%, 70% 96%, 58% 91%, 50% 100%, 42% 91%, 30% 96%, 27% 86%, 14% 88%, 16% 76%, 4% 73%, 10% 62%, 0% 52%, 10% 46%, 4% 35%, 14% 29%, 13% 17%, 25% 16%, 29% 5%, 40% 8%)",
  },
};

const PALETTES = {
  yellow: {
    bg: "var(--accent-yellow)",
    fg: "#000",
    border: "rgba(0,0,0,0.85)",
  },
  pink: {
    bg: "var(--accent-pink)",
    fg: "#fff",
    border: "rgba(255,255,255,0.85)",
  },
  blue: {
    bg: "var(--accent-blue)",
    fg: "#fff",
    border: "rgba(255,255,255,0.85)",
  },
  cream: {
    bg: "var(--accent-cream)",
    fg: "#000",
    border: "rgba(0,0,0,0.85)",
  },
};

export default function SectionBadge({
  label,
  shape = "cloud",
  color = "yellow",
  rotate = "-4deg",
  size = "md",
  className = "",
}) {
  const palette = PALETTES[color] ?? PALETTES.yellow;
  const shapeDef = SHAPES[shape] ?? SHAPES.cloud;

  const sizes = {
    sm: { padX: 18, padY: 10, font: 11, w: 110 },
    md: { padX: 22, padY: 14, font: 12, w: 130 },
    lg: { padX: 28, padY: 18, font: 14, w: 160 },
  };
  const s = sizes[size] ?? sizes.md;

  const baseStyle = {
    background: palette.bg,
    color: palette.fg,
    padding: `${s.padY}px ${s.padX}px`,
    fontFamily: "Anton, Oswald, sans-serif",
    fontSize: `${s.font}px`,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    minWidth: `${s.w}px`,
    textAlign: "center",
    transform: `rotate(${rotate})`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1.1,
    fontWeight: 500,
    ...(shapeDef.clip ? { clipPath: shapeDef.clip } : {}),
    ...(shapeDef.borderRadius
      ? { borderRadius: shapeDef.borderRadius }
      : {}),
  };

  // For spike/badge/scallop, add extra padding so text fits inside the spikes
  if (shape === "spike" || shape === "badge" || shape === "scallop") {
    baseStyle.padding = `${s.padY + 12}px ${s.padX + 20}px`;
  }

  return (
    <span
      data-testid={`section-badge-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className={`inline-flex shrink-0 ${className}`}
      style={baseStyle}
    >
      {label}
    </span>
  );
}
