import React, { useState } from 'react';
import { SPECIFICATIONS } from '../../data/placeholderData';

export const SpecificationTable: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SPECIFICATIONS[0].category);

  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>TECHNICAL DATA</span>
              <span aria-hidden="true">·</span>
              <span>STRUCTURED PLACEHOLDERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              [TECHNICAL SPECIFICATIONS]
            </h2>
          </div>
          <p className="text-[#777777] text-sm max-w-md leading-relaxed">
            Phase 1 Specification Matrix. Final certified values and regulatory homologation details will be announced in Phase 2.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-white/10">
          {SPECIFICATIONS.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.category
                  ? 'bg-[#C6F36B] text-[#101010] shadow-md'
                  : 'text-[#777777] hover:text-white bg-[#161616]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div className="bg-[#161616] rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#1B1B1B] border-b border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-wide">{activeCategory}</h3>
            <span className="text-xs text-[#C6F36B] font-mono">[TECHNICAL SPECIFICATIONS]</span>
          </div>

          <div className="divide-y divide-white/5">
            {SPECIFICATIONS.find((cat) => cat.category === activeCategory)?.items.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 sm:px-8 hover:bg-white/[0.02] transition-colors items-center"
              >
                <div className="text-sm font-semibold text-white/90">{item.label}</div>
                <div className="text-sm font-mono text-[#C6F36B] sm:text-right font-medium">
                  {item.valuePlaceholder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
