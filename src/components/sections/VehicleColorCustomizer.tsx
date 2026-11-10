import React, { useState } from 'react';
import { Palette, Sparkles, Check } from 'lucide-react';
import { VEHICLE_COLORS } from '../../data/placeholderData';

interface VehicleColorCustomizerProps {
  onSelectColor?: (colorName: string) => void;
}

export const VehicleColorCustomizer: React.FC<VehicleColorCustomizerProps> = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(VEHICLE_COLORS[0]);

  const handleSelect = (colorObj: typeof VEHICLE_COLORS[0]) => {
    setSelectedColor(colorObj);
    if (onSelectColor) {
      onSelectColor(colorObj.name);
    }
  };

  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Preview */}
            <div className="lg:col-span-7 relative group rounded-xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
              <img
                src={selectedColor.image}
                alt={`NERO EV in ${selectedColor.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700"
              />
              {/* Color accent tint overlay simulation */}
              <div
                className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
                <span className="text-[#C6F36B] font-bold">[VEHICLE IMAGE PLACEHOLDER]</span>
                <span className="uppercase tracking-wider">{selectedColor.name}</span>
              </div>
            </div>

            {/* Customizer Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C6F36B] uppercase mb-2">
                  <Palette className="w-4 h-4" />
                  <span>EXTERIOR FINISH SELECTOR</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  [PREFERRED COLOUR SELECTION]
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed mb-6">
                  [VEHICLE DESCRIPTION] · Multi-layer metallic paint formula engineered with ceramic anti-scratch clearcoat protection.
                </p>
              </div>

              {/* Color Swatch Options */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Selected Finish: <span className="text-[#C6F36B] font-mono">{selectedColor.name}</span>
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {VEHICLE_COLORS.map((c) => {
                    const isSelected = selectedColor.id === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => handleSelect(c)}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                          isSelected
                            ? 'border-[#C6F36B] bg-[#C6F36B]/10'
                            : 'border-white/10 hover:border-white/30 bg-[#101010]'
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-full border border-white/20 shrink-0 flex items-center justify-center shadow-inner"
                          style={{ backgroundColor: c.hex }}
                        >
                          {isSelected && (
                            <Check className={`w-3.5 h-3.5 ${c.hex === '#EAEAEA' || c.hex === '#C6F36B' ? 'text-black' : 'text-white'}`} />
                          )}
                        </div>
                        <span className="text-xs font-semibold text-white truncate">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#777777]">
                <span>Phase 1 Color Palette</span>
                <span className="text-[#C6F36B] font-mono">[SPECIFICATION VALUE]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
