import React, { useState } from 'react';
import { Zap, ArrowUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../../types';

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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-[#C6F36B] flex items-center justify-center text-[#101010] font-extrabold text-sm">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <span className="text-2xl font-extrabold tracking-widest text-white uppercase font-sans">
                  NERO <span className="text-[#C6F36B] font-light">EV</span>
                </span>
              </div>
              <p className="text-[#777777] text-sm leading-relaxed max-w-sm mb-6">
                [COMPANY INFORMATION] · Crafting the future of Indian luxury electric mobility. Engineering performance, sustainability, and intelligent technology.
              </p>

              {/* Newsletter Subscription */}
              <div className="max-w-md">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#C6F36B] mb-2">
                  Stay Informed — Phase 2 Updates
                </span>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs text-[#C6F36B] bg-[#C6F36B]/10 p-3 rounded border border-[#C6F36B]/30">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Subscribed for official Phase 2 announcements.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6F36B] mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
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
                <button onClick={() => onNavigate('contact')} className="text-[#777777] hover:text-white transition-colors">
                  Contact & Hubs
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6F36B] mb-4">Reserve & Test Drive</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('book')} className="text-[#777777] hover:text-white transition-colors">
                  Pre-Book NERO EV
                </button>
              </li>
              <li>
                <button onClick={onOpenTestDrive} className="text-[#777777] hover:text-white transition-colors">
                  Schedule Test Drive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vehicle')} className="text-[#777777] hover:text-white transition-colors">
                  Compare Variants
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-[#777777] hover:text-white transition-colors">
                  Experience Centers
                </button>
              </li>
            </ul>
          </div>

          {/* Phase 1 Disclaimer & Info Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C6F36B] mb-4">Phase 1 Architecture</h4>
            <p className="text-xs text-[#777777] leading-relaxed mb-4">
              [COMPANY INFORMATION]
            </p>
            <p className="text-xs text-[#777777]/80 leading-relaxed border-l-2 border-[#C6F36B] pl-3 py-1">
              Phase 1 Preview: Structural placeholders active. Complete technical data, launch pricing, and production specs will arrive in Phase 2.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            © {new Date().getFullYear()} NERO EV INDIA. ALL RIGHTS RESERVED. [COMPANY INFORMATION]
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Reservation</span>
            <span className="hover:text-white transition-colors cursor-pointer">Phase 1 Blueprint</span>

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
