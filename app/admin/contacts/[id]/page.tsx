/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function ContactDetail() {
  const router = useRouter();
  const params = useParams();
  const [message, setMessage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    
    // Pastikan params.id tersedia
    if (params.id) {
      fetchMessageDetail(token, params.id as string);
    }
  }, [params.id]);

  const fetchMessageDetail = async (token: string, id: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/contacts/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setMessage(result.data);
      } else {
        alert("Pesan tidak ditemukan.");
        router.push('/admin/contacts');
      }
    } catch (error) {
      console.error("Gagal mengambil detail pesan", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', year: 'numeric', month: 'long', 
      day: 'numeric', hour: '2-digit', minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <header className="mb-8 flex items-center space-x-4">
          <Link 
            href="/admin/contacts"
            className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Detail Pesan</h1>
            <p className="text-gray-500 mt-1">Membaca pesan dari pengunjung.</p>
          </div>
        </header>

        {isLoading ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center text-gray-500">
            Memuat detail pesan...
          </div>
        ) : message ? (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl">
            
            {/* Header Profil Pengirim */}
            <div className="bg-blue-50/50 p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-sm">
                  {message.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{message.name}</h2>
                  <div className="flex items-center space-x-2 text-gray-500 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(message.created_at)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Informasi Kontak & Isi Pesan */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Alamat Email</p>
                    <a href={`mailto:${message.email}`} className="text-base font-semibold text-blue-600 hover:underline">
                      {message.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Nomor Telepon</p>
                    {message.phone ? (
                      <a href={`tel:${message.phone}`} className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                        {message.phone}
                      </a>
                    ) : (
                      <span className="text-base text-gray-400 italic">Tidak dilampirkan</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Isi Pesan</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {message.message}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <a 
                  href={`mailto:${message.email}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition shadow-sm hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  <span>Balas via Email</span>
                </a>
              </div>
            </div>

          </div>
        ) : null}
      </main>
    </div>
  );
}