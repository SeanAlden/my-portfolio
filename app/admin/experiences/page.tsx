/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, X, Loader2, Briefcase, Eye, PlusCircle, MinusCircle, CheckCircle2 } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Experiences() {
  const router = useRouter();
  const [experiences, setExperiences] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Berbagai Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State untuk Form & Selection
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    period: '',
    points: [''] // Array string untuk deskripsi pengalaman
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchExperiences(token);
  }, []);

  const fetchExperiences = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/experiences`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
        setExperiences(result.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data pengalaman", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- MODAL HANDLERS ---
  const openAddModal = () => {
    setSelectedItem(null);
    setFormData({ title: '', type: '', period: '', points: [''] });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setSelectedItem(item);
    setFormData({
      title: item.title,
      type: item.type,
      period: item.period,
      points: item.points && item.points.length > 0 ? [...item.points] : ['']
    });
    setIsModalOpen(true);
  };

  const openDetailModal = (item: any) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  const openDeleteModal = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsDetailModalOpen(false);
    setSelectedItem(null);
  };

  // --- DYNAMIC POINTS HANDLERS ---
  const handlePointChange = (index: number, value: string) => {
    const newPoints = [...formData.points];
    newPoints[index] = value;
    setFormData({ ...formData, points: newPoints });
  };

  const addPoint = () => {
    setFormData({ ...formData, points: [...formData.points, ''] });
  };

  const removePoint = (index: number) => {
    const newPoints = formData.points.filter((_, i) => i !== index);
    setFormData({ ...formData, points: newPoints.length > 0 ? newPoints : [''] });
  };

  // --- ACTION HANDLERS ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const url = selectedItem 
      ? `${apiUrl}/api/admin/experiences/${selectedItem.id}` 
      : `${apiUrl}/api/admin/experiences`;
      
    const method = selectedItem ? 'PUT' : 'POST';

    const payload = {
      ...formData,
      points: formData.points.filter(p => p.trim() !== '')
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
        await fetchExperiences(token!);
        closeModal();
      } else {
        alert("Gagal menyimpan data pengalaman.");
      }
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${apiUrl}/api/admin/experiences/${selectedItem.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchExperiences(token!);
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
            <h1 className="text-3xl font-bold text-gray-900">Pengalaman Kerja</h1>
            <p className="text-gray-500 mt-1">Kelola riwayat karir, magang, atau proyek profesional Anda.</p>
          </div>
          
          <button onClick={openAddModal} className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
            <Plus className="w-5 h-5" />
            <span>Tambah Pengalaman</span>
          </button>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Jabatan</th>
                  <th className="px-6 py-4 font-medium">Perusahaan / Tipe</th>
                  <th className="px-6 py-4 font-medium">Periode</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                    <td className="px-6 py-4 font-bold text-gray-900">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{item.period}</td>
                    <td className="px-6 py-4 flex justify-end space-x-2">
                      <button onClick={() => openDetailModal(item)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="Lihat Detail">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => openDeleteModal(item)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Hapus">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {experiences.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">Belum ada data pengalaman kerja.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* --- MODAL TAMBAH / EDIT --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl p-6 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem ? 'Edit Pengalaman' : 'Tambah Pengalaman'}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Jabatan (Title)</label>
                  <input 
                    type="text" required value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black"
                    placeholder="Contoh: Senior Web Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Perusahaan / Tipe</label>
                  <input 
                    type="text" required value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black"
                    placeholder="Contoh: PT. Teknologi Maju / Freelance"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Periode Waktu</label>
                <input 
                  type="text" required value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black"
                  placeholder="Contoh: Jan 2021 - Sekarang"
                />
              </div>

              {/* Dynamic Points Section */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-bold text-gray-700">Tanggung Jawab & Pencapaian</label>
                  <button type="button" onClick={addPoint} className="text-sm text-blue-600 hover:text-blue-700 flex items-center font-bold">
                    <PlusCircle className="w-4 h-4 mr-1" /> Tambah Poin
                  </button>
                </div>
                
                <div className="space-y-3">
                  {formData.points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="pt-3 text-gray-400 text-xs font-bold w-4">{index + 1}.</div>
                      <textarea
                        required value={point}
                        onChange={(e) => handlePointChange(index, e.target.value)}
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-black"
                        placeholder="Deskripsikan pekerjaan Anda..."
                        rows={2}
                      />
                      <button type="button" onClick={() => removePoint(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-xl mt-1 transition">
                        <MinusCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
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

      {/* --- MODAL DETAIL --- */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 text-white rounded-2xl">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem?.title}</h3>
                  <p className="text-blue-600 font-medium">{selectedItem?.type}</p>
                </div>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition"><X className="w-6 h-6 text-gray-400" /></button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                <span className="text-gray-500 text-sm font-medium">Periode Kerja</span>
                <span className="text-gray-900 font-bold">{selectedItem?.period}</span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Deskripsi Pekerjaan</h4>
                <ul className="space-y-3">
                  {selectedItem?.points?.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button onClick={closeModal} className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition">Tutup Detail</button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DELETE --- */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-3xl shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Pengalaman?</h3>
            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin menghapus riwayat sebagai ({selectedItem?.title})? Data tidak dapat dipulihkan.</p>
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