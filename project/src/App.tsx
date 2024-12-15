import React, { useState } from 'react';
import Header from './components/Header';
import BusinessTypeSelector from './components/BusinessTypeSelector';
import AdSpendInput from './components/AdSpendInput';
import ConversionMetrics from './components/ConversionMetrics';
import Results from './components/Results';
import { calculateResults } from './utils/calculations';

function App() {
  const [businessType, setBusinessType] = useState<'startup' | 'established'>('startup');
  const [adSpend, setAdSpend] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [clicks, setClicks] = useState(10);
  const [conversions, setConversions] = useState(5);
  const [averageOrderValue, setAverageOrderValue] = useState(0);
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleDownload = () => {
    // Implementation for downloading results
    console.log('Downloading results...');
  };

  const { revenue, roas } = calculateResults(adSpend, visitors, clicks, conversions, averageOrderValue);
  const showCongrats = businessType === 'established' && annualRevenue > 0 && adSpend === 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <BusinessTypeSelector
            businessType={businessType}
            onBusinessTypeChange={setBusinessType}
          />
          
          <AdSpendInput
            businessType={businessType}
            adSpend={adSpend}
            annualRevenue={annualRevenue}
            onAdSpendChange={setAdSpend}
            onAnnualRevenueChange={setAnnualRevenue}
          />

          <ConversionMetrics
            visitors={visitors}
            clicks={clicks}
            conversions={conversions}
            averageOrderValue={averageOrderValue}
            onVisitorsChange={setVisitors}
            onClicksChange={setClicks}
            onConversionsChange={setConversions}
            onAverageOrderValueChange={setAverageOrderValue}
          />

          <button
            onClick={() => setShowResults(true)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate ROAS
          </button>
        </div>

        {showResults && (
          <Results
            revenue={revenue}
            roas={roas}
            showCongrats={showCongrats}
            email={email}
            onEmailChange={setEmail}
            onDownload={handleDownload}
          />
        )}
      </div>
    </div>
  );
}

export default App;
