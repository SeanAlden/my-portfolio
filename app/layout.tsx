import './globals.css'; // Pastikan CSS global tetap di-import di sini

export const metadata = {
  title: 'Portfolio Sean Alden',
  description: 'IT Software Engineer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}