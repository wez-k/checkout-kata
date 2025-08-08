import React from 'react';
import type { PricingRulesProps } from '@/types/checkout';
import { formatPrice } from '@/utils/priceUtils';

export const PricingRules: React.FC<PricingRulesProps> = ({ rules }) => {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-h-[400px] flex flex-col"
      aria-label="Pricing rules section"
    >
      <h2
        className="text-gray-800 mb-6 text-2xl font-semibold border-b-4 border-blue-500 pb-3"
        id="pricing-rules-heading"
      >
        Pricing Rules
      </h2>

      <div
        className="flex flex-col gap-4 flex-1"
        aria-labelledby="pricing-rules-heading"
      >
        {rules?.length ? (
          rules.map(rule => (
            <div
              key={rule.sku}
              className="flex justify-between items-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
              aria-label={`Pricing rule for ${rule.sku}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                {rule.sku}
              </div>

              <div className="text-right text-gray-800 font-semibold text-lg">
                {formatPrice(rule.unitPrice)} each
                {rule.specialPrice && (
                  <div className="bg-orange-50 text-orange-700 font-bold text-base px-3 py-1.5 rounded-md border-l-4 border-orange-500 mt-2">
                    {rule.specialPrice.quantity} for{' '}
                    {formatPrice(rule.specialPrice.price)}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No pricing rules available.</p>
        )}
      </div>
    </div>
  );
};
