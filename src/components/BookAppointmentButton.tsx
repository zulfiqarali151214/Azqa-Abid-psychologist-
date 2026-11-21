import { ArrowRight, CalendarClock } from 'lucide-react';
import { PRACTICE_CONFIG } from '../config/profile';

interface BookAppointmentButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Global reusable Premium 3D "Book Appointment" pill button:
 * - Vibrant electric-blue glossy gradient (.btn-book-appointment)
 * - White calendar + clock icon on left
 * - Thin vertical white divider
 * - Bold white "Book Appointment" label
 * - White circular badge with blue right-pointing arrow on right
 * - Soft deep-blue layered shadow (0 8px 20px 0 rgba(13,71,217,0.24)) + 300ms hover lift
 */
export function BookAppointmentButton({
  label = 'Book Appointment',
  size = 'md',
  className = '',
}: BookAppointmentButtonProps) {
  const sizeConfig =
    size === 'sm'
      ? {
          button: 'min-h-[42px] gap-1.5 sm:gap-2.5 pl-3 pr-1.5 py-1.5 text-[11px] sm:pl-4 sm:pr-2 sm:text-xs',
          icon: 'h-3.5 w-3.5 sm:h-4 sm:w-4',
          divider: 'h-3.5 sm:h-4',
          circle: 'h-6 w-6 sm:h-7 sm:w-7',
          arrow: 'h-3 w-3 sm:h-3.5 sm:w-3.5',
        }
      : size === 'lg'
        ? {
            button: 'min-h-[52px] gap-3 pl-5 pr-2.5 py-2.5 text-[15px] sm:text-base',
            icon: 'h-5 w-5',
            divider: 'h-5',
            circle: 'h-8 w-8 sm:h-9 sm:w-9',
            arrow: 'h-4 w-4',
          }
        : {
            button: 'min-h-[46px] gap-2.5 pl-4 pr-2 py-2 text-sm sm:text-[15px]',
            icon: 'h-4 w-4 sm:h-[18px] sm:w-[18px]',
            divider: 'h-4 sm:h-5',
            circle: 'h-7 w-7 sm:h-8 sm:w-8',
            arrow: 'h-3.5 w-3.5 sm:h-4 sm:w-4',
          };

  return (
    <a
      href={PRACTICE_CONFIG.whatsappPrefilledUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} via WhatsApp (opens in a new tab)`}
      className={`btn-book-appointment group inline-flex items-center justify-between rounded-full font-bold tracking-[0.01em] text-white whitespace-nowrap shrink-0 ${sizeConfig.button} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2.5">
        <CalendarClock
          className={`shrink-0 text-white ${sizeConfig.icon}`}
          strokeWidth={2.2}
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className={`w-px shrink-0 bg-white/45 ${sizeConfig.divider}`}
        />
        <span>{label}</span>
      </span>

      <span
        aria-hidden="true"
        className={`relative z-10 inline-flex shrink-0 items-center justify-center rounded-full bg-white text-[#1665F5] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 ${sizeConfig.circle}`}
      >
        <ArrowRight className={sizeConfig.arrow} strokeWidth={2.5} />
      </span>
    </a>
  );
}
