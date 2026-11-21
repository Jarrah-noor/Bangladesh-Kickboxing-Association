import { HERITAGE_MILESTONES } from '../data/bkaData';

export function HeritageSection() {
  return (
    <section id="heritage" className="bg-[#FAFAFA] py-20 lg:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Prose Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wider text-[#046A38] mb-3">
              01. Federation Heritage &amp; Mandate
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-[1.05]"
              style={{ textWrap: 'balance' }}
            >
              Three Decades of Martial Discipline &amp; National Recognition
            </h2>

            <div className="mt-6 space-y-4 text-base text-neutral-700 leading-relaxed max-w-prose">
              <p>
                Kickboxing in Bangladesh took institutional form in <strong className="font-semibold text-[#111317]">1993</strong> when <strong className="font-semibold text-[#111317]">Shihan Mostafizur Rahman Mostafiz</strong> founded the Official Bangladesh Kickboxing Association to establish unified rules, coaching standards, and competitive pathways for martial artists nationwide.
              </p>
              <p>
                Following seventeen years of grassroots development and domestic competition, the association achieved formal recognition from the <strong className="font-semibold text-[#111317]">National Sports Council (NSC) in 2010</strong>, integrating kickboxing into Bangladesh&apos;s official national sporting framework.
              </p>
              <p>
                Today, under President <strong className="font-semibold text-[#111317]">Ishtiaque Abedin</strong> and Founder, General Secretary &amp; WAKO-recognized Chief Coach <strong className="font-semibold text-[#111317]">Shihan Mostafizur Rahman Mostafiz</strong>, the federation governs seven official competition disciplines and prepares national squads for upcoming Asian and World Cup campaigns.
              </p>
            </div>
          </div>

          {/* Chronological Ledger Column */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10">
            <div className="flex items-baseline justify-between pb-4 border-b border-neutral-200">
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#111317]">
                Institutional Chronology
              </h3>
              <span className="font-mono text-xs text-neutral-500 tabular-nums">
                1993 — 2027
              </span>
            </div>

            <ol className="divide-y divide-neutral-200">
              {HERITAGE_MILESTONES.map((milestone) => (
                <li
                  key={milestone.year}
                  className="py-6 first:pt-6 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-3">
                    <span className="font-mono text-sm font-semibold text-[#C8102E] tabular-nums">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="sm:col-span-9">
                    <h4 className="text-base font-semibold text-[#111317]">
                      {milestone.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                      {milestone.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
