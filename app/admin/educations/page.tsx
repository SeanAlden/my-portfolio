/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, X, Loader2, GraduationCap } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Educations() {
  const router = useRouter();
  const [educations, setEducations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State untuk Form Data
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    university: '',
    degree: '',
    period: '',
    gpa: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchData(token);
  }, []);

  const fetchData = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/educations`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
        setEducations(result.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data edukasi", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- HANDLER MODAL ---
  const openAddModal = () => {
    setSelectedItem(null);
    setFormData({ university: '', degree: '', period: '', gpa: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setSelectedItem(item);
    setFormData({
      university: item.university,
      degree: item.degree,
      period: item.period,
      gpa: item.gpa
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  // --- HANDLER SUBMIT (POST / PUT) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const url = selectedItem 
      ? `${apiUrl}/api/admin/educations/${selectedItem.id}` 
      : `${apiUrl}/api/admin/educations`;
      
    const method = selectedItem ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await fetchData(token!);
        closeModal();
      } else {
        alert("Gagal menyimpan data. Pastikan semua kolom terisi dengan benar.");
      }
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- HANDLER DELETE ---
  const handleDelete = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${apiUrl}/api/admin/educations/${selectedItem.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchData(token!);
        closeModal();
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
            <h1 className="text-3xl font-bold text-gray-900">Riwayat Edukasi</h1>
            <p className="text-gray-500 mt-1">Kelola data pendidikan formal dan non-formal Anda.</p>
          </div>
          
          <button onClick={openAddModal} className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
            <Plus className="w-5 h-5" />
            <span>Tambah Edukasi</span>
          </button>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Institusi</th>
                  <th className="px-6 py-4 font-medium">Gelar / Jurusan</th>
                  <th className="px-6 py-4 font-medium">Periode</th>
                  <th className="px-6 py-4 font-medium">IPK / Nilai</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {educations.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span>{item.university}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.degree}</td>
                    <td className="px-6 py-4 text-gray-600">{item.period}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{item.gpa}</td>
                    <td className="px-6 py-4 flex justify-end space-x-3">
                      <button onClick={() => openEditModal(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(item)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {educations.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">Belum ada data edukasi.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* --- MODAL TAMBAH/EDIT --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg p-6 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem ? 'Edit Edukasi' : 'Tambah Edukasi'}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Institusi / Universitas</label>
                <input 
                  type="text" 
                  required 
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Contoh: Universitas Surabaya (UBAYA) / Bangkit Academy"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Gelar / Jurusan</label>
                <input 
                  type="text" 
                  required 
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Contoh: S1 Teknik Informatika"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Periode</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                    placeholder="Contoh: 2020 - 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">IPK / Nilai</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                    placeholder="Contoh: 3.85 / Distinction"
                  />
                </div>
              </div>

              <div className="pt-6 flex space-x-3">
                <button type="button" onClick={closeModal} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">Batal</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Simpan Data'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL DELETE --- */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-6 rounded-3xl shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Data Edukasi?</h3>
            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin menghapus data pendidikan di ({selectedItem?.university})? Aksi ini permanen.</p>
            <div className="flex space-x-3">
              <button onClick={closeModal} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">Batal</button>
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