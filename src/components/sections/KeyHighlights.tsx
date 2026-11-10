import React from 'react';
import { Zap, BatteryCharging, ShieldAlert, Leaf } from 'lucide-react';
import { CHASSIS_IMAGE, INTERIOR_IMAGE } from '../../data/placeholderData';

export const KeyHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>02. KEY HIGHLIGHTS</span>
              <span aria-hidden="true">·</span>
              <span>ENGINEERING INNOVATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              [BRAND HEADLINE] <br />
              DEFINING THE ELECTRIC BENCHMARK
            </h2>
          </div>
          <p className="text-[#777777] text-sm max-w-md leading-relaxed">
            [VEHICLE DESCRIPTION] · Four core pillars of NERO EV engineering excellence designed to deliver ultimate confidence on every journey.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main 2-column Bento Card */}
          <div className="md:col-span-2 bg-[#161616] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#C6F36B]/50 transition-colors">
            <div className="p-8 sm:p-10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B] text-[#101010] flex items-center justify-center font-bold mb-6">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                800V Ultra-Fast Hyper-Charging Architecture
              </h3>
              <p className="text-[#F7F7F5]/80 text-sm sm:text-base leading-relaxed max-w-xl font-light mb-6">
                [TECHNICAL SPECIFICATIONS] · Gain up to [SPECIFICATION VALUE: XXX KM] of driving range in just [SPECIFICATION VALUE: XX MINUTES] with compatible 350kW DC chargers.
              </p>
              <div className="flex items-center gap-6 text-xs text-[#777777] font-mono">
                <span>MAX DC RATE: [SPECIFICATION VALUE]</span>
                <span>·</span>
                <span>CONNECTOR: CCS2 / TYPE 2</span>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden border-t border-white/10">
              <img
                src={CHASSIS_IMAGE}
                alt="NERO EV Skateboard Platform Chassis"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
            </div>
          </div>

          {/* Card 2: Thermal Management */}
          <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 flex flex-col justify-between group hover:border-[#C6F36B]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Active Liquid Thermal Conditioning
              </h3>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                [TECHNICAL SPECIFICATIONS] · Multi-channel heat pump matrix engineered to maintain optimal battery temperature in Indian heat extremes up to 50°C.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <span className="block text-2xl font-extrabold text-[#C6F36B] font-mono">[SPECIFICATION VALUE]</span>
              <span className="text-xs text-[#777777] uppercase font-mono">Thermal Efficiency Rating</span>
            </div>
          </div>

          {/* Card 3: Autonomous Driver Assist */}
          <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 flex flex-col justify-between group hover:border-[#C6F36B]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                NERO Pilot Driver Assistance
              </h3>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                [TECHNICAL SPECIFICATIONS] · 360-degree vision matrix with radar sensors, lane centring, collision avoidance, and automated valet parking.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <span className="block text-2xl font-extrabold text-white font-mono">[SPECIFICATION VALUE]</span>
              <span className="text-xs text-[#777777] uppercase font-mono">Sensor Suite Coverage</span>
            </div>
          </div>

          {/* Card 4: 2-Column Sustainable Luxury */}
          <div className="md:col-span-2 bg-[#161616] rounded-2xl border border-white/10 overflow-hidden grid grid-cols-1 sm:grid-cols-2 group hover:border-[#C6F36B]/50 transition-colors">
            <div className="relative h-64 sm:h-auto overflow-hidden">
              <img
                src={INTERIOR_IMAGE}
                alt="NERO EV Sustainable Interior Cabin"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#161616] hidden sm:block" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Sustainable Luxury Materials
                </h3>
                <p className="text-[#777777] text-sm leading-relaxed mb-6">
                  [VEHICLE DESCRIPTION] · Crafted with plant-based bio-leathers, recycled ocean plastics, and FSC-certified natural wood trim.
                </p>
              </div>
              <div className="text-xs text-[#C6F36B] font-mono uppercase tracking-wider">
                100% VEGAN & CARBON NEUTRAL CABIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
