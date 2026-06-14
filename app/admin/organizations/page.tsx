/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// Tambahkan Eye dan CheckCircle2 pada import icon
import { Plus, Edit, Trash2, X, Loader2, Building2, PlusCircle, MinusCircle, Eye, CheckCircle2 } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Organizations() {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [educations, setEducations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // State baru untuk modal detail
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State untuk Form Data
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    education_id: '',
    name: '',
    role: '',
    period: '',
    points: [''] // Array of strings untuk deskripsi poin
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
      
      const [orgRes, eduRes] = await Promise.all([
        fetch(`${apiUrl}/api/admin/organizations`, { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` } }),
        fetch(`${apiUrl}/api/admin/educations`, { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` } })
      ]);

      const orgResult = await orgRes.json();
      const eduResult = await eduRes.json();

      if (orgRes.ok) setOrganizations(orgResult.data);
      if (eduRes.ok) setEducations(eduResult.data);

    } catch (error) {
      console.error("Gagal mengambil data", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- HANDLER MODAL ---
  const openAddModal = () => {
    setSelectedItem(null);
    setFormData({ education_id: '', name: '', role: '', period: '', points: [''] });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setSelectedItem(item);
    setFormData({
      education_id: item.education_id.toString(),
      name: item.name,
      role: item.role,
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

  // --- HANDLER DYNAMIC POINTS ---
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

  // --- HANDLER SUBMIT (POST / PUT) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const url = selectedItem 
      ? `${apiUrl}/api/admin/organizations/${selectedItem.id}` 
      : `${apiUrl}/api/admin/organizations`;
      
    const method = selectedItem ? 'PUT' : 'POST';

    const payload = {
      ...formData,
      education_id: Number(formData.education_id),
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
        await fetchData(token!);
        closeModal();
      } else {
        alert("Gagal menyimpan data. Pastikan semua kolom terisi dengan benar (terutama minimal 1 poin).");
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
      const response = await fetch(`${apiUrl}/api/admin/organizations/${selectedItem.id}`, {
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
            <h1 className="text-3xl font-bold text-gray-900">Organisasi</h1>
            <p className="text-gray-500 mt-1">Kelola riwayat keanggotaan dan kepanitiaan organisasi Anda.</p>
          </div>
          
          <button onClick={openAddModal} className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition">
            <Plus className="w-5 h-5" />
            <span>Tambah Organisasi</span>
          </button>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Nama Organisasi</th>
                  <th className="px-6 py-4 font-medium">Peran</th>
                  <th className="px-6 py-4 font-medium">Institusi (Edukasi)</th>
                  <th className="px-6 py-4 font-medium">Periode</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.role}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {item.education?.university || 'Tanpa Institusi'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.period}</td>
                    <td className="px-6 py-4 flex justify-end space-x-2">
                      {/* Tombol Lihat Detail */}
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
                {organizations.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">Belum ada data organisasi.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* --- MODAL TAMBAH/EDIT --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl p-6 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem ? 'Edit Organisasi' : 'Tambah Organisasi'}</h3>
              <button type="button" onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nama Organisasi</label>
                  <input 
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                    placeholder="Contoh: BEM Fakultas Teknik"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Peran / Posisi</label>
                  <input 
                    type="text" required value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                    placeholder="Contoh: Ketua Divisi IT"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Institusi Terkait</label>
                  <select 
                    required value={formData.education_id}
                    onChange={(e) => setFormData({ ...formData, education_id: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  >
                    <option value="" disabled>-- Pilih Institusi Edukasi --</option>
                    {educations.map((edu) => (
                      <option key={edu.id} value={edu.id}>{edu.university}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Periode</label>
                  <input 
                    type="text" required value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black"
                    placeholder="Contoh: Jan 2022 - Des 2023"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-bold text-gray-700">Poin Deskripsi (Job Description)</label>
                  <button type="button" onClick={addPoint} className="text-sm text-blue-600 hover:text-blue-700 flex items-center font-bold">
                    <PlusCircle className="w-4 h-4 mr-1" /> Tambah Poin
                  </button>
                </div>
                
                <div className="space-y-3">
                  {formData.points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="pt-3 text-gray-400 text-xs font-bold w-4">{index + 1}.</div>
                      <textarea
                        required rows={2} value={point}
                        onChange={(e) => handlePointChange(index, e.target.value)}
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-black"
                        placeholder="Contoh: Memimpin tim beranggotakan 5 orang dalam mendevelop..."
                      />
                      <button type="button" onClick={() => removePoint(index)} className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition mt-0.5" title="Hapus Poin">
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

      {/* --- MODAL DETAIL (READ ONLY) --- */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 text-white rounded-2xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem?.name}</h3>
                  <p className="text-blue-600 font-medium">{selectedItem?.role}</p>
                </div>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                <span className="text-gray-500 text-sm font-medium">Periode & Institusi</span>
                <div className="text-right">
                  <p className="text-gray-900 font-bold">{selectedItem?.period}</p>
                  <p className="text-sm text-gray-500">{selectedItem?.education?.university || 'Tanpa Institusi'}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tanggung Jawab / Poin</h4>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Organisasi?</h3>
            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin menghapus data ({selectedItem?.name})? Aksi ini permanen.</p>
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