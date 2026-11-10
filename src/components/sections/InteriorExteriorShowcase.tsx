import React, { useState } from 'react';
import { HERO_IMAGE, INTERIOR_IMAGE, SIDE_PROFILE_IMAGE } from '../../data/officialData';

export const InteriorExteriorShowcase: React.FC = () => {
  const [view, setView] = useState<'exterior' | 'interior'>('interior');

  const exteriorFeatures = [
    { title: 'Compact Urban Stance', detail: 'Designed for effortless parking and maneuvering in Indian city traffic.' },
    { title: 'Front & Rear Disc Brakes', detail: 'Four-wheel disc braking system for stopping confidence.' },
    { title: 'Power-Adjustable ORVM', detail: 'Electrically adjustable outside rear-view mirrors.' },
    { title: 'Modern Lighting Signature', detail: 'Integrated front headlamps and rear tail lights.' },
  ];

  const interiorFeatures = [
    { title: 'Starlight Black Interiors', detail: 'Sleek dark interior cabin theme designed for family comfort.' },
    { title: 'Full Digital Instrument Cluster', detail: 'Real-time telemetry showing speed, battery level, and range.' },
    { title: '10.25" Floating Widescreen', detail: '17.78 cm embedded LCD infotainment display screen.' },
    { title: 'Reverse Parking Sensors', detail: 'Sensors providing audible distance guidance when reversing.' },
  ];

  const currentFeatures = view === 'exterior' ? exteriorFeatures : interiorFeatures;

  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>04. CABIN & BODY DESIGN</span>
              <span aria-hidden="true">·</span>
              <span>EXTERIOR & INTERIOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              DESIGNED FOR EVERYDAY UTILITY
            </h2>
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-2 bg-[#161616] p-1.5 rounded-lg border border-white/10 shrink-0">
            <button
              onClick={() => setView('interior')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                view === 'interior'
                  ? 'bg-[#C6F36B] text-[#101010] shadow-md'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Starlight Black Interior
            </button>
            <button
              onClick={() => setView('exterior')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                view === 'exterior'
                  ? 'bg-[#C6F36B] text-[#101010] shadow-md'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Urban Exterior Profile
            </button>
          </div>
        </div>

        {/* View Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Container */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
            <img
              src={view === 'exterior' ? SIDE_PROFILE_IMAGE : INTERIOR_IMAGE}
              alt={`NERO EV ${view} Showcase`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
              <span className="font-mono text-[#C6F36B] uppercase font-bold">
                NERO EV — {view.toUpperCase()} CABIN
              </span>
              <span className="text-[#777777] font-mono">OFFICIAL MODEL PHOTOGRAPH</span>
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">
              {view === 'exterior' ? 'Exterior Design Highlights' : 'Interior Comfort Highlights'}
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed mb-6">
              Officially documented features of the NERO EV Executive model.
            </p>

            {currentFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#161616] p-5 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[10px] text-[#C6F36B] font-mono font-semibold">0{idx + 1}</span>
                </div>
                <p className="text-xs text-[#777777]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
