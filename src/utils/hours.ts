/**
 * Real-time working hours calculation in Asia/Karachi (PKT, UTC+5).
 * Monday – Saturday: 9:00 AM – 9:00 PM (09:00 – 21:00)
 * Sunday: 9:00 AM – 10:00 PM (09:00 – 22:00)
 */

export interface KarachiHoursStatus {
  isOpen: boolean;
  statusLabel: 'Open now' | 'Closed now';
  detailLabel: string;
  karachiTimeText: string;
}

export function getKarachiHoursStatus(now: Date = new Date()): KarachiHoursStatus {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const rawHour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0');
  const hour = rawHour === 24 ? 0 : rawHour;
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');

  const displayTimeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const karachiTimeText = displayTimeFormatter.format(now);

  const isSunday = weekday === 'Sun';
  const openHour = 9; // 9:00 AM
  const closeHour = isSunday ? 22 : 21; // 10:00 PM Sunday, 9:00 PM Mon-Sat
  const closeLabel = isSunday ? '10:00 PM PKT' : '9:00 PM PKT';

  const currentMinutes = hour * 60 + minute;
  const openMinutes = openHour * 60;
  const closeMinutes = closeHour * 60;

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  return {
    isOpen,
    statusLabel: isOpen ? 'Open now' : 'Closed now',
    detailLabel: isOpen ? `Closes at ${closeLabel}` : 'Opens daily at 9:00 AM PKT',
    karachiTimeText,
  };
}
