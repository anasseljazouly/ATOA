"use client";
import React, { useState } from "react";
import Link from "next/link";
import PublicHeader from "../../components/headers/PublicHeader";

export default function page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      birthday,
      gender,
      email,
      bio,
    };

    //redirect and stock the user logic

    console.log(user);
  };
 // rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] shadow-md
//  shadow-[#16121E]
  return (
    <>
      <PublicHeader />
     
      <div className="flex flex-row justify-between ">
        <div className="w-1/2 mx-10 mt-7">
          <div className="  pt-5">
            <h1 className="text-2xl font-semibold text-center">Welcome to</h1>
            <h1 className="text-2xl font-semibold text-greenText text-center underline ">
              the Moroccan farming Community
            </h1>
            <form className="mx-auto px-5 py-8 text-[#948686] font-[530]">
              <div className="mb-4 flex flex-row justify-center">
                <input
                  className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-2/5 mx-3"
                  type="text"
                  id="first-name"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-2/5 mx-3"
                  type="text"
                  id="last-name"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-4 flex flex-row justify-center">
                <input
                  className="border-2 border-greenBorder text-[#948686]  rounded-2xl py-2 px-3 w-2/5 mx-3"
                  type="date"
                  id="birthday"
                  placeholder="Birthday"
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <select
                  className="border-2 border-greenBorder text-[#948686] rounded-2xl py-2 px-3 w-2/5 mx-3"
                  type="text"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option selected disabled>
                    Gender
                  </option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </select>
              </div>

              <div className="justify-center flex mb-4">
                <input
                  className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-5/6"
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="justify-center flex mb-4">
                <textarea
                  className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-5/6 resize-none"
                  type="text"
                  id="bio"
                  placeholder="Bio"
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center">
                <Link
                  className="rounded-2xl text-white py-2 px-6 bg-greenBtn hover:bg-greenBorder m-auto"
                  onClick={handleSubmit}
                  href="/"
                >
                  Sign Up
                </Link>
                <p className=" text-xs mt-3">
                  Already a member.{" "}
                  <span className="font-bold text-greenText">
                    {" "}
                    <Link href="/">Sign in</Link>
                  </span>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mr-28 -mt-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] scale-75">
          <img src="/farmerSignUp.png" alt="logo" />
        </div>
      </div>
    </>
  );
}
