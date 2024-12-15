import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface WebsiteVisitorsInputProps {
  visitors: number;
  onChange: (value: number) => void;
}

const WebsiteVisitorsInput: React.FC<WebsiteVisitorsInputProps> = ({ visitors, onChange }) => {
  const increment = 1000;
  const maxVisitors = 100000;

  const adjustValue = (increment: boolean) => {
    const newValue = increment ? visitors + 1000 : visitors - 1000;
    if (newValue >= 0 && newValue <= maxVisitors) {
      onChange(newValue);
    }
  };

  const handleManualInput = (inputValue: string) => {
    // Remove leading zeros
    const cleanedValue = inputValue.replace(/^0+/, '');
    const newValue = cleanedValue === '' ? 0 : Number(cleanedValue);
    
    if (!isNaN(newValue) && newValue >= 0 && newValue <= maxVisitors) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <label className="text-gray-700 text-sm font-medium">Website Visitors</label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => adjustValue(false)}
          className="p-1 rounded-full hover:bg-gray-100"
          disabled={visitors <= 0}
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <input
          type="number"
          value={visitors || ''}
          onChange={(e) => handleManualInput(e.target.value)}
          className="w-24 text-center border border-gray-300 rounded-lg py-1"
          min="0"
          max={maxVisitors}
          placeholder="Enter visitors"
        />
        <button
          onClick={() => adjustValue(true)}
          className="p-1 rounded-full hover:bg-gray-100"
          disabled={visitors >= maxVisitors}
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default WebsiteVisitorsInput;
