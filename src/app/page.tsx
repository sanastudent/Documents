
// import HeroSection from "@/components/HeroSection";
// import Footer from "@/components/ui/Footer";
// import Image from "next/image";
// import Images from "../components/ui/Images";
// import LatestProducts from "@/components/LatestProducts";
// import Unique from "@/components/Sofa";
// import Sofa from "@/components/Sofa";
// import Trend from "@/components/Trend";
// import Discount from "@/components/Discount";
// import Categories from "@/components/Categories";
// import Blog from "@/components/Blog";
// import { CartProvider } from "use-shopping-cart";  // Import the CartProvider
// import Feature from "@/components/Feature"; 
// import { Suspense } from "react";




// export default async function Home() {

//   const res = await fetch("http://localhost:3000/api/shipEngine");
//   const mess = await res.json()
//   console.log(mess)
//   return (
//     <>
//    <div>

//      <CartProvider
//       mode="payment"  // This can be "client-only", "checkout-session", or "payment-request"
//        cartMode="client-only"  // Customize cart mode if needed
//        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY} // Stripe public key (replace with actual public key)
//        currency="USD"  // Set currency as per your requirements
//        successUrl="/success"  // Define your success URL for Stripe checkout
//        cancelUrl="/cancel"  // Define your cancel URL for Stripe checkout
//        shouldPersist={true}  // Optional: persist cart data across sessions
//         >

   
//    <HeroSection/>
   
//    <Suspense fallback={<div>Loading.....</div>}>
//    <Images/>
//    </Suspense>

//    <Suspense fallback={<div>Loading...</div> }>
//    <LatestProducts/>
//    </Suspense>

//    <Sofa/>

//    <Suspense>
//    <Trend/>
//    </Suspense>

//    <Discount/>

//    <Suspense>
//    <Categories/>
//    </Suspense>

//    <Suspense>
//    <Blog/>
//    </Suspense>



//    </CartProvider>

   


//    </div>
//    </>

//   )}


import HeroSection from "@/components/HeroSection";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Images from "../components/ui/Images";
import LatestProducts from "@/components/LatestProducts";
import Unique from "@/components/Sofa";
import Sofa from "@/components/Sofa";
import Trend from "@/components/Trend";
import Discount from "@/components/Discount";
import Categories from "@/components/Categories";
import Blog from "@/components/Blog";
import { CartProvider } from "use-shopping-cart";  // Import the CartProvider
import Feature from "@/components/Feature"; 
import { Suspense } from "react";

export default async function Home() {

  const res = await fetch("http://localhost:3000/api/shipEngine");
  const mess = await res.json();
  console.log(mess);
  
  return (
    <>
      <div>
        <CartProvider
          mode="payment"  // This can be "client-only", "checkout-session", or "payment-request"
          cartMode="client-only"  // Customize cart mode if needed
          stripe={process.env.NEXT_PUBLIC_STRIPE_KEY} // Stripe public key (replace with actual public key)
          currency="USD"  // Set currency as per your requirements
          successUrl="/success"  // Define your success URL for Stripe checkout
          cancelUrl="/cancel"  // Define your cancel URL for Stripe checkout
          shouldPersist={true}  // Optional: persist cart data across sessions
        >
          <HeroSection/>

          <Suspense fallback={<div>Loading.....</div>}>
            <Images/>
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <LatestProducts/>
          </Suspense>

          <Sofa/>

          <Suspense fallback={<div>Loading...</div>}>
            <Trend/>
          </Suspense>

          <Discount/>

          <Suspense fallback={<div>Loading...</div>}>
            <Categories/>
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Blog/>
          </Suspense>
          
        </CartProvider>
      </div>
    </>
  )
}
