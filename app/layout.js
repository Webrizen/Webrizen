import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'WebRizen LLP - Empowering Your Business With Dynamic-Flaming Web Solutions',
  description: 'Webrizen is a full-service web development agency specializing in creating bespoke web solutions tailored to meet your unique business needs. Empowering Your Business With Dynamic-Flaming Web Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={poppins.className}>
          {children}
        </body>
    </html>

  );
}

// {/* <div className="theme-switch-container">
//             <ThemeSwitch onChange={handleThemeChange} />
//           </div> */}