import React, { useState } from 'react';
import { Sliders, Thermometer, Gauge, Disc, Fan } from 'lucide-react';

export const InteractiveRangeCalculator: React.FC = () => {
  const [speed, setSpeed] = useState<number>(70);
  const [temp, setTemp] = useState<number>(30);
  const [wheelSize, setWheelSize] = useState<number>(20);
  const [climateOn, setClimateOn] = useState<boolean>(true);

  // Dynamic range calculation simulator formula
  const baseRange = 650;
  const speedImpact = (speed - 60) * 2.8;
  const tempImpact = temp > 35 ? (temp - 35) * 3 : temp < 15 ? (15 - temp) * 4 : 0;
  const wheelImpact = (wheelSize - 19) * 12;
  const climateImpact = climateOn ? 25 : 0;

  const estimatedRange = Math.max(350, Math.round(baseRange - speedImpact - tempImpact - wheelImpact - climateImpact));

  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
                <Sliders className="w-4 h-4" />
                <span>INTERACTIVE RANGE ESTIMATOR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                [TECHNICAL SPECIFICATIONS: DYNAMIC RANGE CALCULATOR]
              </h2>
            </div>
            <p className="text-[#777777] text-sm max-w-md leading-relaxed">
              [VEHICLE DESCRIPTION] · Adjust driving conditions below to simulate real-world battery range performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Range Result Display */}
            <div className="lg:col-span-5 bg-[#101010] p-8 sm:p-10 rounded-xl border border-white/10 flex flex-col justify-between text-center lg:text-left">
              <div>
                <span className="text-xs font-mono uppercase text-[#777777] block mb-2">Estimated Real-World Range</span>
                <div className="text-5xl sm:text-6xl font-extrabold text-[#C6F36B] font-mono tracking-tight mb-2 tabular-nums">
                  {estimatedRange} <span className="text-2xl text-white font-sans font-normal">KM</span>
                </div>
                <div className="text-xs text-[#777777] font-mono mb-6">[SPECIFICATION VALUE: CLTC BENCHMARK]</div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-[#777777]">
                <div className="flex justify-between">
                  <span>Battery Usable Output:</span>
                  <span className="text-white font-mono">[SPECIFICATION VALUE]</span>
                </div>
                <div className="flex justify-between">
                  <span>Energy Consumption:</span>
                  <span className="text-white font-mono">[SPECIFICATION VALUE]</span>
                </div>
              </div>
            </div>

            {/* Interactive Sliders */}
            <div className="lg:col-span-7 space-y-8">
              {/* Speed Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#C6F36B]" />
                    <span>Cruising Speed</span>
                  </span>
                  <span className="font-mono text-[#C6F36B]">{speed} km/h</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full accent-[#C6F36B] bg-[#101010] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Temperature Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-[#C6F36B]" />
                    <span>Ambient Temperature</span>
                  </span>
                  <span className="font-mono text-[#C6F36B]">{temp}°C</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="48"
                  value={temp}
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-full accent-[#C6F36B] bg-[#101010] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Wheel Size & Climate Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Wheel Size */}
                <div className="bg-[#101010] p-4 rounded-xl border border-white/10">
                  <span className="text-xs text-[#777777] font-mono block mb-2">Wheel Size</span>
                  <div className="flex gap-2">
                    {[19, 20, 21].map((size) => (
                      <button
                        key={size}
                        onClick={() => setWheelSize(size)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded ${
                          wheelSize === size
                            ? 'bg-[#C6F36B] text-[#101010]'
                            : 'bg-[#161616] text-white hover:bg-white/10'
                        }`}
                      >
                        {size}"
                      </button>
                    ))}
                  </div>
                </div>

                {/* Climate Control */}
                <div className="bg-[#101010] p-4 rounded-xl border border-white/10">
                  <span className="text-xs text-[#777777] font-mono block mb-2">Climate Control (A/C)</span>
                  <button
                    onClick={() => setClimateOn(!climateOn)}
                    className={`w-full py-1.5 text-xs font-bold rounded flex items-center justify-center gap-2 ${
                      climateOn ? 'bg-[#C6F36B] text-[#101010]' : 'bg-[#161616] text-white hover:bg-white/10'
                    }`}
                  >
                    <Fan className="w-3.5 h-3.5" />
                    <span>{climateOn ? 'A/C Active (ON)' : 'A/C Off'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
