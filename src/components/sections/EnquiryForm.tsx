import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

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
          <p className="text-sm text-[#777777] max-w-md mx-auto mb-6">
            Thank you for reaching out to NERO EV. Our customer relations team will respond via email within 12 business hours.
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
              [CONTACT INFORMATION: CUSTOMER ENQUIRY]
            </span>
            <h3 className="text-2xl font-extrabold text-white mb-2">Send an Enquiry</h3>
            <p className="text-xs text-[#777777]">
              Have questions regarding vehicle specifications, experience center visits, or fleet pre-orders? Send us a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">Full Name</label>
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
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">Email Address</label>
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
              <label className="block text-xs font-semibold uppercase text-white mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-[#101010] border border-white/10 focus:border-[#C6F36B] text-white text-xs px-4 py-3 rounded focus:outline-none transition-colors"
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
                <option value="Dealership / Partner">Dealership / Franchise Opportunity</option>
                <option value="Fleet Order">Corporate / Fleet Pre-Order</option>
                <option value="Press / Media">Press & Media Relations</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-white mb-1.5">Message / Details</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide specific details about your query..."
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
