import { ArrowUp, Phone } from 'lucide-react';
import { PRACTICE_CONFIG } from '../config/profile';
import { BookAppointmentButton } from './BookAppointmentButton';
import {
  FacebookBrandIcon,
  GoogleBrandIcon,
  InstagramBrandIcon,
  LinkedInBrandIcon,
  WhatsAppBrandIcon,
} from './BrandIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleHref = PRACTICE_CONFIG.googleReviewsUrl || '#reviews';
  const googleExternal = Boolean(PRACTICE_CONFIG.googleReviewsUrl);

  return (
    <>
      <footer className="bg-[#1E2621] pt-14 pb-24 text-[#FAF8F4] md:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
            {/* Brand & Booking Column */}
            <div className="md:col-span-5">
              <p className="text-2xl font-bold text-[#FAF8F4]">
                {PRACTICE_CONFIG.name}
              </p>
              <p className="mt-1 text-sm text-[#FAF8F4]/75">
                {PRACTICE_CONFIG.title} · Lahore, Pakistan (Online)
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#FAF8F4]/75">
                Compassionate, practical online consultations for women&apos;s
                mental health, relationships, anxiety, trauma-related concerns,
                and family communication.
              </p>
              <div className="mt-6">
                <BookAppointmentButton label="Book Appointment" size="md" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h2 className="text-sm font-semibold text-[#FAF8F4]">
                Quick Links
              </h2>
              <ul className="mt-3 space-y-1 text-sm text-[#FAF8F4]/80">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About Us' },
                  { href: '#focus-areas', label: 'Areas of Focus' },
                  { href: '#services', label: 'Services' },
                  { href: '#reviews', label: 'Google Reviews' },
                  { href: '#faq', label: 'FAQ' },
                  { href: '#contact', label: 'Contact Us' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-[40px] items-center transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Brand Social Icons */}
            <div className="md:col-span-4">
              <h2 className="text-sm font-semibold text-[#FAF8F4]">Connect</h2>
              <div className="mt-3 space-y-2 text-sm text-[#FAF8F4]/85">
                <a
                  href={PRACTICE_CONFIG.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{PRACTICE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {PRACTICE_CONFIG.social.facebook.url && (
                  <a
                    href={PRACTICE_CONFIG.social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Azqa Abid on Facebook (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform hover:scale-105"
                  >
                    <FacebookBrandIcon className="h-7 w-7" />
                  </a>
                )}

                {PRACTICE_CONFIG.social.instagram.url && (
                  <a
                    href={PRACTICE_CONFIG.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Azqa Abid on Instagram (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform hover:scale-105"
                  >
                    <InstagramBrandIcon className="h-7 w-7" />
                  </a>
                )}

                {PRACTICE_CONFIG.social.linkedin.url && (
                  <a
                    href={PRACTICE_CONFIG.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Azqa Abid on LinkedIn (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform hover:scale-105"
                  >
                    <LinkedInBrandIcon className="h-7 w-7" />
                  </a>
                )}

                <a
                  href={PRACTICE_CONFIG.whatsappPrefilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Azqa Abid (opens in a new tab)"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform hover:scale-105"
                >
                  <WhatsAppBrandIcon className="h-7 w-7" />
                </a>

                <a
                  href={googleHref}
                  target={googleExternal ? '_blank' : undefined}
                  rel={googleExternal ? 'noopener noreferrer' : undefined}
                  aria-label="Google Reviews"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform hover:scale-105"
                >
                  <GoogleBrandIcon className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Required Disclaimers, Crisis Note, Confidentiality & Back-to-Top */}
          <div className="mt-8 space-y-4 text-xs leading-relaxed text-[#FAF8F4]/75">
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 sm:grid-cols-3">
              <p>
                <strong className="font-semibold text-[#FAF8F4]">
                  Informational Disclaimer:
                </strong>{' '}
                This website is for information only and is not a substitute for
                professional diagnosis or treatment.
              </p>
              <p>
                <strong className="font-semibold text-[#FAF8F4]">
                  Crisis Support:
                </strong>{' '}
                If you are in immediate danger or crisis, contact local emergency
                services or a crisis helpline.
              </p>
              <p>
                <strong className="font-semibold text-[#FAF8F4]">
                  Privacy &amp; Confidentiality:
                </strong>{' '}
                All online psychological consultations are held strictly
                confidential in accordance with professional ethical standards.
              </p>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <p>
                © {new Date().getFullYear()} {PRACTICE_CONFIG.name}. All rights
                reserved.
              </p>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-[#FAF8F4] transition-colors hover:border-white hover:bg-white/10"
              >
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button on Mobile using uploaded WhatsApp icon */}
      <a
        href={PRACTICE_CONFIG.whatsappPrefilledUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Azqa Abid on WhatsApp"
        className="fixed right-4 bottom-4 z-40 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] md:hidden"
      >
        <WhatsAppBrandIcon className="h-6 w-6 shrink-0" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
