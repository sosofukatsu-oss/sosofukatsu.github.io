const steps = [
  {
    step: "01",
    title: "動画内容の整理",
    desc: "動画テーマ・タイトル・伝えたいメッセージを整理します。内容を正確に把握することが、誤解のないサムネイルへの第一歩です。",
    icon: "📋",
  },
  {
    step: "02",
    title: "ターゲット・見せ方の決定",
    desc: "誰に届けるか、どんな感情を引き出すかを決めます。「驚き」「お得感」「共感」など、クリック動機に合わせた方向性を設定します。",
    icon: "🎯",
  },
  {
    step: "03",
    title: "ラフ案作成",
    desc: "構図・文字配置・色のラフを素早く複数案作成。この段階でアイデアを広げ、最良の方向を選択します。",
    icon: "✏️",
  },
  {
    step: "04",
    title: "サムネイル制作",
    desc: "ラフ案をもとに本制作。フォント選定・カラーバランス・画像の合成など、細部まで丁寧に仕上げます。",
    icon: "🎨",
  },
  {
    step: "05",
    title: "視認性チェック",
    desc: "小さいサイズ（スマホ一覧表示）でも読めるか、ぱっと見で内容が伝わるかを確認します。必要に応じて修正を行います。",
    icon: "👁",
  },
  {
    step: "06",
    title: "納品・改善",
    desc: "最終データを納品。公開後のパフォーマンスに応じた改善提案も対応しています。",
    icon: "✅",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-label">PROCESS</div>
          <h2 className="heading-pixel text-4xl sm:text-5xl mb-4">制作の流れ</h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            依頼から納品までの標準的な流れです。ご要望に応じて柔軟に対応します。
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <div key={step.step} className="card-pixel p-6 relative">
              {/* Step number */}
              <div className="flex items-start justify-between mb-4">
                <span className="heading-pixel text-4xl text-[var(--border-pixel)]">{step.step}</span>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="font-pixel text-base text-[var(--text-primary)] mb-2">{step.title}</div>
              <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>

              {/* Connector arrow (not on last row) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <span className="font-pixel-sm text-[var(--border-pixel)] text-lg">▸</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 card-pixel p-6 bg-white">
          <div className="flex items-start gap-3">
            <span className="font-pixel-sm text-[var(--accent-yellow)] flex-shrink-0">★</span>
            <p className="text-sm text-[var(--text-secondary)]">
              お急ぎの場合や既存サムネイルのリデザイン依頼も承っています。
              まずはお気軽にご相談ください。依頼内容に応じてお見積りいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
