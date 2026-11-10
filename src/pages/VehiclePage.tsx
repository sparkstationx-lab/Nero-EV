import React from 'react';
import { HERO_IMAGE, INTERIOR_IMAGE, EXECUTIVE_VARIANT } from '../data/officialData';
import { VehicleColorCustomizer } from '../components/sections/VehicleColorCustomizer';
import { PerformanceShowcase } from '../components/sections/PerformanceShowcase';
import { SpecificationTable } from '../components/sections/SpecificationTable';
import { AvailableVariants } from '../components/sections/AvailableVariants';
import { EmiCalculator } from '../components/sections/EmiCalculator';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { PageId } from '../types';

interface VehiclePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const VehiclePage: React.FC<VehiclePageProps> = ({ onNavigate, onOpenTestDrive }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24">
      {/* 1. Vehicle Hero Showcase */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-[#101010] to-[#101010]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>PRODUCT OVERVIEW</span>
              <span aria-hidden="true">·</span>
              <span>OFFICIAL PRODUCT SPECIFICATIONS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              NERO EV EXECUTIVE
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed">
              Bharat Ki Apni Electric Car. Listed at <span className="text-[#C6F36B] font-mono font-bold">{EXECUTIVE_VARIANT.priceFormatted}</span> on the official website. Compact 4-seater electric mobility with 150–200 km range.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl mb-16">
            <img
              src={HERO_IMAGE}
              alt="NERO EV Executive Urban Electric Car"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
              <span className="text-[#C6F36B] font-bold">NERO EV EXECUTIVE MODEL</span>
              <span className="text-[#777777]">OFFICIAL PRODUCT PHOTOGRAPH</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Exterior & Interior Overview */}
      <section className="py-20 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">01. EXTERIOR STANCE</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">COMPACT URBAN PROFILE</h2>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                Designed for city agility, easy parking, and maneuvering through congested Indian roads. Features power-adjustable ORVM and front & rear disc brakes.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/10 pt-4">
                <div>
                  <span className="text-[#777777] block">Top Speed:</span>
                  <span className="text-[#C6F36B] font-bold">{EXECUTIVE_VARIANT.topSpeed}</span>
                </div>
                <div>
                  <span className="text-[#777777] block">Braking:</span>
                  <span className="text-white font-bold">{EXECUTIVE_VARIANT.brakingSystem}</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
              <img
                src={HERO_IMAGE}
                alt="NERO EV Urban Stance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-white/10 aspect-video">
              <img
                src={INTERIOR_IMAGE}
                alt="Starlight Black Cabin & Digital Cluster"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">02. INTERIOR CABIN</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">STARLIGHT BLACK CABIN</h2>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                Features Starlight Black interior theme, full digital instrument cluster, 10.25-inch floating widescreen (17.78 cm embedded LCD screen), and reverse parking sensors.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/10 pt-4">
                <div>
                  <span className="text-[#777777] block">Seating:</span>
                  <span className="text-[#C6F36B] font-bold">4 Passengers</span>
                </div>
                <div>
                  <span className="text-[#777777] block">Theme:</span>
                  <span className="text-white font-bold">Starlight Black</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Finishes */}
      <VehicleColorCustomizer />

      {/* Performance Highlights */}
      <PerformanceShowcase />

      {/* Technical Specifications Table with Discrepancy Flag */}
      <SpecificationTable />

      {/* Documented Variant Card */}
      <AvailableVariants
        onSelectVariant={() => onNavigate('book')}
        onOpenTestDrive={onOpenTestDrive}
      />

      {/* EMI Calculator */}
      <EmiCalculator />

      {/* CTA */}
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
    </main>
  );
};
