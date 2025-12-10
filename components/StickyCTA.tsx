import React from 'react';
import { ArrowRight, Lock, Sparkles, ClipboardList, Ban } from 'lucide-react';
import { PLAN_DETAILS } from '../constants';
import { TRANSLATIONS, Language } from '../translations';

interface StickyCTAProps {
  currentBill: number;
  isEligible: boolean;
  isIneligible: boolean;
  isExpired: boolean;
  onAction: () => void;
  lang: Language;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ currentBill, isEligible, isIneligible, isExpired, onAction, lang }) => {
  const topUpAmount = Math.max(0, PLAN_DETAILS.MRP - currentBill);
  const t = TRANSLATIONS[lang].sticky;

  return (
    <div className={`fixed bottom-0 left-0 right-0 border-t px-6 py-4 sm:px-8 sm:py-5 shadow-[0_-4px_30px_rgba(0,0,0,0.08)] z-40 transition-colors
      ${isExpired ? 'bg-slate-100 border-slate-200' : 'bg-white border-slate-200'}
    `}>
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className={`text-2xl font-extrabold leading-none whitespace-nowrap ${isExpired ? 'text-slate-400' : 'text-slate-900'}`}>
              {isExpired 
                ? t.expired 
                : isEligible 
                  ? t.mainText(PLAN_DETAILS.MRP) 
                  : t.checkText
              }
            </span>
          </div>
          {isEligible && !isExpired && (
            <div className="flex items-center gap-1.5 mt-1.5 overflow-hidden">
               <Sparkles size={12} className="text-teal-500 shrink-0" />
               <p className="text-sm font-bold text-teal-700 truncate tracking-wide">
                 {t.subText(topUpAmount)}
               </p>
            </div>
          )}
        </div>
        
        <button 
          disabled={isIneligible || isExpired}
          className={`shrink-0 px-6 py-3.5 rounded-2xl font-bold text-base flex items-center gap-2 transition-all duration-300 shadow-xl
            ${isExpired 
               ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
               : isIneligible 
                 ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                 : isEligible
                   ? 'bg-slate-900 hover:bg-slate-800 hover:shadow-slate-900/40 hover:-translate-y-0.5 text-white shadow-slate-900/20'
                   : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-0.5 text-white shadow-blue-600/10'
            }
            active:scale-95 active:translate-y-0
          `}
          onClick={onAction}
        >
          {isExpired ? (
             <>
               <Ban size={18} />
             </>
          ) : isIneligible ? (
            <>
              <span>{t.locked}</span>
              <Lock size={18} />
            </>
          ) : isEligible ? (
            <>
               <span>{t.payBtn}</span>
               <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </>
          ) : (
             <>
               <span>{t.checkBtn}</span>
               <ClipboardList size={20} />
             </>
          )}
        </button>
      </div>
    </div>
  );
};