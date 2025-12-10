export type Language = 'en' | 'kn';

export const TRANSLATIONS = {
  en: {
    hero: {
      status: "Exclusive Invite",
      expiredStatus: "Offer Expired",
      title_1: "Make Medical Bills",
      title_2: "₹0 For A Year.",
      subtitle: (val: string) => `Unlock ₹${val} coverage. We'll waive your current charges.`,
      check1: "Zero payment for today's visit.",
      check2: "Unlimited free consultations all year."
    },
    featureGrid: {
      title: "Everything Covered",
      items: [
        { title: "Medicines", desc: "Full coverage for prescribed medicines." },
        { title: "Tests", desc: "Blood tests, X-rays, MRIs, and more." },
        { title: "Specialists", desc: "Consultations with referred specialists." },
        { title: "Procedures", desc: "Day-care procedures & minor treatments." }
      ],
      caveat: "Covered when prescribed or referred by a Clinikk doctor."
    },
    exclusions: {
      title: "Not Covered",
      buttonText: "See what's not covered",
      gotIt: "Got it",
      termsLink: "See complete terms and conditions",
      items: [
        { title: "Cosmetic, Dental & Physio", tooltip: "Teeth work, braces, cosmetic stuff, physio sessions." },
        { title: "Maternity (Limited)", tooltip: "Only consult + scans after 9 months. No tests, meds, or treatment." },
        { title: "Wellness Items", tooltip: "Supplements, vitamins, vaccines, fertility tests, eye correction." },
        { title: "Medical Devices", tooltip: "BP machine, glucometer, braces, nebulizer, oximeter." },
        { title: "Self-Referred Specialists", tooltip: "Specialist visit only if Clinikk doctor refers. Self-booked not covered." }
      ]
    },
    socialProof: {
      trusted: "Trusted by 50,000+ families",
      rating: "4.8/5 Rating",
      testimonials: [
        { quote: "I usually spend ₹5,000+ on medicines for my parents. With this plan, I paid ₹0 for their entire 6-month course. Best decision.", saved: "Saved ₹12,000" },
        { quote: "The best part is I don't have to think twice before visiting a doctor. Blood tests and consultations were completely free.", saved: "Saved ₹8,500" },
        { quote: "My wife needed several scans and tests. Clinikk covered everything seamlessly. Highly recommend for families.", saved: "Saved ₹15,000" }
      ]
    },
    patientInfo: {
      offer: "Exclusive Offer",
      activationFor: "Plan Activation For",
      approved: "Profile Verified",
      dob: "DOB"
    },
    pricing: {
      title: "Unlock ₹0 Bills",
      subtitle: "Pay a small extra amount now to save thousands later.",
      currentBill: "Current Bill",
      upgradeFee: "Upgrade Fee",
      upgradeText: "Add this small amount...",
      benefit: "To Unlock ₹10,000 Coverage",
      benefitText: "Future OPD bills become ₹0",
      total: "Total Payable",
      cancellation: "Note: Current bill will be deducted from ₹10,000. No refund after activation."
    },
    sticky: {
      mainText: (total: number) => `Pay ₹${total}`,
      checkText: "Check Eligibility",
      subText: (extra: number) => `₹${extra} extra for ₹10k limit`,
      payBtn: "Pay & Activate",
      checkBtn: "Check Eligibility",
      locked: "Not Eligible",
      expired: "Offer Expired - Bill Paid"
    },
    faq: {
      title: "Common Questions",
      items: [
        { q: "What happens after I use the ₹10,000 limit?", a: "Even after the limit is exhausted, you get UNLIMITED free consultations with Clinikk doctors for the rest of the year. You also get flat discounts on medicines and lab tests available in Clinikk." },
        { q: "Can I cancel this plan?", a: "Yes. We offer a 7-day no-questions-asked cancellation policy, provided you haven't utilized any benefits (medicines, tests, or consults) under the plan during that period." },
        { q: "Are specialist doctors covered?", a: "Yes! Consultations with Specialists (like Cardiologists, Dermatologists, etc.) are covered when prescribed by a general Clinikk doctor first." },
        { q: "Does this cover past illnesses?", a: "This plan is designed for new OPD requirements. It requires a good health declaration at the time of purchase and does not cover management of pre-existing chronic conditions like Dialysis or Chemotherapy." }
      ]
    },
    app: {
      whyUpgrade: "Why upgrade now?",
      whyUpgradeText: (bill: number, diff: number) => `You are already paying ₹${bill}. By adding just ₹${diff} more, you unlock ₹10,000 worth of coverage for the entire year. It's a no-brainer!`,
      offerExpires: "Offer expires once you leave the Health Hub.",
      declarationTitle: "Eligibility Check",
      declarationText: (name: string) => `We need to check ${name}'s clinical records and confirm a few details to activate this plan.`,
      viewRecordBtn: "Check Eligibility Now",
      declarationDoneTitle: "Eligibility Confirmed",
      declarationDoneText: "You are eligible for the OPD Care Plan. Please proceed to payment to activate.",
      declarationFailTitle: "Not Eligible",
      declarationFailText: "Based on the assessment, this plan is not applicable.",
      viewReasonBtn: "View Reason",
      confirmBtn: "Run Eligibility Check",
      nav: "Clinikk"
    },
    payment: {
      step1: "Initiating Secure Payment",
      step2: "Verifying Eligibility",
      step3: "Redirecting to Gateway",
      sub1: (amount: number) => `Preparing transaction for ₹${amount}...`,
      sub2: "Confirming plan benefits...",
      sub3: "Please do not close this window.",
      secure: "256-Bit SSL Encrypted"
    },
    success: {
      title: "Payment Successful",
      subtitle: "Your OPD Plan is now active!",
      totalPaid: "Total Paid",
      orderId: "Order ID",
      dateTime: "Date & Time",
      opdLimit: "OPD Limit",
      opdLimitValue: "₹10,000 Active",
      billStatus: "Current Bill",
      billStatusValue: "Paid & Cleared",
      btnHome: "Done"
    },
    healthCheck: {
      title: "Eligibility Check",
      subtitle: "We've analyzed your Clinikk records. Please confirm the remaining details.",
      analyzing: "Analyzing clinical records...",
      checking: "Analyzing reported information and clinical records...",
      sectionKnown: "Cleared by Records",
      sectionKnownDesc: "Based on your history, we have cleared these:",
      sectionUnknown: "Action Required",
      sectionUnknownDesc: "Please answer the following to proceed:",
      markAllNo: "Mark all as 'No'",
      validationError: "Please answer all questions to proceed.",
      disclaimer: "I confirm that the details above are true. I understand that misinformation may lead to plan cancellation.",
      btnYes: "Yes",
      btnNo: "No",
      knownItems: [
         { id: 'diabetes', title: "No Complicated Diabetes" },
         { id: 'htn', title: "No Chronic Hypertension" },
         { id: 'copd', title: "No Chronic Lung Disease" },
         { id: 'ckd', title: "No Chronic Kidney Disease" }
      ],
      unknownItems: [
        { id: 'heart', title: "Heart disease or surgery", q: "Have you ever had a heart attack, heart surgery, or serious problem with blood circulation?" },
        { id: 'cancer', title: "Cancer or tumor", q: "Have you ever been diagnosed with cancer or any kind of tumor?" },
        { id: 'kidney_surg', title: "Kidney / prostate / bladder surgery", q: "Have you ever had major surgery on your kidney, prostate, or urinary bladder (including removal of a kidney)?" },
        { id: 'brain', title: "Brain / spine surgery or stroke", q: "Have you ever had brain or spine surgery, or a stroke (paralysis / CVA)?" },
        { id: 'abd', title: "Major abdominal organ surgery", q: "Have you ever had major surgery on your liver, spleen, pancreas, or intestines?" },
        { id: 'bone', title: "Major bone fracture surgery", q: "Have you ever had surgery for a major fracture with plates, screws, or rods in your hip, knee, thigh, leg, arm, forearm, or shoulder?" },
        { id: 'amp', title: "Amputation", q: "Have you ever had an amputation of a leg, arm, foot, or toes?" },
        { id: 'lung_surg', title: "Open chest / lung surgery", q: "Have you ever had open-chest surgery involving your lungs or chest?" },
        { id: 'burns', title: "Major burns", q: "Have you ever had second- or third-degree burns that needed surgery or skin grafting?" },
        { id: 'face', title: "Jaw / face reconstructive surgery", q: "Have you ever had major reconstructive surgery to your jaw or face after an injury (not routine dental or cosmetic work)?" },
        { id: 'transplant', title: "Organ transplant", q: "Have you ever had a transplant of a kidney, liver, lung, heart, or bone marrow?" },
        { id: 'immune', title: "Immune system / autoimmune disease", q: "Have you been diagnosed with HIV/AIDS, rheumatoid arthritis, ulcerative colitis, or any other long-term immune or autoimmune disease?" },
        { id: 'obesity', title: "Severe obesity (BMI > 37)", q: "Is your body mass index (BMI) 37 or higher (or have you been told you are severely obese)?" },
        { id: 'smoking', title: "Heavy smoking", q: "Do you usually smoke 8 or more cigarettes/bidis per day?" },
        { id: 'alcohol', title: "Heavy alcohol use", q: "Do you usually drink more than 1 full bottle of hard liquor (750 ml) per week, or about 10 large bottles of beer per week?" },
        { id: 'tobacco', title: "Heavy chewing tobacco / gutka use", q: "Do you usually chew tobacco or gutka more than 6 packets per day?" }
      ],
      ineligible: {
        title: "Not Eligible",
        subtitle: "Based on Assessment",
        message: "This specific plan is designed for patients with no major pre-existing conditions. Based on your input, we cannot proceed with this activation online.",
        contact: "Please contact our support team for plans that cover your specific needs.",
        btnBack: "I made a mistake",
        btnClose: "Close Assessment"
      }
    }
  },
  kn: {
    hero: {
      status: "ವಿಶೇಷ ಆಹ್ವಾನ",
      expiredStatus: "ಆಫರ್ ಮುಕ್ತಾಯಗೊಂಡಿದೆ",
      title_1: "ವೈದ್ಯಕೀಯ ಬಿಲ್‌ಗಳನ್ನು",
      title_2: "ಒಂದು ವರ್ಷಕ್ಕೆ ₹0 ಮಾಡಿ.",
      subtitle: (val: string) => `₹${val} ಕವರೇಜ್ ಅನ್ಲಾಕ್ ಮಾಡಿ. ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಶುಲ್ಕವನ್ನು ನಾವು ಮನ್ನಾ ಮಾಡುತ್ತೇವೆ.`,
      check1: "ಇಂದಿನ ಭೇಟಿಗೆ ಶೂನ್ಯ ಪಾವತಿ.",
      check2: "ವರ್ಷವಿಡೀ ಅನಿಯಮಿತ ಉಚಿತ ಸಮಾಲೋಚನೆಗಳು."
    },
    featureGrid: {
      title: "ಎಲ್ಲವನ್ನೂ ಒಳಗೊಂಡಿದೆ",
      items: [
        { title: "ಔಷಧಿಗಳು", desc: "ಶಿಫಾರಸು ಮಾಡಿದ ಔಷಧಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಕವರೇಜ್." },
        { title: "ಪರೀಕ್ಷೆಗಳು", desc: "ರಕ್ತ ಪರೀಕ್ಷೆಗಳು, ಎಕ್ಸ್-ರೇಗಳು ಮತ್ತು ಇನ್ನಷ್ಟು." },
        { title: "ತಜ್ಞರು", desc: "ಶಿಫಾರಸು ಮಾಡಿದ ತಜ್ಞರೊಂದಿಗೆ ಸಮಾಲೋಚನೆಗಳು." },
        { title: "ಚಿಕಿತ್ಸೆಗಳು", desc: "ಡೇ-ಕೇರ್ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಸಣ್ಣ ಚಿಕಿತ್ಸೆಗಳು." }
      ],
      caveat: "ಕ್ಲಿನಿಕ್ ವೈದ್ಯರು ಬರೆದುಕೊಟ್ಟಾಗ ಅಥವಾ ಶಿಫಾರಸು ಮಾಡಿದಾಗ ಮಾತ್ರ ಕವರ್ ಆಗುತ್ತದೆ."
    },
    exclusions: {
      title: "ಒಳಗೊಂಡಿಲ್ಲ",
      buttonText: "ಏನು ಒಳಗೊಂಡಿಲ್ಲ ಎಂಬುದನ್ನು ನೋಡಿ",
      gotIt: "ಅರ್ಥವಾಯಿತು",
      termsLink: "ಸಂಪೂರ್ಣ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ನೋಡಿ",
      items: [
        { title: "ಕಾಸ್ಮೆಟಿಕ್, ಡೆಂಟಲ್ ಮತ್ತು ಫಿಸಿಯೋ", tooltip: "ಹಲ್ಲುಗಳ ಚಿಕಿತ್ಸೆ, ಬ್ರೇಸ್‌ಗಳು, ಕಾಸ್ಮೆಟಿಕ್, ಫಿಸಿಯೋ ಸೆಷನ್‌ಗಳು." },
        { title: "ಹೆರಿಗೆ (ಸೀಮಿತ)", tooltip: "9 ತಿಂಗಳ ನಂತರ ಕೇವಲ ಸಮಾಲೋಚನೆ + ಸ್ಕ್ಯಾನ್. ಪರೀಕ್ಷೆಗಳು, ಔಷಧಿಗಳು ಅಥವಾ ಚಿಕಿತ್ಸೆ ಇಲ್ಲ." },
        { title: "ಕ್ಷೇಮ ವಸ್ತುಗಳು", tooltip: "ಸಪ್ಲಿಮೆಂಟ್ಸ್, ವಿಟಮಿನ್ಸ್, ಲಸಿಕೆಗಳು, ಫಲವತ್ತತೆ ಪರೀಕ್ಷೆಗಳು, ಕಣ್ಣಿನ ತಿದ್ದುಪಡಿ." },
        { title: "ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳು", tooltip: "ಬಿಪಿ ಮೆಷಿನ್, ಗ್ಲುಕೋಮೀಟರ್, ಬ್ರೇಸ್‌ಗಳು, ನೆಬ್ಯುಲೈಜರ್, ಆಕ್ಸಿಮೀಟರ್." },
        { title: "ಸ್ವಯಂ-ಶಿಫಾರಸು ಮಾಡಿದ ತಜ್ಞರು", tooltip: "ಕ್ಲಿನಿಕ್ ವೈದ್ಯರು ಶಿಫಾರಸು ಮಾಡಿದರೆ ಮಾತ್ರ ತಜ್ಞರ ಭೇಟಿ. ಸ್ವಯಂ ಬುಕ್ ಮಾಡಿದರೆ ಕವರ್ ಆಗುವುದಿಲ್ಲ." }
      ]
    },
    socialProof: {
      trusted: "50,000+ ಕುಟುಂಬಗಳ ನಂಬಿಕೆ",
      rating: "4.8/5 ರೇಟಿಂಗ್",
      testimonials: [
        { quote: "ನನ್ನ ಪೋಷಕರ ಔಷಧಿಗಳಿಗೆ ನಾನು ಸಾಮಾನ್ಯವಾಗಿ ₹5,000+ ಖರ್ಚು ಮಾಡುತ್ತಿದ್ದೆ. ಈ ಯೋಜನೆಯೊಂದಿಗೆ, ನಾನು ₹0 ಪಾವತಿಸಿದೆ. ಉತ್ತಮ ನಿರ್ಧಾರ.", saved: "ಉಳಿತಾಯ ₹12,000" },
        { quote: "ಉತ್ತಮ ಭಾಗವೆಂದರೆ ನಾನು ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾಗುವ ಮೊದಲು ಯೋಚಿಸಬೇಕಾಗಿಲ್ಲ. ರಕ್ತ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಸಮಾಲೋಚನೆಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಉಚಿತ.", saved: "ಉಳಿತಾಯ ₹8,500" },
        { quote: "ನನ್ನ ಹೆಂಡತಿಗೆ ಸ್ಕ್ಯಾನ್ ಮತ್ತು ಪರೀಕ್ಷೆಗಳ ಅಗತ್ಯವಿತ್ತು. ಕ್ಲಿನಿಕ್ ಎಲ್ಲವನ್ನೂ ಸರಾಗವಾಗಿ ನಿರ್ವಹಿಸಿತು. ಕುಟುಂಬಗಳಿಗೆ ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ.", saved: "ಉಳಿತಾಯ ₹15,000" }
      ]
    },
    patientInfo: {
      offer: "ವಿಶೇಷ ಕೊಡುಗೆ",
      activationFor: "ಯೋಜನೆ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ",
      approved: "ಪ್ರೊಫೈಲ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
      dob: "ಜನ್ಮ ದಿನಾಂಕ"
    },
    pricing: {
      title: "ಸ್ಮಾರ್ಟ್ ಅಪ್‌ಗ್ರೇಡ್",
      subtitle: "ಸಾವಿರಾರು ಉಳಿಸಲು ಈಗಲೇ ಸಣ್ಣ ಮೊತ್ತವನ್ನು ಪಾವತಿಸಿ.",
      currentBill: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಬಿಲ್",
      upgradeFee: "ಅಪ್‌ಗ್ರೇಡ್ ಶುಲ್ಕ",
      upgradeText: "ಈ ಸಣ್ಣ ಮೊತ್ತವನ್ನು ಸೇರಿಸಿ...",
      benefit: "₹10,000 ಕವರೇಜ್ ಅನ್ಲಾಕ್ ಮಾಡಿ",
      benefitText: "ಭವಿಷ್ಯದ OPD ಬಿಲ್‌ಗಳು ₹0 ಆಗುತ್ತವೆ",
      total: "ಒಟ್ಟು ಪಾವತಿ",
      cancellation: "ಗಮನಿಸಿ: ಪ್ರಸ್ತುತ ಬಿಲ್ ₹10,000 ದಿಂದ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ. ಸಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ ಮರುಪಾವತಿ ಇಲ್ಲ."
    },
    sticky: {
      mainText: (total: number) => `₹${total} ಪಾವತಿಸಿ`,
      checkText: "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      subText: (extra: number) => `₹${extra} ಹೆಚ್ಚುವರಿ ₹10k ಮಿತಿಗೆ`,
      payBtn: "ಪಾವತಿಸಿ ಮತ್ತು ಸಕ್ರಿಯಗೊಳಿಸಿ",
      checkBtn: "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      locked: "ಅರ್ಹತೆ ಇಲ್ಲ",
      expired: "ಆಫರ್ ಮುಕ್ತಾಯಗೊಂಡಿದೆ"
    },
    faq: {
      title: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
      items: [
        { q: "₹10,000 ಮಿತಿ ಮುಗಿದ ನಂತರ ಏನಾಗುತ್ತದೆ?", a: "ಮಿತಿ ಮುಗಿದ ನಂತರವೂ, ನೀವು ವರ್ಷದ ಉಳಿದ ದಿನಗಳಲ್ಲಿ ಕ್ಲಿನಿಕ್ ವೈದ್ಯರೊಂದಿಗೆ ಅನಿಯಮಿತ ಉಚಿತ ಸಮಾಲೋಚನೆಗಳನ್ನು ಪಡೆಯುತ್ತೀರಿ. ಔಷಧಿಗಳು ಮತ್ತು ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳ ಮೇಲೂ ರಿಯಾಯಿತಿ ಪಡೆಯುತ್ತೀರಿ." },
        { q: "ನಾನು ಈ ಯೋಜನೆಯನ್ನು ರದ್ದುಗೊಳಿಸಬಹುದೇ?", a: "ಹೌದು. ನೀವು ಯಾವುದೇ ಪ್ರಯೋಜನಗಳನ್ನು ಬಳಸದಿದ್ದರೆ 7 ದಿನಗಳಲ್ಲಿ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಲ್ಲದೆ ರದ್ದುಗೊಳಿಸಬಹುದು." },
        { q: "ತಜ್ಞ ವೈದ್ಯರನ್ನು ಒಳಗೊಂಡಿದೆಯೇ?", a: "ಹೌದು! ಕ್ಲಿನಿಕ್ ವೈದ್ಯರು ಶಿಫಾರಸು ಮಾಡಿದರೆ ತಜ್ಞರೊಂದಿಗಿನ (ಹೃದ್ರೋಗ ತಜ್ಞರು, ಚರ್ಮರೋಗ ತಜ್ಞರು, ಇತ್ಯಾದಿ) ಸಮಾಲೋಚನೆಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ." },
        { q: "ಇದು ಹಳೆಯ ಕಾಯಿಲೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆಯೇ?", a: "ಈ ಯೋಜನೆಯು ಹೊಸ ಒಪಿಡಿ ಅಗತ್ಯಗಳಿಗಾಗಿ. ಇದು ಡಯಾಲಿಸಿಸ್ ಅಥವಾ ಕಿಮೊಥೆರಪಿಯಂತಹ ದೀರ್ಘಕಾಲದ ಕಾಯಿಲೆಗಳ ನಿರ್ವಹಣೆಯನ್ನು ಒಳಗೊಂಡಿಲ್ಲ." }
      ]
    },
    app: {
      whyUpgrade: "ಈಗಲೇ ಏಕೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಬೇಕು?",
      whyUpgradeText: (bill: number, diff: number) => `ನೀವು ಈಗಾಗಲೇ ₹${bill} ಪಾವತಿಸಲು ಕೌಂಟರ್‌ನಲ್ಲಿದ್ದೀರಿ. ಕೇವಲ ₹${diff} ಹೆಚ್ಚುವರಿ ಪಾವತಿಸಿ, ಈ ಭೇಟಿಯನ್ನು ಉಚಿತವಾಗಿಸಿ ಮತ್ತು ವರ್ಷವಿಡೀ ₹10,000 ಮೌಲ್ಯದ ಕವರೇಜ್ ಪಡೆಯಿರಿ.`,
      offerExpires: "ನೀವು ಹೆಲ್ತ್ ಹಬ್‌ ನಿಂದ ಹೊರಬಂದ ನಂತರ ಆಫರ್ ಮುಕ್ತಾಯಗೊಳ್ಳುತ್ತದೆ.",
      declarationTitle: "ಅರ್ಹತಾ ಪರಿಶೀಲನೆ",
      declarationText: (name: string) => `ಈ ಯೋಜನೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಾವು ${name} ಅವರ ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಬೇಕು ಮತ್ತು ಕೆಲವು ವಿವರಗಳನ್ನು ದೃಢೀಕರಿಸಬೇಕು.`,
      viewRecordBtn: "ಈಗಲೇ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      declarationDoneTitle: "ಅರ್ಹತೆ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
      declarationDoneText: "ನೀವು OPD ಕೇರ್ ಯೋಜನೆಗೆ ಅರ್ಹರಾಗಿದ್ದೀರಿ. ಸಕ್ರಿಯಗೊಳಿಸಲು ದಯವಿಟ್ಟು ಪಾವತಿಗೆ ಮುಂದುವರಿಯಿರಿ.",
      declarationFailTitle: "ಅರ್ಹತೆ ಇಲ್ಲ",
      declarationFailText: "ಮೌಲ್ಯಮಾಪನದ ಆಧಾರದ ಮೇಲೆ, ಈ ಯೋಜನೆಯು ಅನ್ವಯಿಸುವುದಿಲ್ಲ.",
      viewReasonBtn: "ಕಾರಣ ವೀಕ್ಷಿಸಿ",
      confirmBtn: "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      nav: "Clinikk"
    },
    payment: {
      step1: "ಸುರಕ್ಷಿತ ಪಾವತಿಯನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ",
      step2: "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ",
      step3: "ಗೇಟ್‌ವೇಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ",
      sub1: (amount: number) => `₹${amount} ವಹಿವಾಟು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...`,
      sub2: "ಯೋಜನೆ ಪ್ರಯೋಜನಗಳನ್ನು ಖಚಿತಪಡಿಸಲಾಗುತ್ತಿದೆ...",
      sub3: "ದಯವಿಟ್ಟು ಈ ವಿಂಡೋವನ್ನು ಮುಚ್ಚಬೇಡಿ.",
      secure: "256-ಬಿಟ್ SSL ಸುರಕ್ಷಿತ"
    },
    success: {
      title: "ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ",
      subtitle: "ನಿಮ್ಮ OPD ಯೋಜನೆ ಈಗ ಸಕ್ರಿಯವಾಗಿದೆ!",
      totalPaid: "ಒಟ್ಟು ಪಾವತಿ",
      orderId: "ಆರ್ಡರ್ ಐಡಿ",
      dateTime: "ದಿನಾಂಕ ಮತ್ತು ಸಮಯ",
      opdLimit: "OPD ಮಿತಿ",
      opdLimitValue: "₹10,000 ಸಕ್ರಿಯ",
      billStatus: "ಪ್ರಸ್ತುತ ಬಿಲ್",
      billStatusValue: "ಪಾವತಿಸಲಾಗಿದೆ",
      btnHome: "ಮುಗಿಯಿತು"
    },
    healthCheck: {
      title: "ಅರ್ಹತಾ ಪರಿಶೀಲನೆ",
      subtitle: "ನಿಮ್ಮ ಕ್ಲಿನಿಕ್ ದಾಖಲೆಗಳನ್ನು ನಾವು ವಿಶ್ಲೇಷಿಸಿದ್ದೇವೆ. ದಯವಿಟ್ಟು ಉಳಿದ ವಿವರಗಳನ್ನು ದೃಢೀಕರಿಸಿ.",
      analyzing: "ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
      checking: "ವರದಿ ಮಾಡಿದ ಮಾಹಿತಿ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
      sectionKnown: "ದಾಖಲೆಗಳಿಂದ ತೆರವುಗೊಳಿಸಲಾಗಿದೆ",
      sectionKnownDesc: "ನಿಮ್ಮ ಇತಿಹಾಸದ ಆಧಾರದ ಮೇಲೆ, ನಾವು ಇವುಗಳನ್ನು ತೆರವುಗೊಳಿಸಿದ್ದೇವೆ:",
      sectionUnknown: "ಕ್ರಮದ ಅಗತ್ಯವಿದೆ",
      sectionUnknownDesc: "ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಈ ಕೆಳಗಿನವುಗಳಿಗೆ ಉತ್ತರಿಸಿ:",
      markAllNo: "ಎಲ್ಲವನ್ನೂ 'ಇಲ್ಲ' ಎಂದು ಗುರುತಿಸಿ",
      validationError: "ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
      disclaimer: "ಮೇಲಿನ ವಿವರಗಳು ನಿಜವೆಂದು ನಾನು ದೃಢೀಕರಿಸುತ್ತೇನೆ. ತಪ್ಪು ಮಾಹಿತಿಯು ಯೋಜನೆಯ ರದ್ದತಿಗೆ ಕಾರಣವಾಗಬಹುದು ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.",
      btnYes: "ಹೌದು",
      btnNo: "ಇಲ್ಲ",
      knownItems: [
         { id: 'diabetes', title: "ಯಾವುದೇ ಸಂಕೀರ್ಣ ಮಧುಮೇಹವಿಲ್ಲ" },
         { id: 'htn', title: "ಯಾವುದೇ ದೀರ್ಘಕಾಲದ ಅಧಿಕ ರಕ್ತದೊತ್ತಡವಿಲ್ಲ" },
         { id: 'copd', title: "ಯಾವುದೇ ದೀರ್ಘಕಾಲದ ಶ್ವಾಸಕೋಶದ ಕಾಯಿಲೆ ಇಲ್ಲ" },
         { id: 'ckd', title: "ಯಾವುದೇ ದೀರ್ಘಕಾಲದ ಮೂತ್ರಪಿಂಡ ಕಾಯಿಲೆ ಇಲ್ಲ" }
      ],
      unknownItems: [
        { id: 'heart', title: "ಹೃದಯ ಕಾಯಿಲೆ ಅಥವಾ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", q: "ನಿಮಗೆ ಎಂದಾದರೂ ಹೃದಯಾಘಾತ, ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಥವಾ ರಕ್ತ ಪರಿಚಲನೆಯಲ್ಲಿ ಗಂಭೀರ ಸಮಸ್ಯೆ ಆಗಿದೆಯೇ?" },
        { id: 'cancer', title: "ಕ್ಯಾನ್ಸರ್ ಅಥವಾ ಗೆಡ್ಡೆ", q: "ನಿಮಗೆ ಎಂದಾದರೂ ಕ್ಯಾನ್ಸರ್ ಅಥವಾ ಯಾವುದೇ ರೀತಿಯ ಗೆಡ್ಡೆ ಇದೆ ಎಂದು ರೋಗನಿರ್ಣಯ ಮಾಡಲಾಗಿದೆಯೇ?" },
        { id: 'kidney_surg', title: "ಮೂತ್ರಪಿಂಡ / ಪ್ರಾಸ್ಟೇಟ್ / ಮೂತ್ರಕೋಶ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", q: "ನಿಮ್ಮ ಮೂತ್ರಪಿಂಡ, ಪ್ರಾಸ್ಟೇಟ್ ಅಥವಾ ಮೂತ್ರಕೋಶದ ಮೇಲೆ ಎಂದಾದರೂ ದೊಡ್ಡ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಡೆದಿದೆಯೇ (ಮೂತ್ರಪಿಂಡ ತೆಗೆಯುವುದು ಸೇರಿದಂತೆ)?" },
        { id: 'brain', title: "ಮೆದುಳು / ಬೆನ್ನುಮೂಳೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಥವಾ ಪಾರ್ಶ್ವವಾಯು", q: "ನಿಮಗೆ ಎಂದಾದರೂ ಮೆದುಳು ಅಥವಾ ಬೆನ್ನುಮೂಳೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಥವಾ ಪಾರ್ಶ್ವವಾಯು (paralysis / CVA) ಆಗಿದೆಯೇ?" },
        { id: 'abd', title: "ಪ್ರಮುಖ ಹೊಟ್ಟೆಯ ಅಂಗಗಳ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", q: "ನಿಮ್ಮ ಯಕೃತ್ತು (liver), ಗುಲ್ಮ (spleen), ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ (pancreas) ಅಥವಾ ಕರುಳಿನ ಮೇಲೆ ಎಂದಾದರೂ ದೊಡ್ಡ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಡೆದಿದೆಯೇ?" },
        { id: 'bone', title: "ಪ್ರಮುಖ ಮೂಳೆ ಮುರಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", q: "ನಿಮ್ಮ ಸೊಂಟ, ಮೊಣಕಾಲು, ತೊಡೆ, ಕಾಲು, ತೋಳು ಅಥವಾ ಭುಜದಲ್ಲಿ ಪ್ಲೇಟ್‌ಗಳು, ಸ್ಕ್ರೂಗಳು ಅಥವಾ ರಾಡ್‌ಗಳೊಂದಿಗೆ ದೊಡ್ಡ ಮುರಿತಕ್ಕೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಡೆದಿದೆಯೇ?" },
        { id: 'amp', title: "ಅಂಗಚ್ಛೇದನ (Amputation)", q: "ನಿಮ್ಮ ಕಾಲು, ತೋಳು, ಪಾದ ಅಥವಾ ಕಾಲ್ಬೆರಳುಗಳನ್ನು ಎಂದಾದರೂ ಕತ್ತರಿಸಲಾಗಿದೆಯೇ (amputation)?" },
        { id: 'lung_surg', title: "ತೆರೆದ ಎದೆ / ಶ್ವಾಸಕೋಶದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", q: "ನಿಮ್ಮ ಶ್ವಾಸಕೋಶ ಅಥವಾ ಎದೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಎಂದಾದರೂ ತೆರೆದ ಎದೆಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ (open-chest surgery) ನಡೆದಿದೆಯೇ?" },
        { id: 'burns', title: "ಗಂಭೀರ ಸುಟ್ಟಗಾಯಗಳು", q: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಥವಾ ಚರ್ಮದ ಕಸಿ (skin grafting) ಅಗತ್ಯವಿರುವ ಎರಡನೇ ಅಥವಾ ಮೂರನೇ ಹಂತದ ಸುಟ್ಟಗಾಯಗಳು ನಿಮಗೆ ಎಂದಾದರೂ ಆಗಿದೆಯೇ?" },
        { id: 'face', title: "ದವಡೆ / ಮುಖದ ಪುನರ್ನಿರ್ಮಾಣ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", q: "ಗಾಯದ ನಂತರ ನಿಮ್ಮ ದವಡೆ ಅಥವಾ ಮುಖಕ್ಕೆ ದೊಡ್ಡ ಪುನರ್ನಿರ್ಮಾಣ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಡೆದಿದೆಯೇ (ಸಾಮಾನ್ಯ ದಂತ ಅಥವಾ ಸೌಂದರ್ಯವರ್ಧಕ ಕೆಲಸವಲ್ಲ)?" },
        { id: 'transplant', title: "ಅಂಗಾಂಗ ಕಸಿ", q: "ನಿಮಗೆ ಎಂದಾದರೂ ಮೂತ್ರಪಿಂಡ, ಯಕೃತ್ತು, ಶ್ವಾಸಕೋಶ, ಹೃದಯ ಅಥವಾ ಮೂಳೆ ಮಜ್ಜೆಯ ಕಸಿ (transplant) ಮಾಡಲಾಗಿದೆಯೇ?" },
        { id: 'immune', title: "ರೋಗನಿರೋಧಕ ವ್ಯವಸ್ಥೆ / ಆಟೋಇಮ್ಯೂನ್ ಕಾಯಿಲೆ", q: "ನಿಮಗೆ ಎಚ್ಐವಿ/ಏಡ್ಸ್, ರುಮಟಾಯ್ಡ್ ಆರ್ಥ್ರೈಟಿಸ್, ಅಲ್ಸರೇಟಿವ್ ಕೊಲೈಟಿಸ್ ಅಥವಾ ಯಾವುದೇ ಇತರ ದೀರ್ಘಕಾಲದ ಪ್ರತಿರಕ್ಷಣಾ ಅಥವಾ ಆಟೋಇಮ್ಯೂನ್ ಕಾಯಿಲೆ ಇದೆ ಎಂದು ರೋಗನಿರ್ಣಯ ಮಾಡಲಾಗಿದೆಯೇ?" },
        { id: 'obesity', title: "ತೀವ್ರ ಸ್ಥೂಲಕಾಯತೆ", q: "ನಿಮ್ಮ ಬಾಡಿ ಮಾಸ್ ಇಂಡೆಕ್ಸ್ (BMI) 37 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿದೆಯೇ (ಅಥವಾ ನೀವು ತೀವ್ರವಾಗಿ ಸ್ಥೂಲಕಾಯರಾಗಿದ್ದೀರಿ ಎಂದು ಹೇಳಲಾಗಿದೆಯೇ)?" },
        { id: 'smoking', title: "ಅತಿಯಾದ ಧೂಮಪಾನ", q: "ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ದಿನಕ್ಕೆ 8 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಿಗರೇಟ್/ಬೀಡಿ ಸೇದುತ್ತೀರಾ?" },
        { id: 'alcohol', title: "ಅತಿಯಾದ ಮದ್ಯಪಾನ", q: "ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ವಾರಕ್ಕೆ 1 ಪೂರ್ಣ ಬಾಟಲಿ ಹಾರ್ಡ್ ಮದ್ಯ (750 ಮಿಲಿ) ಅಥವಾ ವಾರಕ್ಕೆ ಸುಮಾರು 10 ದೊಡ್ಡ ಬಾಟಲಿ ಬಿಯರ್ ಕುಡಿಯುತ್ತೀರಾ?" },
        { id: 'tobacco', title: "ಅತಿಯಾದ ತಂಬಾಕು / ಗುಟ್ಕಾ ಸೇವನೆ", q: "ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ದಿನಕ್ಕೆ 6 ಪ್ಯಾಕೆಟ್‌ಗಿಂತ ಹೆಚ್ಚು ತಂಬಾಕು ಅಥವಾ ಗುಟ್ಕಾವನ್ನು ಅಗಿಯುತ್ತೀರಾ?" }
      ],
      ineligible: {
        title: "ಅರ್ಹತೆ ಇಲ್ಲ",
        subtitle: "ಮೌಲ್ಯಮಾಪನದ ಆಧಾರದ ಮೇಲೆ",
        message: "ಈ ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಯು ಯಾವುದೇ ಪ್ರಮುಖ ಕಾಯಿಲೆಗಳಿಲ್ಲದ ರೋಗಿಗಳಿಗೆ ಮಾತ್ರ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ, ನಾವು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
        contact: "ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ಯೋಜನೆಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು ನಮ್ಮ ಬೆಂಬಲ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        btnBack: "ನಾನು ತಪ್ಪು ಮಾಡಿದ್ದೇನೆ",
        btnClose: "ಮೌಲ್ಯಮಾಪನ ಮುಚ್ಚಿ"
      }
    }
  }
};