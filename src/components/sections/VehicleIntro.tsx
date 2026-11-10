import React from 'react';
import { Users, Disc, Gauge } from 'lucide-react';
import { HERO_IMAGE, BRAND, EXECUTIVE_VARIANT } from '../../data/officialData';
import { FadeIn } from '../common/FadeIn';
import { StaggerContainer, StaggerItem } from '../common/StaggerContainer';

export const VehicleIntro: React.FC = () => {
  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Kicker */}
        <FadeIn direction="up">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
            <span>01. VEHICLE INTRODUCTION</span>
            <span aria-hidden="true">·</span>
            <span>COMPACT FAMILY EV</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                NERO EV — <br />
                CLEAN MOBILITY FOR EVERY INDIAN FAMILY
              </h2>
              <p className="text-[#F7F7F5]/80 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Designed as a compact four-seater electric vehicle, NERO EV combines affordable urban mobility with practical everyday utility for Indian families navigating city traffic.
              </p>
              <p className="text-[#777777] text-sm leading-relaxed mb-8">
                Featuring a claimed 150–200 km driving range, 5–6 hours charging time, 50–60 km/h top speed, and front and rear disc brakes, NERO EV offers a safe, economical, and sustainable alternative to conventional city cars.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <span className="block text-2xl font-extrabold text-[#C6F36B] font-mono">{EXECUTIVE_VARIANT.range}</span>
                  <span className="text-xs text-[#777777] uppercase font-mono">Claimed Driving Range</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-white font-mono">{EXECUTIVE_VARIANT.brakingSystem}</span>
                  <span className="text-xs text-[#777777] uppercase font-mono">Safety Braking</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" scale>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl aspect-video">
                <img
                  src={HERO_IMAGE}
                  alt="NERO EV Compact Urban Electric Car"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[#C6F36B]">NERO EV EXECUTIVE</span>
                  <span className="text-[#777777] font-mono">COMPACT 4-SEATER</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3 Core Value Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">4-Passenger Capacity</h3>
            <p className="text-[#777777] text-sm leading-relaxed">
              Ergonomic four-seat cabin designed for family shopping trips, school runs, and daily office commutes.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
              <Disc className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Front & Rear Disc Brakes</h3>
            <p className="text-[#777777] text-sm leading-relaxed">
              Equipped with disc brakes on all four wheels for confident stopping performance across urban road conditions.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Urban Speed & Range</h3>
            <p className="text-[#777777] text-sm leading-relaxed">
              50–60 km/h maximum speed paired with 150–200 km range per charge for efficient daily driving.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
