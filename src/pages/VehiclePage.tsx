import React, { useState } from 'react';
import { HERO_IMAGE, INTERIOR_IMAGE } from '../data/placeholderData';
import { VehicleColorCustomizer } from '../components/sections/VehicleColorCustomizer';
import { PerformanceShowcase } from '../components/sections/PerformanceShowcase';
import { InteractiveRangeCalculator } from '../components/sections/InteractiveRangeCalculator';
import { SpecificationTable } from '../components/sections/SpecificationTable';
import { AvailableVariants } from '../components/sections/AvailableVariants';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { PageId } from '../types';
import { ChevronRight } from 'lucide-react';

interface VehiclePageProps {
  onNavigate: (page: PageId, variantId?: string) => void;
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
              <span>VEHICLE ARCHITECTURE & SPECS</span>
              <span aria-hidden="true">·</span>
              <span>PHASE 1 BLUEPRINT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              [BRAND HEADLINE] ARCHITECTURE
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed">
              [VEHICLE DESCRIPTION] · Explore exterior aerodynamics, interior digital cockpit, dual-motor powertrain performance, and structured technical specifications.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl mb-16">
            <img
              src={HERO_IMAGE}
              alt="NERO EV Vehicle Showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
              <span className="text-[#C6F36B] font-bold">[VEHICLE IMAGE PLACEHOLDER]</span>
              <span className="text-[#777777]">EXTERIOR VIEW 01</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Exterior & Interior Overview */}
      <section className="py-20 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">01. EXTERIOR OVERVIEW</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">AERODYNAMIC INTEGRITY</h2>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                [VEHICLE DESCRIPTION] · Flush automatic pop-out door handles, active lower airflow shutters, and full-length underbody cladding deliver exceptional highway range efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/10 pt-4">
                <div>
                  <span className="text-[#777777] block">Drag Coefficient:</span>
                  <span className="text-[#C6F36B] font-bold">[SPECIFICATION VALUE]</span>
                </div>
                <div>
                  <span className="text-[#777777] block">Wheels:</span>
                  <span className="text-white font-bold">[SPECIFICATION VALUE]</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
              <img
                src={HERO_IMAGE}
                alt="Exterior Aerodynamics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-white/10 aspect-video">
              <img
                src={INTERIOR_IMAGE}
                alt="Interior Cabin Sanctuary"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">02. INTERIOR OVERVIEW</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">DIGITAL COCKPIT SANCTUARY</h2>
              <p className="text-[#777777] text-sm leading-relaxed mb-6">
                [VEHICLE DESCRIPTION] · Seamless glass curved OLED display spanning across driver and passenger zones, wrapped in sustainable bio-synthetic vegan leather.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/10 pt-4">
                <div>
                  <span className="text-[#777777] block">Cockpit Display:</span>
                  <span className="text-[#C6F36B] font-bold">[SPECIFICATION VALUE]</span>
                </div>
                <div>
                  <span className="text-[#777777] block">Acoustic Glass:</span>
                  <span className="text-white font-bold">[SPECIFICATION VALUE]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Color Customizer */}
      <VehicleColorCustomizer />

      {/* 5. Performance Showcase */}
      <PerformanceShowcase />

      {/* 6. Range Calculator */}
      <InteractiveRangeCalculator />

      {/* 7. Structured Specifications */}
      <SpecificationTable />

      {/* 8. Available Variants */}
      <AvailableVariants
        onSelectVariant={(vId) => onNavigate('book', vId)}
        onOpenTestDrive={onOpenTestDrive}
      />

      {/* 9. Enquiry CTA */}
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
    </main>
  );
};
