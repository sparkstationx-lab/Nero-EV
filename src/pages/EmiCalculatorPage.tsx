import React from 'react';
import { EmiCalculator } from '../components/sections/EmiCalculator';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { PageId } from '../types';

interface EmiCalculatorPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const EmiCalculatorPage: React.FC<EmiCalculatorPageProps> = ({ onNavigate, onOpenTestDrive }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24 min-h-screen">
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3 bg-[#C6F36B]/10 px-3.5 py-1 rounded border border-[#C6F36B]/20">
            <span>FINANCE & LOAN CALCULATOR</span>
            <span aria-hidden="true">·</span>
            <span>REDUCING BALANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            NERO EV EMI CALCULATOR
          </h1>
          <p className="text-[#777777] text-sm max-w-xl mx-auto">
            Plan your vehicle financing for NERO EV Executive. Adjust your loan amount, interest rate, and tenure to view your exact monthly installment.
          </p>
        </div>
      </section>

      {/* EMI Calculator Tool */}
      <EmiCalculator />

      {/* CTA */}
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
    </main>
  );
};
