
"use client";


import { useState, useEffect } from "react"; // Import useState for toggling form
import { useShoppingCart } from "use-shopping-cart"; // Importing useShoppingCart hook
import Image from "next/image";
import { CartItem } from "@/cart";// Importing the correct CartItem type

const WishlistPage = () => {
  const { cartDetails, removeItem, addItem } = useShoppingCart();
  const [wishlistItems, setWishlistItems] = useState<{ [sku: string]: CartItem }>({});

  // Map the cartDetails from use-shopping-cart to match the CartItem structure for Wishlist
  useEffect(() => {
    const formattedWishlistDetails: { [sku: string]: CartItem } = {};

    // Loop through cartDetails and filter wishlist items
    Object.keys(cartDetails).forEach((key) => {
      const item = cartDetails[key];

      if (item.isInWishlist) { // Assuming isInWishlist is a flag in your cartItems
        formattedWishlistDetails[key] = {
          sku: key,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          currency: item.currency,  // Ensure currency is included
        };
      }
    });

    setWishlistItems(formattedWishlistDetails); // Store the formatted items
  }, [cartDetails]); // Re-run this whenever cartDetails change

  // Handle moving item to Cart
  const handleAddToCart = (item: CartItem) => {
    addItem(item); // Add to cart
    removeItem(item.sku); // Optionally remove from wishlist
  };

  return (
    <>
      {/* Wishlist Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
        <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Wishlist</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home . Pages <span className="text-[#FB2E86]">Wishlist</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto p-6 flex space-x-10">
        <div className="wishlist-items w-3/4 space-y-6">
          {Object.keys(wishlistItems).length === 0 ? (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          ) : (
            Object.values(wishlistItems).map((item) => (
              <div
                key={item.sku}
                className="wishlist-item border-b border-gray-300 pb-6 flex items-center justify-between"
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
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex flex-col items-center w-1/5">
                  <p className="font-semibold">Quantity</p>
                  <p>{item.quantity}</p>
                </div>

                {/* Move to Cart Button */}
                <button
                  className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#F8709B] transition-all duration-300"
                  onClick={() => handleAddToCart(item)} // Move item to cart
                >
                  Move to Cart
                </button>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.sku)} // Remove from wishlist
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;

