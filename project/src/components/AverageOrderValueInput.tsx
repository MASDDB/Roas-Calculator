import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface AverageOrderValueInputProps {
  value: number;
  onChange: (value: number) => void;
}

const AverageOrderValueInput: React.FC<AverageOrderValueInputProps> = ({ value, onChange }) => {
  const increment = 100;
  const maxValue = 20000;

  const adjustValue = (increment: boolean) => {
    const newValue = increment ? value + 100 : value - 100;
    if (newValue >= 0 && newValue <= maxValue) {
      onChange(newValue);
    }
  };

  const handleManualInput = (inputValue: string) => {
    // Remove leading zeros
    const cleanedValue = inputValue.replace(/^0+/, '');
    const newValue = cleanedValue === '' ? 0 : Number(cleanedValue);
    
    if (!isNaN(newValue) && newValue >= 0 && newValue <= maxValue) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <label className="text-gray-700 text-sm font-medium">Average Order Value</label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => adjustValue(false)}
          className="p-1 rounded-full hover:bg-gray-100"
          disabled={value <= 0}
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            value={value || ''}
            onChange={(e) => handleManualInput(e.target.value)}
            className="w-24 text-center pl-8 border border-gray-300 rounded-lg py-1"
            min="0"
            max={maxValue}
            placeholder="Enter value"
          />
        </div>
        <button
          onClick={() => adjustValue(true)}
          className="p-1 rounded-full hover:bg-gray-100"
          disabled={value >= maxValue}
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default AverageOrderValueInput;
