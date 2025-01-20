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

function Nav({navHandler}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
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
          <BiWallet className="w-6 h-6 cursor-pointer hover:text-red-600 text-black" />
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
          <FaBars onClick={navHandler} className="w-6 h-6 cursor-pointer hover:text-red-600 lg:hidden"/>
        </div>
      </div>
    </div>
  );
}

export default Nav;