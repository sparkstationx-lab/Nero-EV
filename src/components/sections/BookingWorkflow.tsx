import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { VEHICLE_VARIANTS, VEHICLE_COLORS, EXPERIENCE_CENTERS } from '../../data/placeholderData';

interface BookingWorkflowProps {
  initialVariantId?: string;
  onNavigateHome: () => void;
}

export const BookingWorkflow: React.FC<BookingWorkflowProps> = ({
  initialVariantId,
  onNavigateHome,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState(
    VEHICLE_VARIANTS.find((v) => v.id === initialVariantId) || VEHICLE_VARIANTS[0]
  );
  const [selectedColor, setSelectedColor] = useState(VEHICLE_COLORS[0]);
  const [selectedCity, setSelectedCity] = useState(EXPERIENCE_CENTERS[0].city);
  const [selectedCenter, setSelectedCenter] = useState(EXPERIENCE_CENTERS[0].name);

  const [customerDetails, setCustomerDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    pinCode: '',
    termsAccepted: false,
  });

  const [bookingReference, setBookingReference] = useState<string>('');

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const centerObj = EXPERIENCE_CENTERS.find((c) => c.city === city);
    if (centerObj) {
      setSelectedCenter(centerObj.name);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerDetails.termsAccepted) return;
    const ref = `NERO-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingReference(ref);
    setStep(5);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Step Tracker Header */}
      {step < 5 && (
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-4">
            <span className="text-[#C6F36B] font-bold">PRE-BOOKING WIZARD — STEP 0{step} OF 04</span>
            <span>PHASE 1 SECURE RESERVATION</span>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                  s <= step ? 'bg-[#C6F36B]' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* STEP 1: Vehicle & Variant Selection */}
      {step === 1 && (
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">STEP 1 OF 4</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Select Vehicle Variant</h2>
            <p className="text-xs text-[#777777] mt-1">
              Choose your preferred NERO EV model profile. Fully refundable Phase 1 reservation deposit.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {VEHICLE_VARIANTS.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              return (
                <div
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isSelected
                      ? 'border-[#C6F36B] bg-[#C6F36B]/10 shadow-lg'
                      : 'border-white/10 hover:border-white/30 bg-[#101010]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{variant.name}</h3>
                      <span className="text-[10px] font-mono bg-[#C6F36B] text-[#101010] px-2 py-0.5 rounded font-bold">
                        {variant.badge}
                      </span>
                    </div>
                    <div className="text-xs text-[#777777] font-mono">
                      {variant.range} · {variant.acceleration}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-[#C6F36B] font-mono">{variant.pricePlaceholder}</div>
                      <div className="text-[10px] text-[#777777] font-mono">EST. DELIVERIES PHASE 2</div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#C6F36B] bg-[#C6F36B] text-[#101010]' : 'border-white/20'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Proceed to Color Customization</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: Preferred Colour Selection */}
      {step === 2 && (
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">STEP 2 OF 4</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Select Preferred Exterior Finish</h2>
            <p className="text-xs text-[#777777] mt-1">
              Select your color preference for <span className="text-white font-bold">{selectedVariant.name}</span>.
            </p>
          </div>

          {/* Color Preview Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video mb-8 shadow-xl">
            <img
              src={selectedColor.image}
              alt={selectedColor.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-[#C6F36B]">
              PREVIEW: {selectedColor.name}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {VEHICLE_COLORS.map((c) => {
              const isSelected = selectedColor.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c)}
                  className={`p-4 rounded-xl border transition-all text-left flex items-center gap-3 ${
                    isSelected
                      ? 'border-[#C6F36B] bg-[#C6F36B]/10'
                      : 'border-white/10 hover:border-white/30 bg-[#101010]'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: c.hex }}
                  >
                    {isSelected && (
                      <Check className={`w-4 h-4 ${c.hex === '#EAEAEA' || c.hex === '#C6F36B' ? 'text-black' : 'text-white'}`} />
                    )}
                  </div>
                  <span className="text-xs font-bold text-white truncate">{c.name}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="w-1/3 border border-white/20 hover:border-white text-white text-xs font-bold uppercase py-4 rounded transition-colors flex items-center justify-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={() => setStep(3)}
              className="w-2/3 bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Proceed to Delivery Hub</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Location Details */}
      {step === 3 && (
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">STEP 3 OF 4</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Select Location & Hub</h2>
            <p className="text-xs text-[#777777] mt-1">
              Select your city and nearest NERO Experience Center for pre-delivery handover.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-2">Preferred Metro City</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {EXPERIENCE_CENTERS.map((hub) => (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => handleCityChange(hub.city)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                      selectedCity === hub.city
                        ? 'border-[#C6F36B] bg-[#C6F36B] text-[#101010]'
                        : 'border-white/10 bg-[#101010] text-white hover:bg-white/10'
                    }`}
                  >
                    {hub.city}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-2">Selected Experience Center</label>
              <div className="bg-[#101010] p-5 rounded-xl border border-white/10">
                <div className="text-sm font-bold text-white mb-1">{selectedCenter}</div>
                <div className="text-xs text-[#777777] font-mono">
                  [CONTACT INFORMATION: EXPERIENCE CENTER ADDRESS]
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="w-1/3 border border-white/20 hover:border-white text-white text-xs font-bold uppercase py-4 rounded transition-colors flex items-center justify-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={() => setStep(4)}
              className="w-2/3 bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Proceed to Customer Details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Customer Details Form */}
      {step === 4 && (
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">STEP 4 OF 4</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Customer Details & Pre-Booking</h2>
            <p className="text-xs text-[#777777] mt-1">
              Enter your details to generate your official NERO EV Phase 1 pre-reservation receipt.
            </p>
          </div>

          <form onSubmit={handleFinalSubmit} className="space-y-4 mb-8">
            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={customerDetails.fullName}
                onChange={(e) => setCustomerDetails({ ...customerDetails, fullName: e.target.value })}
                placeholder="Enter full legal name"
                className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Mobile Phone</label>
                <input
                  type="tel"
                  required
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">Postal Pincode</label>
              <input
                type="text"
                required
                value={customerDetails.pinCode}
                onChange={(e) => setCustomerDetails({ ...customerDetails, pinCode: e.target.value })}
                placeholder="400001"
                className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={customerDetails.termsAccepted}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, termsAccepted: e.target.checked })}
                  className="mt-0.5 accent-[#C6F36B] w-4 h-4"
                />
                <span className="text-xs text-[#777777] leading-relaxed">
                  I accept the Phase 1 Pre-Reservation terms. I understand that actual specs, pricing, and official vehicle configuration options will be finalized in Phase 2.
                </span>
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-1/3 border border-white/20 hover:border-white text-white text-xs font-bold uppercase py-4 rounded transition-colors flex items-center justify-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={!customerDetails.termsAccepted}
                className="w-2/3 bg-[#C6F36B] hover:bg-[#b5e656] disabled:opacity-50 text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Confirm Reservation & Generate Receipt</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 5: Booking Confirmation UI */}
      {step === 5 && (
        <div className="bg-[#161616] rounded-2xl border border-[#C6F36B]/50 p-8 sm:p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-full bg-[#C6F36B]/20 text-[#C6F36B] flex items-center justify-center mx-auto mb-6 border border-[#C6F36B]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-mono uppercase text-[#C6F36B] tracking-widest block mb-2">
            RESERVATION CONFIRMED — PHASE 1
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Welcome to NERO EV</h2>
          <p className="text-sm text-[#777777] max-w-md mx-auto mb-8">
            Your pre-booking record has been created. A confirmation receipt has been generated for {customerDetails.fullName}.
          </p>

          {/* Receipt Breakdown Card */}
          <div className="bg-[#101010] p-6 rounded-xl border border-white/10 text-left max-w-lg mx-auto mb-8 space-y-3">
            <div className="flex justify-between text-xs py-1 border-b border-white/5">
              <span className="text-[#777777] font-mono">Reference ID:</span>
              <span className="text-[#C6F36B] font-mono font-bold">{bookingReference}</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-white/5">
              <span className="text-[#777777]">Selected Variant:</span>
              <span className="text-white font-bold">{selectedVariant.name}</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-white/5">
              <span className="text-[#777777]">Selected Colour:</span>
              <span className="text-white font-bold">{selectedColor.name}</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-white/5">
              <span className="text-[#777777]">Delivery Hub:</span>
              <span className="text-white font-bold">{selectedCity} — {selectedCenter}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span className="text-[#777777]">Phase 1 Deposit Status:</span>
              <span className="text-[#C6F36B] font-mono font-bold">FULLY REFUNDABLE RESERVATION</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onNavigateHome}
              className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-colors"
            >
              Return to Home Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
