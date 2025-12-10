import React from 'react';
import { Check, CheckCircle2, Receipt, ArrowRight, Home } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';
import { PLAN_DETAILS } from '../constants';

interface SuccessScreenProps {
  isVisible: boolean;
  onClose: () => void;
  lang: Language;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ isVisible, onClose, lang }) => {
  const t = TRANSLATIONS[lang].success;

  if (!isVisible) return null;

  const now = new Date();
  const dateString = now.toLocaleDateString(lang === 'kn' ? 'kn-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeString = now.toLocaleTimeString(lang === 'kn' ? 'kn-IN' : 'en-IN', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed inset-0 z-[70] bg-slate-900 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-500">
        
        {/* Decorative Top BG */}
        <div className="bg-teal-600 h-32 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400 rounded-full blur-2xl"></div>
           </div>
        </div>

        {/* Content Container */}
        <div className="px-6 pb-8 relative">
           
           {/* Animated Checkmark Circle - Floating over header */}
           <div className="absolute left-1/2 -translate-x-1/2 -top-12">
              <div className="w-24 h-24 bg-white rounded-full p-2 shadow-lg">
                 <div className="w-full h-full bg-teal-500 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-4 border-teal-200 animate-ping opacity-20"></div>
                    <Check size={48} className="text-white animate-in zoom-in spin-in-12 duration-700" strokeWidth={4} />
                 </div>
              </div>
           </div>

           <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-1 pt-2">{t.title}</h2>
              <p className="text-slate-500 text-sm">{t.subtitle}</p>
           </div>

           {/* Receipt Card */}
           <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-100 p-5 relative overflow-hidden">
              {/* Receipt cutouts */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border border-slate-100"></div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border border-slate-100"></div>
              
              <div className="space-y-4 relative z-10">
                 <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                    <span className="text-slate-500 text-xs font-medium">{t.totalPaid}</span>
                    <span className="text-xl font-bold text-slate-900">₹{PLAN_DETAILS.MRP}</span>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">{t.orderId}</span>
                       <span className="text-xs font-mono text-slate-700 font-medium">#ORD-{Math.floor(Math.random() * 90000) + 10000}</span>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">{t.dateTime}</span>
                       <span className="text-xs text-slate-700 font-medium">{dateString}, {timeString}</span>
                    </div>
                 </div>

                 <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm mt-2">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <Receipt size={16} className="text-teal-600" />
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">{t.opdLimit}</p>
                          <p className="text-sm font-bold text-teal-700">{t.opdLimitValue}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} className="text-blue-600" />
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">{t.billStatus}</p>
                          <p className="text-sm font-bold text-blue-700">{t.billStatusValue}</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <button 
             onClick={onClose}
             className="w-full mt-6 bg-slate-900 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-slate-900/20 hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2"
           >
              <span>{t.btnHome}</span>
              <ArrowRight size={18} />
           </button>

        </div>
      </div>
    </div>
  );
};