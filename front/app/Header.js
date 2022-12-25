import React from "react";
import Link from 'next/link'

function Header() {
  return (
    <header className="p-5 bg-red-5000">
      <Link href="/" className="rounded-lg bg-red-400 py-2 px-3">
        Home
      </Link>
      <Link href="/todos" className="rounded-lg bg-red-400 py-2 px-3">
        Todos
      </Link>
      <Link href="/search" className="rounded-lg bg-red-400 py-2 px-3">
        Search
      </Link>
    </header>
  );
}

export default Header;
