import Image from "next/image";
import { works, Work } from "@/data/works";

function PixelCorners() {
  return (
    <>
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--accent-blue)]" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--accent-blue)]" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--accent-blue)]" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--accent-blue)]" />
    </>
  );
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <div className="relative bg-white border border-[var(--border-pixel)]"
      style={{ boxShadow: "4px 4px 0 var(--border-pixel)" }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-[var(--bg-base)] overflow-hidden">
        <Image
          src={work.imageSrc}
          alt={work.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card body */}
      <div className="p-4 border-t border-[var(--border-pixel)]">
        {/* Title row */}
        <div className="flex items-start gap-2 mb-3">
          <span className="font-pixel-sm text-[var(--accent-blue)] flex-shrink-0 mt-0.5" style={{ fontSize: "0.55rem" }}>
            ▸
          </span>
          <h3 className="heading-pixel text-base leading-snug">{work.title}</h3>
        </div>

        {/* Tag */}
        <div className="flex flex-wrap gap-1.5">
          <span className="font-pixel text-[var(--text-muted)] text-xs border border-[var(--border-pixel)] px-1.5 py-0.5">
            #ゲーム風景
          </span>
        </div>
      </div>

      {/* Pixel corner accents */}
      <div className="absolute inset-0 pointer-events-none">
        <PixelCorners />
      </div>
    </div>
  );
}

export default function ThumbnailWorks() {
  return (
    <section id="works" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          {/* Header bar */}
          <div className="mb-4">
            <div className="section-label">WORKS</div>
          </div>
          <h2 className="heading-pixel text-4xl sm:text-5xl mb-3">制作実績</h2>
          <p className="text-[var(--text-secondary)]">
            YouTubeサムネイルの制作実績です。ゲーム風景の素敵さが一目で伝わるように意識しています。
          </p>
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
