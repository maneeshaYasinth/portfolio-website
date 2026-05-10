import { useState, useEffect } from 'react';
import ManeeshaPortrait from '../assets/Maneesha.png';

/* ─── tiny SVG icons inline so there's no icon-lib dependency ─── */
const AwsIcon = () => (
  <svg viewBox="0 0 40 24" className="w-8 h-5" fill="currentColor">
    <path d="M11.2 10.3c0 .4.1.7.2 1 .2.2.4.4.7.4.3 0 .6-.1.9-.4.3-.2.4-.6.4-1.1V9.8h-.8v.4c0 .3 0 .4-.1.5 0 .1-.1.1-.2.1-.1 0-.2 0-.2-.1-.1-.1-.1-.3-.1-.5V8.1h-.8v2.2zM7 9.1c.3 0 .5.2.5.5H6.5c0-.3.2-.5.5-.5zm1.2 1.8c-.1.1-.3.2-.6.2-.2 0-.3 0-.5-.1-.1-.1-.2-.3-.2-.5H8.7c0-.4 0-.8-.2-1.1-.2-.3-.5-.4-.9-.4-.4 0-.7.1-.9.4-.2.3-.3.6-.3 1 0 .4.1.8.3 1 .2.2.5.4.9.4.3 0 .5-.1.7-.2.2-.1.3-.3.4-.6H8c0 .1-.1.1-.2.2l.4.7zM20.2 8h-.8l-.5 2.1L18.4 8h-.7l-.5 2.1L16.7 8H16l.8 3h.8l.5-2 .5 2h.8l.8-3h-.8l-.2 2.1zm-5 3.1V8h-.8v1.2c-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.8.4-.2.3-.3.6-.3 1s.1.8.3 1c.2.3.4.4.8.4.3 0 .5-.1.7-.4v.3h.8v.5zm-.8-.7c-.1.1-.2.2-.4.2-.1 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.6 0-.2 0-.4.1-.6.1-.1.2-.2.4-.2.1 0 .3.1.4.2.1.1.1.3.1.6 0 .3 0 .5-.1.6z"/>
    <path d="M22 18.5c-3.5 2.6-8.6 4-13 4-6.1 0-11.7-2.3-15.9-6 .3-.3.7 0 1 .2 4.5 2.6 10 4.2 15.8 4.2 3.9 0 8.1-.8 12-2.4.5-.3 1 .3.1 1z" opacity=".8"/>
    <path d="M23.5 16.8c-.5-.6-3.2-.3-4.4-.1-.4 0-.4-.3-.1-.5 2.2-1.5 5.7-1.1 6.1-.6.4.5-.1 4.1-2.1 5.8-.3.3-.6.1-.5-.2.5-1.1 1.5-3.8 1-4.4z" opacity=".8"/>
  </svg>
);

const TerraformIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
    <path d="M12.042 6.858L20.1 11.442v8.085l-8.058-4.629V6.858z" fill="#7B42BC"/>
    <path d="M21.234 11.442l8.057 4.629v8.085l-8.057-4.629V11.442z" fill="#7B42BC" opacity=".7"/>
    <path d="M2.708 11.442l8.058 4.629v8.085L2.708 19.527V11.442z" fill="#7B42BC" opacity=".5"/>
    <path d="M12.042 20.915l8.057-4.629v8.085l-8.057 4.629V20.915z" fill="#7B42BC" opacity=".3"/>
  </svg>
);

const K8sIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="#326CE5">
    <path d="M16 2l13 7.5v15L16 32 3 24.5v-15L16 2z" opacity=".15"/>
    <path d="M16 4.5l10.5 6v12L16 28.5 5.5 22.5v-12L16 4.5z" fill="none" stroke="#326CE5" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="3.5" fill="#326CE5"/>
    <path d="M16 7v4M16 21v4M7 12l3.5 2M21.5 18l3.5 2M7 20l3.5-2M21.5 14l3.5-2" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const KEYFRAMES = `
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float-a {
    0%,100% { transform: translateY(0px) rotate(-1deg); }
    50%     { transform: translateY(-8px) rotate(-1deg); }
  }
  @keyframes float-b {
    0%,100% { transform: translateY(0px) rotate(1deg); }
    50%     { transform: translateY(-6px) rotate(1deg); }
  }
  @keyframes float-c {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-10px); }
  }
  @keyframes glow-pulse {
    0%,100% { opacity: 0.18; }
    50%     { opacity: 0.28; }
  }
  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const TECH_BADGES = [
  { name: 'AWS', sub: 'Cloud', icon: <AwsIcon /> },
  { name: 'Terraform', sub: 'IaC', icon: <TerraformIcon /> },
  { name: 'Kubernetes', sub: 'Orchestration', icon: <K8sIcon /> },
  { name: 'React', sub: 'Frontend', icon: <CodeIcon /> },
];

const STATS = [
  { value: '2+',    label: 'Years\nExperience' },
  { value: '10+',   label: 'Projects\nDelivered' },
  { value: '99.9%', label: 'Uptime\nFocus' },
  { value: '∞',     label: 'Curiosity\nDriven' },
];

/* floating card positions — desktop only (hidden on mobile) */
const CARD_POSITIONS = [
  // [top%, left offset from right-col, animation, delay]
  { top: '8%',  right: '-2%',  anim: 'float-a', delay: '0s',    idx: 0 }, // AWS
  { top: '42%', left:  '-8%',  anim: 'float-b', delay: '0.4s',  idx: 1 }, // Terraform
  { top: '72%', right: '-4%',  anim: 'float-c', delay: '0.2s',  idx: 2 }, // Kubernetes
  { top: '28%', right: '4%',   anim: 'float-a', delay: '0.6s',  idx: 3 }, // hidden on desktop, shown in mobile row
];

export default function Hero({ isDarkMode }) {
  const [offset, setOffset]   = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    setOffset({ x, y });
  };

  const glass = `
    backdrop-blur-md border rounded-2xl
    ${isDarkMode
      ? 'bg-white/[0.04] border-white/[0.08] text-white'
      : 'bg-black/[0.04] border-black/[0.08] text-black'}
  `;

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden min-h-screen pt-20 flex items-center transition-colors duration-500
        ${isDarkMode
          ? 'bg-[#0e0e0e]'
          : 'bg-[#f8f4f0]'}`}
    >
      <style>{KEYFRAMES}</style>

      {/* ── BACKGROUND: soft radial glows ────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* main portrait glow */}
        <div
          className="absolute right-0 top-0 w-[55%] h-full"
          style={{
            background: isDarkMode
              ? 'radial-gradient(ellipse 60% 70% at 70% 45%, rgba(194,97,35,0.18) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 60% 70% at 70% 45%, rgba(194,97,35,0.12) 0%, transparent 70%)',
            animation: 'glow-pulse 5s ease-in-out infinite',
          }}
        />
        {/* left ambient */}
        <div
          className="absolute -left-20 top-1/4 w-72 h-72 rounded-full"
          style={{
            background: isDarkMode
              ? 'radial-gradient(circle, rgba(194,97,35,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(194,97,35,0.06) 0%, transparent 70%)',
            transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)`,
          }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px),
                              linear-gradient(90deg, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">

          {/* ════════════════════════════════════════════════
              LEFT — TEXT CONTENT
          ════════════════════════════════════════════════ */}
          <div className="flex flex-col gap-6 z-10">

            {/* eyebrow */}
            <div
              className="flex items-center gap-3"
              style={{ animation: mounted ? 'fade-up 0.5s ease both' : 'none' }}
            >
              <div className="w-8 h-px bg-orange-400/70" />
              <span className={`text-xs tracking-[0.25em] uppercase font-medium
                ${isDarkMode ? 'text-orange-400/80' : 'text-orange-600/80'}`}>
                Hello, I&apos;m
              </span>
            </div>

            {/* name + roles */}
            <div style={{ animation: mounted ? 'fade-up 0.6s ease both' : 'none' }}>
              <h1 className={`text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.88] tracking-tight uppercase
                ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>
                Maneesha
              </h1>
              <h2 className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-[0.9] uppercase
                text-orange-500/90 tracking-tight">
                Cloud Builder
              </h2>
              <h3
                className="text-[clamp(1.1rem,3vw,2.4rem)] font-black leading-[1] uppercase tracking-tight"
                style={{
                  WebkitTextStroke: isDarkMode ? '1.5px rgba(249,115,22,0.45)' : '1.5px rgba(194,75,10,0.4)',
                  color: 'transparent',
                }}
              >
                Full-Stack Execution
              </h3>
            </div>

            {/* mobile portrait: scaled-down image (no geometric framing) */}
            <div
              className="lg:hidden w-full flex justify-center"
              style={{ animation: mounted ? 'fade-up 0.85s ease both' : 'none' }}
            >
              <div style={{ width: 'clamp(180px, 36vw, 420px)' }}>
                <img
                  src={ManeeshaPortrait}
                  alt="Maneesha Portrait"
                  className="w-full h-auto object-cover object-top"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                  }}
                />
              </div>
            </div>

            {/* description */}
            <p
              className={`max-w-md text-sm md:text-base leading-relaxed
                ${isDarkMode ? 'text-white/55' : 'text-black/55'}`}
              style={{ animation: mounted ? 'fade-up 0.75s ease both' : 'none' }}
            >
              I architect resilient cloud infrastructures and craft polished digital
              experiences using AWS, Terraform, and modern frontend tools.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: mounted ? 'fade-up 0.85s ease both' : 'none' }}
            >
              <a
                href="#work"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
                  bg-orange-500 text-white hover:bg-orange-400 transition-colors duration-200"
              >
                Explore My Work
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
              <a
                href="/resume.pdf"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border
                  transition-colors duration-200
                  ${isDarkMode
                    ? 'border-white/15 text-white/80 hover:bg-white/5'
                    : 'border-black/15 text-black/70 hover:bg-black/5'}`}
              >
                Download Resume
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>

            {/* stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2"
              style={{ animation: mounted ? 'fade-up 1s ease both' : 'none' }}
            >
              {STATS.map((s) => (
                <div key={s.value} className={`${glass} p-3 text-center`}>
                  <div className="text-xl font-black text-orange-400">{s.value}</div>
                  <div className={`text-[10px] uppercase tracking-wider mt-1 leading-tight whitespace-pre-line
                    ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* mobile tech row — visible only on small screens */}
            <div
              className="flex flex-wrap gap-2 lg:hidden"
              style={{ animation: mounted ? 'fade-up 1.1s ease both' : 'none' }}
            >
              {TECH_BADGES.map((b) => (
                <div key={b.name} className={`${glass} flex items-center gap-2 px-3 py-2`}>
                  <span className={isDarkMode ? 'text-white/70' : 'text-black/70'}>{b.icon}</span>
                  <span className="text-xs font-semibold">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════════════════
              RIGHT — PORTRAIT + FLOATING CARDS
          ════════════════════════════════════════════════ */}
          <div
            className="relative hidden lg:flex justify-center lg:justify-end"
            style={{ animation: mounted ? 'slide-in-right 0.8s ease both' : 'none' }}
          >
            {/* portrait container */}
            <div
              className="relative"
              style={{
                width:  'clamp(260px, 42vw, 520px)',
                height: 'clamp(340px, 55vw, 680px)',
              }}
            >
              {/* inner glow behind portrait */}
              <div
                className="absolute inset-x-8 bottom-0 top-16 rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse 80% 90% at 50% 60%, rgba(194,97,35,0.25) 0%, transparent 70%)',
                  transform: `translate(${offset.x * 0.2}px, ${offset.y * 0.2}px)`,
                }}
              />

              {/* portrait image */}
              <img
                src={ManeeshaPortrait}
                alt="Maneesha Gunarathna"
                className="relative z-10 w-full h-full object-cover object-top"
                style={{
                  transform: `translate(${offset.x * 0.1}px, ${offset.y * 0.1}px)`,
                  transition: 'transform 0.15s linear',
                  maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                }}
              />

              {/* ── floating tech cards — desktop only ──── */}

              {/* AWS — top right */}
              <div
                className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 ${glass} z-20`}
                style={{
                  top: '8%', right: '-12%',
                  animation: 'float-a 4s ease-in-out infinite',
                  animationDelay: '0s',
                  minWidth: '150px',
                }}
              >
                <span className={isDarkMode ? 'text-white' : 'text-[#232f3e]'}><AwsIcon /></span>
                <div>
                  <div className="text-xs font-bold leading-tight">AWS</div>
                  <div className={`text-[10px] ${isDarkMode ? 'text-white/45' : 'text-black/45'}`}>Cloud Architect</div>
                </div>
              </div>

              {/* Terraform — left middle */}
              <div
                className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 ${glass} z-20`}
                style={{
                  top: '38%', left: '-14%',
                  animation: 'float-b 5s ease-in-out infinite',
                  animationDelay: '0.5s',
                  minWidth: '155px',
                }}
              >
                <TerraformIcon />
                <div>
                  <div className="text-xs font-bold leading-tight">Terraform</div>
                  <div className={`text-[10px] ${isDarkMode ? 'text-white/45' : 'text-black/45'}`}>Infrastructure</div>
                </div>
              </div>

              {/* Kubernetes — bottom right */}
              <div
                className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 ${glass} z-20`}
                style={{
                  bottom: '14%', right: '-10%',
                  animation: 'float-c 4.5s ease-in-out infinite',
                  animationDelay: '0.3s',
                  minWidth: '160px',
                }}
              >
                <K8sIcon />
                <div>
                  <div className="text-xs font-bold leading-tight">Kubernetes</div>
                  <div className={`text-[10px] ${isDarkMode ? 'text-white/45' : 'text-black/45'}`}>Orchestration</div>
                </div>
              </div>

              {/* Full-Stack — bottom left */}
              <div
                className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 ${glass} z-20`}
                style={{
                  bottom: '28%', left: '-10%',
                  animation: 'float-a 3.8s ease-in-out infinite',
                  animationDelay: '0.8s',
                  minWidth: '165px',
                }}
              >
                <span className={`${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}><CodeIcon /></span>
                <div>
                  <div className="text-xs font-bold leading-tight">Full-Stack</div>
                  <div className={`text-[10px] ${isDarkMode ? 'text-white/45' : 'text-black/45'}`}>Developer</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}