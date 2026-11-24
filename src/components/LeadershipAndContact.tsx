import { useEffect, useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle, MapPin, Copy, Check, Phone, Mail } from 'lucide-react';
import { ASSOCIATION_FACTS, DISCIPLINES, LEADERSHIP } from '../data/bkaData';
import { ResilientImage } from './ResilientImage';

interface LeadershipAndContactProps {
  prefilledTopic: string;
}

interface InquiryFormState {
  fullName: string;
  contactInfo: string;
  clubOrDistrict: string;
  discipline: string;
  topic: string;
  message: string;
}

export function LeadershipAndContact({
  prefilledTopic,
}: LeadershipAndContactProps) {
  const [form, setForm] = useState<InquiryFormState>({
    fullName: '',
    contactInfo: '',
    clubOrDistrict: '',
    discipline: DISCIPLINES[0].name,
    topic: prefilledTopic || 'Athlete Registration & Club Affiliation',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [needsActivation, setNeedsActivation] = useState<boolean>(false);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `[BKA Inquiry] ${form.topic} — ${form.fullName.trim() || 'Athlete'}`
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${form.fullName.trim()}`,
        `Contact: ${form.contactInfo.trim()}`,
        `Club / District: ${form.clubOrDistrict.trim() || 'Individual Athlete'}`,
        `Primary Discipline: ${form.discipline}`,
        `Inquiry Category: ${form.topic}`,
        '',
        'Details:',
        form.message.trim(),
      ].join('\n')
    );
    return `mailto:${ASSOCIATION_FACTS.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ASSOCIATION_FACTS.headquarters);
      setAddressCopied(true);
      window.setTimeout(() => setAddressCopied(false), 2000);
    } catch {
      setAddressCopied(false);
    }
  };

  useEffect(() => {
    if (prefilledTopic) {
      setForm((prev) => ({ ...prev, topic: prefilledTopic }));
      setSubmitted(false);
    }
  }, [prefilledTopic]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setNeedsActivation(false);

    if (form.fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    const contact = form.contactInfo.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[+\d\s()-]{7,}$/.test(contact);
    if (!isEmail && !isPhone) {
      setError('Please enter a valid email address or phone number.');
      return;
    }

    if (form.message.trim().length < 10) {
      setError('Please include a brief note (at least 10 characters) describing your inquiry.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: Record<string, string> = {
        name: form.fullName.trim(),
        contact,
        club_or_district: form.clubOrDistrict.trim() || 'Individual Athlete',
        discipline: form.discipline,
        topic: form.topic,
        message: form.message.trim(),
        _subject: `[BKA Inquiry] ${form.topic} — ${form.fullName.trim()}`,
        _template: 'table',
        _captcha: 'false',
      };
      if (isEmail) {
        payload._replyto = contact;
      }

      const response = await fetch(
        `https://formsubmit.co/ajax/${ASSOCIATION_FACTS.contactEmail}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = (await response.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };

      const msgText = String(result.message || '').toLowerCase();
      if (msgText.includes('activat')) {
        setNeedsActivation(true);
        setSubmitted(true);
        return;
      }

      if (!response.ok || (result.success !== 'true' && result.success !== true)) {
        setError(
          'Automatic delivery could not connect right now. Please use the Send via Email App button below.'
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        'Network delivery could not connect right now. Please use the Send via Email App button below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Executive Leadership */}
      <section
        id="leadership"
        className="bg-white py-20 lg:py-28 border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pb-10 border-b border-neutral-200">
            <p className="text-xs font-medium tracking-wider text-[#046A38] mb-3">
              06. Federation Governance
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-[1.05]"
              style={{ textWrap: 'balance' }}
            >
              Executive Leadership
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              Directed by national sports leadership and the pioneer who established kickboxing in Bangladesh in 1993.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader) => (
              <article
                key={leader.name}
                className="bg-[#FAFAFA] border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-32 sm:w-36 aspect-[3/4] shrink-0 overflow-hidden border border-neutral-200 bg-neutral-100">
                  <ResilientImage
                    src={leader.photo}
                    alt={leader.photoAlt}
                    fallbackLabel={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#C8102E]">
                    {leader.role}
                  </p>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111317]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-500">
                    {leader.tenureNote}
                  </p>
                  <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Registration, Club Affiliation & Trials Inquiry */}
      <section id="contact" className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-wider text-[#046A38] mb-3">
                07. Official Federation Desk
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-[1.05]"
                style={{ textWrap: 'balance' }}
              >
                Athlete Trials &amp; Club Affiliation Inquiry
              </h2>
              <p className="mt-5 text-base text-neutral-700 leading-relaxed max-w-prose">
                Athletes, coaches, and district martial arts clubs may submit an official inquiry for upcoming national championships, club recognition, or international selection camps including the Cambodia Asian Kickboxing Championship 2026 and the 3rd Thailand Kickboxing World Cup 2027.
              </p>

              <dl className="mt-8 pt-6 border-t border-neutral-200 space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-medium text-neutral-500">
                    Association Headquarters
                  </dt>
                  <dd className="mt-1.5 flex items-start gap-2.5">
                    <MapPin
                      className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-2">
                      <span className="block font-semibold text-[#111317] leading-snug">
                        {ASSOCIATION_FACTS.headquarters}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                      >
                        {addressCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#046A38]" aria-hidden="true" />
                            <span className="text-[#046A38]">Address Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-neutral-500">
                    Official Contact Number
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2.5">
                    <Phone
                      className="w-4 h-4 text-[#C8102E] shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:+${ASSOCIATION_FACTS.contactPhone}`}
                      className="font-mono font-semibold text-[#111317] hover:text-[#C8102E] transition-colors tabular-nums"
                    >
                      {ASSOCIATION_FACTS.contactPhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-neutral-500">
                    Official Inquiry Email
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2.5">
                    <Mail
                      className="w-4 h-4 text-[#C8102E] shrink-0"
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${ASSOCIATION_FACTS.contactEmail}`}
                      className="font-mono font-semibold text-[#111317] hover:text-[#C8102E] transition-colors break-all"
                    >
                      {ASSOCIATION_FACTS.contactEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-neutral-500">
                    National Recognition
                  </dt>
                  <dd className="mt-0.5 font-semibold text-[#111317]">
                    National Sports Council (NSC) — Recognised since 2010
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-neutral-500">
                    Sanctioned Events
                  </dt>
                  <dd className="mt-0.5 text-neutral-700">
                    Point Fight · Light Contact · Kick Light · Full Contact · Low Kick · K1 · Musical Form
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="py-8 space-y-4">
                  <div className="flex items-center gap-3 text-[#046A38]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-bold text-[#111317]">
                      {needsActivation
                        ? 'Activation Email Sent'
                        : 'Inquiry Sent to Secretariat'}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed max-w-lg">
                    {needsActivation ? (
                      <>
                        A one-time form activation link was sent to{' '}
                        <strong className="font-semibold text-[#111317]">
                          {ASSOCIATION_FACTS.contactEmail}
                        </strong>
                        . Click Activate Form in that email so future inquiries arrive automatically. You can also send this inquiry right away using your email app below.
                      </>
                    ) : (
                      <>
                        Thank you,{' '}
                        <strong className="font-semibold text-[#111317]">
                          {form.fullName}
                        </strong>
                        . Your inquiry regarding{' '}
                        <strong className="font-semibold text-[#111317]">
                          {form.topic}
                        </strong>{' '}
                        ({form.discipline}) has been emailed to{' '}
                        <strong className="font-semibold text-[#111317]">
                          {ASSOCIATION_FACTS.contactEmail}
                        </strong>
                        .
                      </>
                    )}
                  </p>
                  <dl className="mt-4 pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-600">
                    <div>
                      <dt className="font-medium text-neutral-500">Contact</dt>
                      <dd className="mt-0.5 font-semibold text-[#111317]">
                        {form.contactInfo}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-neutral-500">Club / District</dt>
                      <dd className="mt-0.5 font-semibold text-[#111317]">
                        {form.clubOrDistrict || 'Individual Athlete'}
                      </dd>
                    </div>
                  </dl>
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setNeedsActivation(false);
                        setForm((prev) => ({ ...prev, message: '' }));
                      }}
                      className="px-4 py-2 text-xs font-semibold bg-[#111317] text-white hover:bg-neutral-800 transition-colors cursor-pointer min-h-[40px]"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={buildMailtoHref()}
                      className="px-4 py-2 text-xs font-semibold border border-neutral-300 bg-white hover:bg-neutral-100 text-[#111317] transition-colors min-h-[40px] inline-flex items-center"
                    >
                      Send Copy via Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {error && (
                    <div
                      role="alert"
                      className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-200 text-sm text-[#A60D26]"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="bka-fullname"
                        className="block text-xs font-semibold text-[#111317] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="bka-fullname"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) =>
                          setForm({ ...form, fullName: e.target.value })
                        }
                        placeholder="Athlete or Coach Name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="bka-contact"
                        className="block text-xs font-semibold text-[#111317] mb-1.5"
                      >
                        Email or Phone Number *
                      </label>
                      <input
                        id="bka-contact"
                        type="text"
                        required
                        value={form.contactInfo}
                        onChange={(e) =>
                          setForm({ ...form, contactInfo: e.target.value })
                        }
                        placeholder="name@example.com or +880..."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317] min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="bka-club"
                        className="block text-xs font-semibold text-[#111317] mb-1.5"
                      >
                        Club / District Association
                      </label>
                      <input
                        id="bka-club"
                        type="text"
                        value={form.clubOrDistrict}
                        onChange={(e) =>
                          setForm({ ...form, clubOrDistrict: e.target.value })
                        }
                        placeholder="e.g., Dhaka District / Independent"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="bka-discipline"
                        className="block text-xs font-semibold text-[#111317] mb-1.5"
                      >
                        Primary Discipline
                      </label>
                      <select
                        id="bka-discipline"
                        value={form.discipline}
                        onChange={(e) =>
                          setForm({ ...form, discipline: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317] min-h-[44px]"
                      >
                        {DISCIPLINES.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="bka-topic"
                      className="block text-xs font-semibold text-[#111317] mb-1.5"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="bka-topic"
                      value={form.topic}
                      onChange={(e) =>
                        setForm({ ...form, topic: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317] min-h-[44px]"
                    >
                      <option value="Athlete Registration & Club Affiliation">
                        Athlete Registration &amp; Club Affiliation
                      </option>
                      <option value="National Kickboxing Tournament Entry">
                        National Kickboxing Tournament Entry
                      </option>
                      <option value="Cambodia Asian Kickboxing Championship 2026">
                        Cambodia Asian Kickboxing Championship 2026 — Trials
                      </option>
                      <option value="3rd Thailand Kickboxing World Cup 2027">
                        3rd Thailand Kickboxing World Cup 2027 — Trials
                      </option>
                      <option value="Coaching & Referee Certification">
                        Coaching &amp; Referee Certification
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="bka-message"
                      className="block text-xs font-semibold text-[#111317] mb-1.5"
                    >
                      Details *
                    </label>
                    <textarea
                      id="bka-message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Share your weight category, training experience, or club affiliation inquiry..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317]"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 text-sm font-semibold bg-[#C8102E] hover:bg-[#A60D26] disabled:opacity-60 text-white transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317]"
                    >
                      {isSubmitting ? 'Sending Inquiry...' : 'Submit Official Inquiry'}
                    </button>

                    <a
                      href={buildMailtoHref()}
                      className="text-xs font-semibold text-neutral-600 hover:text-[#111317] underline underline-offset-4 py-2"
                    >
                      Or send via Email App
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
