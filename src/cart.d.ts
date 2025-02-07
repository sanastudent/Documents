

// types/cart.d.ts

import { Product } from 'use-shopping-cart';  // Importing Product type from use-shopping-cart

// CartItem now extends Product to match its structure
export interface CartItem extends Product {
  sku: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isInWishlist?: boolean;
  currency: string;  // Ensure currency is defined

}
