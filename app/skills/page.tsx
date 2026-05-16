import { skills } from '@/data/portfolio';
import { Settings } from 'lucide-react';

export default function Skills() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center space-x-3 border-b pb-4">
        <Settings className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Skills & Expertise</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.split(', ').map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}