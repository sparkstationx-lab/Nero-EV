import React from 'react';
import { Award, Globe, Shield, Sparkles } from 'lucide-react';
import { SHOWROOM_IMAGE } from '../../data/placeholderData';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>06. BRAND PHILOSOPHY</span>
              <span aria-hidden="true">·</span>
              <span>VISION & VALUES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              [BRAND HEADLINE] <br />
              REDEFINING INDIAN AUTOMOTIVE LUXURY
            </h2>
            <p className="text-[#F7F7F5]/80 text-base sm:text-lg leading-relaxed mb-6 font-light">
              [COMPANY INFORMATION] — NERO EV was born out of a ambition: to design, engineer, and build electric performance vehicles in India that challenge world-class luxury standards.
            </p>
            <p className="text-[#777777] text-sm leading-relaxed mb-8">
              [COMPANY STORY PLACEHOLDER] · Grounded in zero-emission sustainability, precision manufacturing, and customer-first experience hubs across major metro centers.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Zero Tailpipe Emissions</h4>
                  <p className="text-xs text-[#777777]">[COMPANY INFORMATION]</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Bespoke Excellence</h4>
                  <p className="text-xs text-[#777777]">[COMPANY INFORMATION]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-4/3 group shadow-2xl">
              <img
                src={SHOWROOM_IMAGE}
                alt="NERO EV Experience Center Flagship Hub"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#C6F36B] uppercase font-bold">[EXPERIENCE CENTER SHOWROOM]</span>
                <span className="text-[#777777] font-mono">FLAGSHIP STORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
