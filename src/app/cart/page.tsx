


// "use client";

// import AddressForm from "@/components/Form";

// import { useState, useEffect } from "react"; 
// import { useShoppingCart } from "use-shopping-cart"; 
// import Image from "next/image"; 
// import AddressForm from "@/components/Form"; 

// interface CartItem {
//   sku: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// const CartPage = () => {
//   const { cartCount, cartDetails, totalPrice, removeItem, clearCart } = useShoppingCart();
//   const [showForm, setShowForm] = useState(false);
//   const [cartItems, setCartItems] = useState<{ [sku: string]: CartItem }>({});

//   useEffect(() => {
//     const formattedCartDetails: { [sku: string]: CartItem } = {};
//     Object.keys(cartDetails).forEach((key) => {
//       const item = cartDetails[key];
//       formattedCartDetails[key] = {
//         sku: key,
//         name: item.name,
//         price: item.price,
//         quantity: item.quantity,
//         image: item.image,
//       };
//     });
//     setCartItems(formattedCartDetails);
//   }, [cartDetails]);

//   const handleProceedToCheckout = () => {
//     setShowForm(true);
//   };

//   return (
//     <>
//       <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
//         <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
//           <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Shopping Cart</h1>
//           <p className="mt-2 text-sm sm:text-base md:text-lg">
//             Home . Pages <span className="text-[#FB2E86]">Shopping Cart</span>
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto p-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
//         <div className="cart-items sm:w-full md:w-3/4 space-y-6">
//           {cartCount === 0 ? (
//             <p className="text-center text-gray-500">Your cart is empty.</p>
//           ) : (
//             Object.values(cartItems).map((item) => (
//               <div
//                 key={item.sku}
//                 className="cart-item border-b border-gray-300 pb-6 flex items-center justify-between"
//               >
//                 {/* Product Image */}
//                 <div className="flex items-center space-x-4 w-1/5">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={80}
//                     height={80}
//                     className="rounded-md"
//                   />
//                 </div>

//                 {/* Product Details (Name and Price) */}
//                 <div className="flex flex-col w-2/5 text-left">
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-sm text-gray-500">Rs{item.price}</p>
//                 </div>

//                 {/* Quantity */}
//                 <div className="flex flex-col items-center w-1/5">
//                   <p className="font-semibold">Quantity</p>
//                   <p>{item.quantity}</p>
//                 </div>

//                 {/* Total Price */}
//                 <div className="flex flex-col items-center w-1/5">
//                   <p className="font-semibold">Total</p>
//                   <p>Rs{item.price * item.quantity}</p>
//                 </div>

//                 {/* Remove Button */}
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => removeItem(item.sku)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Right Sidebar */}
//         <div className="right-sidebar sm:w-full md:w-1/4 space-y-6">
//           {/* Cart Totals */}
//           <div className="cart-totals p-4 border border-gray-300 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Cart Totals</h2>
//             <div className="flex justify-between mt-4">
//               <span>Subtotal:</span>
//               <span>Rs{totalPrice}</span>
//             </div>
//             <div className="flex justify-between mt-4">
//               <span>Shipping:</span>
//               <span>Rs50</span> {/* You can replace this with a dynamic value */}
//             </div>
//             <div className="flex justify-between mt-4 font-bold text-lg">
//               <span>Total:</span>
//               <span>Rs{totalPrice + 50}</span> {/* Add shipping cost to total */}
//             </div>
//           </div>

//           {/* Calculate Shipping */}
//           <div className="calculate-shipping p-4 border border-gray-300 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Calculate Shipping</h2>
//             <div className="mt-4">
//               <label
//                 htmlFor="shipping-country"
//                 className="block text-sm font-medium"
//               >
//                 Country
//               </label>
//               <select
//                 id="shipping-country"
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option>Pakistan</option>
//                 <option>USA</option>
//                 <option>UK</option>
//                 <option>Canada</option>
//                 {/* Add more countries as needed */}
//               </select>
//             </div>
//             <div className="mt-4">
//               <button className="w-full py-2 px-4 bg-[#FB2E86] text-white rounded-md hover:bg-[#F8709B]">
//                 Calculate Shipping
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cart Action Buttons */}
//       <div className="mt-6 text-center space-x-4">
//         <button
//           className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
//           onClick={clearCart}
//         >
//           Clear Cart
//         </button>
//         <button
//           onClick={handleProceedToCheckout}
//           className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
//         >
//           Proceed to Checkout
//         </button>
//       </div>

//       {/* Conditionally Render the Form after Proceed to Checkout */}
//       {showForm && <AddressForm cartDetails={cartItems} totalPrice={totalPrice} />}
//     </>
//   );
// }

// export default CartPage;

"use client"

import { useState, useEffect } from "react"; 
import { useShoppingCart } from "use-shopping-cart"; // Make sure this is imported
import Image from "next/image"; 
import AddressForm from "@/components/Form"; 

interface CartItem {
  sku: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  // Get cart details from the hook
  const { cartCount, cartDetails, totalPrice, removeItem, clearCart } = useShoppingCart();
  
  // State for showing the checkout form
  const [showForm, setShowForm] = useState(false);
  
  // Convert the cartDetails object into an array of items
  const [cartItems, setCartItems] = useState<{ [sku: string]: CartItem }>({});

  // Watch for changes in cartDetails and update cartItems state
  useEffect(() => {
    // If cartDetails is empty or not properly formatted, return early
    if (Object.keys(cartDetails).length === 0) {
      setCartItems({});
      return;
    }

    const formattedCartDetails: { [sku: string]: CartItem } = {};
    Object.keys(cartDetails).forEach((key) => {
      const item = cartDetails[key];
      formattedCartDetails[key] = {
        sku: key,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      };
    });

    setCartItems(formattedCartDetails);
  }, [cartDetails]);

  // Handle Proceed to Checkout
  const handleProceedToCheckout = () => {
    setShowForm(true);
  };

  const handleOrderSuccess = () => {
    // This function is called when the order is successfully placed in the AddressForm component
    alert("Order successfully placed!"); // You can replace this with your custom logic (like redirecting the user)
    // You could clear the cart or redirect to a confirmation page here.
    // Example: setCartDetails({}); // to clear the cart
  };

  return (
    <>
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
        <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Shopping Cart</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home . Pages <span className="text-[#FB2E86]">Shopping Cart</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto p-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
        <div className="cart-items sm:w-full md:w-3/4 space-y-6">
          {cartCount === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            Object.values(cartItems).map((item) => (
              <div
                key={item.sku}
                className="cart-item border-b border-gray-300 pb-6 flex items-center justify-between"
              >
                {/* Product Image */}
                <div className="flex items-center space-x-4 w-1/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>

                {/* Product Details (Name and Price) */}
                <div className="flex flex-col w-2/5 text-left">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Rs{item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex flex-col items-center w-1/5">
                  <p className="font-semibold">Quantity</p>
                  <p>{item.quantity}</p>
                </div>

                {/* Total Price */}
                <div className="flex flex-col items-center w-1/5">
                  <p className="font-semibold">Total</p>
                  <p>Rs{item.price * item.quantity}</p>
                </div>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.sku)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar sm:w-full md:w-1/4 space-y-6">
          {/* Cart Totals */}
          <div className="cart-totals p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Cart Totals</h2>
            <div className="flex justify-between mt-4">
              <span>Subtotal:</span>
              <span>Rs{totalPrice}</span>
            </div>
            <div className="flex justify-between mt-4">
              <span>Shipping:</span>
              <span>Rs50</span>
            </div>
            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total:</span>
              <span>Rs{totalPrice + 50}</span>
            </div>
          </div>

          {/* Calculate Shipping */}
          <div className="calculate-shipping p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Calculate Shipping</h2>
            <div className="mt-4">
              <label
                htmlFor="shipping-country"
                className="block text-sm font-medium"
              >
                Country
              </label>
              <select
                id="shipping-country"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Pakistan</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 px-4 bg-[#FB2E86] text-white rounded-md hover:bg-[#F8709B]">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Action Buttons */}
      <div className="mt-6 text-center space-x-4">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          onClick={handleProceedToCheckout}
          className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Conditionally Render the Form after Proceed to Checkout */}
      {showForm && <AddressForm cartDetails={cartItems} totalPrice={totalPrice}
      onOrderSuccess={handleOrderSuccess} // Ensure the onOrderSuccess callback is passed
     />}
    </>
  );
}

export default CartPage;
