import Link from 'next/link';
import Navbar from './Navbar';
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Aaron Portfolio</title>
      </head>
      <body>
        <Navbar />

        <div>{children}</div>
      </body>
    </html>
  );
}
