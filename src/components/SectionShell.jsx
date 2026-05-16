export default function SectionShell({
  id,
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`relative py-32 transition-colors duration-500 ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  )
}