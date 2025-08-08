import type { PricingRule, CartItem, PricingRules } from '@/types/checkout';

export class CheckoutService {
  private pricingRules: PricingRules;

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules.reduce((acc, rule) => {
      acc[rule.sku] = rule;
      return acc;
    }, {} as PricingRules);
  }

  private calculateItemPrice(sku: string, quantity: number): number {
    const rule = this.pricingRules[sku];
    if (!rule) {
      throw new Error(`No pricing rule found for SKU: ${sku}`);
    }

    // If no special price, return unit price * quantity
    if (!rule.specialPrice) {
      return rule.unitPrice * quantity;
    }

    // Calculate special price bundles
    const specialQuantity = rule.specialPrice.quantity;
    const specialPrice = rule.specialPrice.price;
    const unitPrice = rule.unitPrice;

    const specialBundles = Math.floor(quantity / specialQuantity);
    const remainingItems = quantity % specialQuantity;

    return specialBundles * specialPrice + remainingItems * unitPrice;
  }

  calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => {
      return total + this.calculateItemPrice(item.sku, item.quantity);
    }, 0);
  }

  addItem(currentItems: CartItem[], sku: string): CartItem[] {
    const existingItemIndex = currentItems.findIndex(item => item.sku === sku);

    if (existingItemIndex >= 0) {
      // Update existing item quantity
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      return updatedItems;
    } else {
      // Add new item
      return [...currentItems, { sku, quantity: 1 }];
    }
  }

  removeItem(currentItems: CartItem[], sku: string): CartItem[] {
    const existingItemIndex = currentItems.findIndex(item => item.sku === sku);

    if (existingItemIndex >= 0) {
      const updatedItems = [...currentItems];
      if (updatedItems[existingItemIndex].quantity > 1) {
        // Decrease quantity
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity - 1,
        };
      } else {
        // Remove item completely
        updatedItems.splice(existingItemIndex, 1);
      }
      return updatedItems;
    }

    return currentItems;
  }

  getPricingRule(sku: string): PricingRule | undefined {
    return this.pricingRules[sku];
  }

  getAvailableSkus(): string[] {
    return Object.keys(this.pricingRules);
  }
}
