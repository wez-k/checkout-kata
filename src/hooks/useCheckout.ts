import { useState, useEffect, useCallback } from 'react';
import { CheckoutService } from '@/services';
import type { CartItem, PricingRule, UseCheckoutProps } from '@/types/checkout';

export const useCheckout = ({ pricingRules }: UseCheckoutProps) => {
  const [checkoutService] = useState(() => new CheckoutService(pricingRules));
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [runningTotal, setRunningTotal] = useState(0);

  // Calculate totals whenever items change
  useEffect(() => {
    const newTotal = checkoutService.calculateTotal(items);
    setTotal(newTotal);
  }, [items, checkoutService]);

  const addItem = useCallback(
    (sku: string) => {
      const updatedItems = checkoutService.addItem(items, sku);
      setItems(updatedItems);

      // Calculate running total after adding item
      const newRunningTotal = checkoutService.calculateTotal(updatedItems);
      setRunningTotal(newRunningTotal);
    },
    [items, checkoutService]
  );

  const removeItem = useCallback(
    (sku: string) => {
      const updatedItems = checkoutService.removeItem(items, sku);
      setItems(updatedItems);

      const newRunningTotal = checkoutService.calculateTotal(updatedItems);
      setRunningTotal(newRunningTotal);
    },
    [items, checkoutService]
  );

  const calculateItemTotal = useCallback(
    (item: CartItem): number => {
      return checkoutService.calculateTotal([item]);
    },
    [checkoutService]
  );

  const getPricingRule = useCallback(
    (sku: string): PricingRule | undefined => {
      return checkoutService.getPricingRule(sku);
    },
    [checkoutService]
  );

  const getAvailableSkus = useCallback((): string[] => {
    return checkoutService.getAvailableSkus();
  }, [checkoutService]);

  const clearCart = useCallback(() => {
    setItems([]);
    setTotal(0);
    setRunningTotal(0);
  }, []);

  return {
    items,
    total,
    runningTotal,
    addItem,
    removeItem,
    calculateItemTotal,
    getPricingRule,
    getAvailableSkus,
    clearCart,
  };
};
