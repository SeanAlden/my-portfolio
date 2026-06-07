"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LogOut, LayoutDashboard, Briefcase, GraduationCap, Code, MessageSquare, Settings, ListTree, Zap } from 'lucide-react';

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Untuk mengetahui halaman mana yang sedang aktif
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      await fetch(`${apiUrl}/api/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("Error during logout", error);
    } finally {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_name');
      router.push('/admin/login');
    }
  };

  // Daftar menu yang dilengkapi dengan path rute
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Pesan Masuk', icon: MessageSquare, path: '/admin/contacts' },
    { name: 'Kategori Skill', icon: ListTree, path: '/admin/skill-categories' },
    { name: 'Skill', icon: Zap, path: '/admin/skills' },
    { name: 'Pengalaman', icon: Briefcase, path: '/admin/experiences' },
    { name: 'Edukasi', icon: GraduationCap, path: '/admin/educations' },
    { name: 'Proyek', icon: Code, path: '/admin/projects' },
    { name: 'Personal Info', icon: Settings, path: '/admin/personal-infos' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex min-h-screen">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Portfolio Admin</h2>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link 
              href={item.path}
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium disabled:opacity-50"
        >
          <LogOut className="w-5 h-5" />
          <span>{isLoggingOut ? 'Keluar...' : 'Logout'}</span>
        </button>
      </div>
    </aside>
  );
}