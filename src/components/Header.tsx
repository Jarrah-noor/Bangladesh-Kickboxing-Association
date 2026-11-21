import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ASSOCIATION_FACTS } from '../data/bkaData';

const NAV_LINKS = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Disciplines', href: '#disciplines' },
  { label: 'Calendar', href: '#calendar' },
  { label: 'Rules', href: '#rules' },
  { label: 'Leadership', href: '#leadership' },
];

interface HeaderProps {
  onInquiryClick: () => void;
}

export function Header({ onInquiryClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0C0F12]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 xl:gap-8">
        {/* Zone 1: Kickboxing Logo + Single-line wordmark */}
        <a
          href="#top"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
        >
          <img
            src={ASSOCIATION_FACTS.logo}
            alt="Official Bangladesh Kickboxing Association Logo"
            className="w-9 h-9 xl:w-10 xl:h-10 rounded-full object-cover bg-white border border-white/20 shrink-0"
          />
          <span className="font-display text-base sm:text-lg xl:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
            {ASSOCIATION_FACTS.name}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-neutral-300"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#C8102E] hover:after:w-full after:transition-all after:duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onInquiryClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide bg-[#C8102E] hover:bg-[#A60D26] text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Athlete Inquiry
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-neutral-200 hover:text-white border border-white/15 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0C0F12] px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-left px-3 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer min-h-[44px]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onInquiryClick();
              }}
              className="mt-2 w-full px-4 py-3 text-sm font-semibold bg-[#C8102E] hover:bg-[#A60D26] text-white text-center cursor-pointer min-h-[44px]"
            >
              Athlete Inquiry
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
