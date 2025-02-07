

// "use client";
// import Image from 'next/image';
// // import TopBar from '../components/navbar';
// // import Header from '../components/header';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';
// import Link from 'next/link';

// const products = [

// {
//   id: 1,
//   name: 'Accumsan Incidunt',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/1.png',
// },
// {
//   id: 2,
//   name: 'In Nulla',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/2.png',
// },
// {
//   id: 3,
//   name: 'Vel Sem',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/3.png',
// },
// {
//   id: 4,
//   name: 'Porttitor Cum',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/4.png',
// },

// {
//   id: 5,
//   name: 'Nunc In',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/5.png',
// },
// {
//   id: 6,
//   name: 'Vitae Facilisis',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/6.png',
// },
// {
//   id: 7,
//   name: 'Vitae Facilisis',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/sofa.png',
// },
// {
//   id: 8,
//   name: 'Vitae Facilisis',
//   price: '$90.00',
//   discountedPrice: '$80.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/chair.png',
// },
// {
//   id: 9,
//   name: 'Vitae Facilisis',
//   price: '$80.00',
//   discountedPrice: '$75.00',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   imageUrl: '/z.png',
// },
// ];

// export default function ShopList() {
// const handleAddToWishlist = (id:any) => {
//   alert(`Product ${id} added to wishlist.`);
//   // Implement wishlist logic here
// };

// const handleAddToCart = (id:any) => {
//   alert(`Product ${id} added to cart.`);
//   // Implement cart logic here
// };

// return (
//   <div>
  
//     {/* Header Section */}
    
//     <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
//         <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
//           <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Shop Now</h1>
//           <p className="mt-2 text-sm sm:text-base md:text-lg">
//             Home . Pages <span className="text-[#FB2E86]">Shop Now</span>
//           </p>
//         </div>
//       </div>

  

//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-4">Shop List</h1>
//       <p className="text-center text-gray-600 mb-8">
//         Explore our collection of premium products at discounted prices.
//         </p>
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <div className="relative w-full h-64">
//                 <Image
//                   src={product.imageUrl}
//                   alt={`Image of ${product.name}`}
//                   layout="fill"
//                   objectFit="cover"/>
//               </div>
//               <div className="p-4 flex flex-col justify-between">
//                 <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
//                 <div className="flex items-center mt-2">
//                   <span className="text-xl font-semibold text-red-500">
//                     {product.discountedPrice}
//                   </span>
//                   <span className="line-through text-gray-500 ml-2">
//                     {product.price}
//                   </span>
//                 </div>

// <p className="text-sm text-gray-600 mt-2">{product.description}</p>
// <Link href="/shopoffer">
// <div className="mt-4 flex items-center space-x-4">
//   <button
//     className="flex items-center text-gray-600 hover:text-red-500"
//     onClick={() => handleAddToWishlist(product.id)}
//   >
//     <FaHeart size={16} className="mr-1" />
//     <span className="text-sm">Add to Wishlist</span>
//   </button>
//   <button
//     className="flex items-center text-gray-600 hover:text-blue-500"
//     onClick={() => handleAddToCart(product.id)}
//   >
//     <FaShoppingCart size={16} className="mr-1" />
//     <span className="text-sm">Add to Cart</span>
//   </button>
// </div>
// </Link>
// </div>
// </div>
// ))}
// </div>
// </div>
// </div>
// )}






"use client";
import Image from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

const products = [

{
  id: 1,
  name: 'Accumsan Incidunt',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/1.png',
},
{
  id: 2,
  name: 'In Nulla',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/2.png',
},
{
  id: 3,
  name: 'Vel Sem',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/3.png',
},
{
  id: 4,
  name: 'Porttitor Cum',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/4.png',
},

{
  id: 5,
  name: 'Nunc In',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/5.png',
},
{
  id: 6,
  name: 'Vitae Facilisis',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/6.png',
},
{
  id: 7,
  name: 'Vitae Facilisis',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/sofa.png',
},
{
  id: 8,
  name: 'Vitae Facilisis',
  price: '$90.00',
  discountedPrice: '$80.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/chair.png',
},
{
  id: 9,
  name: 'Vitae Facilisis',
  price: '$80.00',
  discountedPrice: '$75.00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: '/z.png',
},
];

export default function ShopList() {
  const { addItem, cartCount, cartDetails, removeItem } = useShoppingCart();
  const currency = 'USD';

  const handleAddToCart = (product) => {
    addItem({
      sku: product.id.toString(),
      name: product.name,
      price: parseFloat(product.discountedPrice.replace('$', '')),
      quantity: 1,
      image: product.imageUrl,
      currency, // Add currency here
    });
    alert(`Product ${product.name} added to cart.`);
  };

  const handleAddToWishlist = (product) => {
    const isInCart = cartDetails[product.id.toString()];
    if (!isInCart) {
      addItem({
        sku: product.id.toString(),
        name: product.name,
        price: parseFloat(product.discountedPrice.replace('$', '')),
        quantity: 1,
        image: product.imageUrl,
        currency,
        isInWishlist: true,
      });
      alert(`Product ${product.name} added to wishlist.`);
    } else {
      alert('This item is already in your cart.');
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16">
        <div className="font-josefin text-left ml-4 sm:ml-8 md:ml-16">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">Shop Now</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Home . Pages <span className="text-[#FB2E86]">Shop Now</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-4">Shop List</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore our collection of premium products at discounted prices.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}  // Ensure the path is correct
                  alt={`Image of ${product.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-semibold text-red-500">
                    {product.discountedPrice}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>

                <div className="mt-4 flex items-center space-x-4">
                  <button
                    className="flex items-center text-gray-600 hover:text-red-500"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <FaHeart size={16} className="mr-1" />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button
                    className="flex items-center text-gray-600 hover:text-blue-500"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart size={16} className="mr-1" />
                    <span className="text-sm">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

















































































