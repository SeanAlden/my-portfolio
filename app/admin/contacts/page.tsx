/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, MailOpen, ArrowRight, Clock } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Contacts() {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchMessages(token);
  }, []);

  const fetchMessages = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/contacts`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const result = await response.json();
      if (response.ok) {
        // Asumsi data di-paginate (result.data.data), atau langsung array (result.data)
        // Sesuaikan dengan return dari ContactService Laravel Anda.
        const messagesData = Array.isArray(result.data) ? result.data : result.data?.data || [];
        setMessages(messagesData);
      }
    } catch (error) {
      console.error("Gagal mengambil data pesan", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper untuk format tanggal
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pesan Masuk</h1>
          <p className="text-gray-500 mt-1">Pantau dan kelola pesan dari pengunjung website Anda.</p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Memuat pesan...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Pengirim</th>
                  <th className="px-6 py-4 font-medium">Pesan (Cuplikan)</th>
                  <th className="px-6 py-4 font-medium">Waktu</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    className={`border-b border-gray-50 hover:bg-gray-50/50 transition ${!msg.is_read ? 'bg-blue-50/30' : ''}`}
                  >
                    <td className="px-6 py-4">
                      {!msg.is_read ? (
                        <div className="flex items-center space-x-2 text-blue-600 font-medium">
                          <Mail className="w-5 h-5" />
                          <span className="text-sm">Baru</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MailOpen className="w-5 h-5" />
                          <span className="text-sm">Dibaca</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className={`text-gray-900 ${!msg.is_read ? 'font-bold' : 'font-medium'}`}>{msg.name}</p>
                      <p className="text-sm text-gray-500">{msg.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className={`text-gray-700 line-clamp-1 max-w-xs ${!msg.is_read ? 'font-medium' : ''}`}>
                        {msg.message}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{formatDate(msg.created_at)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 flex justify-end">
                      <Link 
                        href={`/admin/contacts/${msg.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition inline-flex items-center space-x-1 font-medium text-sm"
                      >
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
                {messages.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      Belum ada pesan masuk.
                    </td>
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