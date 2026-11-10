import React from 'react';
import { Sparkles, Shield, Compass, Cpu } from 'lucide-react';
import { HERO_IMAGE } from '../../data/placeholderData';

export const VehicleIntro: React.FC = () => {
  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
          <span>01. VEHICLE INTRODUCTION</span>
          <span aria-hidden="true">·</span>
          <span>DESIGN PHILOSOPHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              [BRAND HEADLINE] <br />
              SCULPTED BY AIR, POWERED BY PURPOSE
            </h2>
            <p className="text-[#F7F7F5]/80 text-base sm:text-lg leading-relaxed mb-6 font-light">
              [VEHICLE DESCRIPTION] — Conceived without compromise, NERO EV combines ultra-low aerodynamic drag with bold minimalist proportions. Every curve serves efficiency, every surface reflects luxury.
            </p>
            <p className="text-[#777777] text-sm leading-relaxed mb-8">
              [COMPANY INFORMATION] · Built specifically for Indian roads and climate extremes, featuring intelligent thermal management, high ground clearance control, and acoustic glass isolation.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="block text-2xl font-extrabold text-[#C6F36B] font-mono">[SPECIFICATION VALUE]</span>
                <span className="text-xs text-[#777777] uppercase font-mono">Aerodynamic Drag Cd</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white font-mono">[SPECIFICATION VALUE]</span>
                <span className="text-xs text-[#777777] uppercase font-mono">Sustainable Interior Fiber</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl aspect-video">
              <img
                src={HERO_IMAGE}
                alt="NERO EV Vehicle Intro Visual"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#C6F36B]">[VEHICLE IMAGE PLACEHOLDER]</span>
                <span className="text-[#777777] font-mono">PRE-PRODUCTION MODEL</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pill-free Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Architectural Stance</h3>
            <p className="text-[#777777] text-sm leading-relaxed">
              [VEHICLE DESCRIPTION] · Wide stance, low center of gravity, and active aerodynamic shutter grilles.
            </p>
          </div>

          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">5-Star Safety Cell</h3>
            <p className="text-[#777777] text-sm leading-relaxed">
              [TECHNICAL SPECIFICATIONS] · High-strength aluminum and ultra-high-tensile steel passenger safety cage.
            </p>
          </div>

          <div className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Cockpit</h3>
            <p className="text-[#777777] text-sm leading-relaxed">
              [TECHNICAL SPECIFICATIONS] · Full-width digital display driven by NERO OS with real-time AI range prediction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
