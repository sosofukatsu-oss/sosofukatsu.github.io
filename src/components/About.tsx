export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-label">ABOUT</div>
          <h2 className="heading-pixel text-4xl sm:text-5xl">SO-SOとは</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-pixel p-6 sm:p-8">
              <div className="font-pixel-sm text-[var(--accent-blue)] mb-3">// PROFILE</div>
              <p className="text-[var(--text-secondary)] mb-4">
                YouTube活動をしているクリエイターです。
                主にゲームコンテンツを発信しながら、動画の顔となるサムネイル制作にも力を入れています。
              </p>
              <p className="text-[var(--text-secondary)] mb-4">
                サムネイルを作るときは、パッと見たときの見やすさ、動画内容の伝わりやすさ、
                クリックしたくなる雰囲気づくりを意識しています。
                まだ経験を積んでいる途中ですが、作るたびに改善しながら、自分らしい見せ方を探しています。
              </p>
              <p className="text-[var(--text-secondary)]">
                これまでYouTube活動の中で制作してきた経験を活かして、
                サムネイル制作やYouTubeまわりのビジュアルづくりにも挑戦していきたいと考えています。
                小さなご相談からでも、一緒に形にできたら嬉しいです。
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "視認性",
                  desc: "小さい画面でも文字や内容が伝わるように、配置やサイズ感を意識しています。",
                },
                {
                  title: "インパクト",
                  desc: "色・表情・構図を工夫して、スクロール中でも目に留まりやすい一枚を目指しています。",
                },
                {
                  title: "伝える力",
                  desc: "動画の内容や見どころが、できるだけ一目で伝わるサムネイルを考えています。",
                },
              ].map((v) => (
                <div key={v.title} className="card-pixel p-5">
                  <div className="font-pixel text-base text-[var(--text-primary)] mb-2">{v.title}</div>
                  <p className="text-sm text-[var(--text-secondary)]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: activity log */}
          <div className="space-y-4">
            <div className="card-pixel p-5">
              <div className="font-pixel-sm text-[var(--text-muted)] mb-3">ACTIVITY LOG</div>
              <div className="space-y-3">
                {[
                  { label: "YouTube活動", value: "開始済み" },
                  { label: "メインジャンル", value: "ゲーム" },
                  { label: "得意分野", value: "サムネイル" },
                  { label: "ステータス", value: "依頼受付中" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start border-b border-[var(--border-pixel)] pb-2 last:border-0">
                    <span className="font-pixel-sm text-[var(--text-muted)] text-xs">{item.label}</span>
                    <span className="font-pixel-sm text-[var(--text-primary)] text-xs text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Game-style equipment */}
            <div className="card-pixel p-5">
              <div className="font-pixel-sm text-[var(--text-muted)] mb-3">EQUIPPED TOOLS</div>
              <div className="space-y-2">
                {[
                  "Photoshop",
                  "Illustrator",
                  "Canva Pro",
                  "Figma",
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <span className="font-pixel-sm text-[var(--accent-blue)]">▸</span>
                    <span className="font-pixel-sm text-[var(--text-secondary)]">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
