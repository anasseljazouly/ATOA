import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="bg-blue-500 font-serif">
      <div>this is a nav</div>
      <Link href={"/"}> Home </Link>
    </div>
  );
}

export default Nav;
