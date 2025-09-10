import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/layout/Sidebar/Sidebar';
import Header from '@/layout/Header/Header';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard Starter',
  description: 'Next.js + shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh grid md:grid-cols-[240px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Header />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

