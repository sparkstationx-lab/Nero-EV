import React from 'react';
import { GalleryGrid } from '../components/sections/GalleryGrid';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { PageId } from '../types';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenTestDrive }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>VISUAL MEDIA GALLERY</span>
              <span aria-hidden="true">·</span>
              <span>EXTERIOR / INTERIOR / LIFESTYLE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              [VEHICLE IMAGE] PORTFOLIO
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed mt-4">
              [VEHICLE DESCRIPTION] · Browse high-resolution visual showcases of the NERO EV exterior silhouette, interior digital cockpit, and experience centers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid with Filter Tabs & Lightbox */}
      <GalleryGrid />

      {/* CTA */}
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
    </main>
  );
};
