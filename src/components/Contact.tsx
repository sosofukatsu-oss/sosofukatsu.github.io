const links = [
  {
    label: "YouTube",
    icon: "▶",
    iconSize: "text-xl",
    value: "GAMESCAPE INN",
    href: "https://www.youtube.com/channel/UCgBEtk2KmefN3tuvNONzO6w",
    color: "var(--accent-red)",
  },
  {
    label: "EMAIL",
    icon: "✉",
    iconSize: "text-3xl",
    iconOffset: "-4px",
    value: "soso.fukatsu@gmail.com",
    href: "mailto:soso.fukatsu@gmail.com",
    color: "var(--accent-blue)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-label">CONTACT</div>
          <h2 className="heading-pixel text-4xl sm:text-5xl mb-4">お問い合わせ</h2>
          <p className="text-[var(--text-secondary)]">
            サムネイル制作・デザイン依頼・コラボレーションなど、お気軽にご連絡ください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: message */}
          <div className="space-y-6">
            <div className="card-pixel p-8">
              <div className="font-pixel-sm text-[var(--text-muted)] mb-4">// OPEN FOR</div>
              <div className="space-y-4">
                {[
                  { label: "サムネイル制作依頼", status: "AVAILABLE" },
                  { label: "既存サムネイルのリデザイン", status: "AVAILABLE" },
                  { label: "その他印刷物", status: "AVAILABLE" },
                  { label: "グラフィックデザイン", status: "AVAILABLE" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-[var(--border-pixel)] pb-3 last:border-0">
                    <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                    <span
                      className="font-pixel-sm text-xs px-2 py-0.5"
                      style={{
                        background: item.status === "AVAILABLE" ? "var(--accent-green)" : "var(--accent-blue)",
                        color: "white",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-pixel p-6 bg-[var(--bg-base)]">
              <div className="font-pixel-sm text-[var(--text-muted)] mb-3">// RESPONSE TIME</div>
              <p className="text-sm text-[var(--text-secondary)]">お問い合わせいただいた場合、通常2〜3営業日以内にご返信します。お急ぎの場合はその旨をご記載ください。</p>
            </div>
          </div>

          {/* Right: links */}
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-pixel p-5 flex items-center gap-5 no-underline group"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 font-pixel ${link.iconSize} transition-colors`}
                  style={{ borderColor: link.color, color: link.color }}
                >
                  <span style={{ position: "relative", top: link.iconOffset ?? "0px" }}>{link.icon}</span>
                </div>
                <div>
                  <div className="font-pixel-sm text-[var(--text-muted)] mb-0.5">{link.label}</div>
                  <div className="text-sm font-medium text-[var(--text-primary)] group-hover:underline">
                    {link.value}
                  </div>
                </div>
                <span className="ml-auto font-pixel-sm text-[var(--border-pixel)]">▸</span>
              </a>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <a
                href="mailto:soso.fukatsu@gmail.com"
                className="btn-pixel w-full justify-center text-base py-4"
              >
                ✉ メールで依頼する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
