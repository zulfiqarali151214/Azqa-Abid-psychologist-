/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutAndFocus } from './components/AboutAndFocus';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ReviewsAndInstagram } from './components/ReviewsAndInstagram';
import { ServicesAndProcess } from './components/ServicesAndProcess';

const SECTION_IDS = [
  'home',
  'about',
  'focus-areas',
  'services',
  'reviews',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1E2621]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#3A4664] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Header activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <AboutAndFocus />
        <ServicesAndProcess />
        <ReviewsAndInstagram />
        <FaqAndContact />
      </main>

      <Footer />
    </div>
  );
}
