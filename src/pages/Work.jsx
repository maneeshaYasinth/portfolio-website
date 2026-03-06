import { projects } from "../data/projects";

export default function Work({ isDarkMode }) {
  return (
    <section
      id="work"
      className={`py-32 transition-colors duration-500 ${
        isDarkMode ? 'bg-zinc-950' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-24" data-aos="fade-right" data-aos-duration="800">
          <h2
            className={`text-sm uppercase tracking-[0.4em] mb-6 ${
              isDarkMode ? 'text-zinc-400' : 'text-black'
            }`}
          >
            Case Studies
          </h2>
          <h3
            className={`text-6xl md:text-8xl font-black uppercase italic ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            Selected <br />
            <span className="not-italic">Projects.</span>
          </h3>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={project.id}
                data-aos={reverse ? 'fade-up-left' : 'fade-up-right'}
                data-aos-delay={Math.min(index * 80, 240)}
                data-aos-duration="900"
                className={`flex flex-col ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 items-center`}
              >
                {/* Image */}
                <div
                  className={`w-full md:w-3/5 overflow-hidden group aspect-16/10 ${
                    isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5 space-y-8">
                  <div className="space-y-4">
                    <span
                      className={`text-[10px] uppercase tracking-widest ${
                        isDarkMode ? 'text-zinc-500' : 'text-black'
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")} / Project
                    </span>

                    <h4
                      className={`text-4xl md:text-5xl font-black uppercase italic leading-none ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {project.title}
                    </h4>

                    <p
                      className={`text-xl leading-relaxed max-w-sm ${
                        isDarkMode ? 'text-zinc-300' : 'text-black'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`text-[10px] uppercase tracking-widest border px-3 py-1 rounded-full ${
                          isDarkMode
                            ? 'border-white/20 text-zinc-300'
                            : 'border-black/10 text-black'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8 pt-4">
                    <a
                      href={project.github}
                      className={`text-xs font-bold uppercase tracking-widest border-b pb-1 ${
                        isDarkMode
                          ? 'border-white text-white hover:text-zinc-400'
                          : 'border-black text-black hover:text-gray-600'
                      }`}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className={`text-xs font-bold uppercase tracking-widest border-b pb-1 ${
                        isDarkMode
                          ? 'border-white text-white hover:text-zinc-400'
                          : 'border-black text-black hover:text-gray-600'
                      }`}
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}