
"use client";

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';  // Import use-shopping-cart

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [productData, setProductData] = useState<any>(null);
  const { addItem, cartDetails } = useShoppingCart();

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          const data = await client.fetch(`
            *[_type == "images" && slug.current == $slug][0] {
              title,
              image,
              price,
              description,
              stock,
              colors,
              sku,
              currency
            }
          `, { slug });

          setProductData(data);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const imageUrl = productData.image ? urlFor(productData.image).url() : null;

  const handleAddToWishlist = () => {
    // Add product to cart with isInWishlist flag set to true
    addItem({
      sku: productData.sku,
      name: productData.title,
      price: productData.price,
      image: imageUrl || '',
      quantity: 1,  // Default quantity when adding to wishlist
      isInWishlist: true,  // Flag to indicate the item is in the wishlist
      currency: productData.currency,  // Ensure currency is included
    });
  };

  const handleAddToCart = () => {
    // Add product to cart
    addItem({
      sku: productData.sku,
      name: productData.title,
      price: productData.price,
      image: imageUrl || '',
      quantity: 1,  // Default quantity when adding to cart
      currency: productData.currency,  // Ensure currency is included
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-8">
      {/* Product Image */}
      <div className="flex-1 max-w-[370px] text-center">
        {imageUrl ? (
          <Image src={imageUrl} alt={productData.title} width={370} height={460} className="mx-auto" />
        ) : (
          <p>No image available</p>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 max-w-[500px]">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>
          <p className="text-[#A9ACC6] text-base mb-4">{productData.description}</p>
          <p className="text-lg font-semibold mb-4">Price: ₹{productData.price}</p>
          <p className="text-[#151875] mb-4">Available Stock: {productData.stock}</p>

          {/* Color Options */}
          <div className="flex gap-2 mb-4">
            {productData.colors?.map((color: string, index: number) => (
              <button
                key={index}
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart} // Add product to cart
              className="bg-white text-purple-600 py-2 px-6 rounded-lg hover:bg-pink-400 transition-colors"
            >
              Add to Cart
            </button>

            {/* Add to Wishlist Button */}
            <button 
              onClick={handleAddToWishlist}
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors">
              ❤️ Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;

      
