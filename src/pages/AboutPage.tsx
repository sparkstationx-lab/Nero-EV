import React from 'react';
import { BRAND, CHARGING_IMAGE } from '../data/officialData';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { PageId } from '../types';
import { ShieldCheck, Target, Compass, Globe, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenTestDrive }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24">
      {/* Brand Intro Hero */}
      <section className="py-20 bg-[#101010] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>ABOUT NERO EV</span>
              <span aria-hidden="true">·</span>
              <span>EVSUNDAK BRAND POSITIONING</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              BHARAT KI APNI ELECTRIC CAR
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed">
              {BRAND.positioning} {BRAND.philosophy} Engineered to provide practical, accessible zero-emission electric transportation for Indian families.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl mb-16">
            <img
              src={CHARGING_IMAGE}
              alt="NERO EV Family Home Charging Convenience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-xs font-mono text-[#C6F36B]">
              NERO EV — BHARAT KI APNI ELECTRIC CAR
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Philosophy */}
      <section className="py-20 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Vision</h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                To empower Indian families with affordable, clean electric mobility that simplifies everyday transportation and reduces urban carbon emissions.
              </p>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Mission</h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Clean Mobility for Every Indian Family. Delivering practical, reliable 4-seater electric vehicles built specifically for Indian city conditions.
              </p>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built for Bharat</h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Affordable by design. Engineered with high ground clearance, responsive disc brakes, and simple home charging for Indian households.
              </p>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-12 mb-16">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">OUR COMMITMENT</span>
            <h2 className="text-3xl font-extrabold text-white mb-6">THE NERO EV COMMITMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRAND.values.map((v, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#101010] rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{v}</h4>
                    <p className="text-xs text-[#777777]">
                      Delivering practical value, low running costs, and zero tailpipe emissions.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
    </main>
  );
};
