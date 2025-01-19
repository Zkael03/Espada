import React from 'react';
import Steak from '../components/Kategori/Steak';
import SideDish from '../components/Kategori/SideDish';
import Dessert from '../components/Kategori/Dessert';
import Minuman from '../components/Kategori/Minuman';   
import ResponsiveNav from '../components/Navbar/ResponsiveNav';
import Footer from '../components/Footer';




const Menu = () => {
  return (
    <div>
      <h1>Menu Page</h1>
      <ResponsiveNav />
      <Steak />
      <SideDish />
      <Dessert />
      <Minuman />
      <Footer />
    </div>
  );
};

export default Menu;