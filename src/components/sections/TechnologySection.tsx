import React from 'react';
import { Tv, Monitor, Sliders, ShieldCheck } from 'lucide-react';
import { FadeIn } from '../common/FadeIn';
import { StaggerContainer, StaggerItem } from '../common/StaggerContainer';

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#101010] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <span>05. COCKPIT TECHNOLOGY</span>
              <span aria-hidden="true">·</span>
              <span>DIGITAL INSTRUMENTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              INTELLIGENT DRIVER INFOTAINMENT
            </h2>
            <p className="text-[#F7F7F5]/80 text-base sm:text-lg font-light leading-relaxed">
              NERO EV is equipped with a modern digital cockpit setup featuring dual display units for real-time speed monitoring, range estimation, and multimedia controls.
            </p>
          </div>
        </FadeIn>

        {/* 4 Tech Cards with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Full Digital Cluster</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                High-contrast digital instrument cluster displaying real-time speed, battery level, trip metrics, and alert indicators.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">DRIVER DISPLAY</span>
          </StaggerItem>

          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">10.25" Floating Screen</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                17.78 cm (7-inch) embedded LCD touchscreen display console for media playback and vehicle control settings.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">INFOTAINMENT CONSOLE</span>
          </StaggerItem>

          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Power-Adjustable ORVM</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                Electronic power adjustment for side mirrors allowing easy visibility tweaks directly from the driver seat console.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">POWER MIRRORS</span>
          </StaggerItem>

          <StaggerItem className="bg-[#161616] p-8 rounded-xl border border-white/10 hover:border-[#C6F36B]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C6F36B]/10 text-[#C6F36B] flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reverse Parking Sensors</h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                Rear proximity ultrasonic sensors providing acoustic beep guidance for tight urban parking spots.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#C6F36B] uppercase">PARK ASSIST</span>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
