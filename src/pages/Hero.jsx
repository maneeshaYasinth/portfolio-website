export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-4 py-10 text-start relative">
        <p className="text-orange-600 tracking-[0.4em] uppercase text-sm font-bold pb-1 mb-1">
          Maneesha Gunarathna
        </p>

        <h1 className="mt-2 uppercase leading-[0.9] font-black tracking-[-0.03em] text-[clamp(2.5rem,6.5vw,9rem)]">
          <span className="block text-black md:whitespace-nowrap">SCALABLE CLOUD SYSTEMS.</span>
          <span
            className="block text-transparent md:whitespace-nowrap"
            style={{ WebkitTextStroke: "2px #f97316" }}
          >
            FULL-STACK EXECUTION.
          </span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-8 md:gap-10">
          <p className="text-black max-w-[32ch] text-[clamp(1.5rem,1vw,2.8rem)] leading-[1.2] text-start">
            I architect resilient cloud infrastructures and high-performance
            digital experiences. Crafting the backbone of the modern web.
          </p>

            <div className="mt-12">
             <a
               href="#work"
               className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-full text-xl font-semibold tracking-wide hover:opacity-90 transition whitespace-nowrap"
             >
               EXPLORE WORK
             </a>
          </div>
        </div>
        <div>
            
        </div>

        <span className="hidden lg:block absolute right-2 bottom-16 text-orange-500 uppercase tracking-[0.45em] text-xs [writing-mode:vertical-rl]">
          SCROLL DOWN
        </span>
      </div>
    </section>
  );
}