import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[lang].faq;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto px-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="text-slate-400" size={18} />
        <h3 className="text-slate-900 font-bold text-lg">{t.title}</h3>
      </div>
      
      <div className="space-y-3">
        {t.items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <button 
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="text-sm font-semibold text-slate-800 pr-4">{item.q}</span>
              <ChevronDown 
                size={18} 
                className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 pt-0 text-xs text-slate-500 leading-relaxed border-t border-slate-50 bg-slate-50/50">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};