import { education } from '@/data/portfolio';
import { GraduationCap, Code } from 'lucide-react';

export default function Education() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b pb-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Education</h1>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{education.university}</h2>
            <p className="text-lg text-gray-600 mt-1">{education.degree}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm inline-block">
            {education.period}
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-4">
        <div className="flex items-center space-x-3 border-b pb-4">
          <Code className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Academic Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.projects.map((proj, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{proj.name}</h3>
              <p className="text-xs font-mono bg-gray-100 text-gray-600 inline-block px-2 py-1 rounded mt-2 mb-4">
                {proj.tech}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {proj.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}