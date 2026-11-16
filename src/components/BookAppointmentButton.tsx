import { PRACTICE_CONFIG } from '../config/profile';

interface BookAppointmentButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Matches uploaded button reference:
 * Solid deep slate #3C455F background, crisp white Poppins medium text,
 * subtle 4px border radius, and soft downward-right drop shadow.
 */
export function BookAppointmentButton({
  label = 'Book Appointment',
  size = 'md',
  className = '',
}: BookAppointmentButtonProps) {
  const sizeClasses =
    size === 'sm'
      ? 'min-h-[42px] px-4 py-2 text-xs sm:text-sm'
      : size === 'lg'
        ? 'min-h-[48px] px-7 py-3 text-[15px] sm:text-base'
        : 'min-h-[46px] px-6 py-2.5 text-[15px]';

  return (
    <a
      href={PRACTICE_CONFIG.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-[4px] bg-[#3C455F] font-medium tracking-[0.01em] text-white whitespace-nowrap shrink-0 shadow-[4px_8px_16px_rgba(30,36,54,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#30384E] hover:shadow-[6px_12px_20px_rgba(30,36,54,0.48)] active:translate-y-0 ${sizeClasses} ${className}`}
    >
      {label}
    </a>
  );
}
