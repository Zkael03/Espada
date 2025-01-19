'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='py-10'>
        <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-stale-300 pb-8 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
            <div className="">
                <div className="text-2xl text-red-700 font-semibold mb-4 ">Ikuti Kami</div>
                <p className="text-sm text-gray-700 mt-2">Dapatkan informasi terbaru tentang menu, promosi, dan acara di restoran Espada. Ikuti kami di media sosial !</p>
                <div className="mt-4 flex items-center space-x-4">
                    <a href="/" target='_blank'><FaFacebook className='w-6 h-6 text-blue-600' /></a>
                    <a href="/" target='_blank'><FaXTwitter className='w-6 h-6' /></a>
                    <a href="/" target='_blank'><FaYoutube className='w-6 h-6 text-red-600' /></a>
                    <a href="/" target='_blank'><FaInstagram className='w-6 h-6 text-pink-700' /></a>        
                </div>
            </div>
            <div className="md:mx-auto mx-0 flex flex-col text-gray-600">
                <h3 className="footer__title">MarketPlace</h3>
                <Link href={'/'} className='footer__link'>TokoPedia</Link>
                <Link href={'/'} className='footer__link'>Shopee</Link>
                <Link href={'/'} className='footer__link'>Lazada</Link>
                <Link href={'/'} className='footer__link'>Amazon</Link>
                <Link href={'/'} className='footer__link'>Gojek</Link>
            </div>
            <div className="md:mx-auto mx-0 flex flex-col text-gray-600">
                <h3 className="footer__title">Company</h3>
                <Link href={'/'} className='footer__link'>Explore</Link>
                <Link href={'/'} className='footer__link'>About</Link>
                <Link href={'/'} className='footer__link'>Contact Us</Link>
                <Link href={'/'} className='footer__link'>Our Blog</Link>
                <Link href={'/'} className='footer__link'>FAQ</Link>
            </div>
            <div className="md:mx-auto mx-0 flex flex-col text-gray-600">
                <h3 className="footer__title">My Account</h3>
                <Link href={'/'} className='footer__link'>Authors</Link>
                <Link href={'/'} className='footer__link'>Collections</Link>
                <Link href={'/'} className='footer__link'>Author Profile</Link>
                <Link href={'/'} className='footer__link'>Create Item</Link>
                <Link href={'/'} className='footer__link'>Profile</Link>
            </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
            <p>&#169; Kelompok 5</p>
            <p> {new Date().getFullYear()} Espada. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer
