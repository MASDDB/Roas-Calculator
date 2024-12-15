import React from 'react';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Calculator className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Return on Ad Spend Calculator</h1>
      </div>
      <p className="text-gray-600">Optimize your marketing spend and track your ROI</p>
    </div>
  );
};

export default Header;
