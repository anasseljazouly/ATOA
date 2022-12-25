import React from "react";
import Search from "./Search";

export default function RootLayout({ children }) {
  return (
    <main className="flex space-x-4 divide-x-2">
      <div>
        <h1>Search title</h1>
      </div>
      <div className="flex-1 p-5">
        {" "}
        <Search />
        {children}
      </div>
    </main>
  );
}
