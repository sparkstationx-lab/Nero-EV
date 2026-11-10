import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Zap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { EXECUTIVE_VARIANT, COLOR_OPTIONS, INDIAN_STATES } from '../../data/officialData';

interface BookingWorkflowProps {
  onNavigateHome: () => void;
}

export const BookingWorkflow: React.FC<BookingWorkflowProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    state: INDIAN_STATES[0],
    city: '',
    preferredColor: COLOR_OPTIONS[0].name,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.firstName.trim()) errs.firstName = 'First Name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last Name is required';

    // 10-digit Indian Mobile Number Validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phone = 'Mobile Number is required';
    } else if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number starting with 6-9';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.city.trim()) errs.city = 'City is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      /* 
        BACKEND INTEGRATION POINT: 
        Replace this simulation with real API request:
        POST https://neroev.in/api/booking-enquiry
        Payload: formData
      */
      const refId = `NERO-ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refId);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {submittedRef ? (
        <div className="bg-[#161616] rounded-2xl border border-[#C6F36B]/60 p-8 sm:p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#C6F36B]/20 text-[#C6F36B] flex items-center justify-center mx-auto mb-6 border border-[#C6F36B]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase text-[#C6F36B] tracking-widest block mb-2">
            ENQUIRY TRANSMITTED SUCCESSFULLY
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-3">Booking Enquiry Submitted</h2>
          <p className="text-xs text-[#777777] max-w-md mx-auto mb-8 leading-relaxed">
            Thank you, <span className="text-white font-bold">{formData.firstName} {formData.lastName}</span>! Your booking enquiry for <span className="text-white font-bold">{EXECUTIVE_VARIANT.name}</span> has been logged.
          </p>

          {/* Submitted Summary Card */}
          <div className="bg-[#101010] p-6 rounded-xl border border-white/10 text-left max-w-md mx-auto mb-8 space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-white/5 font-mono">
              <span className="text-[#777777]">Enquiry Reference:</span>
              <span className="text-[#C6F36B] font-bold">{submittedRef}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-[#777777]">Vehicle Model:</span>
              <span className="text-white font-bold">{EXECUTIVE_VARIANT.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-[#777777]">Listed Price:</span>
              <span className="text-[#C6F36B] font-mono font-bold">{EXECUTIVE_VARIANT.priceFormatted}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-[#777777]">Preferred Color:</span>
              <span className="text-white font-bold">{formData.preferredColor}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#777777]">Location:</span>
              <span className="text-white font-bold">{formData.city}, {formData.state}</span>
            </div>
          </div>

          <div className="bg-[#101010]/80 p-4 rounded-xl border border-white/5 text-[11px] text-[#777777] max-w-md mx-auto mb-8 leading-relaxed">
            <span className="text-amber-400 font-bold block mb-1">Integration Status Note:</span>
            Your request has been formatted for processing. A NERO EV customer representative will contact you via {formData.phone} to confirm availability and dealer allocation.
          </div>

          <button
            onClick={onNavigateHome}
            className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      ) : (
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">
              OFFICIAL ENQUIRY FORM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">NERO EV Booking Enquiry</h2>
            <p className="text-xs text-[#777777] mt-1">
              Fields marked with <span className="text-[#C6F36B]">*</span> are required. Model: <span className="text-white font-bold">{EXECUTIVE_VARIANT.name}</span> ({EXECUTIVE_VARIANT.priceFormatted}).
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  First Name <span className="text-[#C6F36B]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter first name"
                  className={`w-full bg-[#101010] border ${
                    errors.firstName ? 'border-rose-500' : 'border-white/10 focus:border-[#C6F36B]'
                  } text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors`}
                />
                {errors.firstName && (
                  <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.firstName}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  Last Name <span className="text-[#C6F36B]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Enter last name"
                  className={`w-full bg-[#101010] border ${
                    errors.lastName ? 'border-rose-500' : 'border-white/10 focus:border-[#C6F36B]'
                  } text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors`}
                />
                {errors.lastName && (
                  <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.lastName}</span>
                )}
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  Mobile Number <span className="text-[#C6F36B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile (e.g. 9876543210)"
                    className={`w-full bg-[#101010] border ${
                      errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-[#C6F36B]'
                    } text-white text-xs px-4 py-3 rounded focus:outline-none font-mono transition-colors`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.phone}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  Email Address <span className="text-[#C6F36B]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full bg-[#101010] border ${
                    errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#C6F36B]'
                  } text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors`}
                />
                {errors.email && (
                  <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.email}</span>
                )}
              </div>
            </div>

            {/* State & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  State <span className="text-[#C6F36B]">*</span>
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st} className="bg-[#101010] text-white">
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  City <span className="text-[#C6F36B]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Enter your city"
                  className={`w-full bg-[#101010] border ${
                    errors.city ? 'border-rose-500' : 'border-white/10 focus:border-[#C6F36B]'
                  } text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors`}
                />
                {errors.city && (
                  <span className="text-[11px] text-rose-400 font-mono mt-1 block">{errors.city}</span>
                )}
              </div>
            </div>

            {/* Preferred Vehicle Colour */}
            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                Preferred Vehicle Colour <span className="text-[#C6F36B]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {COLOR_OPTIONS.map((col) => (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredColor: col.name })}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2 transition-all ${
                      formData.preferredColor === col.name
                        ? 'border-[#C6F36B] bg-[#C6F36B]/10'
                        : 'border-white/10 bg-[#101010] hover:border-white/30'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="text-xs text-white truncate font-medium">{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Submit Official Booking Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
