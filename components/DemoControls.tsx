import React from 'react';

interface DemoControlsProps {
  currentBill: number;
  setCurrentBill: (val: number) => void;
  simulateIneligible: boolean;
  setSimulateIneligible: (val: boolean) => void;
  isBillPaid: boolean;
  setIsBillPaid: (val: boolean) => void;
}

export const DemoControls: React.FC<DemoControlsProps> = ({ 
  currentBill, 
  setCurrentBill, 
  simulateIneligible, 
  setSimulateIneligible,
  isBillPaid,
  setIsBillPaid
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-64 hidden md:block">
      <h3 className="text-xs font-bold uppercase text-gray-400 mb-2">Demo Simulator</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Current Patient Bill: ₹{currentBill}
        </label>
        <input
          type="range"
          min="0"
          max="1800"
          step="50"
          value={currentBill}
          onChange={(e) => setCurrentBill(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₹0</span>
          <span>₹1800</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-3 space-y-3">
        {/* Ineligible Toggle */}
        <div>
          <div className="flex items-center justify-between">
             <label className="text-xs font-medium text-gray-700">Simulate Ineligible</label>
             <button 
               onClick={() => setSimulateIneligible(!simulateIneligible)}
               className={`w-10 h-5 rounded-full relative transition-colors ${simulateIneligible ? 'bg-red-500' : 'bg-gray-200'}`}
             >
               <span className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${simulateIneligible ? 'translate-x-5' : 'translate-x-0'}`}></span>
             </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-1">
            {simulateIneligible ? "Check will FAIL" : "Check will PASS"}
          </p>
        </div>

        {/* Bill Paid Toggle */}
        <div>
          <div className="flex items-center justify-between">
             <label className="text-xs font-medium text-gray-700">Bill Paid Externally</label>
             <button 
               onClick={() => setIsBillPaid(!isBillPaid)}
               className={`w-10 h-5 rounded-full relative transition-colors ${isBillPaid ? 'bg-blue-500' : 'bg-gray-200'}`}
             >
               <span className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${isBillPaid ? 'translate-x-5' : 'translate-x-0'}`}></span>
             </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-1">
            {isBillPaid ? "Offer Expired" : "Offer Active"}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2 italic border-t border-gray-100 pt-2">
        Adjust slider to see how the pricing card adapts dynamically.
      </p>
    </div>
  );
};