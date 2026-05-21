import { personalInfo } from '@/data/portfolio';
import { Mail, Phone, MapPin, Link, GitBranch, UserCircle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Profile() {
  const contactItems = [
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Link, label: "LinkedIn", value: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
    { icon: GitBranch, label: "GitHub", value: personalInfo.github, href: `https://${personalInfo.github}` },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-12">
      <FadeIn direction="down">
        <div className="text-center space-y-6">
          <div className="inline-flex justify-center items-center w-24 h-24 bg-blue-50 rounded-full text-blue-600 mb-4">
            <UserCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Contact Profile</h1>
          <p className="text-lg text-gray-600">Mari terhubung dan diskusikan peluang kolaborasi.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const isFullWidth = index === contactItems.length - 1 && contactItems.length % 2 !== 0; // Buat item terakhir penuh jika ganjil
          
          return (
            <FadeIn 
              key={index} 
              delay={index * 0.15} 
              direction="up" 
              className={isFullWidth ? "md:col-span-2" : ""}
            >
              {item.href ? (
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="text-base font-semibold text-gray-900 mt-1">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="text-base font-semibold text-gray-900 mt-1">{item.value}</p>
                  </div>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}