import Image from "next/image";

export default function YouTubeSection() {
  const channelUrl = "https://www.youtube.com/channel/UCgBEtk2KmefN3tuvNONzO6w";
  const embedUrl = "https://www.youtube.com/embed/IaO3DnSKu6c?start=814";

  return (
    <section id="youtube" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-label">YOUTUBE</div>
          <h2 className="heading-pixel text-4xl sm:text-5xl mb-4">GAMESCAPE INN</h2>
          <p className="text-[var(--text-secondary)]">ゲーム体験でしか味わえない風景を<span className="font-pixel text-[var(--text-primary)]" style={{ fontSize: "1.05em" }}>GAMESCAPE</span>と名付け、趣味で撮り続けていた景色を動画として投稿し始めたチャンネルです。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Embed */}
          <div className="lg:col-span-3">
            <div className="pixel-border bg-white overflow-hidden">
              {/* Mock window bar */}
              <div className="bg-[var(--text-primary)] px-4 py-2 flex items-center gap-2">
                <span className="font-pixel-sm text-white/70">YOUTUBE CHANNEL</span>
                <div className="ml-auto flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
              </div>
              <div className="relative aspect-video bg-black">
                <iframe
                  src={embedUrl}
                  title="SO-SO YouTube Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Channel info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card-pixel p-6">
              <div className="font-pixel-sm text-[var(--text-muted)] mb-4">CHANNEL INFO</div>

              <div className="flex items-center gap-4 mb-5 pb-4 border-b border-[var(--border-pixel)]">
                <div className="w-14 h-14 border-2 border-[var(--border-pixel)] overflow-hidden flex-shrink-0 bg-[var(--bg-base)]">
                  <Image
                    src="/rogo_gamescapeinn.png"
                    alt="GAMESCAPE INN ロゴ"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="heading-pixel text-xl">GAMESCAPE INN</div>
                  <div className="font-pixel-sm text-[var(--text-muted)]">YOUTUBE CHANNEL</div>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  { label: "ジャンル", value: "ゲーム風景" },
                  { label: "投稿内容", value: "ゲーム内の景色・環境音・BGM" },
                  { label: "制作範囲", value: "撮影 / 編集 / サムネイル" },
                  { label: "更新状況", value: "不定期更新中" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-[var(--border-pixel)] pb-2 last:border-0">
                    <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                    <span className="text-sm text-[var(--text-primary)]">{item.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel w-full justify-center"
              >
                ▶ チャンネルを見る
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
