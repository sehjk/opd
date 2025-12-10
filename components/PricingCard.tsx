import React from 'react';
import { PLAN_DETAILS } from '../constants';
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface PricingCardProps {
  currentBill: number;
  lang: Language;
}

export const PricingCard: React.FC<PricingCardProps> = ({ currentBill, lang }) => {
  const topUpAmount = Math.max(0, PLAN_DETAILS.MRP - currentBill);
  const t = TRANSLATIONS[lang].pricing;

  return (
    <div className="max-w-md mx-auto px-6 py-4">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-slate-900 font-bold text-xl">{t.title}</h2>
        <p className="text-xs text-slate-500 text-center max-w-[280px] mt-1">
          {t.subtitle}
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative">
        <div className="p-0">
          
          {/* Section 1: The Baseline (Current Bill) */}
          <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
             <span className="text-sm font-bold text-slate-500">{t.currentBill}</span>
             <span className="text-lg font-bold text-slate-500">₹{currentBill}</span>
          </div>

          {/* Section 2: The Upgrade (The Focus) */}
          <div className="p-5 relative">
             <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white border border-slate-200 rounded-full p-1 shadow-sm text-slate-400 z-10">
                <ArrowDown size={14} />
             </div>

             <div className="bg-teal-50 border-2 border-dashed border-teal-200 rounded-xl p-4 text-center relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-0 right-0 bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                   Smart Choice
                </div>

                <p className="text-xs text-teal-700 font-semibold mb-1">{t.upgradeText}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                   <span className="text-3xl font-black text-teal-600 tracking-tight">₹{topUpAmount}</span>
                </div>
                <div className="h-px w-full bg-teal-200/50 mb-2"></div>
                
                {/* The Reward */}
                <div className="flex items-center justify-center gap-2">
                   <Sparkles size={16} className="text-yellow-500 fill-yellow-500 animate-pulse" />
                   <span className="text-sm font-bold text-slate-800">{t.benefit}</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">{t.benefitText}</p>
             </div>
          </div>

          {/* Section 3: The Result (Total) */}
          <div className="px-5 py-4 bg-slate-900 flex justify-between items-center text-white">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium">{t.total}</span>
              <span className="text-xs text-slate-500">({t.currentBill} + {t.upgradeFee})</span>
            </div>
            <div className="text-right">
              <span className="block text-2xl font-bold tracking-tight">
                ₹{PLAN_DETAILS.MRP}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-4 px-2 space-y-2 text-center">
        <p className="text-[10px] text-slate-400">
          {t.cancellation}
        </p>
      </div>
    </div>
  );
};