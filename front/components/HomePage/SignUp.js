"use client";
import React, { useState } from "react";
import Link from "next/link";

function SignUp() {
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


  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Welcome to</h1>
      <h1 className="text-2xl font-semibold text-[#476423] text-center underline">
        the Moroccan farming Community
      </h1>
      <form className="mx-auto px-5 py-8 text-[#948686] font-[530]">
        <div className="mb-4 flex flex-row justify-center">
          <input
            className="border-2 border-[#A9CD7C] rounded-2xl py-2 px-3 w-2/5 mx-3"
            type="text"
            id="first-name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border-2 border-[#A9CD7C] rounded-2xl py-2 px-3 w-2/5 mx-3"
            type="text"
            id="last-name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-4 flex flex-row justify-center">
          <input
            className="border-2 border-[#A9CD7C] text-[#948686]  rounded-2xl py-2 px-3 w-2/5 mx-3"
            type="date"
            id="birthday"
            placeholder="Birthday"
            onChange={(e) => setBirthday(e.target.value)}
          />
          <select
            className="border-2 border-[#A9CD7C] rounded-2xl py-2 px-3 w-2/5 mx-3"
            type="text"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option selected disabled>Gender</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>
        </div>

        <div className="justify-center flex mb-4">
          <input
            className="border-2 border-[#A9CD7C] rounded-2xl py-2 px-3 w-5/6"
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="justify-center flex mb-4">
          <textarea
            className="border-2 border-[#A9CD7C] rounded-2xl py-2 px-3 w-5/6 resize-none"
            type="text"
            id="bio"
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center">
          <Link
            className="rounded-2xl text-white  bg-[#699C27] py-2 px-6 hover:bg-[#b0e170] m-auto"
            onClick={handleSubmit}
            href="/"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
