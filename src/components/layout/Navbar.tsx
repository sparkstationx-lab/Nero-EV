import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { PageId } from '../../types';
import { BRAND } from '../../data/officialData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenTestDrive }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'vehicle', label: 'Vehicle' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'emi', label: 'EMI Calculator' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-[#F7F7F5] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F36B] rounded-sm shrink-0"
        >
          <div className="w-8 h-8 rounded bg-[#C6F36B] flex items-center justify-center text-[#101010] font-extrabold text-sm tracking-tighter">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-extrabold tracking-widest text-white uppercase font-sans">
            NERO <span className="text-[#C6F36B] font-light">EV</span>
          </span>
        </button>

        {/* Zone 2: 4-5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'border-[#C6F36B] text-[#C6F36B] font-semibold'
                    : 'border-transparent text-[#F7F7F5]/80 hover:text-white hover:border-white/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenTestDrive}
            className="text-xs font-semibold tracking-wider uppercase text-[#F7F7F5]/90 hover:text-white transition-colors px-3 py-2"
          >
            Test Drive
          </button>
          <button
            onClick={() => handleNavClick('book')}
            className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#C6F36B]/20 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Book Now</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => handleNavClick('book')}
            className="bg-[#C6F36B] text-[#101010] font-bold text-xs uppercase px-3 py-1.5 rounded"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none rounded hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C6F36B]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#101010]/98 border-b border-white/10 backdrop-blur-xl px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${
                currentPage === item.id ? 'text-[#C6F36B] font-bold' : 'text-[#F7F7F5]/80'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestDrive();
              }}
              className="w-full border border-white/20 hover:border-white text-white text-center font-semibold text-xs uppercase py-3 rounded transition-colors"
            >
              Request Test Drive
            </button>
            <button
              onClick={() => handleNavClick('book')}
              className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] text-center font-bold text-xs uppercase py-3 rounded transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
