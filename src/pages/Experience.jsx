export default function Experience({ isDarkMode }) {
  const experienceItems = [
    {
      period: '2024 - Present',
      role: 'Junior Treasurer',
      organization: 'AWS Cloud Club',
      description:
        'Managing financial operations and strategic funding to enable large-scale cloud computing events and community-driven tech initiatives across the university.',
    },
    {
      period: '2025 Aug - 2024 Sep',
      role: 'Project Manager',
      organization: 'Electronics and Computer Science Club (ECSC)',
      description:
        'Spearheaded the planning and execution of a massive, university-wide robotics competition, overseeing cross-functional teams from conceptualization to final deployment.',
    },
    {
      period: '2024 Sep - 2024 Dec',
      role: 'Public Relations Coordinator',
      organization: 'Electronics and Computer Science Club (ECSC)',
      description:
        'Led branding, communication strategies, and outreach campaigns, significantly increasing club engagement and event participation metrics.',
    },
    {
      period: '2023 - Present',
      role: 'Member',
      organization: 'Electronics and Computer Science Club (ECSC)',
      description:
        'Actively contributed to tech workshops, foundational club operations, and collaborative engineering projects.',
    },
  ];

  return (
    <section
      id="experience"
      className={`py-32 border-t overflow-x-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-zinc-950' : 'bg-white'
      } ${
        isDarkMode ? 'border-black' : 'border-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24" data-aos="fade-right" data-aos-duration="800">
          <h2
            className={`text-sm font-mono uppercase tracking-[0.4em] font-bold mb-6 ${
              isDarkMode ? 'text-orange-400' : 'text-orange-500'
            }`}
          >
            Career & Leadership
          </h2>
          <h3
            className={`text-6xl md:text-8xl font-display font-extrabold tracking-tighter uppercase italic break-words whitespace-normal text-balance ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            Professional <br />
            <span
              className="not-italic text-transparent block max-w-full"
              style={{ WebkitTextStroke: isDarkMode ? '2px #f4f4f5' : '2px #000000' }}
            >
              Experience.
            </span>
          </h3>
        </div>

        <div
          className={`relative border-l ml-4 md:ml-0 ${
            isDarkMode ? 'border-white/20' : 'border-black/10'
          }`}
        >
          {experienceItems.map((item, index) => (
            <div
              key={`${item.role}-${item.period}`}
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 90, 300)}
              className={`relative pl-8 md:pl-16 py-12 group transition-colors ${
                isDarkMode ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'
              }`}
            >
              <div
                className={`absolute left-[-5px] top-14 w-[9px] h-[9px] rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white group-hover:bg-orange-400 group-hover:scale-150'
                    : 'bg-black group-hover:bg-orange-500 group-hover:scale-150'
                }`}
              ></div>

              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-baseline">
                <div>
                  <span
                    className={`text-sm font-mono font-bold uppercase tracking-widest mb-2 block ${
                      isDarkMode ? 'text-orange-400' : 'text-orange-500'
                    }`}
                  >
                    {item.period}
                  </span>

                  <h4
                    className={`text-2xl md:text-3xl font-display font-extrabold uppercase italic leading-none transition-colors ${
                      isDarkMode
                        ? 'text-white group-hover:text-orange-400'
                        : 'text-black group-hover:text-orange-500'
                    }`}
                  >
                    {item.role}
                  </h4>
                </div>

                <div className="space-y-4">
                  <h5
                    className={`text-xl font-bold tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item.organization}
                  </h5>

                  <p
                    className={`text-lg font-light leading-relaxed max-w-2xl ${
                      isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
