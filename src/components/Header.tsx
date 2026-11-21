import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PRACTICE_CONFIG } from '../config/profile';
import { BookAppointmentButton } from './BookAppointmentButton';
import {
  FacebookBrandIcon,
  GoogleBrandIcon,
  InstagramBrandIcon,
  LinkedInBrandIcon,
  WhatsAppBrandIcon,
} from './BrandIcons';

interface HeaderProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'focus-areas', label: 'Focus Areas' },
  { id: 'services', label: 'Services' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact Us' },
] as const;

function HeaderIconStrip({ sizeClass = 'h-6 w-6' }: { sizeClass?: string }) {
  const googleHref = PRACTICE_CONFIG.googleReviewsUrl || '#reviews';
  const googleExternal = Boolean(PRACTICE_CONFIG.googleReviewsUrl);

  return (
    <div className="flex items-center gap-2" aria-label="Social and contact links">
      {PRACTICE_CONFIG.social.facebook.url && (
        <a
          href={PRACTICE_CONFIG.social.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Azqa Abid on Facebook (opens in a new tab)"
          title="Facebook"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
        >
          <FacebookBrandIcon className={sizeClass} />
        </a>
      )}

      {PRACTICE_CONFIG.social.instagram.url && (
        <a
          href={PRACTICE_CONFIG.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Azqa Abid on Instagram (opens in a new tab)"
          title="Instagram"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
        >
          <InstagramBrandIcon className={sizeClass} />
        </a>
      )}

      {PRACTICE_CONFIG.social.linkedin.url && (
        <a
          href={PRACTICE_CONFIG.social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Azqa Abid on LinkedIn (opens in a new tab)"
          title="LinkedIn"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
        >
          <LinkedInBrandIcon className={sizeClass} />
        </a>
      )}

      <a
        href={PRACTICE_CONFIG.whatsappPrefilledUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Azqa Abid on WhatsApp (opens in a new tab)"
        title="WhatsApp"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
      >
        <WhatsAppBrandIcon className={sizeClass} />
      </a>

      <a
        href={googleHref}
        target={googleExternal ? '_blank' : undefined}
        rel={googleExternal ? 'noopener noreferrer' : undefined}
        aria-label={
          googleExternal
            ? 'Azqa Abid on Google Reviews (opens in a new tab)'
            : 'View Google Reviews section'
        }
        title="Google Reviews"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
      >
        <GoogleBrandIcon className={sizeClass} />
      </a>
    </div>
  );
}

export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E6DE] bg-white/95 backdrop-blur-sm">
      {/* Top Utility Bar: Call Us + 5 uploaded brand icons with links */}
      <div className="hidden border-b border-[#ECECE8] bg-[#F7F7F5] md:block">
        <div className="mx-auto flex h-11 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href={PRACTICE_CONFIG.phoneHref}
            className="inline-flex items-baseline gap-2 text-xs text-[#4F5B53] transition-colors hover:text-[#1E2621]"
          >
            <span>Call Us</span>
            <span className="text-sm font-bold text-[#3C455F] tabular-nums">
              {PRACTICE_CONFIG.phoneDisplay}
            </span>
          </a>

          <HeaderIconStrip sizeClass="h-6 w-6" />
        </div>
      </div>

      {/* Main Navigation Row matching uploaded nav link style */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:gap-6 lg:px-8">
        {/* Brand Wordmark */}
        <a
          href="#home"
          className="text-base font-bold tracking-tight text-[#1E2621] whitespace-nowrap shrink-0 transition-colors hover:text-[#3C455F] sm:text-lg lg:text-xl"
        >
          {PRACTICE_CONFIG.name}
        </a>

        {/* Navigation Links (Home, About Us, Focus Areas, Services, Reviews, Contact Us) */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-3.5 md:flex lg:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors lg:text-[15px] ${
                  isActive
                    ? 'text-[#3C455F]'
                    : 'text-[#374151] hover:text-[#3C455F]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 bottom-0.5 left-0 h-0.5 rounded-full bg-[#3C455F]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Icons + 3D Book Appointment Button + Hamburger */}
        <div className="flex items-center gap-1.5 shrink-0 sm:gap-2">
          <div className="hidden sm:flex md:hidden">
            <HeaderIconStrip sizeClass="h-5 w-5" />
          </div>

          <BookAppointmentButton label="Book Appointment" size="sm" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-[#E2E6DE] bg-white text-[#1E2621] transition-colors hover:bg-[#F1F4EF] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#E2E6DE] bg-[#FAF8F4] px-4 py-3 md:hidden"
        >
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E6DE] pb-3">
            <a
              href={PRACTICE_CONFIG.phoneHref}
              className="text-sm font-semibold text-[#3C455F] tabular-nums"
            >
              Call Us: {PRACTICE_CONFIG.phoneDisplay}
            </a>
            <HeaderIconStrip sizeClass="h-6 w-6" />
          </div>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center rounded-md px-3 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F1F4EF] font-semibold text-[#3C455F]'
                        : 'text-[#1E2621] hover:bg-[#F1F4EF]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-md px-3 text-[15px] font-medium text-[#1E2621] transition-colors hover:bg-[#F1F4EF]"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
