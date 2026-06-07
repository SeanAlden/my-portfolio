// import { personalInfo } from '@/data/portfolio';
// import { Mail, Phone, MapPin, Link, GitBranch, UserCircle } from 'lucide-react';
// import FadeIn from '@/components/FadeIn';

// export default function Profile() {
//   const contactItems = [
//     { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
//     { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
//     { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
//     { icon: Link, label: "LinkedIn", value: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
//     { icon: GitBranch, label: "GitHub", value: personalInfo.github, href: `https://${personalInfo.github}` },
//   ];

//   return (
//     <div className="max-w-3xl mx-auto py-12 space-y-12">
//       <FadeIn direction="down">
//         <div className="text-center space-y-6">
//           <div className="inline-flex justify-center items-center w-24 h-24 bg-blue-50 rounded-full text-blue-600 mb-4">
//             <UserCircle className="w-12 h-12" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900">Contact Profile</h1>
//           <p className="text-lg text-gray-600">Mari terhubung dan diskusikan peluang kolaborasi.</p>
//         </div>
//       </FadeIn>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {contactItems.map((item, index) => {
//           const Icon = item.icon;
//           const isFullWidth = index === contactItems.length - 1 && contactItems.length % 2 !== 0; // Buat item terakhir penuh jika ganjil

//           return (
//             <FadeIn
//               key={index}
//               delay={index * 0.15}
//               direction="up"
//               className={isFullWidth ? "md:col-span-2" : ""}
//             >
//               {item.href ? (
//                 <a
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-300 transition-all group"
//                 >
//                   <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
//                     <Icon className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">{item.label}</p>
//                     <p className="text-base font-semibold text-gray-900 mt-1">{item.value}</p>
//                   </div>
//                 </a>
//               ) : (
//                 <div className="flex items-center space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//                   <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
//                     <Icon className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">{item.label}</p>
//                     <p className="text-base font-semibold text-gray-900 mt-1">{item.value}</p>
//                   </div>
//                 </div>
//               )}
//             </FadeIn>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi untuk menangani saat form dikirim
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulasi proses pengiriman (misal: memanggil API/Formspree/EmailJS)
  //   // Di sini kita gunakan timeout 1.5 detik sebagai simulasi
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);

  //     // Mengembalikan status tombol setelah 3 detik
  //     setTimeout(() => setIsSubmitted(false), 3000);

  //     // Reset form
  //     (e.target as HTMLFormElement).reset();
  //   }, 1500);
  // };

  // Fungsi untuk menangani saat form dikirim
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Ambil data dari form
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      // Pastikan Anda sudah membuat variabel NEXT_PUBLIC_API_URL di file .env.local Next.js Anda
      // Contoh isi .env.local: NEXT_PUBLIC_API_URL=https://portfolio-api-sean.vercel.app
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Jika ada error validasi dari Laravel (422) atau error server (500)
        throw new Error('Gagal mengirim pesan');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Mengembalikan status tombol setelah 3 detik
      setTimeout(() => setIsSubmitted(false), 3000);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Terjadi kesalahan saat mengirim pesan. Pastikan server aktif.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-12">
      
      {/* HEADER */}
      <FadeIn direction="down">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex justify-center items-center w-20 h-20 bg-blue-50 rounded-full text-blue-600 mb-2">
            <MessageSquare className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Contact Me</h1>
          <p className="text-lg text-gray-600">
            Punya pertanyaan atau tawaran kolaborasi? Jangan ragu untuk mengirim pesan kepada saya melalui formulir di bawah ini.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        
        {/* BAGIAN KIRI: INFO KONTAK */}
        <FadeIn direction="right" className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-base font-semibold text-gray-900 mt-1">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-base font-semibold text-gray-900 mt-1 hover:text-blue-600 transition-colors inline-block">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-base font-semibold text-gray-900 mt-1 hover:text-blue-600 transition-colors break-all inline-block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* BAGIAN KANAN: FORMULIR */}
        <FadeIn direction="left" className="lg:col-span-3">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nama Lengkap */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    placeholder="nama@email.com"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                {/* Telepon (Opsional) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Telepon <span className="text-gray-400 font-normal">(Opsional)</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Contoh: 08123456789"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Pesan */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  placeholder="Tuliskan detail tawaran, pertanyaan, atau pesan Anda di sini..."
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Mengirim...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Pesan Terkirim!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}