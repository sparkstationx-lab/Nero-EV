import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { VehiclePage } from './pages/VehiclePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookNowPage } from './pages/BookNowPage';
import { TestDriveModal } from './components/sections/TestDriveModal';
import { ScrollToTopButton } from './components/common/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(undefined);
  const [testDriveOpen, setTestDriveOpen] = useState<boolean>(false);

  // Sync page state with window location hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'vehicle', 'about', 'gallery', 'contact', 'book'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, variantId?: string) => {
    setCurrentPage(page);
    if (variantId) {
      setSelectedVariantId(variantId);
    }
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F7F7F5] flex flex-col font-sans selection:bg-[#C6F36B] selection:text-[#101010]">
      {/* Global Minimal Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenTestDrive={() => setTestDriveOpen(true)}
      />

      {/* Main View Router */}
      <div className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenTestDrive={() => setTestDriveOpen(true)}
          />
        )}
        {currentPage === 'vehicle' && (
          <VehiclePage
            onNavigate={navigateTo}
            onOpenTestDrive={() => setTestDriveOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenTestDrive={() => setTestDriveOpen(true)}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={navigateTo}
            onOpenTestDrive={() => setTestDriveOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onOpenTestDrive={() => setTestDriveOpen(true)}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'book' && (
          <BookNowPage
            initialVariantId={selectedVariantId}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenTestDrive={() => setTestDriveOpen(true)}
      />

      {/* Global Reusable Test Drive Request Modal */}
      <TestDriveModal
        isOpen={testDriveOpen}
        onClose={() => setTestDriveOpen(false)}
      />

      {/* Floating Scroll to Top */}
      <ScrollToTopButton />
    </div>
  );
}
