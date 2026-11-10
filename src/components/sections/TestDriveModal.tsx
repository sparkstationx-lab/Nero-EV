import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, User, Mail, Phone, Clock } from 'lucide-react';
import { INDIAN_STATES, BRAND } from '../../data/officialData';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: INDIAN_STATES[0],
    city: '',
    preferredDate: '',
    comments: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#161616] border border-white/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#777777] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#C6F36B]/20 text-[#C6F36B] flex items-center justify-center mx-auto mb-6 border border-[#C6F36B]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Test Drive Request Logged</h3>
            <p className="text-xs text-[#777777] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you! A NERO EV representative will reach out to you via <span className="text-white font-mono">{formData.phone}</span> to confirm your test drive details in {formData.city}.
            </p>
            <div className="bg-[#101010] p-4 rounded-xl border border-white/10 text-xs text-[#C6F36B] font-mono mb-8">
              REFERENCE TD ID: #NERO-TD-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={resetForm}
              className="bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-bold text-xs uppercase tracking-wider px-8 py-3 rounded transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">
                NERO EV TEST DRIVE
              </span>
              <h3 className="text-2xl font-extrabold text-white">Book Your Test Drive</h3>
              <p className="text-xs text-[#777777] mt-1">
                Experience NERO EV Executive — Bharat Ki Apni Electric Car in person.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                  Full Name <span className="text-[#C6F36B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                    Email Address <span className="text-[#C6F36B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                    Mobile Number <span className="text-[#C6F36B]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-white mb-1.5">State</label>
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
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Enter city name"
                    className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Comments (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Any specific feature or location request..."
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all shadow-lg"
                >
                  Submit Test Drive Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
