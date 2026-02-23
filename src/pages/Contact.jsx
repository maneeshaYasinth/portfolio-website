export default function Contact({ isDarkMode }) {
  return (
    <section
      id="contact"
      className={`py-48 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-zinc-950' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center space-y-16">
          <div className="space-y-6">
            <h2
              className={`text-sm uppercase tracking-[0.5em] ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Next Step
            </h2>
            <h3
              className={`text-7xl md:text-9xl font-extrabold uppercase italic tracking-tighter leading-none ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              Start a <br />
              <span className="not-italic">Dialogue.</span>
            </h3>
          </div>

          <p
            className={`text-2xl md:text-3xl max-w-2xl mx-auto font-medium leading-tight ${
              isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
            }`}
          >
            Currently accepting mission-critical cloud engineering opportunities.
          </p>

          <div className="pt-8 px-2">
            <a
              href="mailto:maneeshayasinthgunarathna@gmail.com"
              className={`group relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6 text-base sm:text-xl md:text-3xl lg:text-5xl font-extrabold uppercase italic border-b-4 border-orange-500 pb-3 md:pb-4 hover:text-orange-500 transition-all ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              <span className="text-center" style={{ wordBreak: 'break-word' }}>
                maneeshayasinthgunarathna.com
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:translate-x-4 transition-transform text-orange-500 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div
            className={`mt-32 pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-10 ${
              isDarkMode ? 'border-white/10' : 'border-black/5'
            }`}
          >
            <div className="flex gap-12">
              <a
                href="https://github.com/maneeshaYasinth"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors ${
                  isDarkMode
                    ? 'text-zinc-300 hover:text-white'
                    : 'text-black hover:text-zinc-600'
                }`}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/maneesha-yasinth-gunarathna-700284253"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors ${
                  isDarkMode
                    ? 'text-zinc-300 hover:text-white'
                    : 'text-black hover:text-zinc-600'
                }`}
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors ${
                  isDarkMode
                    ? 'text-zinc-300 hover:text-white'
                    : 'text-black hover:text-zinc-600'
                }`}
              >
                Twitter
              </a>
            </div>
            <span
              className={`text-[10px] uppercase tracking-widest ${
                isDarkMode ? 'text-zinc-500' : 'text-gray-400'
              }`}
            >
              © 2026 — Crafted with Intent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
