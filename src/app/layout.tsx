import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Juan Sebastian Cardona Full Stack Developer',
  description:
    'Full Stack Developer specializing in Backend Development',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Portfolio of  Juan Sebastian Cardona - Full Stack Developer'
        />
        <meta
          name='keywords'
          content='Backend Developer, Full Stack Developer, Web Developer'
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white text-gray-800`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
