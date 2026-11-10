import React from 'react';
import { Check, ChevronRight, Zap } from 'lucide-react';
import { VEHICLE_VARIANTS } from '../../data/placeholderData';

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
            <span>MODEL CONFIGURATIONS</span>
            <span aria-hidden="true">·</span>
            <span>AVAILABLE VARIANTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            [BRAND HEADLINE] VARIANTS
          </h2>
          <p className="text-[#777777] text-sm leading-relaxed">
            Choose the performance profile engineered for your lifestyle. Select a variant below to proceed with reservation.
          </p>
        </div>

        {/* 3 Variant Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VEHICLE_VARIANTS.map((variant) => (
            <div
              key={variant.id}
              className="bg-[#161616] rounded-2xl border border-white/10 hover:border-[#C6F36B] transition-all p-8 flex flex-col justify-between group relative shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#101010] bg-[#C6F36B] px-3 py-1 rounded">
                    {variant.badge}
                  </span>
                  <span className="text-xs text-[#777777] font-mono">PHASE 1 PRE-BOOKING</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{variant.name}</h3>
                <div className="text-xl font-extrabold text-[#C6F36B] font-mono mb-6 pb-6 border-b border-white/10">
                  {variant.pricePlaceholder}
                </div>

                {/* Key Spec Grid */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-[#777777]">Acceleration:</span>
                    <span className="font-mono text-white font-medium">{variant.acceleration}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-[#777777]">Top Speed:</span>
                    <span className="font-mono text-white font-medium">{variant.topSpeed}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-[#777777]">Range Rating:</span>
                    <span className="font-mono text-[#C6F36B] font-medium">{variant.range}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-[#777777]">Drivetrain:</span>
                    <span className="font-mono text-white font-medium">{variant.driveTrain}</span>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Standard Features:</span>
                  {variant.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F7F7F5]/80">
                      <Check className="w-4 h-4 text-[#C6F36B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectVariant(variant.id)}
                  className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Select & Reserve</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};
