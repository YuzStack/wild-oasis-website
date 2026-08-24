import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import '../styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

console.log(josefin);

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
      <body className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className}`} >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
