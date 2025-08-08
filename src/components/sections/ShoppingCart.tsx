import React from 'react';
import type { ShoppingCartProps } from '@/types/checkout';
import { CartItemRow } from './CartItemRow';
import { Card } from '@/components/ui';

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onRemoveItem,
  calculateItemTotal,
}) => {
  return (
    <Card title="Shopping Cart">
      {items.length === 0 ? (
        <div className="text-center text-gray-500 italic py-20 text-xl flex-1 flex items-center justify-center">
          Cart is empty
        </div>
      ) : (
        <div className="flex flex-col gap-6 flex-1">
          {items.map(item => (
            <CartItemRow
              key={item.sku}
              item={item}
              onRemove={() => onRemoveItem(item.sku)}
              itemTotal={calculateItemTotal(item)}
            />
          ))}
        </div>
      )}
    </Card>
  );
};
