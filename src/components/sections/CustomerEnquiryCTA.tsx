import React from 'react';
import { ChevronRight, Calendar, PhoneCall, ShieldCheck } from 'lucide-react';

interface CustomerEnquiryCTAProps {
  onOpenTestDrive: () => void;
  onBookNow: () => void;
}

export const CustomerEnquiryCTA: React.FC<CustomerEnquiryCTAProps> = ({
  onOpenTestDrive,
  onBookNow,
}) => {
  return (
    <section className="py-20 bg-[#161616] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-[#101010] via-[#1A1A1A] to-[#101010] p-10 sm:p-16 rounded-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">
              EXPERIENCE THE FUTURE IN PERSON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              READY TO DISCOVER [BRAND HEADLINE]?
            </h2>
            <p className="text-[#F7F7F5]/80 text-sm sm:text-base font-light leading-relaxed">
              [VEHICLE DESCRIPTION] · Schedule an exclusive private demonstration at your nearest NERO Experience Center or initiate your Phase 1 pre-reservation online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenTestDrive}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C6F36B]" />
              <span>Schedule Test Drive</span>
            </button>

            <button
              onClick={onBookNow}
              className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all shadow-xl shadow-[#C6F36B]/20 flex items-center justify-center gap-2"
            >
              <span>Pre-Book NERO EV</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
