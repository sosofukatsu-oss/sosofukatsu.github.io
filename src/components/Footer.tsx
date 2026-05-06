export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--text-primary)] text-white py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo */}
          <div>
            <div className="font-pixel text-3xl text-white mb-1">SO-SO</div>
            <div className="font-pixel-sm text-white/40 text-xs">YouTube Creator / Thumbnail Designer</div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["works", "youtube", "skills", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-pixel-sm text-white/50 hover:text-white transition-colors uppercase text-xs"
              >
                {id}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-pixel-sm text-white/30 text-xs">
            © {year} SO-SO. All rights reserved.
          </div>
          <div className="status-bar bg-white/5 border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            <span>SYSTEM OK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
