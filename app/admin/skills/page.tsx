/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2, ArrowLeft, X, Loader2 } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Skills() {
  const router = useRouter();
  const [skills, setSkills] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State untuk Form Data
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState({ 
    skill_category_id: '', 
    name: '', 
    percentage: '' 
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
      
      // Mengambil Data Skill dan Kategori secara bersamaan
      const [skillsRes, categoriesRes] = await Promise.all([
        fetch(`${apiUrl}/api/admin/skills`, { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` } }),
        fetch(`${apiUrl}/api/admin/skill-categories`, { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` } })
      ]);

      const skillsResult = await skillsRes.json();
      const categoriesResult = await categoriesRes.json();

      if (skillsRes.ok) setSkills(skillsResult.data);
      if (categoriesRes.ok) setCategories(categoriesResult.data);
      
    } catch (error) {
      console.error("Gagal mengambil data", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- HANDLER MODAL ---
  const openAddModal = () => {
    setSelectedItem(null);
    setFormData({ skill_category_id: '', name: '', percentage: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (skill: any) => {
    setSelectedItem(skill);
    setFormData({ 
      skill_category_id: skill.skill_category_id.toString(), 
      name: skill.name, 
      percentage: skill.percentage.toString() 
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (skill: any) => {
    setSelectedItem(skill);
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
      ? `${apiUrl}/api/admin/skills/${selectedItem.id}` 
      : `${apiUrl}/api/admin/skills`;
      
    const method = selectedItem ? 'PUT' : 'POST';

    // Parse percentage dan ID menjadi Number untuk dikirim ke Laravel
    const payload = {
      ...formData,
      skill_category_id: Number(formData.skill_category_id),
      percentage: Number(formData.percentage)
    };

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        await fetchData(token!); // Refresh data
        closeModal();
      } else {
        alert("Gagal menyimpan data. Pastikan semua field terisi dengan benar.");
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
      const response = await fetch(`${apiUrl}/api/admin/skills/${selectedItem.id}`, {
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
            <h1 className="text-3xl font-bold text-gray-900">Daftar Skill</h1>
            <p className="text-gray-500 mt-1">Kelola persentase dan kemampuan teknis Anda.</p>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/admin/skill-categories" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-gray-50 transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Kelola Kategori</span>
            </Link>
            <button onClick={openAddModal} className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
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
                      <button onClick={() => openEditModal(skill)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"><Edit className="w-5 h-5" /></button>
                      <button onClick={() => openDeleteModal(skill)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
                {skills.length === 0 && (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">Belum ada data skill.</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* --- MODAL TAMBAH/EDIT --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-6 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem ? 'Edit Skill' : 'Tambah Skill'}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Skill</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: Laravel, React, Docker"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pilih Kategori</label>
                <select 
                  required 
                  value={formData.skill_category_id}
                  onChange={(e) => setFormData({ ...formData, skill_category_id: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="" disabled>-- Pilih Kategori --</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Persentase Penguasaan (0-100)</label>
                <input 
                  type="number" 
                  required 
                  min="0"
                  max="100"
                  value={formData.percentage}
                  onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: 85"
                />
              </div>

              <div className="pt-4 flex space-x-3">
                <button type="button" onClick={closeModal} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">Batal</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Simpan'}
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Skill?</h3>
            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin menghapus ({selectedItem?.name})?</p>
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