import { useEffect, useState } from 'react';

export default function Navbar() {
  const navItems = ['Work', 'About', 'Contact'];
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#"
            className="text-base sm:text-lg md:text-2xl font-display font-extrabold tracking-tighter cursor-pointer group overflow-hidden h-6 sm:h-7 md:h-8"
            onClick={closeMobileMenu}
          >
            <div className="transition-transform duration-500 group-hover:-translate-y-8">
              <span className="block italic text-orange-500">M.GUNARATHNA</span>
              <span className="block  text-foreground">M.GUNARATHNA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.3em] font-bold text-muted hover:text-foreground relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 bg-white pt-24 px-6 flex flex-col items-center justify-center gap-8 md:hidden z-40 transition-opacity duration-500"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMobileMenu}
              className="text-3xl sm:text-4xl font-display font-extrabold uppercase italic tracking-tighter hover:text-gray-400 transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}