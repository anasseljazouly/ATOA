//we need the client's action => CSR
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white font-bold rounded-lg py-2 px-4 btn">Search</button>
    </form>
  );
}

export default Search;
