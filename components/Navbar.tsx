// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
//             Portfo<span className="text-blue-600">lio.</span>
//           </Link>
//           <div className="flex space-x-6 text-sm font-medium text-gray-600">
//             <Link href="/" className="hover:text-blue-600 transition">About</Link>
//             <Link href="/experience" className="hover:text-blue-600 transition">Experience</Link>
//             <Link href="/education" className="hover:text-blue-600 transition">Education</Link>
//             <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
//             Portfo<span className="text-blue-600">lio.</span>
//           </Link> */}
//           <div className="flex space-x-6 text-sm font-medium text-gray-600">
//             <Link href="/" className="hover:text-blue-600 transition">Portfolio</Link>
//             <Link href="/profile" className="hover:text-blue-600 transition">Contact Profile</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight shrink-0">
            S<span className="text-blue-600">A.</span>
          </Link>
          
          {/* Navigasi Menu */}
          <div className="flex items-center space-x-4 md:space-x-6 text-sm font-medium text-gray-600 overflow-x-auto no-scrollbar pl-4">
            <Link href="/#summary" className="hover:text-blue-600 transition whitespace-nowrap">Summary</Link>
            <Link href="/#experience" className="hover:text-blue-600 transition whitespace-nowrap">Experience</Link>
            <Link href="/#education" className="hover:text-blue-600 transition whitespace-nowrap">Education</Link>
            <Link href="/#projects" className="hover:text-blue-600 transition whitespace-nowrap">Projects</Link>
            <Link href="/#skills" className="hover:text-blue-600 transition whitespace-nowrap">Skills</Link>
            
            {/* Divider Vertikal */}
            <div className="hidden md:block w-px h-5 bg-gray-300"></div>
            
            <Link href="/profile" className="text-blue-600 hover:text-blue-700 font-semibold transition whitespace-nowrap bg-blue-50 px-4 py-2 rounded-lg">
              Contact Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}