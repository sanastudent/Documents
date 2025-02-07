
// pages/api/order.js
import { client } from "@/sanity/lib/client";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, address, cartItems, totalPrice } = req.body;

    try {
      // Sanity me order create karna
      const order = await client.create({
        _type: 'order',
        name,
        phone,
        email,
        address,
        cartItems,
        totalPrice,
      });

      // Success response
      res.status(200).json({ success: true, message: 'Order placed successfully', order });
    } catch (error) {
      // Error handling
      console.error('Error saving order to Sanity:', error);
      res.status(500).json({ success: false, message: 'Failed to place order', error });
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
