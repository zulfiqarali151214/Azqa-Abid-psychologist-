import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import {
  FAQ_ITEMS,
  PRACTICE_CONFIG,
  WORKING_HOURS_ROWS,
} from '../config/profile';
import { getKarachiHoursStatus, type KarachiHoursStatus } from '../utils/hours';
import { BookAppointmentButton } from './BookAppointmentButton';

interface FormState {
  name: string;
  phone: string;
  concernType: string;
  preferredTime: string;
  message: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: '',
  phone: '',
  concernType: "Women's Mental Health",
  preferredTime: 'Afternoon (1:00 PM – 5:00 PM PKT)',
  message: '',
};

export function FaqAndContact() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [hoursStatus, setHoursStatus] = useState<KarachiHoursStatus>(() =>
    getKarachiHoursStatus()
  );

  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedState, setSubmittedState] = useState<{
    mode: 'endpoint' | 'whatsapp-fallback';
    whatsappUrl: string;
  } | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHoursStatus(getKarachiHoursStatus());
    }, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const buildWhatsAppInquiryUrl = (data: FormState) => {
    const lines = [
      `Hello Azqa, I would like to inquire about a consultation.`,
      `Name: ${data.name.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `Area of concern: ${data.concernType}`,
      `Preferred time: ${data.preferredTime}`,
      data.message.trim() ? `Message: ${data.message.trim()}` : '',
    ].filter(Boolean);

    return `${PRACTICE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');

    const trimmedName = formState.name.trim();
    const trimmedPhone = formState.phone.trim();

    if (!trimmedName) {
      setFormError('Please enter your name so we know how to address you.');
      return;
    }

    if (!trimmedPhone || trimmedPhone.replace(/\D/g, '').length < 7) {
      setFormError('Please provide a valid phone or WhatsApp number.');
      return;
    }

    const whatsappUrl = buildWhatsAppInquiryUrl(formState);

    if (PRACTICE_CONFIG.formspreeEndpoint) {
      try {
        setIsSubmitting(true);
        const response = await fetch(PRACTICE_CONFIG.formspreeEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            phone: trimmedPhone,
            concernType: formState.concernType,
            preferredTime: formState.preferredTime,
            message: formState.message.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }

        setSubmittedState({ mode: 'endpoint', whatsappUrl });
        setFormState(INITIAL_FORM_STATE);
      } catch {
        setFormError(
          'Unable to send via the web form right now. You can send your inquiry directly via WhatsApp below.'
        );
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Graceful fallback when formspreeEndpoint is not yet configured
    setSubmittedState({ mode: 'whatsapp-fallback', whatsappUrl });
  };

  return (
    <>
      {/* FAQ Accordion Section */}
      <section
        id="faq"
        className="border-b border-[#E2E6DE] bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2F5241]">
                Frequently Asked Questions
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1E2621] sm:text-4xl">
                Helpful details before your first session
              </h2>
            </div>
            <BookAppointmentButton label="Book Appointment" size="md" />
          </div>

          <div className="mt-10 divide-y divide-[#E2E6DE] border-y border-[#E2E6DE]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;
              return (
                <div key={item.id}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenFaqId((prev) => (prev === item.id ? null : item.id))
                      }
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-[#1E2621] transition-colors hover:text-[#3A4664] sm:text-lg"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#4F5B53] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#3A4664]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="pb-5 pr-8 text-sm leading-relaxed text-[#4F5B53] sm:text-base"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section
        id="contact"
        className="border-b border-[#DCE5F2] bg-[#F7FAFF] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Hours & Direct Contact Column */}
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-[#1665F5]">Contact</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1A2338] sm:text-4xl">
                Reach out or book a time
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#475569]">
                Whether you are ready to book an appointment or prefer to ask a
                question on WhatsApp first, you are welcome to get in touch.
              </p>

              {/* Working Hours Table */}
              <div className="mt-8 rounded-2xl border border-[#D3E0F4] bg-[#EEF4FF] p-6 shadow-[0_6px_18px_rgba(22,101,245,0.05)]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3E0F4] pb-4">
                  <h3 className="text-xl font-bold text-[#1A2338]">
                    Working Hours
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
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
                  </span>
                </div>

                <table className="mt-4 w-full text-left text-sm">
                  <caption className="sr-only">
                    Consultation working hours in Asia/Karachi timezone
                  </caption>
                  <tbody className="divide-y divide-[#D3E0F4]">
                    {WORKING_HOURS_ROWS.map((row) => (
                      <tr key={row.day}>
                        <th
                          scope="row"
                          className="py-3 font-medium text-[#1A2338]"
                        >
                          {row.day}
                        </th>
                        <td className="py-3 text-right text-[#475569] tabular-nums">
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-xs text-[#475569] tabular-nums">
                  Current Lahore time (PKT): {hoursStatus.karachiTimeText} ·{' '}
                  {hoursStatus.detailLabel}
                </p>
              </div>

              {/* Direct Contact Actions */}
              <div className="mt-6 flex flex-col gap-3">
                <BookAppointmentButton
                  label="Book Appointment"
                  size="lg"
                  className="w-full"
                />

                <a
                  href={PRACTICE_CONFIG.whatsappPrefilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#2F5241] px-5 py-3 text-sm font-semibold text-[#FAF8F4] transition-colors hover:bg-[#244032]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Me ({PRACTICE_CONFIG.phoneDisplay})</span>
                </a>

                <a
                  href={PRACTICE_CONFIG.phoneHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#E2E6DE] bg-white px-5 py-3 text-sm font-semibold text-[#1E2621] transition-colors hover:border-[#3A4664] hover:bg-[#F1F4EF]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#3A4664]" aria-hidden="true" />
                  <span className="tabular-nums">
                    Call {PRACTICE_CONFIG.phoneDisplay}
                  </span>
                </a>

                {PRACTICE_CONFIG.email ? (
                  <a
                    href={`mailto:${PRACTICE_CONFIG.email}`}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#E2E6DE] bg-white px-5 py-3 text-sm font-semibold text-[#1E2621] transition-colors hover:border-[#3A4664] hover:bg-[#F1F4EF]"
                  >
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#3A4664]"
                      aria-hidden="true"
                    />
                    <span>{PRACTICE_CONFIG.email}</span>
                  </a>
                ) : (
                  /* VERIFY: Add email address in src/config/profile.ts */
                  <div className="flex items-center gap-2 rounded-xl border border-dashed border-[#E2E6DE] bg-white/70 px-4 py-3 text-xs text-[#4F5B53]">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      Email placeholder: add your practice email in{' '}
                      <code className="text-[#1E2621]">src/config/profile.ts</code>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Consultation Inquiry Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#D3E0F4] bg-white p-6 shadow-[0_8px_24px_rgba(22,101,245,0.06)] sm:p-8">
                <h3 className="text-2xl font-bold text-[#1A2338]">
                  Send an inquiry
                </h3>
                <p className="mt-2 text-sm text-[#475569]">
                  Share brief contact details and your preferred timing. Please
                  avoid sharing deeply sensitive medical details in web forms.
                </p>

                {/*
                  SETUP NOTE (Formspree or Netlify Forms):
                  1. Formspree: Paste your endpoint into PRACTICE_CONFIG.formspreeEndpoint in src/config/profile.ts.
                  2. Netlify Forms: Add `data-netlify="true"` and deploy on Netlify; keep the hidden `form-name` input below.
                  Until an endpoint is configured, submitting prepares a prefilled WhatsApp inquiry for immediate delivery.
                */}
                <form
                  name="consultation-inquiry"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-4"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="consultation-inquiry"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#1E2621]"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="e.g. Ayesha Khan"
                        className="mt-1.5 block min-h-[44px] w-full rounded-xl border border-[#E2E6DE] bg-[#FAF8F4] px-3.5 py-2.5 text-sm text-[#1E2621] placeholder:text-[#4F5B53]/60 focus:border-[#3A4664] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#1E2621]"
                      >
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        placeholder="03XX XXXXXXX"
                        className="mt-1.5 block min-h-[44px] w-full rounded-xl border border-[#E2E6DE] bg-[#FAF8F4] px-3.5 py-2.5 text-sm text-[#1E2621] tabular-nums placeholder:text-[#4F5B53]/60 focus:border-[#3A4664] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-concern"
                        className="block text-sm font-medium text-[#1E2621]"
                      >
                        Area of Concern
                      </label>
                      <select
                        id="contact-concern"
                        name="concernType"
                        value={formState.concernType}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            concernType: e.target.value,
                          }))
                        }
                        className="mt-1.5 block min-h-[44px] w-full rounded-xl border border-[#E2E6DE] bg-[#FAF8F4] px-3.5 py-2.5 text-sm text-[#1E2621] focus:border-[#3A4664] focus:bg-white focus:outline-none"
                      >
                        <option value="Women's Mental Health">
                          Women&apos;s Mental Health
                        </option>
                        <option value="Anxiety & Fears">Anxiety &amp; Fears</option>
                        <option value="Relationships">Relationships</option>
                        <option value="Trauma-Related Support">
                          Trauma-Related Support
                        </option>
                        <option value="Family Communication & Trust">
                          Family Communication &amp; Trust
                        </option>
                        <option value="Emotional Wellbeing & Personal Growth">
                          Emotional Wellbeing &amp; Personal Growth
                        </option>
                        <option value="Discovery Call / General Inquiry">
                          Discovery Call / General Inquiry
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-time"
                        className="block text-sm font-medium text-[#1E2621]"
                      >
                        Preferred Time (PKT)
                      </label>
                      <select
                        id="contact-time"
                        name="preferredTime"
                        value={formState.preferredTime}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            preferredTime: e.target.value,
                          }))
                        }
                        className="mt-1.5 block min-h-[44px] w-full rounded-xl border border-[#E2E6DE] bg-[#FAF8F4] px-3.5 py-2.5 text-sm text-[#1E2621] focus:border-[#3A4664] focus:bg-white focus:outline-none"
                      >
                        <option value="Morning (9:00 AM – 1:00 PM PKT)">
                          Morning (9:00 AM – 1:00 PM PKT)
                        </option>
                        <option value="Afternoon (1:00 PM – 5:00 PM PKT)">
                          Afternoon (1:00 PM – 5:00 PM PKT)
                        </option>
                        <option value="Evening (5:00 PM – 9:00 PM PKT)">
                          Evening (5:00 PM – 9:00 PM PKT)
                        </option>
                        <option value="Sunday Evening (Until 10:00 PM PKT)">
                          Sunday Evening (Until 10:00 PM PKT)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#1E2621]"
                    >
                      Brief Note (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="A short note about what you'd like support with..."
                      className="mt-1.5 block w-full rounded-xl border border-[#E2E6DE] bg-[#FAF8F4] px-3.5 py-2.5 text-sm text-[#1E2621] placeholder:text-[#4F5B53]/60 focus:border-[#3A4664] focus:bg-white focus:outline-none"
                    />
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-[#9C6B53]/40 bg-[#9C6B53]/10 px-4 py-3 text-sm text-[#1E2621]"
                    >
                      {formError}
                    </div>
                  )}

                  {submittedState && (
                    <div
                      role="status"
                      className="rounded-xl border border-[#2F5241]/30 bg-[#F1F4EF] p-4 text-sm text-[#1E2621]"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#2F5241]"
                          aria-hidden="true"
                        />
                        <div className="space-y-2">
                          {submittedState.mode === 'endpoint' ? (
                            <p>
                              Thank you. Your inquiry has been received, and we will
                              respond during working hours.
                            </p>
                          ) : (
                            <p>
                              Your inquiry message is ready. Click below to send it
                              directly on WhatsApp for the fastest response.
                            </p>
                          )}
                          <a
                            href={submittedState.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2F5241] px-4 py-2 text-xs font-semibold text-[#FAF8F4] transition-colors hover:bg-[#244032]"
                          >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            <span>Send Inquiry on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] bg-[#3C455F] px-7 py-3 text-sm font-medium text-white shadow-[4px_8px_16px_rgba(30,36,54,0.38)] transition-all hover:-translate-y-0.5 hover:bg-[#30384E] hover:shadow-[6px_12px_20px_rgba(30,36,54,0.48)] disabled:opacity-60"
                    >
                      <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        {isSubmitting ? 'Sending...' : 'Request Consultation'}
                      </span>
                    </button>

                    <a
                      href={buildWhatsAppInquiryUrl(formState)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 text-sm font-medium text-[#3A4664] underline decoration-[#3A4664]/30 underline-offset-4 hover:text-[#242B3D]"
                    >
                      <span>Or send directly via WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
