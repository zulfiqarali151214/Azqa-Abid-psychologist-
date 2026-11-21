/**
 * Central Practice Configuration & Content Data
 *
 * PLACEHOLDERS TO REPLACE:
 * Look for comments marked `VERIFY` below to fill in remaining items:
 * 1. Profile photo (replace /src/assets/images/azqa_profile_portrait_1794735724719.jpg with your actual portrait)
 * 2. Qualifications & degrees (do not leave empty before publishing)
 * 3. Email address
 * 4. Direct Facebook page URL (currently linked to Azqa Abid Facebook search)
 * 5. Google Reviews / Maps URL
 * 6. Formspree endpoint URL (or enable Netlify Forms)
 */

import profilePortraitFallback from '../assets/images/azqa_profile_portrait_1794735724719.jpg';
import consultationSpaceImage from '../assets/images/calm_therapy_space_1794735725746.jpg';

export const PRACTICE_CONFIG = {
  name: 'Azqa Abid',
  title: 'Clinical Psychologist',
  location: 'Lahore, Pakistan (Online consultations available)',
  /* VERIFY: Add clinic street address if in-person sessions are offered */
  inPersonAddress: '',
  /* VERIFY: Confirm languages spoken, e.g., 'English & Urdu' */
  languages: '',
  /* VERIFY: Paste verified degrees, university, and professional registration details */
  qualifications: [] as string[],

  phoneDisplay: '0319 1543057',
  phoneHref: 'tel:+923191543057',
  whatsappBaseUrl: 'https://wa.me/923191543057',
  whatsappPrefilledUrl:
    'https://wa.me/923191543057?text=Hello%20Azqa%2C%20I%20would%20like%20to%20book%20a%20consultation.',
  bookingUrl: 'https://psychologistazqa.com/discovery-call',

  /* VERIFY: Add practice email address when ready (e.g. 'hello@psychologistazqa.com') */
  email: '',

  /* VERIFY: Replace portrait import with Azqa Abid's own photograph */
  profileImageSrc: profilePortraitFallback,
  profileImageAlt:
    'Azqa Abid, Clinical Psychologist offering online psychological consultations in Lahore, Pakistan',
  aboutSpaceImageSrc: consultationSpaceImage,
  aboutSpaceImageAlt:
    'Calm sunlit psychological consultation room with linen armchairs and sage botanicals',

  googleReviewsUrl: 'https://share.google/MAyKSNAuSknzPBOuF',

  /* VERIFY: Paste Formspree endpoint (e.g. 'https://formspree.io/f/your_id') to enable email form submissions */
  formspreeEndpoint: '',

  social: {
    facebook: {
      label: 'Facebook',
      /* VERIFY: Replace with Azqa Abid's exact Facebook profile/page URL */
      url: 'https://www.facebook.com/search/top/?q=Azqa%20Abid%20Clinical%20Psychologist',
    },
    linkedin: {
      label: 'LinkedIn',
      url: 'https://pk.linkedin.com/in/psyaqsaabid',
    },
    instagram: {
      label: 'Instagram',
      handle: '@psychologistazqa',
      followers: '661 followers',
      url: 'https://www.instagram.com/psychologistazqa/',
    },
  },
} as const;

export const AREAS_OF_FOCUS = [
  {
    id: 'womens-mental-health',
    title: "Women's Mental Health",
    description:
      'Support for life transitions, emotional exhaustion, self-worth, and the layered expectations women carry at home and work.',
  },
  {
    id: 'relationships',
    title: 'Relationships',
    description:
      'Navigating attachment patterns, boundaries, recurring conflict, and building steadier emotional connection.',
  },
  {
    id: 'anxiety-fears',
    title: 'Anxiety & Fears',
    description:
      'Understanding overthinking, persistent worry, and physical tension through clear explanations and grounded daily tools.',
  },
  {
    id: 'trauma-support',
    title: 'Trauma-Related Support',
    description:
      'Gentle, paced online consultations that respect your nervous system and help you process difficult past experiences safely.',
  },
  {
    id: 'family-communication',
    title: 'Family Communication & Trust',
    description:
      'Helping families overcome mistrust, emotional distance, and miscommunication so conversations feel safer and clearer.',
  },
  {
    id: 'emotional-wellbeing',
    title: 'Emotional Wellbeing & Growth',
    description:
      'Developing emotional clarity, practical coping habits, and lasting personal growth beyond surface-level advice.',
  },
] as const;

export const SERVICES = [
  {
    number: '01',
    title: 'Discovery Call',
    meta: 'Initial step · Online',
    description:
      'A brief introductory conversation to share what brings you to therapy, ask questions about the process, and see if we are a good fit.',
    ctaLabel: 'Book Appointment',
    ctaHref: PRACTICE_CONFIG.whatsappPrefilledUrl,
    external: true,
  },
  {
    number: '02',
    title: 'Online Therapy Sessions',
    meta: 'Video consultation · Lahore & nationwide',
    description:
      'Confidential one-on-one sessions from the privacy of your own space, structured around practical steps you can apply between meetings.',
    ctaLabel: 'Schedule Session',
    ctaHref: PRACTICE_CONFIG.whatsappPrefilledUrl,
    external: true,
  },
  {
    number: '03',
    title: 'Individual Counseling',
    meta: 'Focused support · Women & adults',
    description:
      'Dedicated space for anxiety, fears, trauma-related concerns, emotional regulation, and personal growth explained in simple, relatable language.',
    ctaLabel: 'Inquire via WhatsApp',
    ctaHref: PRACTICE_CONFIG.whatsappPrefilledUrl,
    external: true,
  },
  {
    number: '04',
    title: 'Relationship & Family Support',
    meta: 'Interpersonal · Communication & trust',
    description:
      'Guided sessions for individuals and families working through mistrust, unspoken distance, and miscommunication patterns.',
    ctaLabel: 'Discuss Your Needs',
    ctaHref: '#contact',
    external: false,
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Book a discovery call',
    description:
      'Choose a convenient slot online or reach out on WhatsApp to arrange a brief introductory call.',
  },
  {
    step: '02',
    title: 'Share your concerns',
    description:
      'Speak openly at your own pace in a calm, non-judgmental conversation about what you have been carrying.',
  },
  {
    step: '03',
    title: 'Start sessions',
    description:
      'Begin regular online consultations tailored to your emotional needs, goals, and everyday life.',
  },
  {
    step: '04',
    title: 'Practice and grow',
    description:
      'Apply clear, practical strategies between sessions to build steadier emotional habits over time.',
  },
] as const;

export interface GoogleReview {
  id: string;
  reviewer: string;
  sourceLabel: string;
  rating: number;
  quote: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'review-1',
    reviewer: 'Anonymous Client',
    sourceLabel: 'Google Review',
    rating: 5,
    quote:
      "I had a great session with Clinical Psychologist Azqa Abid. She is a very calm and good listener, she doesn't judge, she actually understands. She explained my anxiety in very simple words and gave me practical steps, not just theory. Highly recommended for anyone looking for a supportive psychologist.",
  },
  {
    id: 'review-2',
    reviewer: 'Asad Latif',
    sourceLabel: 'Google Review',
    rating: 5,
    quote:
      "She's an amazing psychologist! She helped me a lot with my fears and anxiety. She's really nice and gave me practical tips to feel better. I highly recommend her!",
  },
  {
    id: 'review-3',
    reviewer: 'Maryam Jattoi',
    sourceLabel: 'Google Review',
    rating: 5,
    quote:
      'Her treatment method is the best. She is the best clinical psychologist and therapist in Lahore and she gives good treatment. I will highly recommend her.',
  },
];

export const INSTAGRAM_HIGHLIGHTS = [
  'Reviews',
  'Services',
  'Q&A',
  'Anxiety',
  'Testimonials',
  'About',
] as const;

export const FAQ_ITEMS = [
  {
    id: 'confidentiality',
    question: 'Are online consultations completely confidential?',
    answer:
      'Yes. Everything you share in our sessions is treated with strict professional confidentiality. Sessions are conducted in a private setting, and your personal details or concerns are never shared without your explicit consent, except where required by law for immediate safety.',
  },
  {
    id: 'how-online-works',
    question: 'How do online therapy sessions work?',
    answer:
      'Once you book a discovery call or consultation, we confirm a time that suits you within working hours (PKT) and share a private video meeting link. You only need a quiet space, a reliable internet connection, and a phone or laptop.',
  },
  {
    id: 'session-length',
    question: 'How long is each session?',
    /* VERIFY: Confirm exact consultation and discovery call durations */
    answer:
      'Discovery calls are brief introductory conversations to discuss your concerns and goals, while full therapy sessions provide dedicated, unhurried time to work through them together. Exact session duration details are shared when you schedule your appointment.',
  },
  {
    id: 'fees',
    question: 'What are the consultation fees and how do I pay?',
    /* VERIFY: Add current fee structure and accepted payment methods (e.g., bank transfer / JazzCash / SadaPay) */
    answer:
      'Fee details and payment instructions are shared clearly prior to confirming your session when you book a discovery call or message on WhatsApp.',
  },
  {
    id: 'cancellation',
    question: 'What is the cancellation or rescheduling policy?',
    /* VERIFY: Add exact notice period (e.g., 24 hours in advance) */
    answer:
      'If something unexpected comes up, please reach out as early as possible via WhatsApp or phone so we can reschedule your appointment to another open slot.',
  },
  {
    id: 'who-i-work-with',
    question: 'Who do you typically work with?',
    answer:
      "I primarily work with women and families seeking online psychological support in Lahore and across Pakistan, focusing on women's mental health, anxiety and fears, trauma-related experiences, relationships, family communication, and emotional wellbeing.",
  },
] as const;

export const WORKING_HOURS_ROWS = [
  { day: 'Monday – Saturday', hours: '9:00 AM – 9:00 PM', note: 'PKT (Asia/Karachi)' },
  { day: 'Sunday', hours: '9:00 AM – 10:00 PM', note: 'PKT (Asia/Karachi)' },
] as const;
