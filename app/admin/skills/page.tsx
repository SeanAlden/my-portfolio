/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Skills() {
  const router = useRouter();
  const [skills, setSkills] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchSkills(token);
  }, [router]);

  const fetchSkills = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/skills`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
        setSkills(result.data);
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
            <h1 className="text-3xl font-bold text-gray-900">Daftar Skill</h1>
            <p className="text-gray-500 mt-1">Kelola persentase dan kemampuan teknis Anda.</p>
          </div>
          
          <div className="flex space-x-4">
            {/* Tombol Menuju Halaman Kategori */}
            <Link 
              href="/admin/skill-categories" 
              className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-gray-50 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kelola Kategori</span>
            </Link>

            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
              <Plus className="w-5 h-5" />
              <span>Tambah Skill</span>
            </button>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Nama Skill</th>
                  <th className="px-6 py-4 font-medium">Kategori</th>
                  <th className="px-6 py-4 font-medium">Persentase</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">{skill.name}</td>
                    {/* Mengambil nama kategori dari relasi JSON yang dikirim Laravel */}
                    <td className="px-6 py-4 text-gray-600">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill.category?.name || 'Tanpa Kategori'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[100px]">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 flex justify-end space-x-3">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"><Edit className="w-5 h-5" /></button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
                {skills.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">Belum ada data skill.</td>
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