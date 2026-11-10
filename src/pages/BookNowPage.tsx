import React from 'react';
import { BookingWorkflow } from '../components/sections/BookingWorkflow';
import { PageId } from '../types';

interface BookNowPageProps {
  onNavigateHome: () => void;
}

export const BookNowPage: React.FC<BookNowPageProps> = ({
  onNavigateHome,
}) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24 min-h-screen">
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3 bg-[#C6F36B]/10 px-3.5 py-1 rounded border border-[#C6F36B]/20">
            <span>PRE-BOOKING WORKFLOW</span>
            <span aria-hidden="true">·</span>
            <span>PHASE 1 SECURE DEPOSIT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            RESERVE YOUR [BRAND HEADLINE]
          </h1>
          <p className="text-[#777777] text-sm max-w-xl mx-auto">
            Experience priority delivery placement. Your Phase 1 reservation is 100% refundable.
          </p>
        </div>

        {/* Multi-Step Interactive Workflow */}
        <BookingWorkflow
          onNavigateHome={onNavigateHome}
        />
      </section>
    </main>
  );
};
