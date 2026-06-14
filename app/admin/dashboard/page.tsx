/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { LayoutDashboard } from 'lucide-react';
// import AdminSidebar from '@/components/AdminSidebar';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [adminName, setAdminName] = useState('');

//   // Proteksi rute
//   useEffect(() => {
//     const token = localStorage.getItem('admin_token');
//     const name = localStorage.getItem('admin_name');

//     if (!token) {
//       router.push('/admin/login');
//     } else {
//       setAdminName(name || 'Admin');
//     }
//   }, [router]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Memanggil Komponen Sidebar */}
//       <AdminSidebar />

//       {/* Area Konten Utama */}
//       <main className="flex-1 p-8">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Selamat datang, {adminName} 👋</h1>
//           <p className="text-gray-500 mt-1">Pilih menu di samping untuk mulai mengelola data portofolio Anda.</p>
//         </header>

//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[500px] flex items-center justify-center">
//           <div className="text-center text-gray-400">
//             <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
//             <p className="text-lg">Dashboard Utama</p>
//             <p className="text-sm">Ringkasan data akan tampil di sini nantinya.</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  MessageSquare, 
  Briefcase, 
  Code, 
  Zap, 
  Building, 
  ArrowRight, 
  Loader2,
  BellRing
} from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminDashboard() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk menyimpan ringkasan data
  const [stats, setStats] = useState({
    totalMessages: 0,
    unreadMessages: 0,
    totalProjects: 0,
    totalSkills: 0,
    totalExperiences: 0,
    totalOrganizations: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const name = localStorage.getItem('admin_name');
    
    if (!token) {
      router.push('/admin/login');
      return;
    } 
    
    setAdminName(name || 'Admin');
    fetchDashboardStats(token);
  }, [router]);

  const fetchDashboardStats = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      };

      // Fetch semua data secara paralel agar jauh lebih cepat
      const [msgRes, projRes, skillRes, expRes, orgRes] = await Promise.all([
        fetch(`${apiUrl}/api/admin/contacts`, { headers }),
        fetch(`${apiUrl}/api/admin/projects`, { headers }),
        fetch(`${apiUrl}/api/admin/skills`, { headers }),
        fetch(`${apiUrl}/api/admin/experiences`, { headers }),
        fetch(`${apiUrl}/api/admin/organizations`, { headers })
      ]);

      const [msgData, projData, skillData, expData, orgData] = await Promise.all([
        msgRes.json(), projRes.json(), skillRes.json(), expRes.json(), orgRes.json()
      ]);

      // Menghitung pesan yang belum dibaca (asumsi is_read bernilai boolean atau 0/1)
      const messages = msgData.data || [];
      const unreadCount = messages.filter((m: any) => !m.is_read).length;

      setStats({
        totalMessages: messages.length,
        unreadMessages: unreadCount,
        totalProjects: projData.data?.length || 0,
        totalSkills: skillData.data?.length || 0,
        totalExperiences: expData.data?.length || 0,
        totalOrganizations: orgData.data?.length || 0,
      });

    } catch (error) {
      console.error("Gagal mengambil data dashboard:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Konfigurasi kartu statistik untuk di-render berulang (DRY)
  const statCards = [
    { 
      title: 'Pesan Belum Dibaca', 
      value: stats.unreadMessages, 
      total: stats.totalMessages,
      totalLabel: 'Total Pesan',
      icon: BellRing, 
      color: 'text-orange-600', 
      bg: 'bg-orange-50',
      path: '/admin/contacts'
    },
    { 
      title: 'Total Proyek', 
      value: stats.totalProjects, 
      icon: Code, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      path: '/admin/projects'
    },
    { 
      title: 'Keahlian (Skills)', 
      value: stats.totalSkills, 
      icon: Zap, 
      color: 'text-yellow-600', 
      bg: 'bg-yellow-50',
      path: '/admin/skills'
    },
    { 
      title: 'Pengalaman Kerja', 
      value: stats.totalExperiences, 
      icon: Briefcase, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      path: '/admin/experiences'
    },
    { 
      title: 'Organisasi', 
      value: stats.totalOrganizations, 
      icon: Building, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      path: '/admin/organizations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Selamat datang, {adminName} 👋</h1>
          <p className="text-gray-500 mt-2">Berikut adalah ringkasan performa dan isi data portofolio Anda saat ini.</p>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-500 font-medium">Menghitung statistik portofolio...</p>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* GRID KARTU STATISTIK */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statCards.map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-4 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform`}>
                      <card.icon className="w-8 h-8" />
                    </div>
                    <Link href={card.path} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-1">
                      {card.value}
                    </h3>
                    <p className="text-gray-500 font-medium">{card.title}</p>
                    
                    {/* Tambahan info khusus untuk card Pesan */}
                    {card.total !== undefined && (
                      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                        <span className="text-gray-500">{card.totalLabel}</span>
                        <span className="font-bold text-gray-900">{card.total}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* PINTASAN CEPAT (QUICK ACTIONS) */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Pintasan Cepat</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/admin/projects/create" className="flex items-center p-4 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 rounded-2xl transition group">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:text-blue-700 mr-4">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-700">Tambah Proyek</span>
                </Link>
                
                <Link href="/admin/skills" className="flex items-center p-4 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 rounded-2xl transition group">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-yellow-600 group-hover:text-yellow-700 mr-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-700">Update Skill</span>
                </Link>

                <Link href="/admin/experiences" className="flex items-center p-4 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 rounded-2xl transition group">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 group-hover:text-emerald-700 mr-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-700">Tambah Pengalaman</span>
                </Link>

                <Link href="/admin/contacts" className="flex items-center p-4 bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-100 rounded-2xl transition group">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 group-hover:text-orange-700 mr-4">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-orange-700">Cek Kotak Masuk</span>
                </Link>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}