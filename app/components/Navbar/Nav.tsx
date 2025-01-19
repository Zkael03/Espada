"use client"
import { navLinks } from "@/app/constants/Constants";
import Image from "next/image";
import Link from "next/link";
import { BiUser, BiWallet } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

type Props = {
  navHandler: ()=>void
}

function Nav({navHandler}:Props) {

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
          <BiUser className="w-6 h-6 cursor-pointer hover:text-red-600 text-black" />
          <FaBars onClick={navHandler} className="w-6 h-6 cursor-pointer hover:text-red-600 lg:hidden"/>
        </div>
      </div>

      
    </div>
  );
}

export default Nav;