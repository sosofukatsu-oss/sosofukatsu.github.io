"use client";

import { useEffect, useState } from "react";

// ドット絵風8フレームスピナー
const SPINNER_FRAMES = ["◢", "▼", "◣", "◀", "◤", "▲", "◥", "▶"];

export default function StageDivider() {
  const [blink, setBlink] = useState(true);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setFrame((f) => (f + 1) % SPINNER_FRAMES.length);
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[var(--text-primary)] py-8 px-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent-blue)]" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[var(--accent-blue)]" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left: next area */}
          <div>
            <div className="font-pixel-sm text-white/40 mb-0.5" style={{ fontSize: "0.5rem" }}>NEXT AREA</div>
            <div className="font-pixel text-white text-base sm:text-xl tracking-wide">CONTACT</div>
          </div>

          {/* Center: spinner */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="font-pixel text-[var(--accent-blue)] select-none"
              style={{ fontSize: "1.8rem", lineHeight: 1 }}
            >
              {SPINNER_FRAMES[frame]}
            </div>
            <div className="font-pixel-sm text-white/30" style={{ fontSize: "0.45rem" }}>
              LOADING...
            </div>
          </div>

          {/* Right: prompt */}
          <div className="flex items-center gap-2">
            <span
              className="font-pixel-sm text-[var(--accent-yellow)]"
              style={{ fontSize: "0.55rem", opacity: blink ? 1 : 0 }}
            >
              ▸▸▸
            </span>
            <span className="font-pixel-sm text-white/60" style={{ fontSize: "0.55rem" }}>
              PRESS TO CONTACT
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
