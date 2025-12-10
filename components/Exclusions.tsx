import React, { useState } from 'react';
import { AlertCircle, X, ChevronRight, Info } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface ExclusionsProps {
  lang: Language;
}

export const Exclusions: React.FC<ExclusionsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].exclusions;
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button - Sits nicely under the features */}
      <div className="max-w-md mx-auto px-6 mt-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between transition-all duration-200 group active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-slate-300 transition-colors">
              <AlertCircle size={16} />
            </div>
            <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">
              {t.buttonText}
            </span>
          </div>
          <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Comprehensive Bottom Sheet Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sheet */}
          <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 pb-8 relative z-10 animate-in slide-in-from-bottom duration-300 shadow-2xl max-h-[85vh] flex flex-col">
            
            {/* Visual Handle for mobile feel */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 shrink-0" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <AlertCircle size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t.title}
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable List */}
            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
              {t.items.map((item, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-100/80">
                  <div className="flex items-start gap-3">
                    <Info size={16} className="text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.tooltip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Footer Button with Terms Link */}
            <div className="mt-6 pt-2 shrink-0 space-y-3">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm active:scale-95 transition-all shadow-lg shadow-slate-900/20"
              >
                {t.gotIt}
              </button>

              <div className="text-center">
                <a href="#" className="text-xs text-blue-600 font-medium hover:underline">
                  {t.termsLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};