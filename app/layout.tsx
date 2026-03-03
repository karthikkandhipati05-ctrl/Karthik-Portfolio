import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: 'Karthik Kandhipati | Data Scientist & Product Analytics',
  description: 'Portfolio of Karthik Kandhipati featuring product analytics case studies, BI leadership dashboards, and data science impact across healthcare and finance.',
  keywords: ['Data Scientist', 'Product Analytics', 'SQL', 'Python', 'Tableau', 'Power BI'],
  authors: [{ name: 'Karthik Kandhipati' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
