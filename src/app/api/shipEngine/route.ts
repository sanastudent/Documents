
// import { shipEngine } from "@/helper/shipEngine";
// import { NextRequest } from "next/server";


// export async function GET(request:NextRequest){
//     return new Response(JSON.stringify({message: "ShipEngine Testing"}))
// }

// export async function POST(request:NextRequest){
//  const  {shipToAddress, packages} = await request.json()
// try{
//     const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
//         shipment: {
//             shipTo: shipToAddress,
//             shipFrom:{
//                 name:'Sana',
//                 phone:"03000******",
//                 addressLine1:"address 1",
//                 addressLine2:"address 2",
//                 cityLocality:"Karachi",
//                 stateProvince:"Sindh",
//                 postalCode:"1234",
//                 countryCode:"PK",
//                 addressResidentialIndicator:"no",
//             },
//             packages:packages,
//         },
//         rateOptions: {
//             carrierIds:[
//                 process.env.SHIPENGINE_FIRST_COURIER || "",
//                 process.env.SHIPENGINE_SECOND_COURIER || "",
//                 process.env.SHIPENGINE_THIRD_COURIER || "",
//                 process.env.SHIPENGINE_FOURTH_COURIER || "",
//             ].filter(Boolean)
//         }
//     });
//     return new Response(JSON.stringify(shipmentDetails),{status: 200})
// }
// catch (error) {
//  return new Response(JSON.stringify({ error:"error Occured"}))
// }


// }

import { shipEngine } from "@/helper/shipEngine";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ message: "ShipEngine Testing" }));
}

export async function POST(request: NextRequest) {
  const { shipToAddress, packages } = await request.json();

  // Fetch the dynamic API URL from the environment variable
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "Sana",
          phone: "03000******",
          addressLine1: "address 1",
          addressLine2: "address 2",
          cityLocality: "Karachi",
          stateProvince: "Sindh",
          postalCode: "1234",
          countryCode: "PK",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENGINE_FOURTH_COURIER || "",
        ].filter(Boolean),
      },
    });

    // Return the shipment details as response
    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "An error occurred" }), { status: 500 });
  }
}
