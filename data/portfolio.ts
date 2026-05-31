// export const personalInfo = {
//   name: "NAMA SAYA",
//   location: "Kotaku, Provinsiku",
//   phone: "0812-3456-7890",
//   email: "emailku@gmail.com",
//   linkedin: "linkedin.com/in/nama-saya-a012345m6/",
//   github: "github.com/NamaSaya",
//   summary: "IT Software Engineer dengan pengalaman membangun, memelihara, dan memonitor sistem operasional berbasis web dan mobile yang digunakan dalam aktivitas bisnis harian. Terbiasa bekerja dengan REST API, database relasional, sistem real-time monitoring, troubleshooting produksi, serta support pasca-deployment. Memiliki mindset stabilitas sistem, akurasi data, dan keberlangsungan operasional—relevan untuk digitalisasi dan monitoring operasi maritim.",
// };

// export const experiences = [
//   {
//     title: "IT Software Engineer – ERP System",
//     type: "Freelance (Project-Based)",
//     period: "Januari 2025 – Juni 2025",
//     points: [
//       "Mengembangkan sistem ERP operasional untuk monitoring stok, transaksi, dan laporan menggunakan Laravel, Nuxt 3, dan Flutter.",
//       "Mengelola maintenance dan troubleshooting sistem aktif yang digunakan langsung oleh user operasional.",
//       "Mengoptimalkan query database sehingga proses laporan berubah dari manual ±1 minggu menjadi otomatis ±1 detik.",
//       "Menerapkan algoritma FIFO, sorting, pagination untuk menjaga performa sistem pada data bertumbuh.",
//       "Memberikan technical support dan pendampingan pengguna pasca implementasi.",
//       "Berperan sebagai technical consultant dalam pengambilan keputusan sistem dan alur operasional."
//     ]
//   },
//   {
//     title: "Full Stack Developer",
//     type: "Internship — Sentra Inovasi Kewirausahaan",
//     period: "Juli 2024 – Desember 2024",
//     points: [
//       "Mengembangkan aplikasi operasional web & mobile menggunakan Laravel REST API dan Flutter.",
//       "Melakukan analisis kebutuhan sistem, validasi data transaksi, dan penyesuaian fitur sesuai alur operasional.",
//       "Terlibat dalam monitoring sistem pasca-deployment, pengecekan error produksi, dan perbaikan bug kritikal.",
//       "Melaksanakan User Acceptance Testing (UAT) untuk memastikan aplikasi stabil dan siap digunakan pengguna akhir.",
//       "Berkolaborasi dengan tim dalam feature planning, code review, dan pembagian task sprint.",
//       "Melakukan deployment dan monitoring aplikasi pada environment produksi."
//     ]
//   }
// ];

// export const education = {
//   university: "Universitas Kristen Petra",
//   degree: "S1 Teknik Informatika",
//   period: "2021 – 2025",
//   gpa: "3,21",
//   projects: [
//     {
//       name: "Booking Hotel App",
//       tech: "Flutter + Firebase",
//       desc: "Autentikasi, transaksi, dan data realtime."
//     },
//     {
//       name: "ERP Kasir",
//       tech: "Laravel API + Nuxt 3 + Flutter",
//       desc: "Modul stok, transaksi, laporan, dan monitoring data terpusat."
//     },
//     {
//       name: "Online Computer Store",
//       tech: "Laravel + Midtrans",
//       desc: "Sistem transaksi dan dashboard monitoring admin."
//     }
//   ]
// };

// export const skills = [
//   { category: "Backend", items: "PHP, Laravel, Node.js (Express), REST API" },
//   { category: "Frontend", items: "HTML, CSS, JavaScript, Vue.js, Nuxt 3, React.js" },
//   { category: "Mobile Development", items: "Flutter, Kotlin & Java (Android Native)" },
//   { category: "Database", items: "MySQL, PostgreSQL, Firebase" },
//   { category: "Tools", items: "Git, Postman, Pusher, Midtrans, Render, Clever Cloud, Vercel, Netlify, cPanel" },
//   { category: "Others", items: "Python (AI/ML), AI Tools, Microsoft Office" },
//   { category: "Soft Skill", items: "Communication, Team Work, Critical Thinking, Fast Learner" }
// ];

export const personalInfo = {
  name: "NAMA SAYA",
  location: "Kotaku, Provinsiku",
  phone: "0812-3456-7890",
  email: "emailku@gmail.com",
  linkedin: "linkedin.com/in/nama-saya-a012345m6/",
  github: "github.com/NamaSaya",
  summary: "IT Software Engineer dengan pengalaman membangun, memelihara, dan memonitor sistem operasional berbasis web dan mobile yang digunakan dalam aktivitas bisnis harian. Terbiasa bekerja dengan REST API, database relasional, sistem real-time monitoring, troubleshooting produksi, serta support pasca-deployment. Memiliki mindset stabilitas sistem, akurasi data, dan keberlangsungan operasional—relevan untuk digitalisasi dan monitoring bisnis e-commerce & retail.",
  // Tambahkan path untuk foto profil
  photo: "/profile.png" 
};

export const experiences = [
  {
    title: "Software Engineer",
    type: "Contract",
    period: "Februari 2026 – Present",
    points: [
      "Mengembangkan backend berperforma tinggi menggunakan Laravel dan MariaDB. Mengimplementasikan mekanisme Pessimistic Locking pada tingkat database untuk mengatasi race condition, memastikan integritas transaksi, dan mencegah kelebihan penjualan (overselling) saat lalu lintas pesanan padat.",
      "Membangun sistem operasional khusus yang terintegrasi ke dalam platform penjualan, menampilkan sistem manajemen stok First-In-First-Out (FIFO) yang secara akurat melacak inventaris berdasarkan batch barang masuk.",
      "Mengintegrasikan API pihak ketiga berskala enterprise seperti Xendit (Payment Gateway) dan Biteship (Logistik). Merancang logika bisnis kompleks untuk menangani edge cases, seperti pemetaan spasial otomatis dan ketersediaan pengiriman dinamis berdasarkan jam operasional kurir secara real-time.",
      "Menciptakan antarmuka pengguna yang sangat responsif menggunakan Vue.js dan Tailwind CSS. Mengimplementasikan Optimistic UI pada sistem keranjang belanja untuk pengalaman tanpa hambatan (zero-latency), navigasi dinamis, dan fitur pencarian cerdas (Fuzzy Search).",
      "Mengelola proses deployment end-to-end di atas server Linux VPS secara mandiri, mengonfigurasi lingkungan server untuk memastikan stabilitas, keamanan, dan ketersediaan sistem operasional secara terus-menerus.",
    ]
  },
  {
    title: "Freelance Developer – ERP System",
    type: "Freelance (Project-Based)",
    period: "Januari 2025 – Juni 2025",
    points: [
      "Mengembangkan sistem ERP operasional untuk monitoring stok, transaksi, dan laporan menggunakan Laravel, Nuxt 3, dan Flutter.",
      "Mengelola maintenance dan troubleshooting sistem aktif yang digunakan langsung oleh user operasional.",
      "Mengoptimalkan query database sehingga proses laporan berubah dari manual ±1 minggu menjadi otomatis ±1 detik.",
      "Menerapkan algoritma FIFO, sorting, pagination untuk menjaga performa sistem pada data bertumbuh.",
      "Memberikan technical support dan pendampingan pengguna pasca implementasi.",
      "Berperan sebagai technical consultant dalam pengambilan keputusan sistem dan alur operasional."
    ]
  },
  {
    title: "IT Programmer Intern",
    type: "Internship — Sentra Inovasi Kewirausahaan",
    period: "Juli 2024 – Desember 2024",
    points: [
      "Mengembangkan aplikasi operasional web & mobile menggunakan Laravel REST API dan Flutter.",
      "Melakukan analisis kebutuhan sistem, validasi data transaksi, dan penyesuaian fitur sesuai alur operasional.",
      "Terlibat dalam monitoring sistem pasca-deployment, pengecekan error produksi, dan perbaikan bug kritikal.",
      "Melaksanakan User Acceptance Testing (UAT) untuk memastikan aplikasi stabil dan siap digunakan pengguna akhir.",
      "Berkolaborasi dengan tim dalam feature planning, code review, dan pembagian task sprint.",
      "Melakukan deployment dan monitoring aplikasi pada environment produksi."
    ]
  }
];

export const education = {
  university: "Universitas Kristen Petra",
  degree: "S1 Teknik Informatika",
  period: "2021 – 2025",
  gpa: "3,21",
  projects: [
    {
      name: "Booking Hotel App",
      desc: "Sistem autentikasi pengguna, pemesanan kamar, dan pengelolaan data realtime yang efisien.",
      tech: ["Flutter", "Firebase", "Dart", "NoSQL"],
      githubUrl: "https://github.com/NamaSaya/booking-hotel",
      image: "" // Aset lokal
    },
    {
      name: "ERP Kasir",
      desc: "Modul manajemen stok, transaksi kasir, dan laporan dengan dashboard monitoring terpusat.",
      tech: ["Laravel", "Nuxt 3", "Vue.js", "Flutter", "MySQL"],
      githubUrl: "https://github.com/NamaSaya/erp-kasir",
      image: ""
    },
    {
      name: "Online Computer Store",
      desc: "Aplikasi e-commerce dengan integrasi payment gateway Midtrans dan dashboard admin lengkap.",
      tech: ["Laravel", "Midtrans", "PHP", "Bootstrap"],
      githubUrl: "https://github.com/NamaSaya/computer-store",
      image: "" // Dikosongkan agar memicu gambar default
    }
  ]
};

// Data skills diubah untuk mendukung persentase
export const skills = [
  { 
    category: "Backend", 
    items: [
      { name: "PHP", percentage: 85 },
      { name: "Laravel", percentage: 90 },
      { name: "Node.js (Express)", percentage: 65 },
      { name: "REST API", percentage: 95 }
    ] 
  },
  { 
    category: "Frontend", 
    items: [
      { name: "HTML/CSS", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "Vue.js / Nuxt 3", percentage: 85 },
      { name: "React.js / Next.js", percentage: 75 }
    ] 
  },
  { 
    category: "Mobile Development", 
    items: [
      { name: "Flutter", percentage: 85 },
      { name: "Kotlin (Android)", percentage: 75 },
      { name: "Java (Android)", percentage: 70 }
    ] 
  },
  { 
    category: "Database", 
    items: [
      { name: "MySQL", percentage: 90 },
      { name: "PostgreSQL", percentage: 80 },
      { name: "Firebase / Supabase", percentage: 85 }
    ] 
  }
];