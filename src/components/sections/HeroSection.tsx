import React from 'react';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { HERO_IMAGE, BRAND, EXECUTIVE_VARIANT } from '../../data/officialData';
import { FadeIn } from '../common/FadeIn';
import { StaggerContainer, StaggerItem } from '../common/StaggerContainer';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onBookNow: () => void;
  onOpenTestDrive: () => void;
  onExploreVehicle: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookNow,
  onOpenTestDrive,
  onExploreVehicle,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#101010]">
      {/* Background Image with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.8 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={HERO_IMAGE}
          alt="NERO EV Executive — Bharat Ki Apni Electric Car"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/50 to-[#101010]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#101010]/30 to-[#101010]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Unboxed Brand Kicker */}
          <FadeIn direction="down" delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono font-semibold mb-6">
              <span>{BRAND.tagline}</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>BUILT FOR BHARAT</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>EVSUNDAK</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 font-sans">
              NERO EV <br />
              <span className="text-[#C6F36B]">BHARAT KI APNI ELECTRIC CAR</span>
            </h1>
          </FadeIn>

          {/* Supporting Text */}
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-[#F7F7F5]/90 leading-relaxed font-light mb-8 max-w-2xl">
              {BRAND.positioning} Practical, zero-emission 4-seater transportation built for daily city commutes across Indian families.
            </p>
          </FadeIn>

          {/* Primary & Secondary CTAs */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreVehicle}
                className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[#C6F36B]/25 flex items-center gap-2"
              >
                <span>Explore NERO</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTestDrive}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded border border-white/20 backdrop-blur-sm transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Book a Test Drive</span>
              </button>

              <button
                onClick={onBookNow}
                className="text-[#F7F7F5]/80 hover:text-[#C6F36B] text-xs font-semibold uppercase tracking-widest px-4 py-4 transition-colors flex items-center gap-1"
              >
                <span>Book Enquiry</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeIn>

          {/* Verification Badge */}
          <FadeIn direction="up" delay={0.5}>
            <div className="inline-flex items-center gap-2 text-xs text-[#777777] bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6F36B]" />
              <span>Official NERO EV Product Specifications & Pricing</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom KPI Ticker Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <StaggerContainer delay={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 shadow-2xl">
          <StaggerItem className="border-r border-white/10 last:border-0 pr-4">
            <div className="text-[#777777] text-xs uppercase font-mono tracking-wider mb-1">
              Driving Range
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              {EXECUTIVE_VARIANT.range}
            </div>
            <div className="text-[10px] text-[#C6F36B] mt-0.5">Claimed Range</div>
          </StaggerItem>

          <StaggerItem className="border-r border-white/10 last:border-0 pr-4">
            <div className="text-[#777777] text-xs uppercase font-mono tracking-wider mb-1">
              Charging Duration
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              {EXECUTIVE_VARIANT.chargingTime}
            </div>
            <div className="text-[10px] text-[#C6F36B] mt-0.5">Full Charge</div>
          </StaggerItem>

          <StaggerItem className="border-r border-white/10 last:border-0 pr-4">
            <div className="text-[#777777] text-xs uppercase font-mono tracking-wider mb-1">
              Seating Capacity
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              {EXECUTIVE_VARIANT.seatingCapacity} Passengers
            </div>
            <div className="text-[10px] text-[#C6F36B] mt-0.5">Family Compact</div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-[#777777] text-xs uppercase font-mono tracking-wider mb-1">
              Official Listed Price
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C6F36B] tracking-tight font-mono">
              {EXECUTIVE_VARIANT.priceFormatted}
            </div>
            <div className="text-[10px] text-[#777777] mt-0.5">Executive Variant</div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
