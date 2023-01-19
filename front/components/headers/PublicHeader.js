import React from "react";
import Link from "next/link";

function PublicHeader() {
  return (
    <div className="py-5 px-10 ">
      <div className="py-5 px-1 text-2xl font-semibold flex flex-row justify-between ">
        <Link href="/" className="rounded-lg  px-14">
          <img
            src="/logo.png"
            alt="logo"
            width={"80px"}
          />
        </Link>

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
        <div className="my-auto px-14">
          <Link
            href="/"
            className="rounded-2xl text-white py-2 px-6 bg-greenBtn hover:bg-greenBorder"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PublicHeader;
