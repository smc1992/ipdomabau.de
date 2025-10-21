

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOMABAU - Debug Mode",
  description: "Debugging 500 Error",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>DOMABAU - Debug Mode</h1>
          <p>Layout funktioniert</p>
          {children}
        </div>
      </body>
    </html>
  );
}
