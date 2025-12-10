import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Crown, Ban } from 'lucide-react';
import { PLAN_DETAILS } from '../constants';
import { TRANSLATIONS, Language } from '../translations';

interface HeroProps {
  lang: Language;
  isExpired: boolean;
}

export const Hero: React.FC<HeroProps> = ({ lang, isExpired }) => {
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60); // 8 hours in seconds
  const t = TRANSLATIONS[lang].hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`relative overflow-hidden text-white pb-20 pt-28 px-6 rounded-b-[3rem] shadow-2xl transition-colors duration-500
      ${isExpired ? 'bg-slate-700 grayscale' : 'bg-gradient-to-br from-blue-950 via-slate-900 to-teal-950'}
    `}>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         {/* Abstract pattern */}
         <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-10 -left-10 w-60 h-60 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        
        {/* Unified Status Bar */}
        <div className={`flex justify-between items-center backdrop-blur-md border rounded-full p-1.5 pl-4 pr-1.5 mb-8 mx-auto w-full max-w-[340px]
          ${isExpired ? 'bg-slate-800/50 border-slate-600' : 'bg-white/10 border-white/10'}
        `}>
           <div className={`flex items-center gap-1.5 ${isExpired ? 'text-slate-300' : 'text-teal-300'}`}>
              {isExpired ? <Ban size={14} /> : <Crown size={14} className="fill-teal-500/20" />}
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {isExpired ? t.expiredStatus : t.status}
              </span>
           </div>
           
           {!isExpired && (
             <div className="flex items-center gap-2 bg-slate-900/50 rounded-full px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                </span>
                <span className="font-mono text-xs font-bold text-white tabular-nums">
                  {formatTime(timeLeft)}
                </span>
             </div>
           )}
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight leading-[1.1] mb-4">
          {t.title_1} <br/>
          <span className={`text-transparent bg-clip-text ${isExpired ? 'bg-slate-400' : 'bg-gradient-to-r from-teal-300 to-yellow-200'}`}>
            {t.title_2}
          </span>
        </h1>
        
        <p className={`${isExpired ? 'text-slate-400' : 'text-blue-100'} text-lg leading-relaxed font-medium mb-8`}>
          {t.subtitle(PLAN_DETAILS.COVERAGE_VALUE.toLocaleString())}
        </p>

        <div className={`flex flex-col gap-3 text-left p-4 rounded-xl border backdrop-blur-sm
          ${isExpired ? 'bg-slate-800/50 border-slate-700' : 'bg-white/5 border-white/10'}
        `}>
           <div className="flex items-start gap-3">
             <CheckCircle2 className={`${isExpired ? 'text-slate-500' : 'text-teal-400'} shrink-0 mt-0.5`} size={20} />
             <p className="text-sm text-slate-200"><span className="font-semibold text-white">
               {lang === 'en' ? 'Zero payment' : 'ಶೂನ್ಯ ಪಾವತಿ'}
               </span> {lang === 'en' ? 'for today\'s visit.' : 'ಇಂದಿನ ಭೇಟಿಗೆ.'}</p>
           </div>
           <div className="flex items-start gap-3">
             <CheckCircle2 className={`${isExpired ? 'text-slate-500' : 'text-teal-400'} shrink-0 mt-0.5`} size={20} />
             <p className="text-sm text-slate-200"><span className="font-semibold text-white">
               {lang === 'en' ? 'Unlimited' : 'ಅನಿಯಮಿತ'}
               </span> {lang === 'en' ? 'free consultations all year.' : 'ವರ್ಷವಿಡೀ ಉಚಿತ ಸಮಾಲೋಚನೆಗಳು.'}</p>
           </div>
        </div>
      </div>
    </div>
  );
};