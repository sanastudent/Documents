

"use client"
import React from 'react';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';

const Sofa = () => {
  const { addItem } = useShoppingCart();  // Access addItem from use-shopping-cart

  const product = {
    sku: 'sofa-001',  // Unique identifier for the product
    name: 'Luxury Sofa',  // Product name
    price: 9999,  // Product price
    image: '/z.png',  // Product image URL
    quantity: 1,  // Initial quantity
    currency: 'Pak',  // Currency
  };

  const handleAddToCart = () => {
    // Adding the product to the cart when the button is clicked
    addItem(product);
  };

  return (
    <>
      <section id='Sofa'>
        <div className="bg-[#F1F0FF] w-full h-auto flex flex-col sm:flex-row justify-between items-center mt-10 px-6 py-8">
          {/* Left side: Image */}
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <Image src={product.image} height={558} width={550} alt={product.name} className="w-full h-auto object-cover" />
          </div>

          {/* Right side: Text Section */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-[#151875] font-josefin text-2xl sm:text-3xl font-semibold mb-4">
              Unique Features of Latest & Trending Products
            </h1>

            {/* Paragraphs with dots */}
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-[#FB2E86] rounded-full mr-2"></span> All frames constructed with hardwood solids and laminates
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-[#2D80F1] rounded-full mr-2"></span> Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails.
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-[#FB2E86] rounded-full mr-2"></span> Arms, backs and seats are structurally reinforced
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <button
                className="w-[160px] h-[50px] bg-[#FB2E86] text-white rounded-md hover:bg-[#F8709B] transition duration-300"
                onClick={handleAddToCart}  // Trigger addItem when clicked
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sofa;









