import React from 'react';
import { Gauge, BatteryCharging, Clock, Users, Disc } from 'lucide-react';
import { EXECUTIVE_VARIANT, SIDE_PROFILE_IMAGE } from '../../data/officialData';
import { FadeIn } from '../common/FadeIn';
import { StaggerContainer, StaggerItem } from '../common/StaggerContainer';

export const PerformanceShowcase: React.FC = () => {
  const metrics = [
    {
      label: 'CLAIMED DRIVING RANGE',
      value: EXECUTIVE_VARIANT.range,
      subtext: 'Per full charge',
      icon: BatteryCharging,
    },
    {
      label: 'MAXIMUM TOP SPEED',
      value: EXECUTIVE_VARIANT.topSpeed,
      subtext: 'Optimized for city driving',
      icon: Gauge,
    },
    {
      label: 'FULL CHARGING TIME',
      value: EXECUTIVE_VARIANT.chargingTime,
      subtext: 'Standard AC home charging',
      icon: Clock,
    },
    {
      label: 'PASSENGER CAPACITY',
      value: '4 Seats',
      subtext: 'Family-oriented layout',
      icon: Users,
    },
    {
      label: 'BRAKING ARCHITECTURE',
      value: 'Front & Rear Disc',
      subtext: '4-wheel responsive discs',
      icon: Disc,
    },
  ];

  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
                <span>03. PERFORMANCE & SPECS</span>
                <span aria-hidden="true">·</span>
                <span>NUMERICAL HIGHLIGHTS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                NERO EV AT A GLANCE
              </h2>
            </div>
            <p className="text-[#777777] text-sm max-w-md leading-relaxed">
              Essential performance parameters documented on official NERO EV releases.
            </p>
          </div>
        </FadeIn>

        {/* Large Numerical Highlights Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <StaggerItem
                key={idx}
                className="bg-[#161616] p-8 rounded-2xl border border-white/10 hover:border-[#C6F36B]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6F36B]">
                      {m.label}
                    </span>
                    <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-2">
                    {m.value}
                  </div>
                </div>
                <div className="text-xs text-[#777777] font-mono pt-4 border-t border-white/5">
                  {m.subtext}
                </div>
              </StaggerItem>
            );
          })}

          {/* Pricing Highlight Card */}
          <StaggerItem className="bg-gradient-to-br from-[#161616] to-[#222222] p-8 rounded-2xl border border-[#C6F36B]/40 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6F36B]">
                  WEBSITE-LISTED PRICE
                </span>
                <span className="text-[10px] font-mono text-[#101010] bg-[#C6F36B] px-2 py-0.5 rounded font-bold">
                  EXECUTIVE
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#C6F36B] font-mono tracking-tight mb-2">
                {EXECUTIVE_VARIANT.priceFormatted}
              </div>
            </div>
            <div className="text-[11px] text-[#777777] leading-relaxed pt-4 border-t border-white/10">
              * Official website listed price (Subject to manufacturer breakup confirmation).
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Side Profile Image Banner */}
        <FadeIn direction="up" scale>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-3/1">
            <img
              src={SIDE_PROFILE_IMAGE}
              alt="NERO EV Side Profile Performance View"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-[#C6F36B] uppercase font-bold">
                NERO EV COMPACT URBAN CHASSIS WITH DUAL DISC BRAKES
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
