/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2, ArrowRight } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function SkillCategories() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchCategories(token);
  }, [router]);

  const fetchCategories = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/skill-categories`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
        setCategories(result.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Kategori Skill</h1>
            <p className="text-gray-500 mt-1">Kelola daftar kategori untuk keahlian Anda (contoh: Backend, Frontend).</p>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
              <Plus className="w-5 h-5" />
              <span>Tambah Kategori</span>
            </button>
            
            {/* Tombol Menuju Halaman Skill */}
            <Link 
              href="/admin/skills" 
              className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-gray-800 transition"
            >
              <span>Kelola Item Skill</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">ID</th>
                  <th className="px-6 py-4 font-medium">Nama Kategori</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-gray-500">#{cat.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{cat.name}</td>
                    <td className="px-6 py-4 flex justify-end space-x-3">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"><Edit className="w-5 h-5" /></button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
                {categories.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">Belum ada data kategori.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}