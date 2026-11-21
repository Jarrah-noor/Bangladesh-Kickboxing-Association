import { useState } from 'react';
import { DISCIPLINES } from '../data/bkaData';

export function DisciplinesSection() {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);
  const activeDiscipline =
    DISCIPLINES.find((d) => d.id === activeId) ?? DISCIPLINES[0];

  return (
    <section
      id="disciplines"
      className="bg-white py-20 lg:py-28 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Segmented Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-neutral-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-[#046A38] mb-3">
              02. Official Competition Events
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-[1.05]"
              style={{ textWrap: 'balance' }}
            >
              Seven Sanctioned Kickboxing Disciplines
            </h2>
          </div>

          {/* Interactive Discipline Selector */}
          <div
            role="tablist"
            aria-label="Kickboxing disciplines"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 border border-neutral-200 self-start lg:self-auto"
          >
            {DISCIPLINES.map((discipline) => {
              const isSelected = discipline.id === activeDiscipline.id;
              return (
                <button
                  key={discipline.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(discipline.id)}
                  className={`px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#111317] ${
                    isSelected
                      ? 'bg-[#111317] text-white'
                      : 'text-neutral-700 hover:text-[#111317] hover:bg-neutral-200/60'
                  }`}
                >
                  {discipline.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Discipline Specification Card (No Fighting Picture) */}
        <div className="mt-10 bg-[#FAFAFA] border border-neutral-200 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
              <span className="font-mono text-[#C8102E] font-semibold">
                {activeDiscipline.index}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeDiscipline.arenaType}</span>
              <span aria-hidden="true">·</span>
              <span>{activeDiscipline.contactLevel}</span>
            </div>

            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111317]">
              {activeDiscipline.name}
            </h3>

            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              {activeDiscipline.summary}
            </p>

            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              <span className="font-semibold text-[#111317]">
                Technical Focus:{' '}
              </span>
              {activeDiscipline.technicalFocus}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-neutral-200 p-6">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-medium text-neutral-500">
                  Competition Surface
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#111317]">
                  {activeDiscipline.arenaType}
                </dd>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <dt className="text-xs font-medium text-neutral-500">
                  Contact Format
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#111317]">
                  {activeDiscipline.contactLevel}
                </dd>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <dt className="text-xs font-medium text-neutral-500">
                  Target &amp; Scoring Criteria
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#111317]">
                  {activeDiscipline.targetZones}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Complete 7-Discipline Quick Reference Ledger (Without Standard Format) */}
        <div className="mt-12 overflow-x-auto border border-neutral-200">
          <table className="w-full text-left border-collapse min-w-[580px]">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-600">
                <th scope="col" className="py-3.5 px-4">
                  No.
                </th>
                <th scope="col" className="py-3.5 px-4">
                  Event Discipline
                </th>
                <th scope="col" className="py-3.5 px-4">
                  Competition Surface
                </th>
                <th scope="col" className="py-3.5 px-4">
                  Contact Format
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-sm">
              {DISCIPLINES.map((discipline) => {
                const isSelected = discipline.id === activeDiscipline.id;
                return (
                  <tr
                    key={discipline.id}
                    onClick={() => setActiveId(discipline.id)}
                    className={`transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#046A38]/[0.06]'
                        : 'hover:bg-neutral-50'
                    }`}
                  >
                    <td className="py-4 px-4 font-mono text-xs font-semibold text-neutral-500 tabular-nums">
                      {discipline.index}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#111317]">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveId(discipline.id);
                        }}
                        className="text-left hover:text-[#C8102E] focus-visible:outline-2 focus-visible:outline-[#111317] cursor-pointer"
                      >
                        {discipline.name}
                      </button>
                    </td>
                    <td className="py-4 px-4 text-neutral-700">
                      {discipline.arenaType}
                    </td>
                    <td className="py-4 px-4 text-neutral-700">
                      {discipline.contactLevel}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
