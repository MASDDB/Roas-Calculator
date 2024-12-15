import React from 'react';

interface BusinessTypeSelectorProps {
  businessType: 'startup' | 'established';
  onBusinessTypeChange: (type: 'startup' | 'established') => void;
}

const BusinessTypeSelector: React.FC<BusinessTypeSelectorProps> = ({
  businessType,
  onBusinessTypeChange,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-3">
        Select your business type:
      </label>
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            businessType === 'startup'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onBusinessTypeChange('startup')}
        >
          Start-up
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            businessType === 'established'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onBusinessTypeChange('established')}
        >
          In Business Over a Year
        </button>
      </div>
    </div>
  );
};

export default BusinessTypeSelector;
