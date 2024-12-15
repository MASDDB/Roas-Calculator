import React from 'react';
import WebsiteVisitorsInput from './WebsiteVisitorsInput';
import PercentageAdjuster from './PercentageAdjuster';
import AverageOrderValueInput from './AverageOrderValueInput';

interface ConversionMetricsProps {
  visitors: number;
  clicks: number;
  conversions: number;
  averageOrderValue: number;
  onVisitorsChange: (value: number) => void;
  onClicksChange: (value: number) => void;
  onConversionsChange: (value: number) => void;
  onAverageOrderValueChange: (value: number) => void;
}

const ConversionMetrics: React.FC<ConversionMetricsProps> = ({
  visitors,
  clicks,
  conversions,
  averageOrderValue,
  onVisitorsChange,
  onClicksChange,
  onConversionsChange,
  onAverageOrderValueChange,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Conversion Metrics</h3>
      <WebsiteVisitorsInput
        visitors={visitors}
        onChange={onVisitorsChange}
      />
      <PercentageAdjuster
        label="Clicks on Offer"
        value={clicks}
        onChange={onClicksChange}
      />
      <PercentageAdjuster
        label="Conversions"
        value={conversions}
        onChange={onConversionsChange}
      />
      <AverageOrderValueInput
        value={averageOrderValue}
        onChange={onAverageOrderValueChange}
      />
    </div>
  );
};

export default ConversionMetrics;
