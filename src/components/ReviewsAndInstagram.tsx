import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import {
  GOOGLE_REVIEWS,
  INSTAGRAM_HIGHLIGHTS,
  PRACTICE_CONFIG,
} from '../config/profile';
import { BookAppointmentButton } from './BookAppointmentButton';
import { GoogleBrandIcon } from './BrandIcons';

export function ReviewsAndInstagram() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMissingLinkNotice, setShowMissingLinkNotice] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Google Reviews Section */}
      <section
        id="reviews"
        className="border-b border-[#DCE5F2] bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#1665F5]">
                Client Feedback
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A2338] sm:text-4xl">
                Words from clients
              </h2>
              <p className="mt-3 inline-flex items-center gap-2 text-base font-medium text-[#1A2338] tabular-nums">
                <Star
                  className="h-4 w-4 shrink-0 fill-[#FABB05] text-[#FABB05]"
                  aria-hidden="true"
                />
                <span>5.0 ★ from 17 Google reviews</span>
              </p>
            </div>

            {/* Slider Controls + Book Appointment */}
            <div className="flex flex-wrap items-center gap-3">
              <BookAppointmentButton label="Book Appointment" size="md" />

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Google review"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[#D3E0F4] bg-[#F2F7FF] text-[#1A2338] transition-colors hover:border-[#1665F5] hover:bg-[#E6EEFE]"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Google review"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[#D3E0F4] bg-[#F2F7FF] text-[#1A2338] transition-colors hover:border-[#1665F5] hover:bg-[#E6EEFE]"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Single-Card Slider View */}
          <div className="mt-8 lg:hidden" aria-live="polite">
            {(() => {
              const review = GOOGLE_REVIEWS[activeIndex];
              return (
                <article className="rounded-2xl border border-[#D3E0F4] bg-[#F2F7FF] p-6 shadow-[0_6px_18px_rgba(22,101,245,0.06)] sm:p-8">
                  <div className="flex items-center justify-between gap-4 border-b border-[#D3E0F4] pb-4">
                    <span className="text-xs font-semibold text-[#1665F5]">
                      {review.sourceLabel}
                    </span>
                    <div
                      className="flex items-center gap-0.5 text-[#FABB05]"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-5 text-base leading-relaxed text-[#1A2338]">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-5 text-sm font-semibold text-[#475569]">
                    — {review.reviewer}
                  </footer>
                </article>
              );
            })()}

            <div className="mt-4 flex items-center justify-center gap-2">
              {GOOGLE_REVIEWS.map((review, idx) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View review ${idx + 1} of ${GOOGLE_REVIEWS.length}`}
                  aria-pressed={activeIndex === idx}
                  className={`min-h-[44px] min-w-[44px] rounded-lg text-xs font-semibold tabular-nums transition-colors ${
                    activeIndex === idx
                      ? 'bg-[#1665F5] text-white'
                      : 'border border-[#D3E0F4] bg-white text-[#475569] hover:bg-[#F2F7FF]'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop 3-Column Editorial Grid with Active Spotlight */}
          <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3">
            {GOOGLE_REVIEWS.map((review, idx) => {
              const isHighlighted = idx === activeIndex;
              return (
                <article
                  key={review.id}
                  className={`flex flex-col justify-between rounded-2xl border p-7 shadow-[0_6px_18px_rgba(22,101,245,0.05)] transition-colors ${
                    isHighlighted
                      ? 'border-[#2B8CFF] bg-[#E8F0FE]'
                      : 'border-[#D3E0F4] bg-[#F4F8FF]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-[#D3E0F4] pb-4">
                      <span className="text-xs font-semibold text-[#1665F5]">
                        {review.sourceLabel}
                      </span>
                      <div
                        className="flex items-center gap-0.5 text-[#FABB05]"
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: review.rating }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="mt-5 text-sm leading-relaxed text-[#1A2338] sm:text-base">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>

                  <footer className="mt-6 text-sm font-semibold text-[#475569]">
                    — {review.reviewer}
                  </footer>
                </article>
              );
            })}
          </div>

          {/* Read All Reviews CTA */}
          <div className="mt-8 flex flex-col items-start gap-3">
            {PRACTICE_CONFIG.googleReviewsUrl ? (
              <a
                href={PRACTICE_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-[#D3E0F4] bg-[#F4F8FF] px-5 py-2.5 text-sm font-semibold text-[#1665F5] transition-colors hover:border-[#1665F5] hover:bg-[#E8F0FE]"
              >
                <GoogleBrandIcon className="h-5 w-5 shrink-0" />
                <span>Read all reviews on Google</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setShowMissingLinkNotice((prev) => !prev)}
                  className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-[#D3E0F4] bg-[#F4F8FF] px-5 py-2.5 text-sm font-semibold text-[#1665F5] transition-colors hover:border-[#1665F5] hover:bg-[#E8F0FE]"
                >
                  <GoogleBrandIcon className="h-5 w-5 shrink-0" />
                  <span>Read all reviews on Google</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
                {showMissingLinkNotice && (
                  <p className="mt-2 text-xs text-[#475569]">
                    Placeholder: paste your Google Business Profile / Maps review link into{' '}
                    <code className="rounded bg-[#F2F7FF] px-1.5 py-0.5 text-[#1A2338]">
                      googleReviewsUrl
                    </code>{' '}
                    in <code className="rounded bg-[#F2F7FF] px-1.5 py-0.5 text-[#1A2338]">src/config/profile.ts</code> to activate this external link.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learn More on Instagram Section */}
      <section
        aria-labelledby="instagram-heading"
        className="border-b border-[#DCE5F2] bg-[#F7FAFF] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#D3E0F4] bg-[#EDF4FF] p-6 shadow-[0_8px_24px_rgba(22,101,245,0.06)] sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="text-sm font-semibold text-[#1665F5]">
                  Learn More on Instagram
                </p>
                <h2
                  id="instagram-heading"
                  className="mt-2 text-3xl font-bold tracking-tight text-[#1A2338]"
                >
                  {PRACTICE_CONFIG.social.instagram.handle}
                </h2>
                <p className="mt-2 text-sm font-medium text-[#475569] tabular-nums">
                  {PRACTICE_CONFIG.social.instagram.followers} · Women&apos;s mental
                  health, relationships, anxiety &amp; personal growth
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#475569]">
                  Explore everyday psychoeducation, gentle Q&amp;A reflections, and
                  client-centered insights directly on Instagram before booking your
                  first conversation.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={PRACTICE_CONFIG.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow @psychologistazqa on Instagram (opens in a new tab)"
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-[#1A2338] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2B3754]"
                  >
                    <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Follow {PRACTICE_CONFIG.social.instagram.handle}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>

                  <BookAppointmentButton label="Book Appointment" size="md" />
                </div>
              </div>

              {/* Interactive Highlight Links Grid */}
              <div className="lg:col-span-6">
                <p className="mb-3 text-xs font-semibold text-[#475569]">
                  Browse Instagram Highlights
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {INSTAGRAM_HIGHLIGHTS.map((highlight) => (
                    <a
                      key={highlight}
                      href={PRACTICE_CONFIG.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${highlight} highlight on Instagram (opens in a new tab)`}
                      className="flex min-h-[52px] items-center justify-between gap-2 rounded-xl border border-[#D3E0F4] bg-white px-4 py-3 text-sm font-medium text-[#1A2338] transition-colors hover:border-[#1665F5] hover:text-[#1665F5]"
                    >
                      <span>{highlight}</span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-[#475569]"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
