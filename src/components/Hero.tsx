import {
  CalendarCheck,
  Clock,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Star,
  UserPlus,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { PRACTICE_CONFIG } from '../config/profile';
import { getKarachiHoursStatus, type KarachiHoursStatus } from '../utils/hours';
import { BookAppointmentButton } from './BookAppointmentButton';

/**
 * Original practice copy mapped to the exact visual structure of the uploaded reference:
 * Full-bleed blurred background photo + slate scrim, 2-line white display headline,
 * 2x2 warm-peach (#E5AE7E) icon & text grid, and shadowed Book Appointment CTA.
 */
const HERO_FEATURES = [
  {
    icon: UserPlus,
    title: 'Empathetic Clinical Care',
    description:
      "Practical, judgment-free guidance for women's mental health and emotional wellbeing.",
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Online Sessions',
    description:
      'Schedule a discovery call or consultation 7 days a week across Lahore and Pakistan.',
  },
  {
    icon: ShieldCheck,
    title: 'Trauma & Anxiety Support',
    description:
      'Gentle, step-by-step tools to ease persistent fears, overthinking, and stress.',
  },
  {
    icon: HeartHandshake,
    title: 'Stronger Family Bonds',
    description:
      'Helping individuals and families rebuild trust, understanding, and calm communication.',
  },
] as const;

export function Hero() {
  const [hoursStatus, setHoursStatus] = useState<KarachiHoursStatus>(() =>
    getKarachiHoursStatus()
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHoursStatus(getKarachiHoursStatus());
    }, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="border-b border-[#E2E6DE] bg-[#FAF8F4]">
      {/* Full-Bleed Blurred Background Hero matching reference image */}
      <div className="relative overflow-hidden bg-[#2D3546]">
        <img
          src={PRACTICE_CONFIG.aboutSpaceImageSrc}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center blur-[4px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#232A3B]/80 via-[#2E374C]/65 to-[#2E374C]/45"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="animate-fade-in max-w-2xl">
            <h1 className="text-[clamp(2rem,4.2vw,3rem)] leading-[1.18] font-bold tracking-tight text-white">
              Online Therapy for Clarity,
              <br className="hidden sm:inline" /> Healing &amp; Growth
            </h1>

            {/* 2x2 Warm Peach-Gold Icon & Text Grid */}
            <div className="mt-9 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {HERO_FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <Icon
                      className="mt-1 h-5 w-5 shrink-0 text-[#E5AE7E]"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-[17px] leading-snug font-semibold text-[#E5AE7E]">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/95">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Single Prominent Shadowed Book Appointment Button */}
            <div className="mt-10">
              <BookAppointmentButton label="Book Appointment" size="lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Google Business Profile & Live Hours Trust Bar */}
      <div
        aria-label="Practice highlights"
        className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={PRACTICE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1E2621] transition-colors hover:text-[#3C455F]"
            >
              Clinical psychologist Azqa Abid
            </a>
            <span aria-hidden="true" className="text-[#9C6B53]">
              ·
            </span>
            <a
              href={PRACTICE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#1E2621] tabular-nums transition-colors hover:text-[#3C455F]"
            >
              <span>5.0</span>
              <span
                className="inline-flex items-center gap-0.5 text-[#FABB05]"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <span>(17)</span>
            </a>
            <span aria-hidden="true" className="text-[#9C6B53]">
              ·
            </span>
            <span className="text-[#4F5B53]">Online Consultations</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={PRACTICE_CONFIG.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-[#3C455F] tabular-nums hover:underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{PRACTICE_CONFIG.phoneDisplay}</span>
            </a>

            <span
              className="inline-flex items-center gap-1.5 font-medium"
              aria-live="polite"
            >
              <Clock
                className={`h-4 w-4 ${
                  hoursStatus.isOpen ? 'text-[#2F5241]' : 'text-[#9C6B53]'
                }`}
                aria-hidden="true"
              />
              <span
                className={
                  hoursStatus.isOpen ? 'text-[#2F5241]' : 'text-[#9C6B53]'
                }
              >
                {hoursStatus.statusLabel}
              </span>
              <span aria-hidden="true" className="text-[#4F5B53]">
                ·
              </span>
              <span className="text-[#4F5B53]">{hoursStatus.detailLabel}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
