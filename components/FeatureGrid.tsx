import React from 'react';
import { Pill, Scan, Stethoscope, Activity, Plus } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface FeatureGridProps {
  lang: Language;
}

// Icon mapping helper (indices 0-3 match the translation array order)
const ICONS = ['Pill', 'Scan', 'Stethoscope', 'Activity'];

const getIcon = (name: string) => {
  switch (name) {
    case 'Pill': return <Pill size={24} className="text-teal-600" />;
    case 'Scan': return <Scan size={24} className="text-blue-600" />;
    case 'Stethoscope': return <Stethoscope size={24} className="text-purple-600" />;
    case 'Activity': return <Activity size={24} className="text-red-500" />;
    default: return <Plus size={24} />;
  }
};

export const FeatureGrid: React.FC<FeatureGridProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].featureGrid;

  return (
    <div className="max-w-md mx-auto px-6 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
        <h2 className="text-slate-900 font-bold text-lg mb-4 text-center">{t.title}</h2>
        <div className="grid grid-cols-2 gap-4 mb-5">
          {t.items.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
              <div className="mb-2 p-2 bg-white rounded-full shadow-sm ring-1 ring-slate-100">
                {getIcon(ICONS[index])}
              </div>
              <h3 className="font-bold text-slate-800 text-sm">{feature.title}</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-tight">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Caveat Section - Styled as a condition/prescription note */}
        <div className="flex items-center gap-3 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100">
           <div className="h-8 w-8 shrink-0 bg-teal-50 rounded-lg flex items-center justify-center border border-teal-100">
              <span className="font-serif font-bold italic text-teal-700 text-lg leading-none pr-0.5">Rx</span>
           </div>
           <p className="text-[11px] font-medium text-slate-500 leading-tight">
              {t.caveat}
           </p>
        </div>
      </div>
    </div>
  );
};