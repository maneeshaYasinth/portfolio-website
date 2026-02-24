import { achievements } from "../data/achievements";

export default function Achievements({ isDarkMode }) {
  return (
    <section
      id="achievements"
      className={`py-32 transition-colors duration-500 ${
        isDarkMode ? 'bg-zinc-950' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-24 md:space-y-32">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              <div
                className={`lg:col-span-7 overflow-hidden group relative rounded-sm ${
                  isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'
                }`}
              >
                <span className="absolute top-6 left-6 z-10 bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  {item.result}
                </span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-16/12 object-cover transition-all duration-700 group-hover:scale-95"
                />
              </div>

              <div className="lg:col-span-5 pt-1">
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className={`text-3xl md:text-5xl font-black italic tracking-tight ${
                      isDarkMode ? 'text-orange-400/80' : 'text-orange-300'
                    }`}
                  >
                    {item.year}
                  </span>
                  <div
                    className={`h-px flex-1 ${
                      isDarkMode ? 'bg-white/15' : 'bg-black/10'
                    }`}
                  ></div>
                </div>

                <h4
                  className={`text-4xl md:text-6xl font-black uppercase italic leading-[0.95] tracking-tight ${
                    isDarkMode ? 'text-orange-400' : 'text-orange-500'
                  }`}
                >
                  {item.title}
                </h4>

              <p
                className={`text-xl mt-8 max-w-xl leading-relaxed ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                {item.description}
              </p>

                <div
                  className={`mt-12 h-1 w-28 ${
                    isDarkMode ? 'bg-orange-400' : 'bg-orange-500'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}