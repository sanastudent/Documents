"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart"; // Importing the use-shopping-cart hook
import { useRouter } from "next/router"; // Importing Next.js useRouter hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { cartCount } = useShoppingCart(); // Fetch the cart count
  const [isMounted, setIsMounted] = useState(false); // State to track if component is mounted
  const [router, setRouter] = useState(null); // State to store the router

  // Set the router once the component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle the search query when the user presses Enter or clicks the search button
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router?.push(`/search?q=${searchQuery}`); // Use the router after component is mounted
    }
  };

  // Render nothing until the component is mounted (client-side)
  if (!isMounted) return null;

  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold ml-10">CraftedLiving</h1>

        <div className="hidden md:flex gap-8 mr-28">
          <Link href="/" className="text-sm font-normal">Home</Link>
          {/* <Link href="/pages" className="text-sm font-normal">Pages</Link> */}
          <Link href="/products" className="text-sm font-normal">Products</Link>
          <Link href="/blog" className="text-sm font-normal">Blog</Link>
          <Link href="/shop" className="text-sm font-normal">Shop</Link>
          <Link href="/about" className="text-sm font-normal">About</Link>
          <Link href="/contact" className="text-sm font-normal">Contact</Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <form onSubmit={handleSearch} className="relative flex items-center">
            {/* Search Input */}
            <Input
              className="bg-[#f55f5] rounded py-2 pl-3 pr-12"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
            />

            {/* Search Icon */}
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <Search />
            </button>
          </form>

          {/* Cart Icon with margin to the right */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="text-black text-lg" />
            {/* Show cart count if there are items in the cart */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"} className="rounded-full" >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className={`${isOpen ? 'bg-black' : 'bg-white'} md:hidden absolute top-0 right-0 w-full h-screen z-50 transition-all duration-300`}>
            <SheetHeader>
              <SheetTitle> Exclusive </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 mt-6"> 
              <Link href="/" className="text-sm font-normal">Home</Link>
              {/* <Link href="/pages" className="text-sm font-normal">Pages</Link> */}
              <Link href="/products" className="text-sm font-normal">Products</Link>
              <Link href="/blog" className="text-sm font-normal">Blog</Link>
              <Link href="/shop" className="text-sm font-normal">Shop</Link>
              <Link href="/about" className="text-sm font-normal">About</Link>
              <Link href="/contact" className="text-sm font-normal">Contact</Link>
            </div>

            <div className="mt-4">
              <div className="relative">
                <Input
                  className="bg-[#f55f5] rounded"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Handle search input in mobile view
                  placeholder="Search"
                />
                <button
                  type="submit"
                  onClick={handleSearch} // Trigger search on button click in mobile view
                  className="absolute right-2 top-2"
                >
                  <Search />
                </button>
              </div>
              <div className="mt-4 space-x-2">
                {/* Cart Icon in mobile view */}
                <Link href="/cart" className="relative">
                  <ShoppingCart className="text-black ml-3 text-lg" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

