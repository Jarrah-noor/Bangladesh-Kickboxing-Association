import { useState, useMemo } from 'react';
import { FileText, Eye, Download, Search, X, ExternalLink } from 'lucide-react';
import { RULE_DOCUMENTS, RuleDocument } from '../data/bkaData';

type DocCategory =
  | 'All'
  | '2026 Rule Updates'
  | 'Core Rulebooks'
  | 'Medical & Anti-Doping';

const CATEGORIES: DocCategory[] = [
  'All',
  '2026 Rule Updates',
  'Core Rulebooks',
  'Medical & Anti-Doping',
];

export function RulesLibrarySection() {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewDoc, setPreviewDoc] = useState<RuleDocument | null>(null);

  const filteredDocs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return RULE_DOCUMENTS.filter((doc) => {
      const matchesCat =
        selectedCategory === 'All' || doc.category === selectedCategory;
      const matchesQuery =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.summary.toLowerCase().includes(q) ||
        doc.code.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="rules"
      className="bg-white py-20 lg:py-28 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-neutral-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-[#046A38] mb-3">
              05. Official Regulations &amp; Rulebooks
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-[1.05]"
              style={{ textWrap: 'balance' }}
            >
              WAKO Technical Rules, 2026 Amendments &amp; Medical Standards
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              Official competition rulebooks, 2026–2027 WAKO Board amendments, Parakickboxing classifications, Referee manuals, and Anti-Doping regulations governing BKA sanctioned events.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search
                className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rules or topics..."
                aria-label="Search official rulebooks"
                className="w-full sm:w-60 pl-9 pr-3 py-2 text-sm bg-[#FAFAFA] border border-neutral-300 text-[#111317] focus:outline-none focus:border-[#111317] min-h-[40px]"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter official rule documents"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 border border-neutral-200"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] focus-visible:outline-2 focus-visible:outline-[#111317] ${
                    isSelected
                      ? 'bg-[#111317] text-white'
                      : 'text-neutral-700 hover:text-[#111317] hover:bg-neutral-200/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="text-xs font-mono text-neutral-500 tabular-nums">
            Showing {filteredDocs.length} of {RULE_DOCUMENTS.length} Official PDFs
          </p>
        </div>

        {/* 2026 Key Rule Highlights Strip */}
        <div className="mt-8 bg-[#FAFAFA] border border-neutral-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-neutral-200">
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#111317]">
              Key 2026–2027 WAKO Board Decisions (March 20, 2026)
            </h3>
            <span className="text-xs font-mono text-[#C8102E] font-semibold">
              Mandatory for National &amp; International Squads
            </span>
          </div>
          <dl className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="font-semibold text-[#111317]">
                K1 Style Clinch &amp; Knees
              </dt>
              <dd className="mt-1 text-neutral-600 leading-relaxed">
                Clinching, holding, and grabbing are prohibited and knee strikes have no limit (effective Jan 1, 2027).
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#111317]">
                Nationality &amp; Seeding
              </dt>
              <dd className="mt-1 text-neutral-600 leading-relaxed">
                National team athletes must hold citizenship by passport; 2 ranking points awarded per International Open Cup win.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#111317]">
                IOC-Aligned Gender &amp; Age Rules
              </dt>
              <dd className="mt-1 text-neutral-600 leading-relaxed">
                Female categories protected by biological sex rules; veterans in senior tatami categories capped at 45 years old.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#111317]">
                Medical &amp; Sanction Compliance
              </dt>
              <dd className="mt-1 text-neutral-600 leading-relaxed">
                Separate pregnancy &amp; dental brace forms abolished (merged into Medical Certificate); participation in unsanctioned events prohibited.
              </dd>
            </div>
          </dl>
        </div>

        {/* Documents Archive List */}
        {filteredDocs.length === 0 ? (
          <div className="mt-8 border border-neutral-200 bg-[#FAFAFA] p-10 text-center">
            <p className="text-sm font-medium text-neutral-700">
              No rulebooks match &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-[#111317] text-white cursor-pointer min-h-[40px]"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="mt-8 border border-neutral-200 divide-y divide-neutral-200">
            {filteredDocs.map((doc) => (
              <article
                key={doc.id}
                className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-neutral-50/70 transition-colors"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                    <span className="font-semibold text-[#046A38]">
                      {doc.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{doc.code}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.effectiveLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{doc.pages}</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111317] flex items-start gap-2.5">
                    <FileText
                      className="w-5 h-5 text-[#C8102E] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{doc.title}</span>
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {doc.summary}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setPreviewDoc(doc)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#111317] hover:bg-neutral-800 text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317]"
                  >
                    <Eye className="w-4 h-4" aria-hidden="true" />
                    <span>Read PDF</span>
                  </button>

                  <a
                    href={doc.pdfPath}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-neutral-300 bg-white hover:bg-neutral-100 text-[#111317] transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317]"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>Download</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* In-App PDF Reader Modal (Respects iFrame Constraint - No window.open) */}
      {previewDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-white w-full max-w-5xl h-[86vh] flex flex-col border border-neutral-300 shadow-2xl">
            <div className="px-4 sm:px-6 py-4 border-b border-neutral-200 flex items-center justify-between gap-4 bg-[#0C0F12] text-white">
              <div className="min-w-0">
                <p className="text-xs font-mono text-neutral-400 truncate">
                  {previewDoc.code} · {previewDoc.effectiveLabel}
                </p>
                <h3
                  id="pdf-modal-title"
                  className="font-display text-lg sm:text-xl font-bold truncate"
                >
                  {previewDoc.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewDoc.pdfPath}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-[#C8102E] hover:bg-[#A60D26] text-white whitespace-nowrap shrink-0 min-h-[40px]"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download</span>
                </a>
                <a
                  href={previewDoc.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-white/20 text-neutral-200 hover:text-white whitespace-nowrap shrink-0 min-h-[40px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  aria-label="Close document reader"
                  className="inline-flex items-center justify-center w-10 h-10 border border-white/20 text-neutral-200 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-neutral-100 relative">
              <iframe
                src={previewDoc.pdfPath}
                title={previewDoc.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
