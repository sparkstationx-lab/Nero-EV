import React from 'react';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { MapPin, Phone, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/officialData';
import { PageId } from '../types';

interface ContactPageProps {
  onOpenTestDrive: () => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenTestDrive, onNavigate }) => {
  return (
    <main className="bg-[#101010] text-[#F7F7F5] pt-24">
      {/* 1. Contact Hero */}
      <section className="py-16 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>OFFICIAL CONTACT & INQUIRIES</span>
              <span aria-hidden="true">·</span>
              <span>NERO EV (EVSUNDAK)</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              CONTACT NERO EV
            </h1>
            <p className="text-[#F7F7F5]/80 text-lg font-light leading-relaxed">
              Have questions regarding NERO EV Executive, charging, delivery, or dealership inquiries? Get in touch with our team.
            </p>
          </div>

          {/* 2. Official Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#161616] p-8 rounded-2xl border border-[#C6F36B]/40 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#C6F36B] uppercase tracking-wider mb-2">Official Helpline Phone</h3>
              <a
                href={`tel:${BRAND.officialPhone}`}
                className="text-xl font-extrabold text-white font-mono hover:text-[#C6F36B] block transition-colors mb-1"
              >
                {BRAND.officialPhone}
              </a>
              <p className="text-xs text-[#777777]">Published official customer contact number.</p>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Support Hours</h3>
              <div className="text-base font-bold text-white font-mono mb-1">10:00 AM – 7:00 PM IST</div>
              <p className="text-xs text-[#777777]">Monday through Saturday.</p>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C6F36B] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Brand Identity</h3>
              <div className="text-base font-bold text-white mb-1">NERO EV (EVSundak)</div>
              <p className="text-xs text-[#777777]">Bharat Ki Apni Electric Car.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* 3. General Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Location / Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#161616] rounded-2xl border border-white/10 p-6 sm:p-8">
                <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">LOCATION & SERVICE</span>
                <h3 className="text-xl font-bold text-white mb-4">NERO EV Experience & Service</h3>
                <p className="text-xs text-[#777777] mb-6 leading-relaxed">
                  Experience center locations and dealership network maps will be updated upon official manufacturer press updates.
                </p>

                {/* Map Visual Placeholder */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#101010] h-56 flex items-center justify-center text-center p-6">
                  <div className="space-y-2">
                    <MapPin className="w-8 h-8 text-[#C6F36B] mx-auto animate-bounce" />
                    <span className="text-xs font-mono text-[#C6F36B] block">
                      [OFFICIAL DEALERSHIP MAP PLACEHOLDER]
                    </span>
                    <span className="text-[10px] text-[#777777] block">
                      Call {BRAND.officialPhone} for regional dealer allocation information.
                    </span>
                  </div>
                </div>
              </div>

              {/* Test Drive Card */}
              <div className="bg-gradient-to-r from-[#161616] to-[#202020] p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Schedule a Test Drive</h4>
                  <p className="text-xs text-[#777777]">Experience NERO EV in person.</p>
                </div>
                <button
                  onClick={onOpenTestDrive}
                  className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase px-4 py-2.5 rounded shrink-0 transition-colors"
                >
                  Book Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
