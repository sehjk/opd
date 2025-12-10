import React, { useState, useEffect } from 'react';
import { Check, ClipboardList, Info, X, AlertTriangle, ShieldAlert, ArrowLeft, Loader2, FileText, CheckCircle2, ChevronRight, CheckSquare } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';
import { PATIENT } from '../constants';

interface HealthDeclarationProps {
  lang: Language;
  isEligible: boolean;
  isIneligible: boolean;
  onRequestOpen: () => void;
  onEligible: () => void;
  onIneligible: () => void;
  openExternal: boolean;
  onCloseExternal: () => void;
  simulateIneligible: boolean;
}

export const HealthDeclaration: React.FC<HealthDeclarationProps> = ({ 
  lang, 
  isEligible, 
  isIneligible,
  onRequestOpen, 
  onEligible, 
  onIneligible,
  openExternal,
  onCloseExternal,
  simulateIneligible
}) => {
  const t = TRANSLATIONS[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'analyzing' | 'form' | 'checking' | 'result'>('analyzing');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  // Track selections for each item: id -> 'yes' | 'no'
  const [selections, setSelections] = useState<Record<string, 'yes' | 'no'>>({});
  const [validationError, setValidationError] = useState<string | null>(null);

  // Sync external open request (from Sticky CTA) with internal state
  useEffect(() => {
    if (openExternal) {
      setIsOpen(true);
      // If already ineligible, just show the result screen immediately
      if (isIneligible) {
        setStep('result');
      } else {
        setStep('analyzing');
        setSelections({}); // Reset on open
        setValidationError(null);
        // Simulate record retrieval
        const timer = setTimeout(() => {
          setStep('form');
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [openExternal, isIneligible]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleInfoClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItem(expandedItem === id ? null : id);
  };

  const handleToggleClick = (id: string, value: 'yes' | 'no', e: React.MouseEvent) => {
    e.stopPropagation();
    setSelections(prev => ({
      ...prev,
      [id]: value
    }));
    if (validationError) setValidationError(null);
  };

  const handleMarkAllNo = () => {
    const newSelections: Record<string, 'yes' | 'no'> = {};
    t.healthCheck.unknownItems.forEach(item => {
      newSelections[item.id] = 'no';
    });
    setSelections(newSelections);
    if (validationError) setValidationError(null);
  };

  const handleRunCheck = () => {
    // Validation: Ensure all items have a value in selections
    const allAnswered = t.healthCheck.unknownItems.every(item => selections[item.id]);
    
    if (!allAnswered) {
      setValidationError(t.healthCheck.validationError);
      // Optional: Scroll to error or provide haptic feedback (if supported)
      return;
    }

    setStep('checking');
    
    // Determine eligibility based on selections AND simulation flag
    // Ineligible if ANY item is 'yes' OR simulation is forced to ineligible
    const hasYes = Object.values(selections).some(val => val === 'yes');
    const isFail = hasYes || simulateIneligible;

    setTimeout(() => {
      if (isFail) {
        setStep('result');
        onIneligible(); // Notify parent
      } else {
        // Success!
        setIsOpen(false);
        onEligible();
        onCloseExternal();
      }
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    onCloseExternal();
    // Reset state after a delay if closed
    setTimeout(() => {
      if (!isIneligible) {
         setStep('analyzing');
         setSelections({});
         setValidationError(null);
      }
    }, 300);
  };

  const handleReset = () => {
    // Keep answers but go back to form
    setStep('form');
  };

  // Rendering the Card in the main UI
  return (
    <>
      <div className="max-w-md mx-auto px-6 mb-12">
        <div 
          className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 
            ${isEligible 
              ? 'border-teal-500 bg-teal-50/50' 
              : isIneligible
                ? 'border-red-200 bg-red-50/30'
                : 'border-slate-200 bg-white'
            }`}
        >
          {/* Card Content */}
          <div className="p-4" onClick={!isEligible && !isIneligible ? onRequestOpen : undefined}>
            <div className="flex gap-4">
              <div 
                className={`mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors 
                ${isEligible 
                   ? 'bg-teal-500 border-teal-500 text-white' 
                   : isIneligible
                     ? 'bg-red-500 border-red-500 text-white'
                     : 'border-slate-300 bg-white'
                }`}
              >
                {isEligible && <Check size={12} strokeWidth={4} />}
                {isIneligible && <X size={12} strokeWidth={4} />}
              </div>
              <div className="flex-1">
                <p className={`font-bold text-sm mb-1 ${isIneligible ? 'text-red-700' : 'text-slate-900'}`}>
                  {isEligible 
                    ? t.app.declarationDoneTitle 
                    : isIneligible
                      ? t.app.declarationFailTitle
                      : t.app.declarationTitle}
                </p>
                <p className={`text-xs leading-relaxed font-medium ${isIneligible ? 'text-red-600/80' : 'text-slate-600'}`}>
                  {isEligible 
                    ? t.app.declarationDoneText 
                    : isIneligible
                      ? t.app.declarationFailText
                      : t.app.declarationText(PATIENT.NAME)}
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Footer on Card */}
          {(!isEligible) && (
            <div 
              className={`border-t px-4 py-2.5 flex justify-between items-center cursor-pointer transition-colors
                ${isIneligible 
                  ? 'bg-red-50 border-red-100 hover:bg-red-100'
                  : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                }`} 
              onClick={onRequestOpen}
            >
               <div className={`flex items-center gap-2 ${isIneligible ? 'text-red-600' : 'text-blue-600'}`}>
                  <ClipboardList size={14} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {isIneligible ? t.app.viewReasonBtn : t.app.viewRecordBtn}
                  </span>
               </div>
               <ChevronRight size={14} className={isIneligible ? 'text-red-300' : 'text-slate-400'} />
            </div>
          )}
        </div>
      </div>

      {/* Modal / Bottom Sheet */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white sm:max-w-md sm:mx-auto sm:h-[90vh] sm:mt-[5vh] sm:rounded-2xl sm:shadow-2xl sm:overflow-hidden transition-all duration-300">
          
          {/* HEADER */}
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 z-10">
            <div>
              <h2 className="text-lg font-bold text-slate-900">{t.healthCheck.title}</h2>
              <p className="text-[10px] text-slate-500 mt-0.5 max-w-[280px] leading-tight">{t.healthCheck.subtitle}</p>
            </div>
            <button onClick={handleClose} className="p-2 bg-slate-50 rounded-full hover:bg-slate-100">
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          {/* BODY CONTENT */}
          <div className="flex-1 overflow-y-auto bg-slate-50 relative">
            
            {/* STATE: ANALYZING / CHECKING */}
            {(step === 'analyzing' || step === 'checking') && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-20 backdrop-blur-sm p-6 text-center">
                <div className="bg-teal-50 p-4 rounded-full mb-4">
                  <Loader2 size={32} className="text-teal-600 animate-spin" />
                </div>
                <p className="text-sm font-bold text-slate-700 animate-pulse">
                  {step === 'analyzing' ? t.healthCheck.analyzing : t.healthCheck.checking}
                </p>
              </div>
            )}

            {/* STATE: FORM (Split into Known vs Unknown) */}
            {step === 'form' && (
              <div className="p-4 space-y-6 pb-32">
                
                {/* Section A: Known / Cleared */}
                <div className="animate-in slide-in-from-bottom duration-500 fade-in">
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <CheckCircle2 size={16} className="text-teal-600" />
                    <h3 className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.healthCheck.sectionKnown}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 px-1">{t.healthCheck.sectionKnownDesc}</p>
                  
                  <div className="bg-teal-50/50 rounded-xl border border-teal-100/50 divide-y divide-teal-100/50">
                     {t.healthCheck.knownItems.map((item) => (
                       <div key={item.id} className="p-3 flex items-center gap-3">
                          <div className="bg-teal-100 rounded-full p-0.5">
                            <Check size={10} className="text-teal-700" strokeWidth={3} />
                          </div>
                          <span className="text-xs font-medium text-teal-900 opacity-80">{item.title}</span>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Section B: Unknown / Action Required */}
                <div className="animate-in slide-in-from-bottom duration-500 fade-in delay-100">
                   <div className="flex items-center justify-between mb-3 px-1 mt-6">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-blue-600" />
                        <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider">{t.healthCheck.sectionUnknown}</h3>
                      </div>
                      
                      {/* MARK ALL NO BUTTON */}
                      <button 
                        onClick={handleMarkAllNo}
                        className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-blue-50 text-[10px] font-bold text-blue-600 transition-colors"
                      >
                         <CheckSquare size={12} />
                         <span>{t.healthCheck.markAllNo}</span>
                      </button>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 px-1">{t.healthCheck.sectionUnknownDesc}</p>

                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                      {t.healthCheck.unknownItems.map((item) => (
                        <div key={item.id} className="group">
                          <div className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
                            <span className="text-xs font-bold text-slate-700 flex-1 leading-snug">
                              {item.title}
                            </span>
                            
                            <div className="flex items-center gap-3">
                              <div className="flex bg-slate-100 rounded-lg p-0.5 relative z-10">
                                <button 
                                  onClick={(e) => handleToggleClick(item.id, 'yes', e)}
                                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all ${selections[item.id] === 'yes' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200'}`}
                                >
                                  {t.healthCheck.btnYes}
                                </button>
                                <button 
                                  onClick={(e) => handleToggleClick(item.id, 'no', e)}
                                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all ${selections[item.id] === 'no' ? 'bg-white text-teal-600 shadow-sm border border-slate-200' : 'text-slate-400 hover:bg-slate-100'}`}
                                >
                                  {t.healthCheck.btnNo}
                                </button>
                              </div>
                              
                              <button 
                                onClick={(e) => handleInfoClick(item.id, e)}
                                className={`p-1.5 rounded-full transition-colors ${expandedItem === item.id ? 'bg-blue-100 text-blue-600' : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'}`}
                              >
                                <Info size={16} />
                              </button>
                            </div>
                          </div>
                          
                          <div className={`overflow-hidden transition-all duration-300 bg-blue-50/50 ${expandedItem === item.id ? 'max-h-32 border-t border-blue-100' : 'max-h-0'}`}>
                             <div className="p-3 text-xs text-blue-800 leading-relaxed flex gap-2">
                               <AlertTriangle size={14} className="shrink-0 mt-0.5 opacity-50" />
                               {item.q}
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 text-[10px] text-slate-500 leading-relaxed">
                   {t.healthCheck.disclaimer}
                </div>
              </div>
            )}

            {/* STATE: RESULT (INELIGIBLE) */}
            {step === 'result' && (
              <div className="flex flex-col h-full bg-red-50/50 animate-in fade-in slide-in-from-right duration-300">
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-sm">
                    <ShieldAlert size={40} className="text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.healthCheck.ineligible.title}</h3>
                  <p className="text-red-600 font-medium text-sm mb-6 uppercase tracking-wider">{t.healthCheck.ineligible.subtitle}</p>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 mb-8 max-w-xs mx-auto">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t.healthCheck.ineligible.message}
                    </p>
                  </div>
                  
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    {t.healthCheck.ineligible.contact}
                  </p>
               </div>
               
               <div className="p-4 bg-white border-t border-slate-100 space-y-3">
                  <button 
                    onClick={handleReset}
                    className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95 transition-all"
                  >
                    <ArrowLeft size={16} />
                    <span>{t.healthCheck.ineligible.btnBack}</span>
                  </button>
                  <button 
                    onClick={handleClose}
                    className="w-full py-3.5 bg-white text-slate-500 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all"
                  >
                    <span>{t.healthCheck.ineligible.btnClose}</span>
                  </button>
               </div>
              </div>
            )}
          </div>

          {/* FOOTER ACTION */}
          {step === 'form' && (
             <div className="p-4 border-t border-slate-200 bg-white shrink-0 z-50">
               {validationError && (
                 <div className="mb-2 text-center text-xs font-bold text-red-500 animate-pulse">
                   {validationError}
                 </div>
               )}
               <button 
                 onClick={handleRunCheck}
                 className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
               >
                 <span>{t.app.confirmBtn}</span>
                 <Check size={18} />
               </button>
             </div>
          )}

        </div>
      )}
    </>
  );
};