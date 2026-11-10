import React, { useState } from 'react';
import { EXPERIENCE_CENTERS } from '../data/placeholderData';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { MapPin, Phone, Mail, Clock, Calendar, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onOpenTestDrive: () => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenTestDrive, onNavigate }) => {
  const [selectedHub, setSelectedHub] = useState(EXPERIENCE_CENTERS[0]);

  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24">
      {/* 1. Contact Hero */}
      <section className="py-16 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>GET IN TOUCH</span>
              <span aria-hidden="true">·</span>
              <span>EXPERIENCE HUBS & HEADQUARTERS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              [CONTACT INFORMATION]
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed">
              Connect with our brand concierges, locate your nearest experience center, or request private consultations.
            </p>
          </div>

          {/* 2. Contact Information Placeholders Strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#161616] p-6 rounded-xl border border-white/10">
              <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Corporate Headquarters</h3>
              <p className="text-xs text-[#777777] font-mono leading-relaxed">
                [CONTACT INFORMATION: HEADQUARTERS ADDRESS]
              </p>
            </div>

            <div className="bg-[#161616] p-6 rounded-xl border border-white/10">
              <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Customer Care Hub</h3>
              <p className="text-xs text-[#777777] font-mono leading-relaxed">
                [CONTACT INFORMATION: TELEPHONE TOLL FREE]
              </p>
            </div>

            <div className="bg-[#161616] p-6 rounded-xl border border-white/10">
              <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Press & Media</h3>
              <p className="text-xs text-[#777777] font-mono leading-relaxed">
                [CONTACT INFORMATION: PRESS EMAIL]
              </p>
            </div>

            <div className="bg-[#161616] p-6 rounded-xl border border-white/10">
              <div className="w-8 h-8 rounded bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Operational Hours</h3>
              <p className="text-xs text-[#777777] font-mono leading-relaxed">
                [CONTACT INFORMATION: TIMINGS 10:00 AM - 8:00 PM]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* 3. Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* 5. Experience Centers Selector & Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-8">
                <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">LOCATE HUB</span>
                <h3 className="text-xl font-bold text-white mb-4">NERO Experience Centers</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {EXPERIENCE_CENTERS.map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => setSelectedHub(hub)}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                        selectedHub.id === hub.id
                          ? 'bg-[#C6F36B] text-[#101010]'
                          : 'bg-[#101010] text-[#777777] hover:text-white border border-white/10'
                      }`}
                    >
                      {hub.city}
                    </button>
                  ))}
                </div>

                <div className="bg-[#101010] p-5 rounded-xl border border-white/10 space-y-3 text-xs mb-6">
                  <div className="font-bold text-white text-sm">{selectedHub.name}</div>
                  <div className="text-[#777777] font-mono">{selectedHub.addressPlaceholder}</div>
                  <div className="text-[#C6F36B] font-mono">{selectedHub.phonePlaceholder}</div>
                  <div className="text-[#777777]">{selectedHub.hoursPlaceholder}</div>
                </div>

                {/* Simulated Map Visual Placeholder */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#101010] h-48 flex items-center justify-center text-center p-4">
                  <div className="space-y-2">
                    <MapPin className="w-8 h-8 text-[#C6F36B] mx-auto animate-bounce" />
                    <span className="text-xs font-mono text-[#C6F36B] block">
                      [LOCATION MAP PLACEHOLDER — {selectedHub.city.toUpperCase()}]
                    </span>
                    <span className="text-[10px] text-[#777777] block">
                      Interactive Map Coordinates loading in Phase 2
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Test Drive Prompt Card */}
              <div className="bg-gradient-to-r from-[#161616] to-[#202020] p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Prefer a live drive experience?</h4>
                  <p className="text-xs text-[#777777]">Book your priority slot now.</p>
                </div>
                <button
                  onClick={onOpenTestDrive}
                  className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase px-4 py-2.5 rounded shrink-0 transition-colors"
                >
                  Schedule Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
