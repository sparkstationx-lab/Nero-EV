import React from 'react';
import { SHOWROOM_IMAGE } from '../data/placeholderData';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { PageId } from '../types';
import { ShieldCheck, Target, Compass, Sparkles, Globe } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenTestDrive }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24">
      {/* 1. Brand Intro Hero */}
      <section className="py-20 bg-[#101010] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>ABOUT NERO EV</span>
              <span aria-hidden="true">·</span>
              <span>BRAND PHILOSOPHY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              [BRAND HEADLINE] <br />
              ENGINEERED IN INDIA FOR THE WORLD
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed">
              [COMPANY INFORMATION] — NERO EV represents the fusion of Indian engineering ingenuity, luxury automotive craftsmanship, and zero-compromise sustainable energy.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl mb-16">
            <img
              src={SHOWROOM_IMAGE}
              alt="NERO EV Brand Story"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-xs font-mono text-[#C6F36B]">
              [COMPANY INFORMATION: FLAGSHIP HUB]
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Vision, Mission & Philosophy */}
      <section className="py-20 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Company Vision</h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                [COMPANY INFORMATION] · To accelerate India's transition to sustainable luxury electric mobility through world-class powertrain efficiency and timeless design.
              </p>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Company Mission</h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                [COMPANY INFORMATION] · Crafting performance electric vehicles that exceed rigorous global safety and luxury standards while staying rooted in Indian innovation.
              </p>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Philosophy</h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                [COMPANY INFORMATION] · Purity over ornament. Efficiency over excess. Every line serves aerodynamic purpose and sustainable craftsmanship.
              </p>
            </div>
          </div>

          {/* 4 & 5. Brand Values & Company Story Placeholder */}
          <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-12 mb-16">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">THE JOURNEY</span>
            <h2 className="text-3xl font-extrabold text-white mb-6">[COMPANY STORY PLACEHOLDER]</h2>
            <div className="space-y-4 text-sm text-[#F7F7F5]/80 font-light leading-relaxed max-w-3xl">
              <p>
                [COMPANY STORY PLACEHOLDER] · Founded with the conviction that Indian engineering can create electric vehicles of unprecedented refine, power, and range.
              </p>
              <p>
                [COMPANY STORY PLACEHOLDER] · From state-of-the-art battery thermal testing facilities to flagship experience centers across Mumbai, Bengaluru, Delhi NCR, and Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
    </main>
  );
};
