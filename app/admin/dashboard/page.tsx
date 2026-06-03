/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, LayoutDashboard, Briefcase, GraduationCap, Code, MessageSquare, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Proteksi rute sederhana di sisi klien
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const name = localStorage.getItem('admin_name');
    
    if (!token) {
      router.push('/admin/login');
    } else {
      setAdminName(name || 'Admin');
    }
  }, [router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      // Memanggil endpoint logout Laravel dengan membawa Bearer Token
      await fetch(`${apiUrl}/api/api/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}` // Wajib untuk route Sanctum
        }
      });
    } catch (error) {
      console.error("Error during logout", error);
    } finally {
      // Hapus data lokal dan arahkan kembali ke login terlepas dari respons server
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_name');
      router.push('/admin/login');
    }
  };

  // Menu navigasi samping
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Pesan Masuk', icon: MessageSquare },
    { name: 'Pengalaman', icon: Briefcase },
    { name: 'Edukasi', icon: GraduationCap },
    { name: 'Proyek', icon: Code },
    { name: 'Personal Info', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Portfolio Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors text-left font-medium"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left font-medium disabled:opacity-50"
          >
            <LogOut className="w-5 h-5" />
            <span>{isLoggingOut ? 'Keluar...' : 'Logout'}</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Selamat datang, {adminName} 👋</h1>
            <p className="text-gray-500 mt-1">Pilih menu di samping untuk mulai mengelola data portofolio Anda.</p>
          </div>
        </header>

        {/* Placeholder untuk tabel/form data */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[500px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Area Manajemen Data</p>
            <p className="text-sm">Klik menu di sidebar untuk memuat komponen CRUD.</p>
          </div>
        </div>
      </main>

    </div>
  );
}