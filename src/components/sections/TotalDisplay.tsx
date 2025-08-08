import React from 'react';
import { formatPrice } from '@/utils/priceUtils';
import { Card } from '@/components/ui';
import type { TotalDisplayProps } from '@/types/checkout';

export const TotalDisplay: React.FC<TotalDisplayProps> = ({
  runningTotal,
  finalTotal,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 w-full">
    <Card title="Running Total" variant="elevated" className="text-center">
      <div className="flex items-center justify-center h-full">
        <div className="text-6xl font-bold text-blue-600">
          {formatPrice(runningTotal)}
        </div>
      </div>
    </Card>

    <Card title="Final Total" variant="elevated" className="text-center">
      <div className="flex items-center justify-center h-full">
        <div className="text-6xl font-bold text-green-600">
          {formatPrice(finalTotal)}
        </div>
      </div>
    </Card>
  </div>
);
