import React, { useState } from 'react';
import { SPECIFICATIONS, BATTERY_INCONSISTENCY_NOTE } from '../../data/officialData';
import { AlertTriangle, ShieldCheck, Check } from 'lucide-react';

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
              <span>VERIFIED DOCUMENTED SPECS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              NERO EV EXECUTIVE SPECIFICATIONS
            </h2>
          </div>
          <p className="text-[#777777] text-sm max-w-md leading-relaxed">
            Product specification matrix compiled directly from official published data.
          </p>
        </div>

        {/* Battery Inconsistency Callout Warning Box */}
        <div className="bg-[#1C170B] border border-amber-500/40 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-start gap-5 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-amber-300">{BATTERY_INCONSISTENCY_NOTE.title}</h3>
              <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                Data Flag
              </span>
            </div>
            <p className="text-xs text-amber-200/80 leading-relaxed max-w-3xl">
              {BATTERY_INCONSISTENCY_NOTE.detail}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-white">
              {BATTERY_INCONSISTENCY_NOTE.specs.map((s, idx) => (
                <div key={idx} className="bg-black/40 px-3 py-1.5 rounded border border-amber-500/30 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">{s.label}:</span>
                  <span className="text-white font-bold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
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
        <div className="bg-[#161616] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-[#1B1B1B] border-b border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-wide">{activeCategory}</h3>
            <span className="text-xs text-[#C6F36B] font-mono">NERO EV EXECUTIVE</span>
          </div>

          <div className="divide-y divide-white/5">
            {SPECIFICATIONS.find((cat) => cat.category === activeCategory)?.items.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 sm:px-8 hover:bg-white/[0.02] transition-colors items-center"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white/90">{item.label}</span>
                  {item.isDiscrepancy && (
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      Discrepancy Note
                    </span>
                  )}
                </div>
                <div className="sm:text-right">
                  <div
                    className={`text-sm font-mono font-medium ${
                      item.isDiscrepancy ? 'text-amber-300 font-bold' : 'text-[#C6F36B]'
                    }`}
                  >
                    {item.value}
                  </div>
                  {item.note && <div className="text-[10px] text-amber-400 font-mono mt-0.5">{item.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
