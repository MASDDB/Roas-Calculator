import React from 'react';
import { HelpCircle } from 'lucide-react';

interface AdSpendInputProps {
  businessType: 'startup' | 'established';
  adSpend: number;
  annualRevenue: number;
  onAdSpendChange: (value: number) => void;
  onAnnualRevenueChange: (value: number) => void;
}

const AdSpendInput: React.FC<AdSpendInputProps> = ({
  businessType,
  adSpend,
  annualRevenue,
  onAdSpendChange,
  onAnnualRevenueChange,
}) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="relative">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          {businessType === 'startup'
            ? 'How much do you plan on spending on advertising in your first year?'
            : 'How much did you spend on advertising last year?'}
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            value={adSpend}
            onChange={(e) => onAdSpendChange(Number(e.target.value))}
            className="w-full pl-8 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
            min="0"
          />
          <div className="group absolute right-3 top-1/2 -translate-y-1/2">
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <div className="invisible group-hover:visible absolute right-0 w-64 p-2 bg-gray-800 text-white text-sm rounded-lg -top-20">
              Recommended ad spend is 10-20% of your annual revenue. Adjust as needed once campaigns are dialed in.
            </div>
          </div>
        </div>
      </div>

      {businessType === 'established' && adSpend === 0 && (
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            What was your annual revenue last year?
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={annualRevenue}
              onChange={(e) => onAnnualRevenueChange(Number(e.target.value))}
              className="w-full pl-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
              min="0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdSpendInput;
