


// import { useRef } from 'react';
// import { client } from '@/sanity/lib/client'; // Assuming you're using this client configuration

// // Define CartItem type
// interface CartItem {
//   name: string;
//   price: number;
//   quantity: number;
// }

// // Type for AddressForm props
// interface AddressFormProps {
//   cartDetails: { [sku: string]: CartItem };
//   totalPrice: number;
// }

// const AddressForm = ({ cartDetails, totalPrice }: AddressFormProps) => {
//   // Using useRef for accessing form inputs
//   const getName = useRef<HTMLInputElement>(null);
//   const getPhone = useRef<HTMLInputElement>(null);
//   const getEmail = useRef<HTMLInputElement>(null);
//   const getAd1 = useRef<HTMLInputElement>(null);
//   const getAd2 = useRef<HTMLInputElement>(null);
//   const getCity = useRef<HTMLInputElement>(null);
//   const getProvince = useRef<HTMLInputElement>(null);
//   const getPostalCode = useRef<HTMLInputElement>(null);
//   const getCountry = useRef<HTMLInputElement>(null);
//   const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);

//   // Form submission handler
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const payload = {
//       name: getName.current?.value,
//       phone: getPhone.current?.value,
//       email: getEmail.current?.value,
//       addressLine1: getAd1.current?.value,
//       addressLine2: getAd2.current?.value,
//       cityLocality: getCity.current?.value,
//       stateProvince: getProvince.current?.value,
//       postalCode: getPostalCode.current?.value,
//       countryCode: getCountry.current?.value,
//       addressResidentialIndicator: getAddressResidentialIndicator.current?.value,
//       cartItems: Object.values(cartDetails).map((item) => ({
//         name: item.name,
//         price: item.price,
//         quantity: item.quantity,
//       })),
//       totalPrice: totalPrice + 50, // Adding shipping cost
//     };

//     console.log('Payload to Sanity:', payload); // Verify the payload in the console

//     try {
//       // Create the order in Sanity
//       const order = await client.create({
//         _type: 'order',
//         name: payload.name,
//         phone: payload.phone,
//         email: payload.email,
//         address: {
//           line1: payload.addressLine1,
//           line2: payload.addressLine2,
//           city: payload.cityLocality,
//           state: payload.stateProvince,
//           postalCode: payload.postalCode,
//           country: payload.countryCode,
//         },
//         items: payload.cartItems,
//         totalPrice: payload.totalPrice,
//         shippingAddressType: payload.addressResidentialIndicator,
//       });

//       console.log('Order placed:', order); // Log success
//       // Handle any post-submission actions here (e.g., redirect, success message)
//     } catch (error) {
//       console.error('Error placing order:', error);
//       // Handle any errors here
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-8">
//       <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
        
//         {/* Name */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             ref={getName}
//             id="name"
//             type="text"
//             placeholder="John Doe"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             ref={getPhone}
//             id="phone"
//             type="text"
//             placeholder="123-456-7890"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email Address
//           </label>
//           <input
//             ref={getEmail}
//             id="email"
//             type="email"
//             placeholder="example@domain.com"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Address Line 1 */}
//         <div className="mb-4">
//           <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
//             Address Line 1
//           </label>
//           <input
//             ref={getAd1}
//             id="addressLine1"
//             type="text"
//             placeholder="Street Address"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Address Line 2 */}
//         <div className="mb-4">
//           <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
//             Address Line 2 (optional)
//           </label>
//           <input
//             ref={getAd2}
//             id="addressLine2"
//             type="text"
//             placeholder="Apartment, suite, etc."
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* City */}
//         <div className="mb-4">
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <input
//             ref={getCity}
//             id="city"
//             type="text"
//             placeholder="City"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* State/Province */}
//         <div className="mb-4">
//           <label htmlFor="province" className="block text-sm font-medium text-gray-700">
//             State/Province
//           </label>
//           <input
//             ref={getProvince}
//             id="province"
//             type="text"
//             placeholder="State"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Postal Code */}
//         <div className="mb-4">
//           <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//             Postal Code
//           </label>
//           <input
//             ref={getPostalCode}
//             id="postalCode"
//             type="text"
//             placeholder="Postal Code"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Country */}
//         <div className="mb-4">
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//             Country
//           </label>
//           <input
//             ref={getCountry}
//             id="country"
//             type="text"
//             placeholder="Country"
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Address Type (Residential/Commercial) */}
//         <div className="mb-4">
//           <label htmlFor="addressResidentialIndicator" className="block text-sm font-medium text-gray-700">
//             Address Type
//           </label>
//           <select
//             ref={getAddressResidentialIndicator}
//             id="addressResidentialIndicator"
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="yes">Residential</option>
//             <option value="no">Commercial</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-[#F8709B] transition-all duration-300"
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddressForm;


"use client";

import { useState, useRef } from "react";
import { client } from "@/sanity/lib/client"; // Assuming you're using this client configuration

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface AddressFormProps {
  cartDetails: { [sku: string]: CartItem };
  totalPrice: number;
  onOrderSuccess: () => void; // Callback function passed from parent component to handle success
}

const AddressForm = ({ cartDetails, totalPrice, onOrderSuccess }: AddressFormProps) => {
  const getName = useRef<HTMLInputElement>(null);
  const getPhone = useRef<HTMLInputElement>(null);
  const getEmail = useRef<HTMLInputElement>(null);
  const getAd1 = useRef<HTMLInputElement>(null);
  const getAd2 = useRef<HTMLInputElement>(null);
  const getCity = useRef<HTMLInputElement>(null);
  const getProvince = useRef<HTMLInputElement>(null);
  const getPostalCode = useRef<HTMLInputElement>(null);
  const getCountry = useRef<HTMLInputElement>(null);
  const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);

  // For Success Modal visibility
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: getName.current?.value,
      phone: getPhone.current?.value,
      email: getEmail.current?.value,
      addressLine1: getAd1.current?.value,
      addressLine2: getAd2.current?.value,
      cityLocality: getCity.current?.value,
      stateProvince: getProvince.current?.value,
      postalCode: getPostalCode.current?.value,
      countryCode: getCountry.current?.value,
      addressResidentialIndicator: getAddressResidentialIndicator.current?.value,
      cartItems: Object.values(cartDetails).map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: totalPrice + 50, // Adding shipping cost
    };

    try {
      // Create the order in Sanity
      const order = await client.create({
        _type: "order",
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        address: {
          line1: payload.addressLine1,
          line2: payload.addressLine2,
          city: payload.cityLocality,
          state: payload.stateProvince,
          postalCode: payload.postalCode,
          country: payload.countryCode,
        },
        items: payload.cartItems,
        totalPrice: payload.totalPrice,
        shippingAddressType: payload.addressResidentialIndicator,
      });

      // Show success popup
      setShowSuccess(true);

      // After a short delay, close the success popup and trigger onOrderSuccess
      setTimeout(() => {
        setShowSuccess(false);
        onOrderSuccess(); // Trigger callback function to handle further actions in parent
      }, 3000); // Adjust time for how long the success popup should appear
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            ref={getName}
            id="name"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            ref={getPhone}
            id="phone"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            ref={getEmail}
            id="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Address Line 1 Field */}
        <div className="mb-4">
          <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            ref={getAd1}
            id="addressLine1"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Address Line 2 Field */}
        <div className="mb-4">
          <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
          <input
            ref={getAd2}
            id="addressLine2"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* City Field */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            ref={getCity}
            id="city"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Province/State Field */}
        <div className="mb-4">
          <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province/State</label>
          <input
            ref={getProvince}
            id="province"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Postal Code Field */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            ref={getPostalCode}
            id="postalCode"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Country Field */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            ref={getCountry}
            id="country"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Residential Indicator */}
        <div className="mb-6">
          <label htmlFor="addressResidentialIndicator" className="block text-sm font-medium text-gray-700">
            Residential Address
          </label>
          <select
            ref={getAddressResidentialIndicator}
            id="addressResidentialIndicator"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-[#F8709B] transition-all duration-300"
        >
          Place Order
        </button>
      </form>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Order Placed Successfully!</h2>
            <p className="text-center">Thank you for your purchase! Your order is being processed.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
