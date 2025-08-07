import React, { useState } from 'react';
import { QuickScanButtons } from './QuickScanButtons';
import { Card, Button } from '@/components/ui';
import type { ItemScannerProps } from '@/types/checkout';

export const ItemScanner: React.FC<ItemScannerProps> = ({
  onScanItem,
  availableSkus,
}) => {
  const [selectedSku, setSelectedSku] = useState<string>('');

  const handleScanItem = () => {
    if (selectedSku) {
      onScanItem(selectedSku);
      setSelectedSku('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleScanItem();
    }
  };

  return (
    <Card title="Scan Items">
      <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 px-1 sm:px-2">
        <input
          type="text"
          value={selectedSku}
          onChange={e => setSelectedSku(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          placeholder="Enter SKU (A, B, C, D)"
          maxLength={1}
          className="w-full px-4 sm:px-6 py-4 sm:py-5 border-2 border-gray-200 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-semibold text-center uppercase transition-all duration-300 bg-gray-50 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:scale-[1.02] focus:outline-none"
        />
        <Button
          onClick={handleScanItem}
          disabled={!selectedSku}
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
