import type { SVGProps } from 'react';

/**
 * Crisp vector brand icons matching the 5 uploaded social/platform icons
 * (Facebook, Instagram, LinkedIn, WhatsApp, Google) without PNG checkerboard artifacts.
 */

export function FacebookBrandIcon({ className = 'h-6 w-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M29.7 25.5l1-6.5h-6.2v-4.2c0-1.8.9-3.5 3.7-3.5H31V5.8s-2.6-.4-5.1-.4c-5.2 0-8.6 3.1-8.6 8.8V19h-5.7v6.5h5.7V42c1.1.2 2.3.3 3.5.3s2.4-.1 3.5-.3V25.5h5.4z"
      />
    </svg>
  );
}

export function InstagramBrandIcon({ className = 'h-6 w-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="ig-grad-header" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FDF497" />
          <stop offset="10%" stopColor="#FDF497" />
          <stop offset="45%" stopColor="#FD5949" />
          <stop offset="65%" stopColor="#D6249F" />
          <stop offset="95%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#ig-grad-header)" />
      <rect
        x="11"
        y="11"
        width="26"
        height="26"
        rx="7.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.2"
      />
      <circle cx="24" cy="24" r="6.2" fill="none" stroke="#FFFFFF" strokeWidth="3.2" />
      <circle cx="32.2" cy="15.8" r="1.9" fill="#FFFFFF" />
    </svg>
  );
}

export function LinkedInBrandIcon({ className = 'h-6 w-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="24" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M16.4 19.6h-4.5v14.5h4.5V19.6zm-2.25-7.2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zm21.45 13.4c0-4.4-2.35-6.5-5.5-6.5-2.55 0-3.7 1.4-4.35 2.4v-2.1h-4.45c.06 1.3 0 14.5 0 14.5h4.45V26c0-.43.03-.87.16-1.18.35-.87 1.15-1.77 2.48-1.77 1.75 0 2.45 1.34 2.45 3.3v7.75H35.6v-8.3z"
      />
    </svg>
  );
}

export function WhatsAppBrandIcon({ className = 'h-6 w-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <rect x="2" y="2" width="44" height="44" rx="11" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M24 10.5c-7.4 0-13.4 6-13.4 13.4 0 2.4.6 4.7 1.8 6.8L10.5 37l6.5-1.7c2 1.1 4.4 1.7 7 1.7 7.4 0 13.4-6 13.4-13.4S31.4 10.5 24 10.5zm7.8 18.9c-.3.9-1.9 1.7-2.6 1.8-.7.1-1.5.2-2.5-.1-.6-.2-1.4-.5-2.4-.9-4.2-1.8-6.9-6-7.1-6.3-.2-.3-1.7-2.3-1.7-4.3s1.1-3 1.5-3.4c.4-.4.8-.5 1.1-.5h.8c.3 0 .6-.1.9.7.3.8 1.2 2.9 1.3 3.1.1.2.2.5 0 .8-.1.3-.2.5-.4.7-.2.2-.4.5-.6.7-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.3-.3 1.1-1.3 1.4-1.7.3-.4.6-.3 1-.2.4.1 2.6 1.2 3 1.4.4.2.7.3.8.5.1.2.1 1.1-.2 2z"
      />
    </svg>
  );
}

export function GoogleBrandIcon({ className = 'h-6 w-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="23" fill="#FFFFFF" stroke="#E2E6DE" strokeWidth="1.5" />
      <path
        fill="#EA4335"
        d="M24 16.9c2.2 0 4.1.8 5.6 2.2l4.2-4.2C31.2 12.5 27.8 11 24 11c-5.2 0-9.7 3-11.9 7.3l4.9 3.8c1.2-3.4 4.4-5.2 7-5.2z"
      />
      <path
        fill="#4285F4"
        d="M36.5 24.3c0-.9-.1-1.8-.2-2.6H24v5.1h7.1c-.3 1.6-1.2 3-2.6 3.9l4.1 3.2c2.4-2.2 3.9-5.5 3.9-9.6z"
      />
      <path
        fill="#FBBC05"
        d="M17 26.9c-.3-.9-.5-1.9-.5-2.9s.2-2 .5-2.9l-4.9-3.8C11.4 19.3 11 21.6 11 24s.4 4.7 1.1 6.7l4.9-3.8z"
      />
      <path
        fill="#34A853"
        d="M24 37c3.6 0 6.6-1.2 8.6-3.1l-4.1-3.2c-1.2.8-2.7 1.3-4.5 1.3-3.4 0-6.3-2.3-7.3-5.4l-4.9 3.8C14 34.4 18.6 37 24 37z"
      />
    </svg>
  );
}
