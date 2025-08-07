import React from 'react';
import { Button } from '@/components/ui';
import type { QuickScanButtonsProps } from '@/types/checkout';

export const QuickScanButtons: React.FC<QuickScanButtonsProps> = ({
  skus,
  onScanItem,
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 flex-1">
      {skus.map(sku => (
        <Button
          key={sku}
          onClick={() => onScanItem(sku)}
          variant="secondary"
          size="lg"
          className="text-xl sm:text-2xl flex items-center justify-center"
        >
          {sku}
        </Button>
      ))}
    </div>
  );
};
