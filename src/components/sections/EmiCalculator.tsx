import React, { useState } from 'react';
import { Calculator, IndianRupee, Percent, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';
import { EXECUTIVE_VARIANT } from '../../data/officialData';

export const EmiCalculator: React.FC = () => {
  // Default values based on NERO EV Executive price ₹6,51,000
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  // Reducing Balance EMI Math
  const principal = loanAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let monthlyEmi = 0;
  if (monthlyRate > 0 && totalMonths > 0) {
    monthlyEmi = Math.round(
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  } else {
    monthlyEmi = Math.round(principal / (totalMonths || 1));
  }

  const totalPayment = Math.round(monthlyEmi * totalMonths);
  const totalInterest = Math.max(0, totalPayment - principal);

  const principalPercentage = totalPayment > 0 ? Math.round((principal / totalPayment) * 100) : 100;
  const interestPercentage = 100 - principalPercentage;

  const formatRs = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section className="py-24 bg-[#0D0D0D] text-[#F7F7F5] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6F36B] font-mono mb-3">
              <Calculator className="w-4 h-4" />
              <span>FINANCIAL PLANNING</span>
              <span aria-hidden="true">·</span>
              <span>REDUCING BALANCE FORMULA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              NERO EV EMI CALCULATOR
            </h2>
          </div>
          <p className="text-[#777777] text-sm max-w-md leading-relaxed">
            Calculate your estimated monthly installment for NERO EV Executive (Listed at {EXECUTIVE_VARIANT.priceFormatted}).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#161616] p-8 sm:p-10 rounded-2xl border border-white/10 space-y-8 shadow-2xl">
            {/* Quick Loan Amount Preset */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase text-white">Preset Vehicle Price:</span>
              <button
                type="button"
                onClick={() => setLoanAmount(EXECUTIVE_VARIANT.priceRaw)}
                className="text-xs font-mono text-[#C6F36B] bg-[#C6F36B]/10 hover:bg-[#C6F36B]/20 border border-[#C6F36B]/30 px-3 py-1 rounded transition-colors"
              >
                Set 100% Loan ({EXECUTIVE_VARIANT.priceFormatted})
              </button>
            </div>

            {/* Input 1: Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-[#C6F36B]" />
                  <span>Loan Amount</span>
                </label>
                <span className="text-lg font-bold font-mono text-[#C6F36B]">
                  {formatRs(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max={EXECUTIVE_VARIANT.priceRaw}
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-[#C6F36B] bg-[#101010] h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#777777] mt-1">
                <span>₹1,00,000</span>
                <span>{EXECUTIVE_VARIANT.priceFormatted}</span>
              </div>
            </div>

            {/* Input 2: Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-[#C6F36B]" />
                  <span>Annual Interest Rate (p.a.)</span>
                </label>
                <span className="text-lg font-bold font-mono text-[#C6F36B]">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="6.5"
                max="16"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#C6F36B] bg-[#101010] h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#777777] mt-1">
                <span>6.5%</span>
                <span>16.0%</span>
              </div>
            </div>

            {/* Input 3: Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6F36B]" />
                  <span>Loan Tenure</span>
                </label>
                <span className="text-lg font-bold font-mono text-[#C6F36B]">
                  {tenureYears} Years ({totalMonths} Months)
                </span>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTenureYears(yr)}
                    className={`py-2 text-xs font-bold font-mono rounded transition-all ${
                      tenureYears === yr
                        ? 'bg-[#C6F36B] text-[#101010] shadow-md'
                        : 'bg-[#101010] text-[#777777] hover:text-white border border-white/5'
                    }`}
                  >
                    {yr} Yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card & Visual Breakdown */}
          <div className="lg:col-span-5 bg-[#101010] p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 shadow-2xl">
            <div>
              <span className="text-xs font-mono uppercase text-[#777777] block mb-1">Estimated Monthly EMI</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#C6F36B] font-mono tracking-tight mb-2">
                {formatRs(monthlyEmi)} <span className="text-sm text-white font-sans font-normal">/ month</span>
              </div>
              <p className="text-[11px] text-[#777777]">
                Calculated using reducing balance method for {totalMonths} monthly installments.
              </p>
            </div>

            {/* Key Breakdown Details */}
            <div className="space-y-3 pt-6 border-t border-white/10 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#777777]">Principal Amount:</span>
                <span className="text-white font-mono font-bold">{formatRs(principal)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#777777]">Total Interest Payable:</span>
                <span className="text-[#C6F36B] font-mono font-bold">{formatRs(totalInterest)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white font-bold">Total Amount Repayable:</span>
                <span className="text-white font-mono font-bold text-sm">{formatRs(totalPayment)}</span>
              </div>
            </div>

            {/* Visual Progress Bar Chart */}
            <div>
              <div className="flex justify-between text-[11px] font-mono mb-2">
                <span className="text-white">Principal ({principalPercentage}%)</span>
                <span className="text-[#C6F36B]">Interest ({interestPercentage}%)</span>
              </div>
              <div className="w-full h-3 bg-[#161616] rounded-full overflow-hidden flex border border-white/10">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${principalPercentage}%` }}
                />
                <div
                  className="h-full bg-[#C6F36B] transition-all duration-500"
                  style={{ width: `${interestPercentage}%` }}
                />
              </div>
            </div>

            <div className="text-[10px] text-[#777777] leading-relaxed pt-2 border-t border-white/5">
              * Note: Indicative EMI calculation for reference. Bank interest rates and processing fees vary subject to lender terms.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
