import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { VehicleIntro } from '../components/sections/VehicleIntro';
import { KeyHighlights } from '../components/sections/KeyHighlights';
import { PerformanceShowcase } from '../components/sections/PerformanceShowcase';
import { InteriorExteriorShowcase } from '../components/sections/InteriorExteriorShowcase';
import { TechnologySection } from '../components/sections/TechnologySection';
import { BrandPhilosophy } from '../components/sections/BrandPhilosophy';
import { GalleryGrid } from '../components/sections/GalleryGrid';
import { CustomerEnquiryCTA } from '../components/sections/CustomerEnquiryCTA';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenTestDrive }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5]">
      <HeroSection
        onBookNow={() => onNavigate('book')}
        onOpenTestDrive={onOpenTestDrive}
        onExploreVehicle={() => onNavigate('vehicle')}
      />
      <VehicleIntro />
      <KeyHighlights />
      <PerformanceShowcase />
      <InteriorExteriorShowcase />
      <TechnologySection />
      <BrandPhilosophy />
      <GalleryGrid />
      <CustomerEnquiryCTA
        onOpenTestDrive={onOpenTestDrive}
        onBookNow={() => onNavigate('book')}
      />
      <FAQAccordion />
    </main>
  );
};
