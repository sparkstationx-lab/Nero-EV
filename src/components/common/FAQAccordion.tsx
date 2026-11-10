import React, { useState } from 'react';
import { ChevronDown, AlertTriangle } from 'lucide-react';
import { OFFICIAL_FAQS } from '../../data/officialData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
            <span>OFFICIAL PRODUCT FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            NERO EV FAQS
          </h2>
          <p className="text-[#777777] text-xs mt-2">
            Verified answers documented from official manufacturer releases.
          </p>
        </div>

        <div className="space-y-4">
          {OFFICIAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isDiscrepancyFaq = faq.question.toLowerCase().includes('battery capacity');
            return (
              <div
                key={idx}
                className={`bg-[#161616] rounded-xl border transition-colors overflow-hidden ${
                  isDiscrepancyFaq ? 'border-amber-500/40 bg-[#1A170F]' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white hover:text-[#C6F36B] transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg flex items-center gap-2">
                    {isDiscrepancyFaq && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />}
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C6F36B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#777777] leading-relaxed border-t border-white/5 pt-4 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
