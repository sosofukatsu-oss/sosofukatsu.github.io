"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BASE_STATS = [
  { label: "DESIGN",     base: 72, range: 28, color: "var(--accent-blue)" },
  { label: "IMPACT",     base: 68, range: 30, color: "var(--accent-red)" },
  { label: "CLARITY",    base: 75, range: 24, color: "var(--accent-green)" },
  { label: "GAME SENSE", base: 80, range: 19, color: "var(--accent-yellow)" },
];

function randomFluctuate(base: number, range: number) {
  return base + Math.floor(Math.random() * range);
}

export default function Hero() {
  const [blink, setBlink] = useState(true);
  // サーバーとクライアントで初期値を一致させるため base 値で初期化
  const [statValues, setStatValues] = useState(BASE_STATS.map((s) => s.base));
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const blinkT = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(blinkT);
  }, []);

  // ドットアニメーション "." → ".." → "..."
  useEffect(() => {
    const t = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 400);
    return () => clearInterval(t);
  }, []);

  // マウント後にランダム揺れ開始（Hydrationエラー回避のためuseEffect内のみ）
  useEffect(() => {
    const intervals = BASE_STATS.map((s, i) => {
      const interval = 280 + i * 130;
      return setInterval(() => {
        setStatValues((prev) => {
          const next = [...prev];
          next[i] = randomFluctuate(s.base, s.range);
          return next;
        });
      }, interval);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-14">
      {/* Corner decorations */}
      <div className="absolute top-16 left-4 font-pixel-sm text-[var(--text-muted)] opacity-50 leading-relaxed hidden sm:block">
        <div>X: 0000</div>
        <div>Y: 0000</div>
        <div>Z: 0001</div>
      </div>
      <div className="absolute top-16 right-4 font-pixel-sm text-[var(--text-muted)] opacity-50 text-right hidden sm:block">
        <div>VER 1.0.0</div>
        <div>BUILD OK</div>
        <div className="flex items-center gap-1 justify-end">
          <span className={`inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] ${blink ? "opacity-100" : "opacity-30"}`} />
          ONLINE
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div className="fade-in-up">
            {/* Status label */}
            <div className="section-label mb-6 inline-flex">
              <span className={`w-2 h-2 rounded-full bg-[var(--accent-green)] ${blink ? "opacity-100" : "opacity-40"} transition-opacity`} />
              CREATOR PROFILE
            </div>

            {/* Main title */}
            <h1 className="heading-pixel text-7xl sm:text-8xl lg:text-9xl mb-2 tracking-wide">
              SO-SO
            </h1>
            <div className="font-pixel-sm text-[var(--text-muted)] mb-6">
              YouTube Creator / Thumbnail Designer
            </div>

            {/* Sub copy */}
            <p className="text-xl sm:text-2xl font-medium text-[var(--text-primary)] mb-3 leading-snug">
              クリックされるきっかけを、デザインしたい
            </p>
            <p className="text-[var(--text-secondary)] mb-8 max-w-[30rem]">
              まだ挑戦の途中ですが、見やすさ・伝わりやすさ・思わず見たくなる雰囲気を意識して、
              一枚ずつ工夫しながら制作していきます。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#works" className="btn-pixel">
                制作実績を見る
              </a>
              <a
                href="https://www.youtube.com/channel/UCgBEtk2KmefN3tuvNONzO6w"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel-outline"
              >
                ▶ YouTubeを見る
              </a>
              <a href="#contact" className="btn-pixel-outline">
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Right: game status card */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="pixel-border bg-white p-6 max-w-sm mx-auto">
              {/* Card header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-pixel)]">
                <span className="font-pixel-sm text-[var(--text-muted)]">PLAYER STATUS</span>
                <span className="font-pixel-sm text-[var(--accent-yellow)]">
                  MEASURING{dots}
                </span>
              </div>

              {/* Avatar placeholder */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 border-2 border-[var(--border-pixel)] overflow-hidden flex-shrink-0 bg-[var(--bg-base)]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/hikokunin-kun.PNG`}
                    alt="SO-SO アイコン"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="heading-pixel text-2xl mb-0.5">SO-SO</div>
                  <div className="font-pixel-sm text-[var(--text-muted)] leading-relaxed">
                    THUMBNAIL DESIGNER<br />
                    YOUTUBE CREATOR
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                {BASE_STATS.map((stat, i) => {
                  const val = statValues[i];
                  return (
                    <div key={stat.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-pixel-sm text-[var(--text-secondary)]">{stat.label}</span>
                        <span
                          className="font-pixel-sm tabular-nums"
                          style={{ color: stat.color, minWidth: "2ch", textAlign: "right" }}
                        >
                          {val}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${val}%`,
                            background: stat.color,
                            transition: "width 0.15s ease-out",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Measuring note */}
              <div className="mt-3 font-pixel-sm text-[var(--text-muted)] text-center" style={{ fontSize: "0.5rem" }}>
                -- ANALYZING PLAYER DATA --
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[var(--border-pixel)]">
                {["ゲーム", "サムネイル", "YouTube", "デザイン"].map((tag) => (
                  <span key={tag} className="font-pixel text-sm text-[var(--text-muted)] border border-[var(--border-pixel)] px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
