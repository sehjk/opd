import React from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

const AVATAR_COLORS = [
  "bg-teal-100 text-teal-700",
  "bg-indigo-100 text-indigo-700",
  "bg-rose-100 text-rose-700"
];
const INITIALS = ["AS", "SR", "RK"];
const NAMES = ["Ankit S.", "Sneha R.", "Rahul K."];

interface SocialProofProps {
  lang: Language;
}

export const SocialProof: React.FC<SocialProofProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].socialProof;

  return (
    <div className="mt-8 mb-2">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Trust Header */}
      <div className="max-w-md mx-auto px-6 flex items-center gap-2 mb-4">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden bg-cover bg-center`} style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`}}>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">{t.trusted}</p>
          <div className="flex items-center gap-1">
             <div className="flex text-yellow-400">
               {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="currentColor" />)}
             </div>
             <span className="text-[10px] text-slate-500 font-medium">{t.rating}</span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-3 pb-4 px-6 snap-x snap-mandatory no-scrollbar max-w-md mx-auto">
        {t.testimonials.map((testi, index) => (
           <div key={index} className="min-w-[85%] snap-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
             <div className="absolute top-0 right-0 p-3 opacity-5">
                <TrendingUp size={60} className="text-teal-600" />
             </div>
             <p className="text-xs text-slate-600 italic mb-3 relative z-10 leading-relaxed">
               "{testi.quote}"
             </p>
             <div className="flex items-center gap-2 mt-auto relative z-10">
                <div className={`w-8 h-8 rounded-full ${AVATAR_COLORS[index]} flex items-center justify-center text-[10px] font-bold`}>
                   {INITIALS[index]}
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">{NAMES[index]}</span>
                    <span className="text-[10px] text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded-md font-medium w-fit">{testi.saved}</span>
                </div>
             </div>
           </div>
        ))}
         {/* Spacer to ensure last card is fully visible when scrolled to end */}
         <div className="w-2 shrink-0"></div>
      </div>
    </div>
  );
};