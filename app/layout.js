import '../styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Header from '@/components/Header';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Welcome | The Wild Oasis',
    template: '%s | The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen bg-primary-950 text-primary-100 antialiased ${josefin.className} relative flex flex-col`}
      >
        <header>
          <Header />
        </header>
        <div className='flex-1 px-8 py-12'>
          <main className='mx-auto max-w-7xl'>{children}</main>
        </div>
      </body>
    </html>
  );
}
