import React, { useState } from 'react';
import { Eye, Sun, Sliders, Maximize2 } from 'lucide-react';
import { HERO_IMAGE, INTERIOR_IMAGE } from '../../data/placeholderData';

export const InteriorExteriorShowcase: React.FC = () => {
  const [view, setView] = useState<'exterior' | 'interior'>('exterior');

  const exteriorFeatures = [
    { title: 'Active Aero Shutter', detail: '[TECHNICAL SPECIFICATIONS: DRAG REDUCTION SYSTEM]' },
    { title: 'Flush Door Handles', detail: '[DESIGN HIGHLIGHT: AUTOMATIC PROXIMITY POP-OUT]' },
    { title: 'Signature Horizon Lightbar', detail: '[DESIGN HIGHLIGHT: FULL MATRIX LED]' },
    { title: 'Carbon Composite Roof', detail: '[SPECIFICATION VALUE: LOWERS CENTER OF GRAVITY]' },
  ];

  const interiorFeatures = [
    { title: '16" Curved Glass OLED', detail: '[TECHNICAL SPECIFICATIONS: NERO OS INFOTAINMENT]' },
    { title: '18-Speaker Spatial Audio', detail: '[DESIGN HIGHLIGHT: DOLBY ATMOS IMPERSION]' },
    { title: 'Bio-Synthetic Leather', detail: '[DESIGN HIGHLIGHT: 100% RECYCLED SUSTAINABLE SEATS]' },
    { title: 'Panoramic Electrochromic Glass', detail: '[TECHNICAL SPECIFICATIONS: SMART SOLAR TINTING]' },
  ];

  const currentFeatures = view === 'exterior' ? exteriorFeatures : interiorFeatures;

  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>04. CRAFTSMANSHIP & DESIGN</span>
              <span aria-hidden="true">·</span>
              <span>EXTERIOR & INTERIOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              [BRAND HEADLINE] <br />
              DESIGNED FROM THE INSIDE OUT
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center gap-2 bg-[#161616] p-1.5 rounded-lg border border-white/10 shrink-0">
            <button
              onClick={() => setView('exterior')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                view === 'exterior'
                  ? 'bg-[#C6F36B] text-[#101010] shadow-md'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Exterior Showcase
            </button>
            <button
              onClick={() => setView('interior')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                view === 'interior'
                  ? 'bg-[#C6F36B] text-[#101010] shadow-md'
                  : 'text-[#777777] hover:text-white'
              }`}
            >
              Interior Cabin
            </button>
          </div>
        </div>

        {/* View Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
            <img
              src={view === 'exterior' ? HERO_IMAGE : INTERIOR_IMAGE}
              alt={`NERO EV ${view} Showcase`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C6F36B]" />
                <span className="font-mono text-[#C6F36B] uppercase font-bold">
                  {view} ARCHITECTURE
                </span>
              </div>
              <span className="text-[#777777] font-mono">[VEHICLE IMAGE PLACEHOLDER]</span>
            </div>
          </div>

          {/* Highlights List Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">
              {view === 'exterior' ? 'Exterior Sculptural Highlights' : 'Interior Sanctuary Highlights'}
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed mb-6">
              [VEHICLE DESCRIPTION] · Minimalist purity balanced with technical functionality.
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
                <p className="text-xs text-[#777777] font-mono">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
