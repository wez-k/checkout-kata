import type { PricingRule } from '@/types/checkout';

export const samplePricingRules: PricingRule[] = [
  {
    sku: 'A',
    unitPrice: 50,
    specialPrice: {
      quantity: 3,
      price: 130,
    },
  },
  {
    sku: 'B',
    unitPrice: 30,
    specialPrice: {
      quantity: 2,
      price: 45,
    },
  },
  {
    sku: 'C',
    unitPrice: 20,
  },
  {
    sku: 'D',
    unitPrice: 15,
  },
];
