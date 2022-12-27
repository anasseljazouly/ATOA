import PublicHeader from '../components/headers/PublicHeader';
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <PublicHeader />
        {children}
      </body>
    </html>
  );
}
