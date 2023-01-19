"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FarmerHeader() {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(function getNavBar() {
    var user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    console.log(user.type);
    if (!user || user.type != "farmer") {
      router.push("/");
    }
    setUser(user);
  },[]);

  return (
    <div className="py-5 px-10 ">
      <div className="py-5 px-1 text-2xl font-semibold flex flex-row justify-between ">
        <Link href="/farmer" className="rounded-lg  px-14">
          <img src="/logo.png" alt="logo" width={"80px"} />
        </Link>

        <div className="m-auto">
          <Link href="/offers" className="rounded-lg  px-14">
            Offers
          </Link>
          <Link href="/announcement" className="rounded-lg px-14">
            Announcement
          </Link>
          <Link href="/notifications" className="rounded-lg  px-14">
            Notifications
          </Link>
        </div>
        <div className="flex items-center -mt-1 mr-14">
          <span className="text-lg" >Hi {user.firstName +" "+ user.lastName} !</span>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width={"30px"}
            className="text-greenText ml-2 animate-pulse"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FarmerHeader;
