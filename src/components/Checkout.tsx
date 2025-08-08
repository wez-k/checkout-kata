import React from 'react';
import { samplePricingRules } from '@/data';
import { useCheckout } from '@/hooks';
import { CheckoutHeader, ItemScanner, ShoppingCart } from './sections';

export const Checkout: React.FC = () => {
  const { items, addItem, removeItem, calculateItemTotal, getAvailableSkus } =
    useCheckout({ pricingRules: samplePricingRules });

  return (
    <div className="max-w-7xl w-full mx-auto p-3 sm:p-5 font-sans">
      <CheckoutHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
        <ItemScanner onScanItem={addItem} availableSkus={getAvailableSkus()} />

        <ShoppingCart
          items={items}
          onRemoveItem={removeItem}
          calculateItemTotal={calculateItemTotal}
        />
      </div>
    </div>
  );
};
