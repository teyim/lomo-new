/* eslint-disable no-unused-vars */
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Lexend, Lekton } from 'next/font/google';
import { ModalProvider } from '@/context/ModalContext';
import ReactQueryProvider from '@/components/queryProvider';

const lexend = Lexend({ subsets: ['latin'], display: 'swap' });

const lekton = Lekton({ weight: ['400', '700'], subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${lexend.className}`}
    >
      <link
        rel="icon"
        href="/logo.ico"
        sizes="any"
      />
      <body className="font-geist_mono text-primary">
        <div id="modal-root"></div>
        <ReactQueryProvider>
          <ModalProvider>{children}</ModalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
