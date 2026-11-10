import React from 'react';
import { Users, BatteryCharging, Disc, Gauge } from 'lucide-react';
import { SIDE_PROFILE_IMAGE, INTERIOR_IMAGE } from '../../data/officialData';
import { FadeIn } from '../common/FadeIn';
import { StaggerContainer, StaggerItem } from '../common/StaggerContainer';

export const KeyHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
                <span>02. KEY HIGHLIGHTS</span>
                <span aria-hidden="true">·</span>
                <span>PRACTICAL URBAN MOBILITY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                EVERYDAY PERFORMANCE <br />
                FOR BHARAT
              </h2>
            </div>
            <p className="text-[#777777] text-sm max-w-md leading-relaxed">
              NERO EV is engineered to deliver zero-emission transportation tailored to the practical needs of Indian urban families.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid Layout with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main 2-column Bento Card */}
          <StaggerItem className="md:col-span-2 bg-[#161616] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#C6F36B]/50 transition-colors">
            <div className="p-8 sm:p-10">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B] text-[#101010] flex items-center justify-center font-bold mb-6">
                <BatteryCharging className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                150–200 km Claimed Driving Range
              </h3>
              <p className="text-[#F7F7F5]/80 text-sm sm:text-base leading-relaxed max-w-xl font-light mb-6">
                Travel across your city with confidence. NERO EV achieves a full charge in 5–6 hours, providing ample range for multiple days of urban commuting.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#777777] font-mono">
                <span>FULL CHARGE: 5 – 6 HOURS</span>
                <span>·</span>
                <span>STANDARD AC PLUG</span>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden border-t border-white/10">
              <img
                src={SIDE_PROFILE_IMAGE}
                alt="NERO EV Side Profile and Disc Brakes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
            </div>
          </StaggerItem>

          {/* Card 2: 4-Seater Cabin */}
          <StaggerItem className="bg-[#161616] rounded-2xl border border-white/10 p-8 flex flex-col justify-between group hover:border-[#C6F36B]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                4-Seat Family Configuration
              </h3>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                Designed to comfortably seat 4 passengers with Starlight Black interiors, creating a cozy family atmosphere.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <span className="block text-2xl font-extrabold text-[#C6F36B] font-mono">4 PASSENGERS</span>
              <span className="text-xs text-[#777777] uppercase font-mono">Cabin Seating</span>
            </div>
          </StaggerItem>

          {/* Card 3: Disc Brakes */}
          <StaggerItem className="bg-[#161616] rounded-2xl border border-white/10 p-8 flex flex-col justify-between group hover:border-[#C6F36B]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Disc className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Front & Rear Disc Brakes
              </h3>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                Full 4-wheel disc brake setup delivering responsive braking performance for city traffic conditions.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <span className="block text-2xl font-extrabold text-white font-mono">4-WHEEL DISC</span>
              <span className="text-xs text-[#777777] uppercase font-mono">Safety Braking</span>
            </div>
          </StaggerItem>

          {/* Card 4: Compact Speed & Digital Tech */}
          <StaggerItem className="md:col-span-2 bg-[#161616] rounded-2xl border border-white/10 overflow-hidden grid grid-cols-1 sm:grid-cols-2 group hover:border-[#C6F36B]/50 transition-colors">
            <div className="relative h-64 sm:h-auto overflow-hidden">
              <img
                src={INTERIOR_IMAGE}
                alt="NERO EV Full Digital Cluster and Screen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#161616] hidden sm:block" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  50–60 km/h Top Speed
                </h3>
                <p className="text-[#777777] text-sm leading-relaxed mb-6">
                  Optimized urban velocity paired with a full digital cluster and 10.25-inch floating widescreen for seamless driving control.
                </p>
              </div>
              <div className="text-xs text-[#C6F36B] font-mono uppercase tracking-wider">
                COMPACT URBAN DESIGN FOR EASY PARKING
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
