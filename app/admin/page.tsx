"use client"

import React, { useState, useEffect } from 'react';
import { Menu, Home, Users, ShoppingCart, Settings, LogOut, Edit, Trash2 } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    nomor_telepon: string;
    created_at: string; // format datetime disimpan sebagai string
    password: string;
  }

  interface Item {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    best_seller: string;
    trending: string;
  }
  

  const AdminDashboard = () => {
    const [usersData, setUsersData] = useState<User[]>([]); // Gunakan tipe User[]
    const [itemsData, setItemsData] = useState<Item[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState("dashboard");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const formatPrice = (price: number | string) => {
    // Konversi ke number jika input adalah string
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    
    if (isNaN(numPrice)) return 'Rp 0';
    
    // Bulatkan ke bilangan bulat terdekat untuk menghindari masalah desimal
    const roundedPrice = Math.round(numPrice);
    
    return `Rp ${roundedPrice.toLocaleString('id-ID')}`;
  };
  
  


  // Fungsi untuk memformat tanggal menjadi dd-mm-yy
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Konversi string ke objek Date
    const day = String(date.getDate()).padStart(2, '0'); // Menambahkan leading zero jika perlu
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Menambahkan leading zero jika perlu
    const year = String(date.getFullYear()).slice(2); // Ambil dua digit terakhir dari tahun
    return `${day}-${month}-${year}`;
  };

  const menuItems = [
    { title: 'Dashboard', icon: <Home className="w-4 h-4" />, page: 'dashboard' },
    { title: 'Users', icon: <Users className="w-4 h-4" />, page: 'users' },
    { title: 'Products', icon: <ShoppingCart className="w-4 h-4" />, page: 'products' },
  ];

  // fetch data
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      if (Array.isArray(data)) {
        setUsersData(data);
      }
    };

    const fetchItems = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      if (Array.isArray(data)) {
        setItemsData(data);
      }
    };

    fetchUsers();
    fetchItems();
  }, []);

  

  const renderContent = () => {
    switch (currentPage) {
        case 'users':
          return (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-black">Users Management</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Add New User
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nomor Telepon</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Akses</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {usersData.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.nomor_telepon}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(user.created_at).toLocaleDateString('id-ID')} {/* Format tanggal */}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2 justify-left items-left"> <p></p> <p></p> 
                            <button className="text-red-600 hover:text-red-900 flex justify-flex items-flex">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
      
          case 'products':
            return (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-black">Products Management</h3>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Add New Product
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Seller</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trending</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {itemsData.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatPrice(item.price)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.best_seller === 'yes' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {item.best_seller === 'yes' ? 'Yes' : 'No'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.trending === 'yes' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {item.trending === 'yes' ? 'Yes' : 'No'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
    

      default:
        return (
          <>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Jumlah Produk</h3>
              <p className="text-gray-600">
                Your main content goes here. Add your components, tables, charts, or any other content.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Jumlah Pemesanan</h3>
              <p className="text-gray-600">
                Your main content goes here. Add your components, tables, charts, or any other content.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Jumlah Pengguna</h3>
              <p className="text-gray-600">
                Your main content goes here. Add your components, tables, charts, or any other content.
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`font-bold text-xl text-black ${!isSidebarOpen && 'hidden'}`}>Admin Panel</h1>
          <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100 text-black">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={() => setCurrentPage(item.page)}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors ${
                currentPage === item.page ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span className={`${!isSidebarOpen && 'hidden'}`}>{item.title}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-300 p-4 border-t">
          <a href="#" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
            <LogOut className="w-4 h-4 mr-3" />
            <span className={`${!isSidebarOpen && 'hidden'}`}>Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Navbar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;