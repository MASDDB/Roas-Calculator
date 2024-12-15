import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface PercentageAdjusterProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const PercentageAdjuster: React.FC<PercentageAdjusterProps> = ({ label, value, onChange }) => {
  const adjustValue = (increment: boolean) => {
    const newValue = increment ? value + 1 : value - 1;
    if (newValue >= 0 && newValue <= 100) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <label className="text-gray-700 text-sm font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => adjustValue(false)}
          className="p-1 rounded-full hover:bg-gray-100"
          disabled={value <= 0}
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (newValue >= 0 && newValue <= 100) {
              onChange(newValue);
            }
          }}
          className="w-16 text-center border border-gray-300 rounded-lg py-1"
          min="0"
          max="100"
        />
        <span className="text-gray-600">%</span>
        <button
          onClick={() => adjustValue(true)}
          className="p-1 rounded-full hover:bg-gray-100"
          disabled={value >= 100}
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PercentageAdjuster;
