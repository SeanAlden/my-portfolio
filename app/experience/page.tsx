import { experiences } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center space-x-3 border-b pb-4">
        <Briefcase className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Work Experience</h1>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col mb-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <span className="text-sm font-medium text-blue-600">{exp.type}</span>
                <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}