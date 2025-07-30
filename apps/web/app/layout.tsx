/* eslint-disable no-unused-vars */
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Lexend, Lekton } from 'next/font/google';
import { ModalProvider } from '@/context/ModalContext';
import ReactQueryProvider from '@/components/queryProvider';
import type { Metadata } from 'next';

const lexend = Lexend({ subsets: ['latin'], display: 'swap' });

const lekton = Lekton({ weight: ['400', '700'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Lomo - Create Stunning Blog Thumbnails in Seconds',
  description: 'Transform your content\'s first impression with Lomo—where professional design meets simplicity. Choose backgrounds, perfect text colors, and customize layouts effortlessly.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${lexend.className}`}
    >
      <body className="font-geist_mono text-primary">
        <div id="modal-root"></div>
        <ReactQueryProvider>
          <ModalProvider>{children}</ModalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
