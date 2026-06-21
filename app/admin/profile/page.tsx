/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, UploadCloud, User, Briefcase, FileText } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminProfile() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State Form
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  
  // State Gambar
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchUserProfile(token);
  }, []);

  const fetchUserProfile = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/api/user`, {
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` }
      });
      const user = await res.json();
      
      if (res.ok) {
        setName(user.name || '');
        setRole(user.role || '');
        setDescription(user.description || '');
        setImagePreview(user.image_url || null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', role);
    formData.append('description', description);
    
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const response = await fetch(`${apiUrl}/api/user/update`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('admin_name', result.data.name); // Update nama di lokal
        alert("Profil berhasil diperbarui!");
        window.location.reload(); // Refresh untuk mengupdate foto di sidebar
      } else {
        alert("Gagal memperbarui profil.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pengaturan Profil</h1>
          <p className="text-gray-500 mt-1">Perbarui informasi dasar dan foto profil Anda.</p>
        </header>

        {isLoading ? (
          <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* FOTO PROFIL */}
              <div className="flex flex-col md:flex-row items-center gap-8 border-b border-gray-100 pb-8">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-32 h-32 rounded-full border-4 border-gray-100 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer relative overflow-hidden shrink-0 group"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-gray-400" />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <UploadCloud className="w-6 h-6 text-white" />
                  </div>
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Foto Profil</h3>
                  <p className="text-sm text-gray-500 mt-1">Disarankan format PNG atau JPG berukuran kotak (1:1). Maksimal 2MB.</p>
                  <button type="button" onClick={() => fileInputRef.current?.click()} className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Ubah Foto
                  </button>
                </div>
              </div>

              {/* INPUT DATA */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center"><User className="w-4 h-4 mr-2 text-gray-400" /> Nama Lengkap</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center"><Briefcase className="w-4 h-4 mr-2 text-gray-400" /> Peran / Jabatan (Role)</label>
                  <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Contoh: IT Software Engineer" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center"><FileText className="w-4 h-4 mr-2 text-gray-400" /> Deskripsi Singkat</label>
                  <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Tuliskan sedikit tentang diri Anda..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" disabled={isSubmitting} className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}