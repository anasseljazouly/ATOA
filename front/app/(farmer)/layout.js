"use client";

import FarmerHeader from "../../components/headers/FarmerHeader";

export default function RootLayout({ children }) {
  return (
    <html>
      {/* className="bg-[url('/bgFarmer.png')] bg-cover bg-center backdrop-blur-sm" */}
      <head />
      <body>
        <FarmerHeader/>
        {children}
      </body>
    </html>
  );
}