"use client";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      {/* className="bg-[url('/bgFarmer.png')] bg-cover bg-center backdrop-blur-sm" */}
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
