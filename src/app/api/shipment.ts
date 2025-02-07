


// import { NextApiRequest, NextApiResponse } from 'next';
// // import axios from 'axios'; // Axios for API requests

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { trackingNumber } = req.query; // Get tracking number from query
  
//   if (!trackingNumber) {
//     return res.status(400).json({ error: 'Tracking number is required' });
//   }

//   try {
//     // Example using EasyPost API
//     const response = await axios.get(`https://api.easypost.com/v2/trackers/${trackingNumber}`, {
//       headers: {
//         'Authorization': `Bearer YOUR_EASYPOST_API_KEY`,
//       },
//     });

//     // Send shipment status response
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch shipment data' });
//   }
// }
