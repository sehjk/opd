import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { PricingCard } from './components/PricingCard';
import { StickyCTA } from './components/StickyCTA';
import { DemoControls } from './components/DemoControls';
import { PatientInfo } from './components/PatientInfo';
import { Confetti } from './components/Confetti';
import { PaymentOverlay } from './components/PaymentOverlay';
import { SuccessScreen } from './components/SuccessScreen';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Exclusions } from './components/Exclusions';
import { HealthDeclaration } from './components/HealthDeclaration';
import { Activity } from 'lucide-react';
import { PLAN_DETAILS } from './constants';
import { TRANSLATIONS, Language } from './translations';

const App: React.FC = () => {
  // Default bill set to 900 as per prompt example
  const [currentBill, setCurrentBill] = useState<number>(900);
  
  // New State Logic: Eligibility rather than just "Declared"
  // Status: 'idle' | 'eligible' | 'ineligible'
  const [eligibilityStatus, setEligibilityStatus] = useState<'idle' | 'eligible' | 'ineligible'>('idle');
  
  // State for Offer Validity (External Bill Paid)
  const [isBillPaid, setIsBillPaid] = useState<boolean>(false);
  
  // State to trigger the Health Declaration Modal from Sticky CTA
  const [openHealthCheck, setOpenHealthCheck] = useState<boolean>(false);
  const [simulateIneligible, setSimulateIneligible] = useState<boolean>(false);

  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [lang, setLang] = useState<Language>('en');

  const topUpAmount = Math.max(0, PLAN_DETAILS.MRP - currentBill);
  const t = TRANSLATIONS[lang];

  // Callback when user passes eligibility check in the modal
  const handleEligibilityConfirmed = () => {
    setEligibilityStatus('eligible');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleEligibilityFailed = () => {
    setEligibilityStatus('ineligible');
  };

  const handleAction = () => {
    if (isBillPaid) return; // No action if paid

    if (eligibilityStatus === 'idle' || eligibilityStatus === 'ineligible') {
      // Logic: Open the Health Declaration Modal (even if ineligible, to see reason)
      setOpenHealthCheck(true);
    } else if (eligibilityStatus === 'eligible') {
      // Logic: Proceed to Payment
      setIsProcessingPayment(true);
    }
  };

  const handlePaymentComplete = () => {
    setIsProcessingPayment(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Reset state for demo purposes
    setEligibilityStatus('idle');
    setCurrentBill(900);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-teal-100 selection:text-teal-900 pb-32">
      
      <Confetti isActive={showConfetti} />
      
      <PaymentOverlay 
        isVisible={isProcessingPayment} 
        amount={PLAN_DETAILS.MRP} 
        onComplete={handlePaymentComplete}
        lang={lang}
      />

      <SuccessScreen 
        isVisible={showSuccess} 
        onClose={handleSuccessClose} 
        lang={lang} 
      />

      {/* Language Toggle - Floating Top Right */}
      <div className="fixed top-6 right-6 z-[60] bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 p-1 rounded-full flex items-center">
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
        >
          En
        </button>
        <button 
          onClick={() => setLang('kn')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'kn' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
        >
          ಕ
        </button>
      </div>

      {/* Navbar / Logo Area */}
      <nav className="absolute top-0 left-0 w-full z-20 p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
            <Activity className="text-teal-400" size={20} />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Clinikk</span>
        </div>
      </nav>

      <DemoControls 
        currentBill={currentBill} 
        setCurrentBill={setCurrentBill}
        simulateIneligible={simulateIneligible}
        setSimulateIneligible={setSimulateIneligible}
        isBillPaid={isBillPaid}
        setIsBillPaid={setIsBillPaid}
      />

      <main className="w-full">
        <Hero lang={lang} isExpired={isBillPaid} />
        
        <PatientInfo lang={lang} />
        
        <div className="mt-6">
          <FeatureGrid lang={lang} />
        </div>

        <Exclusions lang={lang} />

        <SocialProof lang={lang} />
        
        <div className="max-w-md mx-auto px-6 mb-6 mt-8">
          <div className="py-2">
            <h3 className="text-slate-900 font-bold text-lg mb-2">{t.app.whyUpgrade}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {t.app.whyUpgradeText(currentBill, topUpAmount)}
            </p>
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-lg">
               <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-red-800 text-xs font-semibold">
                 {t.app.offerExpires}
              </p>
            </div>
          </div>
        </div>

        <PricingCard currentBill={currentBill} lang={lang} />

        {/* Updated Health Declaration Logic */}
        <HealthDeclaration 
          lang={lang} 
          isEligible={eligibilityStatus === 'eligible'} 
          isIneligible={eligibilityStatus === 'ineligible'}
          onRequestOpen={() => setOpenHealthCheck(true)}
          onEligible={handleEligibilityConfirmed}
          onIneligible={handleEligibilityFailed}
          openExternal={openHealthCheck}
          onCloseExternal={() => setOpenHealthCheck(false)}
          simulateIneligible={simulateIneligible}
        />

        <div className="mb-24">
          <FAQ lang={lang} />
        </div>

      </main>

      <StickyCTA 
        currentBill={currentBill} 
        isEligible={eligibilityStatus === 'eligible'}
        isIneligible={eligibilityStatus === 'ineligible'} 
        isExpired={isBillPaid}
        onAction={handleAction}
        lang={lang}
      />
    </div>
  );
};

export default App;