import SectionShell from '../components/SectionShell'
import { projects } from "../data/projects";

export default function Work({ isDarkMode }) {
  return (
    <SectionShell id="work">
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
                    className="w-full h-full object-cover grayscale transition-all duration-1000 scale-90 group-hover:scale-105 group-hover:grayscale-0"
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

                  {project.infra && (
                    <dl
                      className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-l-2 pl-4 text-xs font-mono ${
                        isDarkMode ? 'border-orange-400' : 'border-orange-500'
                      }`}
                    >
                      {project.infra.map(([label, value]) => (
                        <div key={label} className="contents">
                          <dt
                            className="uppercase tracking-widest text-zinc-500"
                          >
                            {label}
                          </dt>
                          <dd className={isDarkMode ? 'text-zinc-200' : 'text-black'}>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

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
                    {[
                      ['GitHub', project.github],
                      ['Live', project.live],
                    ]
                      .filter(([, href]) => href)
                      .map(([label, href]) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs font-bold uppercase tracking-widest border-b pb-1 ${
                            isDarkMode
                              ? 'border-white text-white hover:text-zinc-400'
                              : 'border-black text-black hover:text-gray-600'
                          }`}
                        >
                          {label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </SectionShell>
  );
}