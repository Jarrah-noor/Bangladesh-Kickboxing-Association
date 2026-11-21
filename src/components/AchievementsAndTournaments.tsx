import { useState } from 'react';
import { Award, Calendar, ArrowUpRight } from 'lucide-react';
import {
  ASSOCIATION_FACTS,
  TOURNAMENT_RECORDS,
  UPCOMING_EVENTS,
} from '../data/bkaData';

interface AchievementsAndTournamentsProps {
  onSelectEventInquiry: (eventName: string) => void;
}

type RecordFilter = 'All' | 'International' | 'Domestic';

export function AchievementsAndTournaments({
  onSelectEventInquiry,
}: AchievementsAndTournamentsProps) {
  const [filter, setFilter] = useState<RecordFilter>('All');

  const filteredRecords =
    filter === 'All'
      ? TOURNAMENT_RECORDS
      : TOURNAMENT_RECORDS.filter((r) => r.category === filter);

  return (
    <>
      {/* International Achievement Landmark: 2012 Pune Asian Championship */}
      <section
        id="achievements"
        className="bg-[#0C0F12] text-white py-20 lg:py-28 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Claim & Narrative */}
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-wider text-[#EF4444] mb-3">
                03. International Achievement Record
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05]"
                style={{ textWrap: 'balance' }}
              >
                2012 Pune Asian Championship: 6 Medalists from 7 Athletes
              </h2>
              <p className="mt-5 text-base text-neutral-300 leading-relaxed max-w-prose">
                Just two years after receiving National Sports Council (NSC) recognition in 2010, the {ASSOCIATION_FACTS.name} fielded a seven-member national delegation at the 2012 Pune Asian Championship. Six of the seven Bangladeshi competitors stood on the podium, establishing Bangladesh&apos;s international medal pedigree across continental divisions.
              </p>

              {/* Adjacent Quantitative Proof */}
              <dl className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-6">
                <div>
                  <dt className="text-xs text-neutral-400">
                    Championship Year
                  </dt>
                  <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {ASSOCIATION_FACTS.puneYear}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-400">
                    Bangladesh Players
                  </dt>
                  <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {ASSOCIATION_FACTS.puneParticipants}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-neutral-400">
                    Medal Winners
                  </dt>
                  <dd className="mt-1 font-display text-3xl sm:text-4xl font-bold text-[#EF4444] tabular-nums">
                    {ASSOCIATION_FACTS.puneMedalists}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Architectural Delegation & Domestic Summary Card */}
            <div className="lg:col-span-5 bg-[#14181F] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#EF4444]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    Championship Ledger
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-400 tabular-nums">
                  Verified Record
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div className="pb-5 border-b border-white/10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-white">
                      National Kickboxing Tournaments
                    </span>
                    <span className="font-display text-3xl font-bold text-white tabular-nums">
                      {ASSOCIATION_FACTS.nationalTournamentsHosted}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                    Fourteen national tournaments organized across Bangladesh to scout and rank senior and junior talent.
                  </p>
                </div>

                <div className="pb-5 border-b border-white/10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-white">
                      Best Of Best National Kickboxing Tournament
                    </span>
                    <span className="font-display text-3xl font-bold text-white tabular-nums">
                      {ASSOCIATION_FACTS.bestOfBestHosted}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                    Premier invitational tournament matching top national titleholders in head-to-head championship bouts.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-white">
                      2012 Pune Asian Podium Ratio
                    </span>
                    <span className="font-display text-3xl font-bold text-[#22C55E] tabular-nums">
                      85.7%
                    </span>
                  </div>
                  <div
                    className="mt-2.5 h-2 w-full bg-white/10 overflow-hidden"
                    aria-label="6 out of 7 athletes won medals"
                  >
                    <div
                      className="h-full bg-[#C8102E]"
                      style={{ width: '85.7%' }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-neutral-400 tabular-nums">
                    6 medalists out of 7 participating Bangladesh athletes in Pune, India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Records & Upcoming 2026–2027 International Calendar */}
      <section
        id="calendar"
        className="bg-[#FAFAFA] py-20 lg:py-28 border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upcoming International Events Spotlight */}
          <div>
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wider text-[#046A38] mb-3">
                04. Upcoming International Schedule
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-[1.05]"
                style={{ textWrap: 'balance' }}
              >
                2026–2027 International Championship Calendar
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {UPCOMING_EVENTS.map((event) => (
                <article
                  key={event.id}
                  className="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                      <div className="flex items-center gap-2 text-xs font-medium text-neutral-600">
                        <Calendar
                          className="w-4 h-4 text-[#C8102E]"
                          aria-hidden="true"
                        />
                        <span>{event.scope}</span>
                        <span aria-hidden="true">·</span>
                        <span>Host: {event.hostNation}</span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#C8102E] tabular-nums">
                        {event.year}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111317]">
                      {event.title}
                    </h3>

                    <dl className="mt-5 space-y-3 text-sm">
                      <div>
                        <dt className="text-xs font-medium text-neutral-500">
                          Competition Scope
                        </dt>
                        <dd className="mt-0.5 text-neutral-800">
                          {event.disciplinesIncluded}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-neutral-500">
                          Delegation Status
                        </dt>
                        <dd className="mt-0.5 text-neutral-800">
                          {event.preparationStatus}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-200">
                    <button
                      type="button"
                      onClick={() => onSelectEventInquiry(event.title)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111317] hover:text-[#C8102E] transition-colors cursor-pointer py-1 focus-visible:outline-2 focus-visible:outline-[#111317]"
                    >
                      <span>Inquire About National Trials</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Filterable Tournament Archive */}
          <div className="mt-20 pt-16 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111317]">
                  Hosted &amp; Recorded Tournament Archive
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Summary of domestic championships hosted and milestone international campaigns.
                </p>
              </div>

              <div
                role="group"
                aria-label="Filter tournament records"
                className="flex items-center gap-1 p-1 bg-neutral-200/70 border border-neutral-200 self-start sm:self-auto"
              >
                {(['All', 'International', 'Domestic'] as RecordFilter[]).map(
                  (tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setFilter(tab)}
                      className={`px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] focus-visible:outline-2 focus-visible:outline-[#111317] ${
                        filter === tab
                          ? 'bg-white text-[#111317] shadow-xs'
                          : 'text-neutral-600 hover:text-[#111317]'
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 divide-y divide-neutral-200">
              {filteredRecords.map((record) => (
                <div
                  key={record.id}
                  className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline"
                >
                  <div className="lg:col-span-2 flex items-center gap-2 text-xs font-mono text-neutral-500 tabular-nums">
                    <span>{record.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{record.category}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h4 className="text-base font-semibold text-[#111317]">
                      {record.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {record.location}
                    </p>
                  </div>
                  <div className="lg:col-span-3 text-sm font-semibold text-[#046A38] tabular-nums">
                    {record.outcome}
                  </div>
                  <p className="lg:col-span-3 text-sm text-neutral-600 leading-relaxed">
                    {record.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
