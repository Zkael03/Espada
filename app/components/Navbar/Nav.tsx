"use client"
import { navLinks } from "@/app/constants/Constants";
import Image from "next/image";
import Link from "next/link";
import { BiUser, BiWallet } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

type Props = {
  navHandler: () => void
}

function Nav({ navHandler }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWalletDrawer, setShowWalletDrawer] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const walletDrawerRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch data keranjang dari API
  // Navbar/Nav.tsx
 // Navbar/Nav.tsx
// Navbar/Nav.tsx
const fetchCart = async () => {
  try {
    const response = await fetch("/api/users/cart");
    const text = await response.text();
    
    // Pastikan respons tidak kosong
    if (text.trim() === "") {
      setCartItems([]); // Set keranjang kosong jika tidak ada data
      console.log("Cart is empty");
      return;
    }

    const data = JSON.parse(text); // Parsing JSON jika data valid
    setCartItems(data);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    setCartItems([]); // Jika terjadi error, set keranjang menjadi kosong
  }
};

  // Close dropdown and drawer when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (walletDrawerRef.current && !walletDrawerRef.current.contains(event.target as Node)) {
        setShowWalletDrawer(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ambil data keranjang saat drawer dibuka
  useEffect(() => {
    if (showWalletDrawer) {
      fetchCart();  // Ambil data keranjang saat drawer dibuka
    }
  }, [showWalletDrawer]); // Memanggil fetchCart jika showWalletDrawer berubah menjadi true

  return (
    <>
      <div className="w-full h-[11vh] fixed z-[99] bg-white mt-[-1px] top-0">
        <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Image src="/images/logo espada.png" alt="logo" width={65} height={65} />

          {/* NavLinks */}
          <div className="lg:flex hidden items-center space-x-10">
            {navLinks.map((item) => (
              <Link href={item.url} key={item.id}>
                <span className="text-lg font-semibold hover:text-blue-800 transition-all duration-200 text-gray-900">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-8">
            <BiWallet
              className={`w-6 h-6 cursor-pointer hover:text-red-600 text-black ${showWalletDrawer ? 'text-red-600' : ''}`}
              onClick={() => setShowWalletDrawer(!showWalletDrawer)}
            />
            <div className="relative" ref={dropdownRef}>
              <BiUser
                className={`w-6 h-6 cursor-pointer hover:text-red-600 text-black ${showDropdown ? 'text-red-600' : ''}`}
                onClick={() => setShowDropdown(!showDropdown)}
              />
              
              {/* Dropdown Menu */}
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
            <FaBars onClick={navHandler} className="w-6 h-6 cursor-pointer hover:text-red-600 lg:hidden" />
          </div>
        </div>
      </div>

      {/* Wallet Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-[400px] bg-white shadow-lg z-[100] transform transition-transform duration-700 ease-in-out ${
          showWalletDrawer ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={walletDrawerRef}
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
          {/* Tampilkan item keranjang */}
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.item_id} className="flex justify-between">
                  <p>{item.item_name}</p>
                  <p>{item.jumlah}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Keranjang masih kosong</p>
            )}
          </div>
        </div>
      </div>

      {/* Overlay ketika drawer terbuka */}
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
