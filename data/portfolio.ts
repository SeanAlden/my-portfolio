export const personalInfo = {
  name: "NAMA SAYA",
  location: "Kotaku, Provinsiku",
  phone: "0812-3456-7890",
  email: "emailku@gmail.com",
  linkedin: "linkedin.com/in/nama-saya-a012345m6/",
  github: "github.com/NamaSaya",
  summary: "IT Software Engineer dengan pengalaman membangun, memelihara, dan memonitor sistem operasional berbasis web dan mobile yang digunakan dalam aktivitas bisnis harian. Terbiasa bekerja dengan REST API, database relasional, sistem real-time monitoring, troubleshooting produksi, serta support pasca-deployment. Memiliki mindset stabilitas sistem, akurasi data, dan keberlangsungan operasional—relevan untuk digitalisasi dan monitoring operasi maritim.",
};

export const experiences = [
  {
    title: "IT Software Engineer – ERP System",
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
    title: "Full Stack Developer",
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
      tech: "Flutter + Firebase",
      desc: "Autentikasi, transaksi, dan data realtime."
    },
    {
      name: "ERP Kasir",
      tech: "Laravel API + Nuxt 3 + Flutter",
      desc: "Modul stok, transaksi, laporan, dan monitoring data terpusat."
    },
    {
      name: "Online Computer Store",
      tech: "Laravel + Midtrans",
      desc: "Sistem transaksi dan dashboard monitoring admin."
    }
  ]
};

export const skills = [
  { category: "Backend", items: "PHP, Laravel, Node.js (Express), REST API" },
  { category: "Frontend", items: "HTML, CSS, JavaScript, Vue.js, Nuxt 3, React.js" },
  { category: "Mobile Development", items: "Flutter, Kotlin & Java (Android Native)" },
  { category: "Database", items: "MySQL, PostgreSQL, Firebase" },
  { category: "Tools", items: "Git, Postman, Pusher, Midtrans, Render, Clever Cloud, Vercel, Netlify, cPanel" },
  { category: "Others", items: "Python (AI/ML), AI Tools, Microsoft Office" },
  { category: "Soft Skill", items: "Communication, Team Work, Critical Thinking, Fast Learner" }
];