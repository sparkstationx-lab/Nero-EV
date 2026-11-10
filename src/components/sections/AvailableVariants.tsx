import React from 'react';
import { Check, ChevronRight, Zap, AlertCircle } from 'lucide-react';
import { EXECUTIVE_VARIANT } from '../../data/officialData';

interface AvailableVariantsProps {
  onSelectVariant: (variantId: string) => void;
  onOpenTestDrive: () => void;
}

export const AvailableVariants: React.FC<AvailableVariantsProps> = ({
  onSelectVariant,
  onOpenTestDrive,
}) => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
            <span>DOCUMENTED PRODUCT VARIANT</span>
            <span aria-hidden="true">·</span>
            <span>NERO EV MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            NERO EV EXECUTIVE
          </h2>
          <p className="text-[#777777] text-sm leading-relaxed">
            The officially documented model configuration published on the manufacturer site.
          </p>
        </div>

        {/* Executive Variant Card Centered */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#161616] rounded-2xl border border-[#C6F36B]/60 transition-all p-8 flex flex-col justify-between group relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#101010] bg-[#C6F36B] px-3 py-1 rounded">
                  {EXECUTIVE_VARIANT.badge}
                </span>
                <span className="text-xs text-[#777777] font-mono">OFFICIAL LISTING</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">{EXECUTIVE_VARIANT.name}</h3>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="text-3xl font-extrabold text-[#C6F36B] font-mono mb-1">
                  {EXECUTIVE_VARIANT.priceFormatted}
                </div>
                <div className="text-[11px] text-[#777777] leading-tight">
                  * {EXECUTIVE_VARIANT.priceLabelNote}
                </div>
              </div>

              {/* Key Specs */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#777777]">Claimed Range:</span>
                  <span className="font-mono text-[#C6F36B] font-medium">{EXECUTIVE_VARIANT.range}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#777777]">Charging Duration:</span>
                  <span className="font-mono text-white font-medium">{EXECUTIVE_VARIANT.chargingTime}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#777777]">Top Speed:</span>
                  <span className="font-mono text-white font-medium">{EXECUTIVE_VARIANT.topSpeed}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#777777]">Seating Capacity:</span>
                  <span className="font-mono text-white font-medium">{EXECUTIVE_VARIANT.seatingCapacity} Passengers</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#777777]">Braking Architecture:</span>
                  <span className="font-mono text-white font-medium">{EXECUTIVE_VARIANT.brakingSystem}</span>
                </div>
              </div>

              {/* Documented Features */}
              <div className="space-y-2.5 mb-8">
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                  Documented Executive Features:
                </span>
                {EXECUTIVE_VARIANT.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#F7F7F5]/80">
                    <Check className="w-4 h-4 text-[#C6F36B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                onClick={() => onSelectVariant(EXECUTIVE_VARIANT.id)}
                className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Submit Booking Enquiry</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenTestDrive}
                className="w-full border border-white/20 hover:border-white text-white text-xs font-semibold uppercase tracking-wider py-3 rounded transition-colors text-center"
              >
                Request Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
