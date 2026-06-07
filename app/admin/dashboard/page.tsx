/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminDashboard() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');

  // Proteksi rute
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const name = localStorage.getItem('admin_name');
    
    if (!token) {
      router.push('/admin/login');
    } else {
      setAdminName(name || 'Admin');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Memanggil Komponen Sidebar */}
      <AdminSidebar />

      {/* Area Konten Utama */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Selamat datang, {adminName} 👋</h1>
          <p className="text-gray-500 mt-1">Pilih menu di samping untuk mulai mengelola data portofolio Anda.</p>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[500px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Dashboard Utama</p>
            <p className="text-sm">Ringkasan data akan tampil di sini nantinya.</p>
          </div>
        </div>
      </main>
    </div>
  );
}