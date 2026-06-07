/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Loader2, GitBranchPlus, Code2, Link as LinkIcon, Building2, ImageIcon, GitBranchIcon } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    if (params.id) {
      fetchProjectDetail(token, params.id as string);
    }
  }, [params.id]);

  const fetchProjectDetail = async (token: string, id: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/admin/projects/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const result = await response.json();
      if (response.ok) {
        setProject(result.data);
      } else {
        router.push('/admin/projects');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin/projects" className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Detail Proyek</h1>
            </div>
          </div>
          <Link href={`/admin/projects/${project.id}/edit`} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition">
            Edit Proyek
          </Link>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-5xl">
          {/* Cover Image Area */}
          {project.image_url ? (
            <div className="w-full h-80 relative bg-gray-100">
              <Image src={project.image_url} alt={project.name} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
              <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
              <span>Tidak ada gambar thumbnail</span>
            </div>
          )}

          <div className="p-8 md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{project.name}</h2>
              <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg inline-flex">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">{project.education?.university || 'Proyek Pribadi / Independen'}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Kolom Kiri: Deskripsi */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">Deskripsi Lengkap</h3>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Kolom Kanan: Info Teknis */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center"><Code2 className="w-4 h-4 mr-2" /> Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((t: string, i: number) => (
                      <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 font-medium text-sm rounded-lg border border-blue-100">{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center"><GitBranchIcon className="w-4 h-4 mr-2" /> Repository & Links</h3>
                  <div className="space-y-3">
                    {project.github_urls?.map((link: any, i: number) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition group"
                      >
                        <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition"><LinkIcon className="w-4 h-4 text-gray-600" /></div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-sm font-bold text-gray-900">{link.label}</p>
                          <p className="text-xs text-blue-600 truncate">{link.url}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}