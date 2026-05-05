import { useState } from 'react';
import ManeeshaPortrait from '../assets/Maneesha.png';

export default function Hero({ isDarkMode }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden pt-24 md:pt-28 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-[#120700] via-[#2b1300] to-[#7c2d12]'
          : 'bg-gradient-to-br from-[#fffaf5] via-[#ffedd5] to-[#fdba74]'
      }`}
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-white/15 blur-3xl"
        />
        <div
          style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)` }}
          className="absolute right-0 top-16 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {[
              { label: 'Awards', value: 'Winner 2025', note: 'HackX and pitch events' },
              { label: 'Focus', value: 'Cloud + Product', note: 'Systems that ship' },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border p-5 backdrop-blur ${
                  isDarkMode
                    ? 'border-white/10 bg-black/20 text-white'
                    : 'border-white/70 bg-white/60 text-black'
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-orange-500">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-bold">{item.value}</p>
                <p className="text-sm opacity-70 mt-1">{item.note}</p>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div className="order-1 lg:order-2 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-500">
              Maneesha Gunarathna
            </p>

            {/* HERO TITLE WITH IMAGE ATTACHED */}
            <h1
              className={`relative text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-[0.95] ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              {/* LINE 1 */}
              <span className="relative block">
                I&apos;m Maneesha

                {/* IMAGE + GLOW */}
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 lg:left-[60%]">
                  <div className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px]">

                    {/* GLOW 1 */}
                    <div
                      style={{ transform: `translate(${offset.x * 0.6}px, ${offset.y * 0.6}px)` }}
                      className="absolute inset-0 rounded-full bg-orange-500/40 blur-3xl"
                    />

                    {/* GLOW 2 */}
                    <div
                      style={{ transform: `translate(${-offset.x * 0.3}px, ${-offset.y * 0.3}px)` }}
                      className="absolute inset-0 rounded-full bg-yellow-300/30 blur-2xl"
                    />

                    {/* IMAGE */}
                    <img
                      src={ManeeshaPortrait}
                      alt="Maneesha"
                      style={{ transform: `translate(${offset.x * 0.2}px, ${offset.y * 0.2}px)` }}
                      className="relative z-10 w-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </span>
              </span>

              {/* LINE 2 */}
              <span className="block text-orange-500 mt-6">Cloud Builder</span>

              {/* LINE 3 */}
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: '2px #f97316' }}
              >
                Full-Stack Execution
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`mt-6 max-w-xl mx-auto text-sm md:text-base ${
                isDarkMode ? 'text-orange-100/80' : 'text-[#2c1b10]'
              }`}
            >
              I architect resilient cloud infrastructures and polished digital
              experiences using AWS, Terraform, and modern frontend tools.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a className="rounded-full bg-black text-white px-6 py-3">
                Explore Work
              </a>
              <a className="rounded-full border px-6 py-3">
                Contact Me
              </a>
            </div>

            {/* SKILLS */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-wider">
              {['AWS', 'Terraform', 'React', 'Kubernetes'].map((s) => (
                <span key={s} className="px-3 py-1 border rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-3 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-right backdrop-blur">
              <div className="text-4xl font-black text-orange-400">4+ Years</div>
              <div className="mt-1 text-sm uppercase tracking-[0.28em] text-white/70">
                Experience
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'AWS', label: 'Cloud' },
                { value: 'TF', label: 'IaC' },
                { value: 'UI', label: 'Builds' },
              ].map((item) => (
                <div
                  key={item.value}
                  className={`rounded-2xl border px-4 py-4 text-center shadow-lg ${
                    isDarkMode
                      ? 'border-white/10 bg-black/15 text-white'
                      : 'border-white/80 bg-white/70 text-[#111111]'
                  }`}
                >
                  <div className="text-lg font-black text-orange-500">{item.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.26em] opacity-70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}