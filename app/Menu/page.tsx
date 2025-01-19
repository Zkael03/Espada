import React from 'react';
import Steak from '../components/Kategori/Steak';
import SideDish from '../components/Kategori/SideDish';
import Dessert from '../components/Kategori/Dessert';
import Minuman from '../components/Kategori/Minuman';   



const Menu = () => {
  return (
    <div>
      <h1>Menu Page</h1>
      <Steak />
      <SideDish />
      <Dessert />
      <Minuman />
    </div>
  );
};

export default Menu;