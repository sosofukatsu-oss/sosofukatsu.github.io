"use client";

import { useEffect, useState } from "react";

const TOOLS = [
  { name: "Illustrator",  base: 82, range: 7, color: "var(--accent-blue)" },
  { name: "Photoshop",    base: 67, range: 7, color: "var(--accent-red)" },
  { name: "Premiere Pro", base: 67, range: 7, color: "var(--accent-green)" },
  { name: "Canva",        base: 27, range: 7, color: "var(--accent-yellow)" },
];

const DESIGN_SKILLS = [
  { name: "視線誘導を意識したレイアウト",     base: 63, range: 18, color: "var(--accent-blue)" },
  { name: "内容の雰囲気に合わせた色づかい",   base: 61, range: 18, color: "var(--accent-red)" },
  { name: "シリーズ感を保ったデザイン展開",   base: 62, range: 18, color: "var(--accent-green)" },
  { name: "情報量の多い画面を整理する構成力", base: 60, range: 20, color: "var(--accent-yellow)" },
];

function randomFluctuate(base: number, range: number) {
  return base + Math.floor(Math.random() * range);
}

export default function Skills() {
  const [toolValues, setToolValues]     = useState(TOOLS.map((t) => t.base));
  const [designValues, setDesignValues] = useState(DESIGN_SKILLS.map((s) => s.base));
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d.length >= 3 ? "." : d + ".")), 400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const intervals = [
      ...TOOLS.map((tool, i) =>
        setInterval(() => {
          setToolValues((prev) => {
            const next = [...prev];
            next[i] = randomFluctuate(tool.base, tool.range);
            return next;
          });
        }, 320 + i * 140)
      ),
      ...DESIGN_SKILLS.map((skill, i) =>
        setInterval(() => {
          setDesignValues((prev) => {
            const next = [...prev];
            next[i] = randomFluctuate(skill.base, skill.range);
            return next;
          });
        }, 370 + i * 160)
      ),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-label">SKILLS</div>
          <h2 className="heading-pixel text-4xl sm:text-5xl mb-3">スキル</h2>
          <p className="text-[var(--text-secondary)]">
            現在も成長の途中にあり、数値はあくまで自己イメージです。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* USE TOOLS */}
          <div className="card-pixel p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-pixel)]">
              <span className="font-pixel-sm text-[var(--text-muted)]">// USE TOOLS</span>
              <span className="font-pixel-sm text-[var(--accent-yellow)]">MEASURING{dots}</span>
            </div>
            <div className="space-y-3">
              {TOOLS.map((tool, i) => (
                <div key={tool.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-sm text-[var(--text-primary)]">{tool.name}</span>
                    <span className="font-pixel-sm tabular-nums" style={{ color: tool.color, minWidth: "2ch", textAlign: "right" }}>
                      {toolValues[i]}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${toolValues[i]}%`, background: tool.color, transition: "width 0.2s ease-out" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 font-pixel-sm text-[var(--text-muted)] text-center" style={{ fontSize: "0.5rem" }}>
              -- ANALYZING TOOL PROFICIENCY --
            </div>
          </div>

          {/* DESIGN SKILLS */}
          <div className="card-pixel p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-pixel)]">
              <span className="font-pixel-sm text-[var(--text-muted)]">// DESIGN SKILLS</span>
              <span className="font-pixel-sm text-[var(--accent-yellow)]">MEASURING{dots}</span>
            </div>
            <div className="space-y-3">
              {DESIGN_SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 gap-3">
                    <span className="font-pixel text-sm text-[var(--text-primary)] leading-tight">{skill.name}</span>
                    <span className="font-pixel-sm tabular-nums flex-shrink-0" style={{ color: skill.color, minWidth: "2ch", textAlign: "right" }}>
                      {designValues[i]}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${designValues[i]}%`, background: skill.color, transition: "width 0.2s ease-out" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 font-pixel-sm text-[var(--text-muted)] text-center" style={{ fontSize: "0.5rem" }}>
              -- ANALYZING DESIGN SKILLS --
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
