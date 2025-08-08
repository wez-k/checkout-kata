import React from 'react';
import { Button } from '@/components/ui';
import type { CartItemRowProps } from '@/types/checkout';
import { formatPrice } from '@/utils';

export const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onRemove,
  itemTotal,
}) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
        {item.sku}
      </div>
      <div className="text-gray-600 font-semibold text-base sm:text-lg">
        x{item.quantity}
      </div>
      <div className="text-green-600 font-bold text-base sm:text-lg">
        {formatPrice(itemTotal)}
      </div>
      <Button
        onClick={onRemove}
        variant="danger"
        size="sm"
        className="ml-auto p-1.5 sm:p-2"
      >
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </Button>
    </div>
  );
};
