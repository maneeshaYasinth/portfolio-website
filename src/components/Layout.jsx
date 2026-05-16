export default function Layout({ children, isDarkMode }) {
  return (
    <div
      className={`relative min-h-screen transition-colors duration-500
        ${isDarkMode ? 'bg-[#0e0e0e]' : 'bg-[#f8f4f0]'}`}
    >
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* main glow */}
        <div
          className="absolute right-0 top-0 w-[55%] h-full"
          style={{
            background: isDarkMode
              ? 'radial-gradient(ellipse 60% 70% at 70% 45%, rgba(194,97,35,0.18) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 60% 70% at 70% 45%, rgba(194,97,35,0.12) 0%, transparent 70%)',
          }}
        />

        {/* left glow */}
        <div
          className="absolute -left-20 top-1/4 w-72 h-72 rounded-full"
          style={{
            background: isDarkMode
              ? 'radial-gradient(circle, rgba(194,97,35,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(194,97,35,0.06) 0%, transparent 70%)',
          }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px),
                              linear-gradient(90deg, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}