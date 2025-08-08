import React, { useState } from 'react';
import { QuickScanButtons } from './QuickScanButtons';
import { Card, Button } from '@/components/ui';
import type { ItemScannerProps } from '@/types/checkout';

export const ItemScanner: React.FC<ItemScannerProps> = ({
  onScanItem,
  availableSkus,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleScanItems = () => {
    if (inputValue.trim()) {
      const skus = inputValue
        .split(',')
        .map(sku => sku.trim().toUpperCase())
        .filter(sku => sku && availableSkus.includes(sku));

      skus.forEach(sku => {
        onScanItem(sku);
      });

      setInputValue('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleScanItems();
    }
  };

  return (
    <Card title="Scan Items">
      <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 px-1 sm:px-2">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          placeholder="Enter SKU (A, B, C, D)"
          className="w-full px-4 sm:px-6 py-4 sm:py-5 border-2 border-gray-200 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-semibold text-center uppercase transition-all duration-300 bg-gray-50 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:scale-[1.02] focus:outline-none"
        />
        <Button
          onClick={handleScanItems}
          disabled={!inputValue.trim()}
          variant="primary"
          size="lg"
          className="w-full"
        >
          Scan Item
        </Button>
      </div>

      <div className="flex-1 px-1 sm:px-2">
        <h3 className="text-gray-600 text-sm sm:text-base font-semibold mb-4 sm:mb-6 uppercase tracking-wider">
          Quick Scan
        </h3>
        <QuickScanButtons skus={availableSkus} onScanItem={onScanItem} />
      </div>
    </Card>
  );
};
