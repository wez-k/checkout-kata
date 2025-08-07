export interface PricingRule {
  sku: string;
  unitPrice: number;
  specialPrice?: {
    quantity: number;
    price: number;
  };
}

export interface CartItem {
  sku: string;
  quantity: number;
}

export interface PricingRules {
  [sku: string]: PricingRule;
}

// Hook props
export interface UseCheckoutProps {
  pricingRules: PricingRule[];
}

// Component props
export interface ItemScannerProps {
  onScanItem: (sku: string) => void;
  availableSkus: string[];
}

export interface QuickScanButtonsProps {
  skus: string[];
  onScanItem: (sku: string) => void;
}

export interface ShoppingCartProps {
  items: CartItem[];
  onRemoveItem: (sku: string) => void;
  calculateItemTotal: (item: CartItem) => number;
}

export interface CartItemRowProps {
  item: CartItem;
  onRemove: () => void;
  itemTotal: number;
}

export interface PricingRulesProps {
  rules: PricingRule[];
}

export interface TotalDisplayProps {
  runningTotal: number;
  finalTotal: number;
}
