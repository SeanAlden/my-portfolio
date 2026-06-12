/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// import { personalInfo } from '@/data/portfolio';
// import { Mail, Phone, MapPin, Link, GitBranch } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
//       <header className="space-y-4">
//         <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
//           {personalInfo.name}
//         </h1>
//         <h2 className="text-2xl font-medium text-blue-600">Full Stack Developer</h2>
//       </header>

//       <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
//         <h3 className="text-lg font-semibold border-b pb-2 mb-4">Professional Summary</h3>
//         <p className="text-gray-600 leading-relaxed text-lg">
//           {personalInfo.summary}
//         </p>
//       </section>

//       <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="flex items-center space-x-3 text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <MapPin className="text-blue-500 w-5 h-5" />
//           <span>{personalInfo.location}</span>
//         </div>
//         <div className="flex items-center space-x-3 text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <Phone className="text-blue-500 w-5 h-5" />
//           <span>{personalInfo.phone}</span>
//         </div>
//         <div className="flex items-center space-x-3 text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <Mail className="text-blue-500 w-5 h-5" />
//           <span>{personalInfo.email}</span>
//         </div>
//         <div className="flex items-center space-x-3 text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
//           <Link className="text-blue-500 w-5 h-5" />
//           <span>{personalInfo.linkedin}</span>
//         </div>
//         <div className="flex items-center space-x-3 text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
//           <GitBranch className="text-blue-500 w-5 h-5" />
//           <span>{personalInfo.github}</span>
//         </div>
//       </section>
//     </div>
//   );
// }

// import { personalInfo, experiences, education, skills } from '@/data/portfolio';
// import { Briefcase, GraduationCap, Code, Settings } from 'lucide-react';
// import FadeIn from '@/components/FadeIn';

// export default function Home() {
//   return (
//     <div className="space-y-24 pb-20 overflow-hidden">

//       {/* HEADER & SUMMARY */}
//       <section className="space-y-10 mt-10">
//         <FadeIn direction="up">
//           <header className="space-y-4 text-center md:text-left">
//             <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
//               {personalInfo.name}
//             </h1>
//             <h2 className="text-2xl font-medium text-blue-600">Full Stack Developer</h2>
//           </header>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-xl font-bold border-b pb-4 mb-6 text-gray-900">Professional Summary</h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {personalInfo.summary}
//             </p>
//           </div>
//         </FadeIn>
//       </section>

//       {/* WORK EXPERIENCE */}
//       <section className="space-y-10">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
//           </div>
//         </FadeIn>

//         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
//           {experiences.map((exp, index) => (
//             <FadeIn 
//               key={index} 
//               delay={index * 0.15}
//               direction={index % 2 === 0 ? "right" : "left"} // Bergantian dari kiri/kanan
//               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
//             >
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//                 <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex flex-col mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                   <span className="text-sm font-semibold text-blue-600 mt-1">{exp.type}</span>
//                   <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
//                 </div>
//                 <ul className="space-y-3">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                       <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* EDUCATION & PROJECTS */}
//       <section className="space-y-12">
//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <GraduationCap className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Education</h2>
//             </div>
//           </FadeIn>

//           <FadeIn direction="up">
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-100 transition-colors">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{education.university}</h3>
//                 <div className="flex items-center gap-3 mt-2">
//                   <p className="text-lg text-gray-600">{education.degree}</p>
//                   <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-semibold border border-gray-200">
//                     IPK: {education.gpa}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-semibold text-sm inline-block">
//                 {education.period}
//               </div>
//             </div>
//           </FadeIn>
//         </div>

//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <Code className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Academic Projects</h2>
//             </div>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {education.projects.map((proj, idx) => (
//               <FadeIn key={idx} delay={idx * 0.15} direction="up" className="h-full">
//                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group cursor-pointer">
//                   <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{proj.name}</h3>
//                   <div className="mt-3 mb-4">
//                     <span className="text-xs font-mono bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg font-medium">
//                       {proj.tech}
//                     </span>
//                   </div>
//                   <p className="text-sm text-gray-600 leading-relaxed flex-grow">
//                     {proj.desc}
//                   </p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section className="space-y-8">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Settings className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((skillGroup, index) => (
//             <FadeIn key={index} delay={index * 0.1} direction="up">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors h-full">
//                 <h3 className="text-lg font-bold text-gray-900 mb-5">{skillGroup.category}</h3>
//                 <div className="flex flex-wrap gap-2.5">
//                   {skillGroup.items.split(', ').map((skill, i) => (
//                     <span 
//                       key={i} 
//                       className="px-4 py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm font-medium rounded-xl border border-gray-200 hover:border-blue-200 transition-colors cursor-default"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// import Image from 'next/image';
// import { personalInfo, experiences, education, skills } from '@/data/portfolio';
// import { Briefcase, GraduationCap, Code, Settings, GitBranch } from 'lucide-react';
// import FadeIn from '@/components/FadeIn';

// export default function Home() {
//   return (
//     <div className="space-y-24 pb-20 overflow-hidden">

//       {/* HEADER, PROFILE PHOTO & SUMMARY */}
//       <section className="space-y-10 mt-10">
//         <FadeIn direction="up">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             {/* Foto Profil */}
//             <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
//               <Image 
//                 src={personalInfo.photo || '/default-project.png'} 
//                 alt="Profile Photo" 
//                 fill 
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Teks Header */}
//             <header className="space-y-4 text-center md:text-left flex-grow mt-4 md:mt-6">
//               <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
//                 {personalInfo.name}
//               </h1>
//               <h2 className="text-2xl font-medium text-blue-600">IT Software Engineer</h2>
//             </header>
//           </div>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-xl font-bold border-b pb-4 mb-6 text-gray-900">Professional Summary</h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {personalInfo.summary}
//             </p>
//           </div>
//         </FadeIn>
//       </section>

//       {/* WORK EXPERIENCE */}
//       <section className="space-y-10">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
//           </div>
//         </FadeIn>

//         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
//           {experiences.map((exp, index) => (
//             <FadeIn 
//               key={index} 
//               delay={index * 0.15}
//               direction={index % 2 === 0 ? "right" : "left"}
//               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
//             >
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//                 <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex flex-col mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                   <span className="text-sm font-semibold text-blue-600 mt-1">{exp.type}</span>
//                   <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
//                 </div>
//                 <ul className="space-y-3">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                       <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* EDUCATION & PROJECTS */}
//       <section className="space-y-12">
//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <GraduationCap className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Education</h2>
//             </div>
//           </FadeIn>

//           <FadeIn direction="up">
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-100 transition-colors">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{education.university}</h3>
//                 <div className="flex items-center gap-3 mt-2">
//                   <p className="text-lg text-gray-600">{education.degree}</p>
//                   <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-semibold border border-gray-200">
//                     IPK: {education.gpa}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-semibold text-sm inline-block">
//                 {education.period}
//               </div>
//             </div>
//           </FadeIn>
//         </div>

//         {/* PROJECTS WITH THUMBNAIL */}
//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <Code className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Academic Projects</h2>
//             </div>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {education.projects.map((proj, idx) => (
//               <FadeIn key={idx} delay={idx * 0.15} direction="up" className="h-full">
//                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">

//                   {/* Thumbnail Gambar */}
//                   <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
//                     <Image 
//                       src={proj.image || '/default-project.png'} 
//                       alt={proj.name} 
//                       fill 
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>

//                   <div className="p-6 flex flex-col flex-grow">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">{proj.name}</h3>
//                     <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
//                       {proj.desc}
//                     </p>

//                     {/* List Skill - Maksimal 4 per baris menggunakan Grid */}
//                     {/* <div className="grid grid-cols-4 gap-2 mb-6">
//                       {proj.tech.map((techItem, techIdx) => (
//                         <span 
//                           key={techIdx} 
//                           className="text-[10px] md:text-xs font-semibold bg-blue-50 text-blue-700 py-1.5 px-2 rounded-full text-center truncate border border-blue-100"
//                           title={techItem} // Menampilkan teks penuh saat di-hover
//                         >
//                           {techItem}
//                         </span>
//                       ))}
//                     </div> */}

//                     {/* List Skill - Flex Wrap agar teks tidak terpotong dan fleksibel */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {proj.tech.map((techItem, techIdx) => (
//                         <span 
//                           key={techIdx} 
//                           className="text-[10px] md:text-xs font-semibold bg-blue-50 text-blue-700 py-1.5 px-3 rounded-full text-center border border-blue-100"
//                         >
//                           {techItem}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Tombol GitHub */}
//                     <a 
//                       href={proj.githubUrl} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center space-x-2 w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-colors"
//                     >
//                       <GitBranch className="w-4 h-4" />
//                       <span>Lihat Repositori</span>
//                     </a>
//                   </div>

//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS DENGAN PERSENTASE */}
//       <section className="space-y-8">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Settings className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((skillGroup, index) => (
//             <FadeIn key={index} delay={index * 0.1} direction="up">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors h-full">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>

//                 <div className="space-y-5">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="space-y-2">
//                       <div className="flex justify-between items-center text-sm font-medium">
//                         <span className="text-gray-700">{skill.name}</span>
//                         <span className="text-gray-500">{skill.percentage}%</span>
//                       </div>
//                       <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
//                         <div 
//                           className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
//                           style={{ width: `${skill.percentage}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// import Image from 'next/image';
// import { personalInfo, experiences, education, skills } from '@/data/portfolio';
// import { Briefcase, GraduationCap, Code, Settings, GitBranch } from 'lucide-react';
// import FadeIn from '@/components/FadeIn';

// export default function Home() {
//   return (
//     <div className="space-y-24 pb-20 overflow-hidden">

//       {/* HEADER, PROFILE PHOTO & SUMMARY */}
//       {/* Tambahkan id="summary" untuk target navigasi */}
//       <section id="summary" className="space-y-10 mt-10 scroll-mt-24">
//         <FadeIn direction="up">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             {/* Foto Profil */}
//             <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
//               <Image 
//                 src={personalInfo.photo || '/default-project.png'} 
//                 alt="Profile Photo" 
//                 fill 
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Teks Header */}
//             <header className="space-y-4 text-center md:text-left flex-grow mt-4 md:mt-6">
//               <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
//                 {personalInfo.name}
//               </h1>
//               <h2 className="text-2xl font-medium text-blue-600">IT Software Engineer</h2>
//             </header>
//           </div>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-xl font-bold border-b pb-4 mb-6 text-gray-900">Professional Summary</h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {personalInfo.summary}
//             </p>
//           </div>
//         </FadeIn>
//       </section>

//       {/* WORK EXPERIENCE */}
//       {/* Tambahkan id="experience" */}
//       <section id="experience" className="space-y-10 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
//           </div>
//         </FadeIn>

//         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
//           {experiences.map((exp, index) => (
//             <FadeIn 
//               key={index} 
//               delay={index * 0.15}
//               direction={index % 2 === 0 ? "right" : "left"}
//               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
//             >
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//                 <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex flex-col mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                   <span className="text-sm font-semibold text-blue-600 mt-1">{exp.type}</span>
//                   <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
//                 </div>
//                 <ul className="space-y-3">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                       <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* EDUCATION */}
//       {/* Tambahkan id="education" */}
//       <section id="education" className="space-y-12 scroll-mt-24">
//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <GraduationCap className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Education</h2>
//             </div>
//           </FadeIn>

//           <FadeIn direction="up">
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-100 transition-colors">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{education.university}</h3>
//                 <div className="flex items-center gap-3 mt-2">
//                   <p className="text-lg text-gray-600">{education.degree}</p>
//                   <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-semibold border border-gray-200">
//                     IPK: {education.gpa}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-semibold text-sm inline-block">
//                 {education.period}
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* PROJECTS WITH THUMBNAIL */}
//       {/* Tambahkan id="projects" */}
//       <section id="projects" className="space-y-8 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Code className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Academic Projects</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {education.projects.map((proj, idx) => (
//             <FadeIn key={idx} delay={idx * 0.15} direction="up" className="h-full">
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">

//                 {/* Thumbnail Gambar */}
//                 <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
//                   <Image 
//                     src={proj.image || '/default-project.png'} 
//                     alt={proj.name} 
//                     fill 
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{proj.name}</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
//                     {proj.desc}
//                   </p>

//                   {/* List Skill */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {proj.tech.map((techItem, techIdx) => (
//                       <span 
//                         key={techIdx} 
//                         className="text-[10px] md:text-xs font-semibold bg-blue-50 text-blue-700 py-1.5 px-3 rounded-full text-center border border-blue-100"
//                       >
//                         {techItem}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Tombol GitHub Dinamis (Multi-link) */}
//                   <div className="flex flex-col gap-2 mt-auto">
//                     {proj.githubUrls.map((link, linkIdx) => (
//                       <a 
//                         key={linkIdx}
//                         href={link.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center space-x-2 w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
//                       >
//                         <GitBranch className="w-4 h-4" />
//                         <span>{link.label}</span>
//                       </a>
//                     ))}
//                   </div>

//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* SKILLS DENGAN PERSENTASE */}
//       {/* Tambahkan id="skills" */}
//       <section id="skills" className="space-y-8 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Settings className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((skillGroup, index) => (
//             <FadeIn key={index} delay={index * 0.1} direction="up">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors h-full">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>

//                 <div className="space-y-5">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="space-y-2">
//                       <div className="flex justify-between items-center text-sm font-medium">
//                         <span className="text-gray-700">{skill.name}</span>
//                         <span className="text-gray-500">{skill.percentage}%</span>
//                       </div>
//                       <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
//                         <div 
//                           className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
//                           style={{ width: `${skill.percentage}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// import Image from 'next/image';
// import { personalInfo, experiences, education, skills } from '@/data/portfolio';
// import { Briefcase, GraduationCap, Code, Settings, GitBranch, Users } from 'lucide-react';
// import FadeIn from '@/components/FadeIn';

// export default function Home() {
//   return (
//     <div className="space-y-24 pb-20 overflow-hidden">

//       {/* HEADER, PROFILE PHOTO & SUMMARY */}
//       <section id="summary" className="space-y-10 mt-10 scroll-mt-24">
//         <FadeIn direction="up">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
//               <Image 
//                 src={personalInfo.photo || '/default-project.png'} 
//                 alt="Profile Photo" 
//                 fill 
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             <header className="space-y-4 text-center md:text-left flex-grow mt-4 md:mt-6">
//               <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-400">
//                 {personalInfo.name}
//               </h1>
//               <h2 className="text-2xl font-medium text-blue-600">IT Software Engineer</h2>
//             </header>
//           </div>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-xl font-bold border-b pb-4 mb-6 text-gray-900">Professional Summary</h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {personalInfo.summary}
//             </p>
//           </div>
//         </FadeIn>
//       </section>

//       {/* WORK EXPERIENCE */}
//       <section id="experience" className="space-y-10 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-400">Work Experience</h2>
//           </div>
//         </FadeIn>

//         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
//           {experiences.map((exp, index) => (
//             <FadeIn 
//               key={index} 
//               delay={index * 0.15}
//               direction={index % 2 === 0 ? "right" : "left"}
//               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
//             >
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//                 <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex flex-col mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                   <span className="text-sm font-semibold text-blue-600 mt-1">{exp.type}</span>
//                   <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
//                 </div>
//                 <ul className="space-y-3">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                       <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* EDUCATION & ORGANIZATIONS */}
//       <section id="education" className="space-y-12 scroll-mt-24">
//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <GraduationCap className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-400">Education & Organizations</h2>
//             </div>
//           </FadeIn>

//           <FadeIn direction="up">
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-100 transition-colors">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{education.university}</h3>
//                 <div className="flex items-center gap-3 mt-2">
//                   <p className="text-lg text-gray-600">{education.degree}</p>
//                   <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-semibold border border-gray-200">
//                     IPK: {education.gpa}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-semibold text-sm inline-block">
//                 {education.period}
//               </div>
//             </div>
//           </FadeIn>

//           {/* ORGANISASI & KEPANITIAAN */}
//           <div className="pt-6">
//             <FadeIn direction="up">
//               <h3 className="text-xl font-bold text-gray-400 mb-6 flex items-center gap-3">
//                 <Users className="w-6 h-6 text-blue-600" />
//                 Campus Organizations & Committee
//               </h3>
//             </FadeIn>
//             <div className="space-y-6">
//               {education.organizations.map((org, idx) => (
//                 <FadeIn key={idx} delay={idx * 0.15} direction="up">
//                   <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
//                     <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
//                       <div>
//                         <h4 className="text-lg font-bold text-gray-900">{org.name}</h4>
//                         <p className="text-sm font-semibold text-blue-600 mt-1">{org.role}</p>
//                       </div>
//                       <div className="shrink-0 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 inline-flex items-center justify-center">
//                         {org.period}
//                       </div>
//                     </div>
//                     <ul className="space-y-3">
//                       {org.points.map((point, i) => (
//                         <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                           <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* PROJECTS WITH THUMBNAIL */}
//       <section id="projects" className="space-y-8 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Code className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-400">Academic Projects</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {education.projects.map((proj, idx) => (
//             <FadeIn key={idx} delay={idx * 0.15} direction="up" className="h-full">
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">

//                 <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
//                   <Image 
//                     src={proj.image || '/default-project.png'} 
//                     alt={proj.name} 
//                     fill 
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{proj.name}</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
//                     {proj.desc}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {proj.tech.map((techItem, techIdx) => (
//                       <span 
//                         key={techIdx} 
//                         className="text-[10px] md:text-xs font-semibold bg-blue-50 text-blue-700 py-1.5 px-3 rounded-full text-center border border-blue-100"
//                       >
//                         {techItem}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex flex-col gap-2 mt-auto">
//                     {proj.githubUrls.map((link, linkIdx) => (
//                       <a 
//                         key={linkIdx}
//                         href={link.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center space-x-2 w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
//                       >
//                         <GitBranch className="w-4 h-4" />
//                         <span>{link.label}</span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* SKILLS DENGAN PERSENTASE */}
//       <section id="skills" className="space-y-8 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Settings className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-400">Skills & Expertise</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((skillGroup, index) => (
//             <FadeIn key={index} delay={index * 0.1} direction="up">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors h-full">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>

//                 <div className="space-y-5">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="space-y-2">
//                       <div className="flex justify-between items-center text-sm font-medium">
//                         <span className="text-gray-700">{skill.name}</span>
//                         <span className="text-gray-500">{skill.percentage}%</span>
//                       </div>
//                       <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
//                         <div 
//                           className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
//                           style={{ width: `${skill.percentage}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// import Image from 'next/image';
// import { personalInfo, experiences, education, skills } from '@/data/portfolio';
// import { Briefcase, GraduationCap, Code, Settings, GitBranch, Users, Layers, TerminalSquare } from 'lucide-react';
// import FadeIn from '@/components/FadeIn';

// export default function Home() {
//   // 1. Logika untuk menghitung statistik secara otomatis dari data
//   const totalExperience = experiences.length;
//   const totalProjects = education.projects.length;
//   const totalTech = skills.reduce((total, category) => total + category.items.length, 0);

//   return (
//     <div className="space-y-24 pb-20 overflow-hidden">
      
//       {/* HEADER, PROFILE PHOTO & SUMMARY */}
//       <section id="summary" className="space-y-10 mt-10 scroll-mt-24">
//         <FadeIn direction="up">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
//               <Image 
//                 src={personalInfo.photo || '/default-project.png'} 
//                 alt="Profile Photo" 
//                 fill 
//                 className="object-cover"
//                 priority
//               />
//             </div>
            
//             <header className="space-y-4 text-center md:text-left flex-grow mt-4 md:mt-6">
//               <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
//                 {personalInfo.name}
//               </h1>
//               <h2 className="text-2xl font-medium text-blue-600">IT Software Engineer</h2>
//             </header>
//           </div>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-xl font-bold border-b pb-4 mb-6 text-gray-900">Professional Summary</h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {personalInfo.summary}
//             </p>
//           </div>
//         </FadeIn>

//         {/* KARTU STATISTIK (STAT CARDS) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
//           {/* Card 1: Pengalaman */}
//           <FadeIn delay={0.3} direction="up">
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-5 hover:border-blue-200 transition-colors group">
//               <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
//                 <Briefcase className="w-8 h-8" />
//               </div>
//               <div>
//                 <p className="text-3xl font-extrabold text-gray-900">{totalExperience}</p>
//                 <p className="text-sm font-semibold text-gray-500 mt-1">Pengalaman Profesional</p>
//               </div>
//             </div>
//           </FadeIn>

//           {/* Card 2: Teknologi */}
//           <FadeIn delay={0.4} direction="up">
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-5 hover:border-blue-200 transition-colors group">
//               <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
//                 <TerminalSquare className="w-8 h-8" />
//               </div>
//               <div>
//                 <p className="text-3xl font-extrabold text-gray-900">{totalTech}+</p>
//                 <p className="text-sm font-semibold text-gray-500 mt-1">Teknologi Dikuasai</p>
//               </div>
//             </div>
//           </FadeIn>

//           {/* Card 3: Proyek */}
//           <FadeIn delay={0.5} direction="up">
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-5 hover:border-blue-200 transition-colors group">
//               <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
//                 <Layers className="w-8 h-8" />
//               </div>
//               <div>
//                 <p className="text-3xl font-extrabold text-gray-900">{totalProjects}</p>
//                 <p className="text-sm font-semibold text-gray-500 mt-1">Proyek Diselesaikan</p>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* WORK EXPERIENCE */}
//       <section id="experience" className="space-y-10 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
//           </div>
//         </FadeIn>

//         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
//           {experiences.map((exp, index) => (
//             <FadeIn 
//               key={index} 
//               delay={index * 0.15}
//               direction={index % 2 === 0 ? "right" : "left"}
//               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
//             >
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//                 <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex flex-col mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                   <span className="text-sm font-semibold text-blue-600 mt-1">{exp.type}</span>
//                   <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
//                 </div>
//                 <ul className="space-y-3">
//                   {exp.points.map((point, i) => (
//                     <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                       <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* EDUCATION & ORGANIZATIONS */}
//       <section id="education" className="space-y-12 scroll-mt-24">
//         <div className="space-y-8">
//           <FadeIn direction="left">
//             <div className="flex items-center space-x-4 border-b pb-4">
//               <div className="p-3 bg-blue-50 rounded-xl">
//                 <GraduationCap className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Education & Organizations</h2>
//             </div>
//           </FadeIn>
          
//           <FadeIn direction="up">
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-100 transition-colors">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{education.university}</h3>
//                 <div className="flex items-center gap-3 mt-2">
//                   <p className="text-lg text-gray-600">{education.degree}</p>
//                   <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-semibold border border-gray-200">
//                     IPK: {education.gpa}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-semibold text-sm inline-block">
//                 {education.period}
//               </div>
//             </div>
//           </FadeIn>

//           {/* ORGANISASI & KEPANITIAAN */}
//           <div className="pt-6">
//             <FadeIn direction="up">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                 <Users className="w-6 h-6 text-blue-600" />
//                 Campus Organizations & Committee
//               </h3>
//             </FadeIn>
//             <div className="space-y-6">
//               {education.organizations.map((org, idx) => (
//                 <FadeIn key={idx} delay={idx * 0.15} direction="up">
//                   <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
//                     <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
//                       <div>
//                         <h4 className="text-lg font-bold text-gray-900">{org.name}</h4>
//                         <p className="text-sm font-semibold text-blue-600 mt-1">{org.role}</p>
//                       </div>
//                       <div className="shrink-0 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 inline-flex items-center justify-center">
//                         {org.period}
//                       </div>
//                     </div>
//                     <ul className="space-y-3">
//                       {org.points.map((point, i) => (
//                         <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
//                           <span className="text-blue-400 mr-3 mt-0.5">•</span>
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* PROJECTS WITH THUMBNAIL */}
//       <section id="projects" className="space-y-8 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Code className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Academic Projects</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {education.projects.map((proj, idx) => (
//             <FadeIn key={idx} delay={idx * 0.15} direction="up" className="h-full">
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">
                
//                 <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
//                   <Image 
//                     src={proj.image || '/default-project.png'} 
//                     alt={proj.name} 
//                     fill 
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{proj.name}</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
//                     {proj.desc}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {proj.tech.map((techItem, techIdx) => (
//                       <span 
//                         key={techIdx} 
//                         className="text-[10px] md:text-xs font-semibold bg-blue-50 text-blue-700 py-1.5 px-3 rounded-full text-center border border-blue-100"
//                       >
//                         {techItem}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex flex-col gap-2 mt-auto">
//                     {proj.githubUrls.map((link, linkIdx) => (
//                       <a 
//                         key={linkIdx}
//                         href={link.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center space-x-2 w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
//                       >
//                         <GitBranch className="w-4 h-4" />
//                         <span>{link.label}</span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* SKILLS DENGAN PERSENTASE */}
//       <section id="skills" className="space-y-8 scroll-mt-24">
//         <FadeIn direction="left">
//           <div className="flex items-center space-x-4 border-b pb-4">
//             <div className="p-3 bg-blue-50 rounded-xl">
//               <Settings className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((skillGroup, index) => (
//             <FadeIn key={index} delay={index * 0.1} direction="up">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors h-full">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
                
//                 <div className="space-y-5">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="space-y-2">
//                       <div className="flex justify-between items-center text-sm font-medium">
//                         <span className="text-gray-700">{skill.name}</span>
//                         <span className="text-gray-500">{skill.percentage}%</span>
//                       </div>
//                       <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
//                         <div 
//                           className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
//                           style={{ width: `${skill.percentage}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

import Image from 'next/image';
import { personalInfo } from '@/data/portfolio'; // Info personal tetap hardcoded sesuai permintaan
import { Briefcase, GraduationCap, Code, Settings, GitBranch, Users, Layers, TerminalSquare } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

// Helper function untuk fetch data dari Laravel
async function getApiData(endpoint: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    // next: { revalidate: 60 } berarti Next.js akan men-cache data selama 60 detik
    const res = await fetch(`${apiUrl}/api/${endpoint}`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error(`Gagal fetch ${endpoint}:`, error);
    return [];
  }
}

export default async function Home() {
  // Ambil semua data secara paralel agar jauh lebih cepat
  const [experiences, educations, organizations, projects, rawSkills] = await Promise.all([
    getApiData('experiences'),
    getApiData('educations'),
    getApiData('organizations'),
    getApiData('projects'),
    getApiData('skills'),
  ]);

  // Statistik Dinamis
  const totalExperience = experiences.length;
  const totalProjects = projects.length;
  const totalTech = rawSkills.length;

  // Transformasi data Skills dari API agar sesuai dengan UI (Dikelompokkan berdasarkan kategori)
  const groupedSkillsMap = rawSkills.reduce((acc: any, skill: any) => {
    const categoryName = skill.category?.name || 'Lainnya';
    if (!acc[categoryName]) {
      acc[categoryName] = { category: categoryName, items: [] };
    }
    acc[categoryName].items.push({ name: skill.name, percentage: skill.percentage });
    return acc;
  }, {});
  const skills = Object.values(groupedSkillsMap) as any[];

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* HEADER, PROFILE PHOTO & SUMMARY */}
      <section id="summary" className="space-y-10 mt-10 scroll-mt-24">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
              <Image 
                src={personalInfo.photo || '/default-project.png'} 
                alt="Profile Photo" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <header className="space-y-4 text-center md:text-left flex-grow mt-4 md:mt-6">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl font-medium text-blue-600">IT Software Engineer</h2>
            </header>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold border-b pb-4 mb-6 text-gray-900">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
          </div>
        </FadeIn>

        {/* KARTU STATISTIK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <FadeIn delay={0.3} direction="up">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-5 hover:border-blue-200 transition-colors group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">{totalExperience}</p>
                <p className="text-sm font-semibold text-gray-500 mt-1">Pengalaman Profesional</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-5 hover:border-blue-200 transition-colors group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                <TerminalSquare className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">{totalTech}+</p>
                <p className="text-sm font-semibold text-gray-500 mt-1">Teknologi Dikuasai</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-5 hover:border-blue-200 transition-colors group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">{totalProjects}</p>
                <p className="text-sm font-semibold text-gray-500 mt-1">Proyek Diselesaikan</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="space-y-10 scroll-mt-24">
        <FadeIn direction="left">
          <div className="flex items-center space-x-4 border-b pb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
        </FadeIn>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {experiences.map((exp: any, index: number) => (
            <FadeIn 
              key={exp.id} 
              delay={index * 0.15}
              direction={index % 2 === 0 ? "right" : "left"}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-sm font-semibold text-blue-600 mt-1">{exp.type}</span>
                  <span className="text-sm text-gray-500 mt-1">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.points?.map((point: string, i: number) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
                      <span className="text-blue-400 mr-3 mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
          {experiences.length === 0 && <p className="text-gray-500 text-center py-4">Belum ada data pengalaman kerja.</p>}
        </div>
      </section>

      {/* EDUCATION & ORGANIZATIONS */}
      <section id="education" className="space-y-12 scroll-mt-24">
        <div className="space-y-8">
          <FadeIn direction="left">
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Education & Organizations</h2>
            </div>
          </FadeIn>
          
          {educations.map((edu: any, idx: number) => (
            <FadeIn key={edu.id} delay={idx * 0.1} direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-100 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{edu.university}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-lg text-gray-600">{edu.degree}</p>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md font-semibold border border-gray-200">
                      IPK: {edu.gpa}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-semibold text-sm inline-block">
                  {edu.period}
                </div>
              </div>
            </FadeIn>
          ))}
          {educations.length === 0 && <p className="text-gray-500 text-center">Belum ada data edukasi.</p>}

          {/* ORGANISASI & KEPANITIAAN */}
          <div className="pt-6">
            <FadeIn direction="up">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                Campus Organizations & Committee
              </h3>
            </FadeIn>
            <div className="space-y-6">
              {organizations.map((org: any, idx: number) => (
                <FadeIn key={org.id} delay={idx * 0.15} direction="up">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{org.name}</h4>
                        <p className="text-sm font-semibold text-blue-600 mt-1">{org.role}</p>
                        {org.education && <p className="text-xs text-gray-500 mt-1">@ {org.education.university}</p>}
                      </div>
                      <div className="shrink-0 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 inline-flex items-center justify-center">
                        {org.period}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {org.points?.map((point: string, i: number) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start leading-relaxed">
                          <span className="text-blue-400 mr-3 mt-0.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
              {organizations.length === 0 && <p className="text-gray-500">Belum ada data organisasi.</p>}
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS WITH THUMBNAIL */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <FadeIn direction="left">
          <div className="flex items-center space-x-4 border-b pb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj: any, idx: number) => (
            <FadeIn key={proj.id} delay={idx * 0.15} direction="up" className="h-full">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">
                
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image 
                    src={proj.image_url || '/default-project.png'} 
                    alt={proj.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{proj.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow line-clamp-4">
                    {proj.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech?.map((techItem: string, techIdx: number) => (
                      <span 
                        key={techIdx} 
                        className="text-[10px] md:text-xs font-semibold bg-blue-50 text-blue-700 py-1.5 px-3 rounded-full text-center border border-blue-100"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    {proj.github_urls?.map((link: any, linkIdx: number) => (
                      <a 
                        key={linkIdx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          {projects.length === 0 && <p className="text-gray-500">Belum ada proyek portofolio.</p>}
        </div>
      </section>

      {/* SKILLS DENGAN PERSENTASE */}
      <section id="skills" className="space-y-8 scroll-mt-24">
        <FadeIn direction="left">
          <div className="flex items-center space-x-4 border-b pb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Settings className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup: any, index: number) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
                
                <div className="space-y-5">
                  {skillGroup.items.map((skill: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
          {skills.length === 0 && <p className="text-gray-500">Belum ada data keahlian.</p>}
        </div>
      </section>

    </div>
  );
}