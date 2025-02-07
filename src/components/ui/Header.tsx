

// "use client";

// import Link from "next/link";
// import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";

// // Define the structure of the item that should be passed
// interface WishlistItem {
//   sku: string; // sku instead of id
//   name: string;
//   price: number;
//   image: string;
//   currency: string; // Add currency
// }

// export default function Header() {
//   const { addItem, removeItem, cartCount, cartDetails } = useShoppingCart();

//   // Wishlist state (make sure it matches the expected structure)
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

//   // Function to add or remove items from the wishlist
//   const toggleWishlist = (item: WishlistItem) => {
//     setWishlist((prevWishlist) => {
//       if (prevWishlist.some((i) => i.sku === item.sku)) {
//         return prevWishlist.filter((i) => i.sku !== item.sku); // Remove from wishlist
//       } else {
//         return [...prevWishlist, item]; // Add to wishlist
//       }
//     });
//   };

//   // Handle language and currency selection
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

//   // Effect to update wishlist count if cart has items
//   useEffect(() => {
//     const itemsInWishlist: WishlistItem[] = Object.values(cartDetails)
//       .filter((item) => item.isInWishlist) // Filter only items that are in the wishlist
//       .map((item) => ({
//         sku: item.sku, // Ensure sku is included
//         name: item.name,
//         price: item.price,
//         image: item.image,
//         currency: item.currency, // Make sure currency is also included
//       }));
  
//     setWishlist(itemsInWishlist); // Set the correctly typed wishlist items
//   }, [cartDetails]); // Run this effect whenever cartDetails changes
  


//   return (
//     <>
//       <div className="w-full h-[48px] bg-[#7E33E0] hidden md:flex p-3">
//         <div className="w-full flex justify-between items-center">
//           {/* Left side (email and phone number) */}
//           <div className="flex items-center p-4">
//             <p className="flex items-center text-white text-[14px] leading-[24px] mr-6">
//               <Mail className="mr-2" />
//               rsana6448@gmail.com
//             </p>
//             <p className="text-white flex items-center font-semibold">
//               <Phone className="mr-2" />
//               (1234)567890
//             </p>
//           </div>

//           <div className="flex items-center p-4">
//             {/* Language Dropdown */}
//             <div className="relative">
//               <p
//                 className="text-white flex items-center mr-4 cursor-pointer"
//                 onClick={() => setIsLanguageOpen(!isLanguageOpen)}
//               >
//                 {selectedLanguage} <ChevronDown />
//               </p>
//               {isLanguageOpen && (
//                 <div className="absolute top-full left-0 mt-1 bg-white text-black p-2 rounded shadow-lg">
//                   <ul>
//                     <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedLanguage("English")}>English</li>
//                     <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedLanguage("Spanish")}>Spanish</li>
//                     <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedLanguage("French")}>French</li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Currency Dropdown */}
//             <div className="relative">
//               <p
//                 className="text-white flex items-center mr-4 cursor-pointer"
//                 onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
//               >
//                 {selectedCurrency} <ChevronDown />
//               </p>
//               {isCurrencyOpen && (
//                 <div className="absolute top-full left-0 mt-1 bg-white text-black p-2 rounded shadow-lg">
//                   <ul>
//                     <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedCurrency("USD")}>USD</li>
//                     <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedCurrency("EUR")}>EUR</li>
//                     <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedCurrency("PAK")}>PAK</li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Wishlist Icon */}
//             <Link href="/wishlist">
//               <div className="relative">
//                 <Heart className="text-white text-2xl" />
//                 {wishlist.length > 0 && (
//                   <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </div>
//             </Link>

          

//             {/* Login */}
//             <Link href="/login" className="text-white flex items-center ml-10">
//               Login <User />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Wishlist Display (Optional) */}
//       {wishlist.length > 0 && (
//         <div className="wishlist-container mt-4">
//           <h3 className="text-lg font-semibold">Your Wishlist:</h3>
//           <ul className="list-none p-0">
//             {wishlist.map((item) => (
//               <li key={item.sku} className="wishlist-item flex justify-between items-center py-2 border-b">
//                 <div className="flex items-center">
//                 <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={48} // Width in pixels (matching w-12)
//                       height={48} // Height in pixels (matching h-12)
//                       className="object-cover mr-4"/>

//                   <span className="font-semibold">{item.name}</span>
//                 </div>
//                 <div>
//                   <span>${item.price}</span>
//                   {/* <button
//                     className="ml-4 bg-green-500 text-white px-2 py-1 rounded"
//                     onClick={() => addItem(item)} // Add item to cart
//                   >
//                     Add to Cart
//                   </button> */}
//                   <button
//                     className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => toggleWishlist(item)} // Remove from wishlist
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

// Define the structure of the item that should be passed
interface WishlistItem {
  sku: string;
  name: string;
  price: number;
  image: string;
  currency: string;
}

export default function Header() {
  const { addItem, removeItem, cartCount, cartDetails } = useShoppingCart();

  // Wishlist state
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [showWishlist, setShowWishlist] = useState(false); // Wishlist dropdown visibility

  // New state variables for language and currency dropdown
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // Language dropdown visibility
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false); // Currency dropdown visibility

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Toggle function to add/remove items from wishlist
  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((i) => i.sku === item.sku)) {
        return prevWishlist.filter((i) => i.sku !== item.sku); // Remove from wishlist
      } else {
        return [...prevWishlist, item]; // Add to wishlist
      }
    });
  };

  // Effect to update wishlist based on cart details
  useEffect(() => {
    const itemsInWishlist: WishlistItem[] = Object.values(cartDetails)
      .filter((item) => item.isInWishlist) // Filter only wishlist items
      .map((item) => ({
        sku: item.sku,
        name: item.name,
        price: item.price,
        image: item.image,
        currency: item.currency,
      }));

    setWishlist(itemsInWishlist); // Set the correctly typed wishlist items
  }, [cartDetails]);

  return (
    <>
      <div className="w-full h-[48px] bg-[#7E33E0] hidden md:flex p-3">
        <div className="w-full flex justify-between items-center">
          {/* Left side (email and phone number) */}
          <div className="flex items-center p-4">
            <p className="flex items-center text-white text-[14px] leading-[24px] mr-6">
              <Mail className="mr-2" />
              rsana6448@gmail.com
            </p>
            <p className="text-white flex items-center font-semibold">
              <Phone className="mr-2" />
              (1234)567890
            </p>
          </div>

          {/* Right side (language, currency, wishlist, and login) */}
          <div className="flex items-center p-4">
            {/* Language Dropdown */}
            <div className="relative">
              <p
                className="text-white flex items-center mr-4 cursor-pointer"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)} // Toggle language dropdown
              >
                {selectedLanguage} <ChevronDown />
              </p>
              {isLanguageOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white text-black p-2 rounded shadow-lg">
                  <ul>
                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedLanguage("English")}>English</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedLanguage("Spanish")}>Spanish</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedLanguage("French")}>French</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
              <p
                className="text-white flex items-center mr-4 cursor-pointer"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)} // Toggle currency dropdown
              >
                {selectedCurrency} <ChevronDown />
              </p>
              {isCurrencyOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white text-black p-2 rounded shadow-lg">
                  <ul>
                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedCurrency("USD")}>USD</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedCurrency("EUR")}>EUR</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedCurrency("PAK")}>PAK</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Wishlist Icon */}
            <div className="relative">
              <Heart
                className="text-white text-2xl cursor-pointer"
                onClick={() => setShowWishlist(!showWishlist)} // Toggle wishlist dropdown visibility
              />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Wishlist Dropdown */}
            {showWishlist && (
              <div className="absolute top-12 right-0 bg-white text-black p-4 rounded shadow-lg w-64 max-h-72 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">Your Wishlist:</h3>
                <ul className="list-none p-0">
                  {wishlist.length === 0 ? (
                    <p className="text-gray-500">Your wishlist is empty.</p>
                  ) : (
                    wishlist.map((item) => (
                      <li key={item.sku} className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="object-cover mr-4"
                          />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                        <div>
                          <span>${item.price}</span>
                          <button
                            className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => toggleWishlist(item)} // Remove from wishlist
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}

            {/* Login */}
            <Link href="/login" className="text-white flex items-center ml-10">
              Login <User />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}