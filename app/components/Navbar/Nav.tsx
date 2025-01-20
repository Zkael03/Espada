'use client';

import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { BiWallet, BiUser } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

type Props = {
  navHandler: () => void;
};

function Nav({ navHandler }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWalletDrawer, setShowWalletDrawer] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const walletDrawerRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch cart data
  const fetchCart = async () => {
    try {
      const response = await fetch("/api/users/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]); // Set empty cart if error occurs
    }
  };

  // Fetch cart items when wallet drawer is opened
  useEffect(() => {
    if (showWalletDrawer) {
      fetchCart();
    }
  }, [showWalletDrawer]);

  // Close dropdown and wallet drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
      if (
        walletDrawerRef.current &&
        !walletDrawerRef.current.contains(event.target as Node)
      ) {
        setShowWalletDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[11vh] fixed z-[99] bg-white mt-[-1px] top-0">
        <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Image src="/images/logo espada.png" alt="logo" width={65} height={65} />

          {/* Links */}
          <div className="lg:flex hidden items-center space-x-10">
            <Link href="/">
              <span className="text-lg font-semibold hover:text-blue-800 transition-all duration-200 text-gray-900">
                Home
              </span>
            </Link>
            <Link href="/Menu">
              <span className="text-lg font-semibold hover:text-blue-800 transition-all duration-200 text-gray-900">
                Menu
              </span>
            </Link>
            <Link href="/about">
              <span className="text-lg font-semibold hover:text-blue-800 transition-all duration-200 text-gray-900">
                About
              </span>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-8">
            <BiWallet
              onClick={() => setShowWalletDrawer(!showWalletDrawer)}
              className={`w-6 h-6 cursor-pointer ${showWalletDrawer ? "text-red-600" : ""}`}
            />
            <div className="relative" ref={dropdownRef}>
              <BiUser
                className="w-6 h-6 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/login">
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Login
                    </div>
                  </Link>
                  <Link href="/signup">
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Sign Up
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <FaBars
              onClick={navHandler}
              className="w-6 h-6 cursor-pointer hover:text-red-600 lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* Wallet Drawer */}
      <div
        ref={walletDrawerRef}
        className={`fixed right-0 top-0 h-full w-[400px] bg-white shadow-lg z-[100] transform transition-transform duration-700 ease-in-out ${
          showWalletDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Keranjang Belanja</h2>
            <button
              onClick={() => setShowWalletDrawer(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item: any) => (
                <div key={item.item_id} className="flex justify-between">
                  <Image src={item.image} alt={item.name} width={50} height={50} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price} IDR</p>
                  </div>
                  <p>Qty: {item.jumlah}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Keranjang masih kosong</p>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showWalletDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
          onClick={() => setShowWalletDrawer(false)}
        />
      )}
    </>
  );
}

export default Nav;
