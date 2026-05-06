"use client";

import { useState, useEffect } from "react";

type Props = {
  areaNum: string;
  nextArea: string;
};

export default function AreaDivider({ areaNum, nextArea }: Props) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="py-3 px-4">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <div className="h-px flex-1 bg-[var(--border-pixel)]" />
        <span className="font-pixel-sm text-[var(--text-muted)]" style={{ fontSize: "0.45rem" }}>
          {areaNum}
        </span>
        <span className="font-pixel-sm text-[var(--text-muted)]" style={{ fontSize: "0.45rem" }}>
          ▸ {nextArea}
        </span>
        <span
          className="font-pixel-sm text-[var(--text-muted)]"
          style={{ fontSize: "0.45rem", opacity: blink ? 1 : 0 }}
        >
          ■
        </span>
        <div className="h-px flex-1 bg-[var(--border-pixel)]" />
      </div>
    </div>
  );
}
