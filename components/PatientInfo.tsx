import React from 'react';
import { User, CheckCircle2, Star } from 'lucide-react';
import { PATIENT } from '../constants';
import { TRANSLATIONS, Language } from '../translations';

interface PatientInfoProps {
  lang: Language;
}

export const PatientInfo: React.FC<PatientInfoProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].patientInfo;
  
  return (
    <div className="max-w-md mx-auto px-6 -mt-16 relative z-30">
       <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border-t-4 border-yellow-400 p-5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             <Star size={80} className="text-yellow-500" />
          </div>

          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Star size={10} className="fill-yellow-600 text-yellow-600" />
                  {t.offer}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-2">{t.activationFor}</p>
              <h3 className="text-slate-900 font-bold text-xl leading-tight">{PATIENT.NAME}</h3>
            </div>
            <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm text-slate-400">
               <User size={24} />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
             <div className="flex items-center gap-1.5 text-teal-600">
                <CheckCircle2 size={16} className="fill-teal-100" />
                <span className="text-xs font-bold">{t.approved}</span>
             </div>
             <div className="w-px h-3 bg-slate-200"></div>
             <span className="text-xs text-slate-500">{t.dob}: {PATIENT.DOB}</span>
             <div className="w-px h-3 bg-slate-200"></div>
             <span className="text-xs text-slate-500">{PATIENT.GENDER}</span>
          </div>
       </div>
    </div>
  )
}