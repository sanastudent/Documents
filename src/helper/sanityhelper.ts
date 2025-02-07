
// src/helper/sanityHelper.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // Use true for production
  token: process.env.SANITY_API_TOKEN, // Your Sanity API token
});

export const createOrderInSanity = async (shippingAddress: any, cartItems: any, totalPrice: number) => {
  const order = {
    _type: "order",
    customerName: shippingAddress.name,
    shippingAddress,
    cartItems,
    totalPrice,
    orderStatus: "pending", // Initially set as pending
  };

  const result = await client.create(order);
  return result;
};
