// "use client";

// import { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { LogOut, LayoutDashboard, Briefcase, GraduationCap, Code, MessageSquare, Settings, ListTree, Zap, Building } from 'lucide-react';

// export default function AdminSidebar() {
//   const router = useRouter();
//   const pathname = usePathname(); // Untuk mengetahui halaman mana yang sedang aktif
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     const token = localStorage.getItem('admin_token');
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     try {
//       await fetch(`${apiUrl}/api/logout`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });
//     } catch (error) {
//       console.error("Error during logout", error);
//     } finally {
//       localStorage.removeItem('admin_token');
//       localStorage.removeItem('admin_name');
//       router.push('/admin/login');
//     }
//   };

//   // Daftar menu yang dilengkapi dengan path rute
//   const menuItems = [
//     { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
//     { name: 'Pesan Masuk', icon: MessageSquare, path: '/admin/contacts' },
//     { name: 'Kategori Skill', icon: ListTree, path: '/admin/skill-categories' },
//     { name: 'Skill', icon: Zap, path: '/admin/skills' },
//     { name: 'Pengalaman', icon: Briefcase, path: '/admin/experiences' },
//     { name: 'Edukasi', icon: GraduationCap, path: '/admin/educations' },
//     { name: 'Proyek', icon: Code, path: '/admin/projects' },
//     { name: 'Personal Info', icon: Settings, path: '/admin/personal-infos' },
//     { name: 'Organization', icon: Building, path: '/admin/organizations' },
//   ];

//   return (
//     <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex min-h-screen">
//       <div className="p-6 border-b border-gray-100">
//         <h2 className="text-xl font-bold text-gray-900">Portfolio Admin</h2>
//       </div>

//       <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
//         {menuItems.map((item, index) => {
//           const isActive = pathname.startsWith(item.path);
//           return (
//             <Link
//               href={item.path}
//               key={index}
//               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors font-medium ${
//                 isActive
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
//               }`}
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="p-4 border-t border-gray-100">
//         <button
//           onClick={handleLogout}
//           disabled={isLoggingOut}
//           className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium disabled:opacity-50"
//         >
//           <LogOut className="w-5 h-5" />
//           <span>{isLoggingOut ? 'Keluar...' : 'Logout'}</span>
//         </button>
//       </div>
//     </aside>
//   );
// }

// "use client";

// import { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { 
//   LogOut, 
//   LayoutDashboard, 
//   Briefcase, 
//   GraduationCap, 
//   Code, 
//   MessageSquare, 
//   Settings, 
//   ListTree, 
//   Zap, 
//   Building,
//   Loader2
// } from 'lucide-react';

// export default function AdminSidebar() {
//   const router = useRouter();
//   const pathname = usePathname(); // Untuk mengetahui halaman mana yang sedang aktif
  
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State untuk modal logout

//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     const token = localStorage.getItem('admin_token');
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     try {
//       await fetch(`${apiUrl}/api/logout`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });
//     } catch (error) {
//       console.error("Error during logout", error);
//     } finally {
//       localStorage.removeItem('admin_token');
//       localStorage.removeItem('admin_name');
//       router.push('/admin/login');
//     }
//   };

//   // Daftar menu yang dilengkapi dengan path rute
//   const menuItems = [
//     { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
//     { name: 'Pesan Masuk', icon: MessageSquare, path: '/admin/contacts' },
//     { name: 'Kategori Skill', icon: ListTree, path: '/admin/skill-categories' },
//     { name: 'Skill', icon: Zap, path: '/admin/skills' },
//     { name: 'Pengalaman', icon: Briefcase, path: '/admin/experiences' },
//     { name: 'Edukasi', icon: GraduationCap, path: '/admin/educations' },
//     { name: 'Proyek', icon: Code, path: '/admin/projects' },
//     { name: 'Personal Info', icon: Settings, path: '/admin/personal-infos' },
//     { name: 'Organisasi', icon: Building, path: '/admin/organizations' },
//   ];

//   return (
//     <>
//       <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex min-h-screen">
        
//         {/* BAGIAN HEADER SIDEBAR DENGAN LOGO */}
//         <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
//           <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-sm bg-gray-900 flex items-center justify-center">
//             {/* Menggunakan icon.png yang sama dengan favicon Anda */}
//             <Image 
//               src="icons/sa.png" 
//               alt="Logo" 
//               fill  
//               className="object-contain p-1"
//               sizes="32px"
//             />
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 truncate">Portfolio Admin</h2>
//         </div>
        
//         <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
//           {menuItems.map((item, index) => {
//             const isActive = pathname.startsWith(item.path);
//             return (
//               <Link 
//                 href={item.path}
//                 key={index}
//                 className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors font-medium ${
//                   isActive 
//                     ? 'bg-blue-50 text-blue-600' 
//                     : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
//                 }`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.name}</span>
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t border-gray-100">
//           <button 
//             onClick={() => setIsLogoutModalOpen(true)} // Buka modal, jangan langsung logout
//             className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
//           >
//             <LogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </aside>

//       {/* MODAL KONFIRMASI LOGOUT */}
//       {isLogoutModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//           <div className="bg-white w-full max-w-sm p-6 rounded-3xl shadow-xl text-center">
//             <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <LogOut className="w-8 h-8 pr-1" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Konfirmasi Keluar</h3>
//             <p className="text-gray-500 mb-6">Apakah Anda yakin ingin keluar dari sesi admin?</p>
//             <div className="flex space-x-3">
//               <button 
//                 onClick={() => setIsLogoutModalOpen(false)} 
//                 disabled={isLoggingOut}
//                 className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition disabled:opacity-50"
//               >
//                 Batal
//               </button>
//               <button 
//                 onClick={handleLogout} 
//                 disabled={isLoggingOut} 
//                 className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition flex items-center justify-center disabled:opacity-70"
//               >
//                 {isLoggingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Ya, Keluar'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LogOut, 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  Code, 
  MessageSquare, 
  Settings, 
  ListTree, 
  Zap, 
  Building,
  Loader2
} from 'lucide-react';

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname(); 
  
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); 

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const token = localStorage.getItem('admin_token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      await fetch(`${apiUrl}/api/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("Error during logout", error);
    } finally {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_name');
      router.push('/admin/login');
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Pesan Masuk', icon: MessageSquare, path: '/admin/contacts' },
    { name: 'Kategori Skill', icon: ListTree, path: '/admin/skill-categories' },
    { name: 'Skill', icon: Zap, path: '/admin/skills' },
    { name: 'Pengalaman', icon: Briefcase, path: '/admin/experiences' },
    { name: 'Edukasi', icon: GraduationCap, path: '/admin/educations' },
    { name: 'Proyek', icon: Code, path: '/admin/projects' },
    { name: 'Personal Info', icon: Settings, path: '/admin/personal-infos' },
    { name: 'Organisasi', icon: Building, path: '/admin/organizations' },
  ];

  return (
    <>
      {/* PERUBAHAN ADA DI BARIS INI: min-h-screen diubah menjadi h-screen sticky top-0 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex h-screen sticky top-0">
        
        <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-sm bg-gray-900 flex items-center justify-center">
            <Image 
              src="/icons/sa.png" 
              alt="Logo" 
              fill  
              className="object-contain p-1"
              sizes="32px"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 truncate">Portfolio Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link 
                href={item.path}
                key={index}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => setIsLogoutModalOpen(true)}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MODAL KONFIRMASI LOGOUT */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm p-6 rounded-3xl shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-8 h-8 pr-1" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Konfirmasi Keluar</h3>
            <p className="text-gray-500 mb-6">Apakah Anda yakin ingin keluar dari sesi admin?</p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setIsLogoutModalOpen(false)} 
                disabled={isLoggingOut}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition disabled:opacity-50"
              >
                Batal
              </button>
              <button 
                onClick={handleLogout} 
                disabled={isLoggingOut} 
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition flex items-center justify-center disabled:opacity-70"
              >
                {isLoggingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Ya, Keluar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}