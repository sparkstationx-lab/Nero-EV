import React from 'react';
import { Cpu, Wifi, Smartphone, Lock, Radio } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
            <span>05. SOFTWARE & CONNECTIVITY</span>
            <span aria-hidden="true">·</span>
            <span>NERO OS ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            [BRAND HEADLINE] <br />
            INTELLIGENCE THAT EVOLVES WITH YOU
          </h2>
          <p className="text-[#F7F7F5]/80 text-base sm:text-lg font-light leading-relaxed">
            [VEHICLE DESCRIPTION] · Designed with a central neural compute hub capable of executing over 500 trillion operations per second, powering autonomous safety and predictive range algorithms.
          </p>
        </div>

        {/* 4 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NERO OS v1.0</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                [TECHNICAL SPECIFICATIONS] · Ultra-responsive interface with zero latency navigation, 3D vehicle visualization, and voice command controls.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">[OS SOFTWARE ARCHITECTURE]</span>
          </div>

          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Over-The-Air (OTA)</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                [TECHNICAL SPECIFICATIONS] · Seamless wireless software updates that improve range performance, driving dynamics, and entertainment over time.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">[AUTOMATIC CLOUD SYNC]</span>
          </div>

          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NERO Mobile App</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                [TECHNICAL SPECIFICATIONS] · Pre-condition cabin temperature, track live charge status, summon vehicle, and share digital phone key access.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">[IOS & ANDROID SUITE]</span>
          </div>

          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sentry Guard Mode</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                [TECHNICAL SPECIFICATIONS] · 360-degree continuous camera surveillance and mobile security alerts when parked.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">[ENCRYPTED TELEMETRY]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
