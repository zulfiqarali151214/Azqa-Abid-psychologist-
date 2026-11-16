import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  Wind,
} from 'lucide-react';
import { useState } from 'react';
import { AREAS_OF_FOCUS, PRACTICE_CONFIG } from '../config/profile';
import { BookAppointmentButton } from './BookAppointmentButton';

const FOCUS_ICONS: Record<string, typeof HeartHandshake> = {
  'womens-mental-health': Sparkles,
  relationships: HeartHandshake,
  'anxiety-fears': Wind,
  'trauma-support': ShieldCheck,
  'family-communication': Users,
  'emotional-wellbeing': Compass,
};

export function AboutAndFocus() {
  const [portraitError, setPortraitError] = useState(false);

  return (
    <>
      {/* About & Credentials Section */}
      <section id="about" className="border-b border-[#E2E6DE] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Warm First-Person Narrative */}
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#2F5241]">About</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1E2621] sm:text-4xl">
                Practical, empathetic care without clinical overwhelm
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4F5B53]">
                <p>
                  I am Azqa Abid, a clinical psychologist offering online
                  trauma-related psychological consultations. My work focuses on
                  women&apos;s mental health, relationships, anxiety, emotional
                  wellbeing, and personal growth — guided by practical,
                  easy-to-understand steps rather than theory alone.
                </p>
                <p>
                  In our sessions, my goal is to listen carefully without judgment
                  and translate complex emotional patterns into clear language you
                  can actually use in your everyday life. Whether you are carrying
                  quiet anxiety, processing difficult past experiences, or trying
                  to rebuild steadiness in yourself, we move at a pace that feels
                  safe and respectful.
                </p>
                <p>
                  I also support families navigating mistrust, emotional distance,
                  and miscommunication — helping loved ones hear one another with
                  greater patience and clarity.
                </p>
              </div>

              <div className="mt-8">
                <BookAppointmentButton label="Book Appointment" size="md" />
              </div>
            </div>

            {/* Portrait & Practice Credentials Column */}
            <div className="space-y-6 lg:col-span-5">
              {/* Soft-Framed Portrait */}
              {/* VERIFY: Replace profileImageSrc in src/config/profile.ts with Azqa Abid's portrait photo */}
              <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#E2E6DE] bg-[#F1F4EF] p-2.5 lg:max-w-none">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#E8EDE5]">
                  {!portraitError ? (
                    <img
                      src={PRACTICE_CONFIG.profileImageSrc}
                      alt={PRACTICE_CONFIG.profileImageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitError(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-[#4F5B53]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#3C455F]">
                        <User className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <p className="text-lg font-semibold text-[#1E2621]">
                        {PRACTICE_CONFIG.name}
                      </p>
                      <p className="text-sm">{PRACTICE_CONFIG.title}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Credentials Card */}
              <div className="rounded-2xl border border-[#E2E6DE] bg-[#F1F4EF] p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#1E2621]">
                  Practice &amp; Credentials
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4F5B53]">
                  Verified practice details for clients considering an online
                  consultation.
                </p>

                <dl className="mt-6 divide-y divide-[#E2E6DE] text-sm">
                  <div className="py-3.5 first:pt-0">
                    <dt className="font-semibold text-[#1E2621]">Practice Title</dt>
                    <dd className="mt-1 text-[#4F5B53]">
                      {PRACTICE_CONFIG.title}
                      {/* VERIFY: Confirm exact clinical title and credentials before publishing */}
                    </dd>
                  </div>

                  <div className="py-3.5">
                    <dt className="font-semibold text-[#1E2621]">
                      Education &amp; Qualifications
                    </dt>
                    <dd className="mt-1 text-[#4F5B53]">
                      {PRACTICE_CONFIG.qualifications.length > 0 ? (
                        <ul className="list-inside list-disc space-y-1">
                          {PRACTICE_CONFIG.qualifications.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        /* VERIFY: Paste degrees, university, and registration details in src/config/profile.ts */
                        <span className="italic">
                          Academic degrees &amp; registration details to be added prior
                          to launch.
                        </span>
                      )}
                    </dd>
                  </div>

                  <div className="py-3.5">
                    <dt className="font-semibold text-[#1E2621]">
                      Location &amp; Format
                    </dt>
                    <dd className="mt-1 text-[#4F5B53]">
                      {PRACTICE_CONFIG.location}
                      {PRACTICE_CONFIG.inPersonAddress && (
                        <span className="mt-1 block">
                          In-person clinic: {PRACTICE_CONFIG.inPersonAddress}
                        </span>
                      )}
                      {/* VERIFY: Confirm if in-person sessions are offered in Lahore and add clinic address */}
                    </dd>
                  </div>

                  <div className="py-3.5">
                    <dt className="font-semibold text-[#1E2621]">Languages</dt>
                    <dd className="mt-1 text-[#4F5B53]">
                      {PRACTICE_CONFIG.languages || (
                        /* VERIFY: Confirm languages (e.g., English and Urdu) */
                        <span className="italic">
                          Consultation languages to be confirmed (e.g., English &amp;
                          Urdu).
                        </span>
                      )}
                    </dd>
                  </div>

                  <div className="py-3.5 last:pb-0">
                    <dt className="font-semibold text-[#1E2621]">
                      Working Hours (PKT)
                    </dt>
                    <dd className="mt-1 space-y-0.5 text-[#4F5B53] tabular-nums">
                      <div>Monday – Saturday: 9:00 AM – 9:00 PM</div>
                      <div>Sunday: 9:00 AM – 10:00 PM</div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section
        id="focus-areas"
        className="border-b border-[#E2E6DE] bg-[#FAF8F4] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2F5241]">Areas of Focus</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1E2621] sm:text-4xl">
                Thoughtful support for what you are navigating
              </h2>
              <p className="mt-3 text-base text-[#4F5B53]">
                Every consultation is tailored to your lived context, offering clear
                understanding and grounded steps forward.
              </p>
            </div>
            <BookAppointmentButton label="Book Appointment" size="md" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS_OF_FOCUS.map((area) => {
              const Icon = FOCUS_ICONS[area.id] ?? Sparkles;
              return (
                <article
                  key={area.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#E2E6DE] bg-white p-6 transition-colors hover:border-[#3C455F]/40"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F4EF] text-[#2F5241]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#1E2621]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4F5B53]">
                      {area.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
