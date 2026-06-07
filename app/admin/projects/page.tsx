/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Edit, Trash2, X, Loader2, Code, Eye, Image as ImageIcon } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State Delete Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchProjects(token);
  }, []);

  const fetchProjects = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/projects`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
        setProjects(result.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data proyek", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openDeleteModal = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${apiUrl}/api/admin/projects/${selectedItem.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchProjects(token!);
        closeDeleteModal();
      }
    } catch (error) {
      console.error("Error deleting:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Proyek</h1>
            <p className="text-gray-500 mt-1">Kelola portofolio proyek dan studi kasus Anda.</p>
          </div>
          
          <Link href="/admin/projects/create" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
            <Plus className="w-5 h-5" />
            <span>Tambah Proyek</span>
          </Link>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Gambar</th>
                  <th className="px-6 py-4 font-medium">Nama Proyek</th>
                  <th className="px-6 py-4 font-medium">Tech Stack</th>
                  <th className="px-6 py-4 font-medium">Institusi</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                    <td className="px-6 py-4">
                      {item.image_url ? (
                        <div className="w-20 h-14 relative rounded-lg overflow-hidden border border-gray-200">
                          <Image src={item.image_url} alt={item.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-20 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                          <Code className="w-5 h-5" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {item.tech?.slice(0, 3).map((t: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{t}</span>
                        ))}
                        {item.tech?.length > 3 && <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">+{item.tech.length - 3}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.education?.university || '-'}
                    </td>
                    <td className="px-6 py-4 flex justify-end space-x-2">
                      <Link href={`/admin/projects/${item.id}`} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="Lihat Detail">
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link href={`/admin/projects/${item.id}/edit`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Edit">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button onClick={() => openDeleteModal(item)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Hapus">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {projects.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Belum ada data proyek.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* --- MODAL DELETE --- */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-3xl shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Proyek?</h3>
            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin menghapus ({selectedItem?.name}) beserta gambarnya? Aksi ini permanen.</p>
            <div className="flex space-x-3">
              <button onClick={closeDeleteModal} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">Batal</button>
              <button onClick={handleDelete} disabled={isSubmitting} className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition flex items-center justify-center disabled:opacity-70">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Ya, Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}