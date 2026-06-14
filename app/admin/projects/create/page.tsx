/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2, PlusCircle, MinusCircle, UploadCloud, Image as ImageIcon } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function CreateProject() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [educations, setEducations] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State Form
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [educationId, setEducationId] = useState('');
  const [tech, setTech] = useState<string[]>(['']);
  const [githubUrls, setGithubUrls] = useState<{label: string, url: string}[]>([{ label: '', url: '' }]);
  
  // State Gambar
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchEducations(token);
  }, []);

  const fetchEducations = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/api/admin/educations`, {
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` }
      });
      const result = await res.json();
      if (res.ok) setEducations(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handlers Array Dinamis
  const handleTechChange = (index: number, value: string) => {
    const newTech = [...tech];
    newTech[index] = value;
    setTech(newTech);
  };

  const handleGithubChange = (index: number, field: 'label' | 'url', value: string) => {
    const newUrls = [...githubUrls];
    newUrls[index][field] = value;
    setGithubUrls(newUrls);
  };

  // Handler Upload Gambar
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // Bersihkan array kosong
    const cleanedTech = tech.filter(t => t.trim() !== '');
    const cleanedUrls = githubUrls.filter(g => g.label.trim() !== '' && g.url.trim() !== '');

    // Buat FormData untuk Upload File
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    if (educationId) formData.append('education_id', educationId);
    
    cleanedTech.forEach((t, i) => formData.append(`tech[${i}]`, t));
    cleanedUrls.forEach((g, i) => {
      formData.append(`github_urls[${i}][label]`, g.label);
      formData.append(`github_urls[${i}][url]`, g.url);
    });

    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const response = await fetch(`${apiUrl}/api/admin/projects`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
          // Jangan set Content-Type secara manual saat menggunakan FormData (browser akan mengaturnya dengan boundary)
        },
        body: formData
      });

      if (response.ok) {
        router.push('/admin/projects');
      } else {
        const errorData = await response.json();
        console.error(errorData);
        alert("Gagal menyimpan data. Cek kembali isian form Anda.");
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
        <header className="mb-8 flex items-center space-x-4">
          <Link href="/admin/projects" className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tambah Proyek</h1>
          </div>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* GAMBAR PROYEK */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Gambar / Thumbnail Proyek</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-48 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer relative overflow-hidden"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                    <span className="text-gray-500 font-medium">Klik untuk mengunggah gambar (Maks 2MB)</span>
                  </>
                )}
              </div>
              <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/jpeg, image/png, image/webp" className="hidden" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Proyek</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Institusi Terkait (Opsional)</label>
                <select value={educationId} onChange={(e) => setEducationId(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black">
                  <option value="">-- Proyek Pribadi --</option>
                  {educations.map((edu) => (
                    <option key={edu.id} value={edu.id}>{edu.university}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi Proyek</label>
              <textarea required rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-black" />
            </div>

            {/* TECH STACK */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-gray-700">Teknologi yang Digunakan (Tech Stack)</label>
                <button type="button" onClick={() => setTech([...tech, ''])} className="text-sm text-blue-600 hover:text-blue-700 font-bold flex items-center text-black"><PlusCircle className="w-4 h-4 mr-1" /> Tambah Tech</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tech.map((t, index) => (
                  <div key={index} className="flex space-x-2">
                    <input type="text" required value={t} onChange={(e) => handleTechChange(index, e.target.value)} placeholder="Ex: React" className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                    <button type="button" onClick={() => setTech(tech.filter((_, i) => i !== index))} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"><MinusCircle className="w-5 h-5" /></button>
                  </div>
                ))}
              </div>
            </div>

            {/* GITHUB URLS */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-gray-700">Tautan Repository (GitHub URLs)</label>
                <button type="button" onClick={() => setGithubUrls([...githubUrls, {label: '', url: ''}])} className="text-sm text-blue-600 hover:text-blue-700 font-bold flex items-center"><PlusCircle className="w-4 h-4 mr-1" /> Tambah URL</button>
              </div>
              <div className="space-y-3">
                {githubUrls.map((item, index) => (
                  <div key={index} className="flex space-x-2">
                    <input type="text" required value={item.label} onChange={(e) => handleGithubChange(index, 'label', e.target.value)} placeholder="Label (ex: API)" className="w-1/3 px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                    <input type="url" required value={item.url} onChange={(e) => handleGithubChange(index, 'url', e.target.value)} placeholder="https://github.com/..." className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                    <button type="button" onClick={() => setGithubUrls(githubUrls.filter((_, i) => i !== index))} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"><MinusCircle className="w-5 h-5" /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button type="submit" disabled={isSubmitting} className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Simpan Proyek'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}