import React from "react";
import Link from "next/link";

function PublicHeader() {
  return (
    <div className="py-5 px-10 text-2xl font-semibold flex flex-row justify-between ">
      <img
        src="/logo.png"
        className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        alt="logo"
      />
      <div className="m-auto">
        <Link href="/" className="rounded-lg  px-14">
          Home
        </Link>
        <Link href="/" className="rounded-lg px-14">
          What is it?
        </Link>
        <Link href="/" className="rounded-lg  px-14">
          Who are we ?
        </Link>
      </div>
      <div className="my-auto">
        <Link
          href="/"
          className="rounded-2xl text-white  bg-[#699C27] py-2 px-6 hover:bg-[#b0e170]"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default PublicHeader;
