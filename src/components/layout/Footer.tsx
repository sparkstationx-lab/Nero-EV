import React, { useState } from 'react';
import { Zap, ArrowUp, ArrowRight, CheckCircle2, Phone, Shield } from 'lucide-react';
import { PageId } from '../../types';
import { BRAND, EXECUTIVE_VARIANT } from '../../data/officialData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenTestDrive: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTestDrive }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F7F7F5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-[#C6F36B] flex items-center justify-center text-[#101010] font-extrabold text-sm">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <span className="text-2xl font-extrabold tracking-widest text-white uppercase font-sans">
                  NERO <span className="text-[#C6F36B] font-light">EV</span>
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-[#C6F36B] uppercase mb-3">
                {BRAND.tagline} ({BRAND.identity})
              </div>
              <p className="text-[#777777] text-xs leading-relaxed max-w-sm mb-6">
                {BRAND.positioning} {BRAND.philosophy} Engineered for practical urban transportation across Indian cities.
              </p>

              {/* Official Phone Contact */}
              <div className="flex items-center gap-3 bg-[#161616] p-3 rounded.lg border border-white/10 max-w-xs mb-6">
                <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#777777] uppercase font-mono block">Official Helpline</span>
                  <a href={`tel:${BRAND.officialPhone}`} className="text-sm font-bold text-white font-mono hover:text-[#C6F36B]">
                    {BRAND.officialPhone}
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="max-w-md">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#C6F36B] mb-2">
                  Stay Updated on NERO EV Announcements
                </span>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs text-[#C6F36B] bg-[#C6F36B]/10 p-3 rounded border border-[#C6F36B]/30">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Subscribed for official updates.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      required
                      className="bg-[#161616] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-2.5 rounded focus:outline-none w-full transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase px-4 py-2.5 rounded transition-colors flex items-center gap-1 shrink-0"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6F36B] mb-4">Site Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="text-[#777777] hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vehicle')} className="text-[#777777] hover:text-white transition-colors">
                  Vehicle Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-[#777777] hover:text-white transition-colors">
                  About NERO EV
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="text-[#777777] hover:text-white transition-colors">
                  Visual Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('emi')} className="text-[#777777] hover:text-white transition-colors">
                  EMI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-[#777777] hover:text-white transition-colors">
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Model & Reservation Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6F36B] mb-4">Official Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('vehicle')} className="text-white font-bold hover:text-[#C6F36B] transition-colors">
                  NERO EV Executive
                </button>
              </li>
              <li className="text-[#777777]">
                Listed Price: <span className="text-[#C6F36B] font-mono font-bold">{EXECUTIVE_VARIANT.priceFormatted}</span>
              </li>
              <li>
                <button onClick={() => onNavigate('book')} className="text-[#777777] hover:text-white transition-colors">
                  Submit Booking Enquiry
                </button>
              </li>
              <li>
                <button onClick={onOpenTestDrive} className="text-[#777777] hover:text-white transition-colors">
                  Schedule Test Drive
                </button>
              </li>
            </ul>
          </div>

          {/* Official Positioning Summary Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6F36B] mb-4">Brand Pillars</h4>
            <ul className="space-y-2 text-xs text-[#777777] leading-relaxed">
              <li className="flex items-center gap-1.5 text-white/90">
                <Shield className="w-3.5 h-3.5 text-[#C6F36B]" />
                <span>Built for Bharat</span>
              </li>
              <li>Affordable electric mobility for Indian families</li>
              <li>Practical 4-seater urban transportation</li>
              <li>Claimed range: 150–200 km</li>
              <li>Charging duration: 5–6 Hours</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            © {new Date().getFullYear()} NERO EV ({BRAND.identity}). ALL RIGHTS RESERVED. Official site: neroev.in
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Notice</span>
            <span className="hover:text-white transition-colors cursor-pointer">Enquiry Terms</span>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-[#161616] hover:bg-[#C6F36B] hover:text-[#101010] text-[#F7F7F5] flex items-center justify-center transition-all duration-200 ml-4 border border-white/10"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
