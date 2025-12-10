import React, { useEffect, useState } from 'react';
import { Loader2, ShieldCheck, Lock } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface PaymentOverlayProps {
  isVisible: boolean;
  amount: number;
  onComplete: () => void;
  lang: Language;
}

export const PaymentOverlay: React.FC<PaymentOverlayProps> = ({ isVisible, amount, onComplete, lang }) => {
  const [step, setStep] = useState(0);
  const t = TRANSLATIONS[lang].payment;

  useEffect(() => {
    if (isVisible) {
      setStep(0);
      const timers = [
        setTimeout(() => setStep(1), 1000), // Verifying
        setTimeout(() => setStep(2), 2500), // Redirecting
        setTimeout(() => {
             onComplete(); 
        }, 4000), // Done
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <div className="mx-auto w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 relative">
           <div className="absolute inset-0 rounded-full border-4 border-teal-100 border-t-teal-500 animate-spin"></div>
           <Lock className="text-teal-600" size={24} />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {step === 0 && t.step1}
          {step === 1 && t.step2}
          {step === 2 && t.step3}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 min-h-[20px]">
          {step === 0 && t.sub1(amount)}
          {step === 1 && t.sub2}
          {step === 2 && t.sub3}
        </p>

        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
          <ShieldCheck size={12} />
          <span>{t.secure}</span>
        </div>
      </div>
    </div>
  );
};