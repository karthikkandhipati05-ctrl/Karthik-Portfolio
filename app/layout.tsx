import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/navbar';

const siteUrl = 'https://karthikkandhipati.github.io/Karthik-Portfolio';
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  title: 'Karthik Kandhipati | Data Scientist & Product Analytics',
  description:
    'Portfolio of Karthik Kandhipati featuring product analytics case studies, BI leadership dashboards, and data science impact across healthcare and finance.',
  keywords: ['Data Scientist', 'Product Analytics', 'SQL', 'Python', 'Tableau', 'Power BI'],
  authors: [{ name: 'Karthik Kandhipati' }],
  metadataBase,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Karthik Kandhipati | Data Scientist & Product Analytics',
    description:
      'Portfolio featuring product analytics case studies, experimentation, BI dashboards, and measurable business outcomes.',
    url: siteUrl,
    siteName: 'Karthik Portfolio',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthik Kandhipati | Data Scientist & Product Analytics',
    description:
      'Product analytics and data science portfolio with quantified outcomes across healthcare and finance.'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
