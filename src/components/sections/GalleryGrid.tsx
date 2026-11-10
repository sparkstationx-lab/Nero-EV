import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/placeholderData';
import { GalleryItem } from '../../types';
import { Maximize2, Play, X } from 'lucide-react';

export const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'exterior' | 'interior' | 'lifestyle' | 'video'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>VISUAL GALLERY</span>
              <span aria-hidden="true">·</span>
              <span>AESTHETIC PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              [VEHICLE IMAGE] GALLERY
            </h2>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#161616] rounded-lg border border-white/10 overflow-x-auto no-scrollbar shrink-0">
            {(['all', 'exterior', 'interior', 'lifestyle'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all uppercase tracking-wider whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#C6F36B] text-[#101010] shadow-sm font-bold'
                    : 'text-[#777777] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-[#161616] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-[#C6F36B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#C6F36B] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-wide truncate">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase Placeholder Block */}
        <div className="mt-12 bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-12 relative overflow-hidden group">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-2">CINEMATIC FILM SHOWCASE</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              [VEHICLE IMAGE PLACEHOLDER] — CINEMATIC REVEAL FILM
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed mb-6">
              [VEHICLE DESCRIPTION] · Full ultra-high definition official launch film showcase placeholder for NERO EV.
            </p>
            <button
              onClick={() => setSelectedImage(GALLERY_ITEMS[0])}
              className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase px-6 py-3 rounded transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Video Reveal Preview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full">
            <div className="relative rounded-xl overflow-hidden border border-white/20 aspect-video bg-black mb-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-white px-2">
              <span className="font-mono text-[#C6F36B]">{selectedImage.title}</span>
              <span className="text-[#777777] font-mono">PHASE 1 VISUAL ASSET</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
