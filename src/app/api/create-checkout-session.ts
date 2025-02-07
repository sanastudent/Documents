

// // pages/api/create-checkout-session.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2020-08-27',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { cartDetails, totalPrice } = req.body;

//     // Create a Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'], // Payment method (Credit/Debit Card)
//       line_items: Object.values(cartDetails).map((item) => ({
//         price_data: {
//           currency: 'inr',
//           product_data: {
//             name: item.name,
//             images: [item.image],
//           },
//           unit_amount: item.price * 100, // Amount in cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: 'payment', // Payment mode
//       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`, // Success page URL
//       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`, // Cancel page URL
//     });

//     // Send the session ID back to the frontend
//     res.status(200).json({ id: session.id });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
