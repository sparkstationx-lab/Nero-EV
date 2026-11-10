import React, { useState } from 'react';
import { Gauge, Zap, Wind, ShieldCheck, Check } from 'lucide-react';
import { CHASSIS_IMAGE } from '../../data/placeholderData';

export const PerformanceShowcase: React.FC = () => {
  const [activeDriveMode, setActiveDriveMode] = useState<'eco' | 'gt' | 'track'>('gt');

  const modeData = {
    eco: {
      title: 'ECO RANGE MODE',
      range: '[SPECIFICATION VALUE: XXX KM]',
      accel: '[SPECIFICATION VALUE: 0-100 IN X.X S]',
      topSpeed: '[SPECIFICATION VALUE: XXX KM/H]',
      powerRatio: 'Rear Motor 100%',
      suspension: 'Comfort Air Suspension',
      desc: 'Optimized for maximum efficiency, energy regeneration, and extended city cruising.',
    },
    gt: {
      title: 'GT SPORT MODE',
      range: '[SPECIFICATION VALUE: XXX KM]',
      accel: '[SPECIFICATION VALUE: 0-100 IN X.X S]',
      topSpeed: '[SPECIFICATION VALUE: XXX KM/H]',
      powerRatio: 'Dual Motor AWD 40:60',
      suspension: 'Adaptive Dynamic Damping',
      desc: 'Instant torque response, balanced AWD traction, and effortless highway overtaking power.',
    },
    track: {
      title: 'NERO TRACK LAUNCH',
      range: '[SPECIFICATION VALUE: XXX KM]',
      accel: '[SPECIFICATION VALUE: 0-100 IN X.X S]',
      topSpeed: '[SPECIFICATION VALUE: XXX KM/H]',
      powerRatio: 'Dual Motor Vectoring 0:100',
      suspension: 'Stiffened Track Geometry',
      desc: 'Full battery pack power unlock, active rear torque vectoring, and launch control.',
    },
  };

  const currentMode = modeData[activeDriveMode];

  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>03. PERFORMANCE & DYNAMICS</span>
              <span aria-hidden="true">·</span>
              <span>POWERTRAIN SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              [BRAND HEADLINE] <br />
              UNCOMPROMISED ELECTRIC THRUST
            </h2>
          </div>
          <p className="text-[#777777] text-sm max-w-md leading-relaxed">
            [VEHICLE DESCRIPTION] · Dual permanent magnet synchronous electric motors operating on a dedicated skateboard chassis.
          </p>
        </div>

        {/* Interactive Drive Mode Switcher */}
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-10 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-mono text-[#C6F36B] block mb-1">Interactive Selector</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Select Drive Mode Simulation</h3>
            </div>

            {/* Mode Tabs */}
            <div className="flex items-center gap-2 bg-[#101010] p-1.5 rounded-lg border border-white/10 w-full sm:w-auto">
              <button
                onClick={() => setActiveDriveMode('eco')}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDriveMode === 'eco'
                    ? 'bg-[#C6F36B] text-[#101010] shadow-lg'
                    : 'text-[#777777] hover:text-white'
                }`}
              >
                Eco Range
              </button>
              <button
                onClick={() => setActiveDriveMode('gt')}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDriveMode === 'gt'
                    ? 'bg-[#C6F36B] text-[#101010] shadow-lg'
                    : 'text-[#777777] hover:text-white'
                }`}
              >
                GT Sport
              </button>
              <button
                onClick={() => setActiveDriveMode('track')}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDriveMode === 'track'
                    ? 'bg-[#C6F36B] text-[#101010] shadow-lg'
                    : 'text-[#777777] hover:text-white'
                }`}
              >
                Track Launch
              </button>
            </div>
          </div>

          {/* Mode Display Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono bg-[#C6F36B]/10 text-[#C6F36B] px-3 py-1 rounded border border-[#C6F36B]/20 font-bold">
                  {currentMode.title}
                </span>
                <span className="text-xs text-[#777777] font-mono">[TECHNICAL SPECIFICATIONS]</span>
              </div>
              <p className="text-white text-base sm:text-lg mb-8 font-light leading-relaxed">
                {currentMode.desc}
              </p>

              {/* Dynamic Telemetry Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#101010] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-[#777777] uppercase font-mono block mb-1">Estimated Range</span>
                  <span className="text-lg font-bold text-[#C6F36B] font-mono tabular-nums">{currentMode.range}</span>
                </div>
                <div className="bg-[#101010] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-[#777777] uppercase font-mono block mb-1">0-100 km/h</span>
                  <span className="text-lg font-bold text-white font-mono tabular-nums">{currentMode.accel}</span>
                </div>
                <div className="bg-[#101010] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-[#777777] uppercase font-mono block mb-1">Torque Split</span>
                  <span className="text-sm font-semibold text-white truncate block">{currentMode.powerRatio}</span>
                </div>
                <div className="bg-[#101010] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-[#777777] uppercase font-mono block mb-1">Damping</span>
                  <span className="text-sm font-semibold text-white truncate block">{currentMode.suspension}</span>
                </div>
              </div>
            </div>

            {/* Platform Image Showcase */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video lg:aspect-square">
              <img
                src={CHASSIS_IMAGE}
                alt="NERO EV Drive Mode Platform View"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-[#C6F36B]">[CHASSIS ARCHITECTURE PLACEHOLDER]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
