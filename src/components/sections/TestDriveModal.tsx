import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, User, Mail, Phone, Clock } from 'lucide-react';
import { EXPERIENCE_CENTERS } from '../../data/placeholderData';

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
    city: 'Mumbai',
    preferredDate: '',
    experienceCenter: EXPERIENCE_CENTERS[0].name,
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
            <h3 className="text-2xl font-bold text-white mb-2">Test Drive Request Received</h3>
            <p className="text-sm text-[#777777] max-w-md mx-auto mb-6">
              Thank you! Our NERO Experience Concierge will reach out within 24 hours to confirm your test drive slot in {formData.city}.
            </p>
            <div className="bg-[#101010] p-4 rounded-xl border border-white/10 text-xs text-[#C6F36B] font-mono mb-8">
              REFERENCE SLOT ID: #NERO-TD-{Math.floor(100000 + Math.random() * 900000)}
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
              <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">Schedule Experience</span>
              <h3 className="text-2xl font-extrabold text-white">Book Your NERO EV Test Drive</h3>
              <p className="text-xs text-[#777777] mt-1">
                Select your preferred experience hub and slot to experience the luxury electric performance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-white mb-1.5">Email Address</label>
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
                  <label className="block text-xs font-semibold uppercase text-white mb-1.5">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-white mb-1.5">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => {
                      const newCity = e.target.value;
                      const center = EXPERIENCE_CENTERS.find((c) => c.city === newCity)?.name || EXPERIENCE_CENTERS[0].name;
                      setFormData({ ...formData, city: newCity, experienceCenter: center });
                    }}
                    className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                  >
                    {EXPERIENCE_CENTERS.map((c) => (
                      <option key={c.id} value={c.city} className="bg-[#101010] text-white">
                        {c.city}
                      </option>
                    ))}
                  </select>
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
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Nearest Experience Center</label>
                <input
                  type="text"
                  readOnly
                  value={formData.experienceCenter}
                  className="w-full bg-[#101010]/60 border border-white/10 text-[#C6F36B] font-mono text-xs px-4 py-3 rounded cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-white mb-1.5">Additional Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Tell us any specific features you wish to experience..."
                  className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all shadow-lg"
                >
                  Submit Test Drive Booking Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
