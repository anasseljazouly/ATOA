import React from "react";
import SignUp from "../components/HomePage/SignUp";

function Home() {
  return (
    <div className="flex flex-row justify-between  ">
      <div className="w-1/2 mx-10 mt-16">
        <SignUp />
      </div>
      <div className="mr-28 scale-75 -mt-10">
        <img
          src="/farmers.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Home;
