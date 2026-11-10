import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { BRAND } from '../../data/officialData';

export const EnquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 sm:p-10 shadow-2xl">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-[#C6F36B]/20 text-[#C6F36B] flex items-center justify-center mx-auto mb-6 border border-[#C6F36B]/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Enquiry Transmitted</h3>
          <p className="text-xs text-[#777777] max-w-md mx-auto mb-6 leading-relaxed">
            Thank you for contacting NERO EV. Our customer relations team will contact you directly via your provided mobile number or email.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-[#C6F36B] block mb-1">
              OFFICIAL CONTACT FORM
            </span>
            <h3 className="text-2xl font-extrabold text-white mb-2">Send NERO EV an Enquiry</h3>
            <p className="text-xs text-[#777777]">
              Have questions regarding NERO EV Executive, charging, or test drives? Speak to us directly at <span className="text-white font-mono font-bold">{BRAND.officialPhone}</span> or submit your message below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                Full Name <span className="text-[#C6F36B]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">
                Email Address <span className="text-[#C6F36B]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@domain.com"
                className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">Inquiry Type</label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
              >
                <option value="General Enquiry">General Product Enquiry</option>
                <option value="Test Drive">Test Drive Request</option>
                <option value="Dealership / Partner">Dealership Opportunity</option>
                <option value="Fleet Order">Corporate / Fleet Order</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-white mb-1.5">
              Message <span className="text-[#C6F36B]">*</span>
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide details about your query..."
              className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C6F36B] hover:bg-[#b5e656] text-[#101010] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>Submit Official Enquiry</span>
          </button>
        </form>
      )}
    </div>
  );
};
