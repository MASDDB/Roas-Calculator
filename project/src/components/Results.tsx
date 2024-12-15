import React from 'react';
import { Download, Mail } from 'lucide-react';

interface ResultsProps {
  revenue: number;
  roas: number;
  showCongrats: boolean;
  email: string;
  onEmailChange: (email: string) => void;
  onDownload: () => void;
}

const Results: React.FC<ResultsProps> = ({
  revenue,
  roas,
  showCongrats,
  email,
  onEmailChange,
  onDownload,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Results</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Revenue Generated</p>
            <p className="text-2xl font-bold text-gray-900">
              ${revenue.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">ROAS</p>
            <p className="text-2xl font-bold text-gray-900">
              {roas.toFixed(2)}x
            </p>
          </div>
        </div>
        
        {showCongrats && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
            Congratulations! You are an excellent marketer. Keep up the great work!
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Enter your email to download results
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <button
          onClick={onDownload}
          disabled={!email.includes('@')}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Results
        </button>
      </div>
    </div>
  );
};

export default Results;
