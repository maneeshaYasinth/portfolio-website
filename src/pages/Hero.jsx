export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center overflow-x-hidden pt-16 md:pt-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-4 py-10 text-start relative">
        <p className="text-orange-600 tracking-[0.25em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm font-bold pb-1 mb-1">
          Maneesha Gunarathna
        </p>

        <h1 className="mt-2 uppercase leading-[0.9] sm:leading-[0.85] font-black tracking-[0.12rem] sm:tracking-[0.3rem] text-[clamp(2rem,9vw,8rem)] font-['Krona_One']">
          <span className="block sm:whitespace-nowrap">
            SCALABLE
          </span>
          <span className="block sm:whitespace-nowrap">
            CLOUD 
          </span>
          <span className="block sm:whitespace-nowrap">
           SYSTEMS.
          </span>
        <span className="block mt-6 text-transparent" style={{ WebkitTextStroke: "2px #f97316" }} > 
          FULL-STACK EXECUTION. 
          </span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-8 md:gap-10">
          <p className="text-black max-w-[32ch] text-[clamp(1rem,2.8vw,1.5rem)] leading-[1.25] text-start font-[Pixelify_Sans]">
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