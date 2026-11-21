import { ArrowDownRight } from 'lucide-react';
import { ASSOCIATION_FACTS } from '../data/bkaData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onExploreDisciplines: () => void;
}

export function HeroSection({ onExploreDisciplines }: HeroSectionProps) {
  return (
    <section id="top" className="bg-[#0C0F12] text-white">
      {/* Main Hero Frame */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0A1F16] via-[#0C0F12] to-[#1A0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Editorial Content */}
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-medium tracking-wider text-neutral-300 mb-4">
                <span>Founded {ASSOCIATION_FACTS.foundedYear}</span>
                <span aria-hidden="true" className="mx-2 text-[#C8102E]">
                  ·
                </span>
                <span>
                  Recognised by {ASSOCIATION_FACTS.nscBody} in{' '}
                  {ASSOCIATION_FACTS.nscRecognitionYear}
                </span>
              </p>

              <h1
                className="font-display font-extrabold tracking-tight text-white leading-[0.98]"
                style={{
                  fontSize: 'clamp(2.5rem, 4.8vw, 4.3rem)',
                  textWrap: 'balance',
                }}
              >
                National Committee for Kickboxing in Bangladesh
              </h1>

              <p className="mt-6 text-base sm:text-lg text-neutral-200 leading-relaxed max-w-xl">
                Founded by Shihan Mostafizur Rahman Mostafiz in 1993, the{' '}
                {ASSOCIATION_FACTS.name} oversees national championship
                competition, athlete development across seven official
                disciplines, and international team representation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={onExploreDisciplines}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#C8102E] hover:bg-[#A60D26] text-white transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Explore Official Disciplines</span>
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="#calendar"
                  className="text-sm font-medium text-neutral-200 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors whitespace-nowrap shrink-0 py-2"
                >
                  2026–2027 International Calendar
                </a>
              </div>
            </div>

            {/* Right Framed Historic Association Photo */}
            <div className="lg:col-span-5">
              <figure className="bg-[#14181F] border border-white/15 p-2.5 sm:p-3">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
                  <ResilientImage
                    src={ASSOCIATION_FACTS.heritagePhoto}
                    alt={ASSOCIATION_FACTS.heritagePhotoAlt}
                    priority
                    fallbackLabel={ASSOCIATION_FACTS.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-1 flex items-center justify-between gap-3 text-xs text-neutral-300">
                  <span>
                    Shihan Mostafizur Rahman Mostafiz · International Recognition &amp; Heritage
                  </span>
                  <span className="font-mono text-[#22C55E] shrink-0">
                    Est. 1993
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Proof Strip directly beneath Hero */}
      <div className="border-t border-white/10 bg-[#11151A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="py-6 lg:pr-6">
              <dt className="text-xs font-medium text-neutral-400">
                Association Founded
              </dt>
              <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                1993
              </dd>
              <dd className="mt-1 text-xs text-neutral-300">
                By Shihan Mostafizur Rahman Mostafiz
              </dd>
            </div>

            <div className="py-6 pl-4 lg:px-6">
              <dt className="text-xs font-medium text-neutral-400">
                NSC Recognition
              </dt>
              <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                2010
              </dd>
              <dd className="mt-1 text-xs text-neutral-300">
                National Sports Council, Bangladesh
              </dd>
            </div>

            <div className="py-6 lg:px-6">
              <dt className="text-xs font-medium text-neutral-400">
                Domestic Championships Hosted
              </dt>
              <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                14 + 1
              </dd>
              <dd className="mt-1 text-xs text-neutral-300">
                14 Nationals &amp; 1 Best Of Best National Kickboxing Tournament
              </dd>
            </div>

            <div className="py-6 pl-4 lg:pl-6">
              <dt className="text-xs font-medium text-neutral-400">
                2012 Pune Asian Championship
              </dt>
              <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-[#EF4444] tabular-nums">
                6 / 7
              </dd>
              <dd className="mt-1 text-xs text-neutral-300">
                6 Medalists out of 7 Bangladesh Players
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
