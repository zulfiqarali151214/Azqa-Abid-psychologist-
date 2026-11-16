import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HOW_IT_WORKS, SERVICES } from '../config/profile';
import { BookAppointmentButton } from './BookAppointmentButton';

export function ServicesAndProcess() {
  return (
    <>
      {/* Services Grid */}
      <section
        id="services"
        className="border-b border-[#E2E6DE] bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2F5241]">Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1E2621] sm:text-4xl">
                How we can work together
              </h2>
              <p className="mt-3 text-base text-[#4F5B53]">
                Flexible online consultations designed to feel calm, structured, and
                accessible from home.
              </p>
            </div>
            <BookAppointmentButton label="Book Appointment" size="md" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.number}
                className="flex flex-col justify-between rounded-2xl border border-[#E2E6DE] bg-[#FAF8F4] p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#E2E6DE] pb-4">
                    <span className="text-xs font-medium text-[#4F5B53]">
                      {service.meta}
                    </span>
                    <span className="text-lg font-bold text-[#9C6B53] tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#1E2621]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4F5B53] sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={service.ctaHref}
                    target={service.external ? '_blank' : undefined}
                    rel={service.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#3A4664] transition-colors hover:text-[#242B3D]"
                  >
                    <span>{service.ctaLabel}</span>
                    {service.external ? (
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (4-step flow) */}
      <section
        id="how-it-works"
        className="border-b border-[#E2E6DE] bg-[#F1F4EF] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2F5241]">How It Works</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1E2621] sm:text-4xl">
                Starting therapy in four simple steps
              </h2>
            </div>
            <BookAppointmentButton label="Book Appointment" size="md" />
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-[#E2E6DE] bg-white p-6"
              >
                <span className="text-2xl font-bold text-[#9C6B53] tabular-nums">
                  {item.step}.
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[#1E2621]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4F5B53]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
