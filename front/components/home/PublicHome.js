"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import users from "../../db/users";
import { useRouter } from "next/navigation";

function PublicHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState([]);

  const router = useRouter();

  const handleSubmit = (e) => {
    const errors = [];
    e.preventDefault();
    if (email === "" || password === "") {
      errors.push("Please fill all the fields");
      setError(errors);
    }
    if (email !== "" && password !== "") {
      console.log(email + " " + password);
      const user = users.find(
        (user) => user.email == email && user.password == password
      );
      if (user) {
        setUser(user);
        console.log(user);
        window.localStorage.setItem("user", JSON.stringify(user));
        if (user.type == "farmer") {
            console.log("connected as a farmer")
          router.push("/farmer");
        }
      } else {
        errors.push("Wrong email or password");
        setError(errors);
      }
    }
    //redirect and stock the user logic
  };

  useEffect(() => {
    if (error.length != 0) {
      console.log(error + " error");
    }
  }, [error]);

  return (
    <div className="flex flex-row justify-between ">
      <div className="ml-28 -mt-[5rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] scale-75">
        <img src="/farmerLogin.png" alt="logo" />
      </div>
      <div className="w-1/2 mx-10 mt-7">
        <div className="  pt-5">
          <h1 className="text-2xl font-semibold text-center">
            Welcome back to
          </h1>
          <h1 className="text-2xl font-semibold text-greenText text-center underline ">
            the Moroccan farming Community
          </h1>
          <form className="mx-auto px-5 py-8 text-[#948686] font-[530]">
            <div className=" text-center py-4 lg:px-4">
              {error.length != 0 ? (
                <div
                  className="p-2 bg-red-300 items-center text-white leading-none lg:rounded-full flex lg:inline-flex"
                  role="alert"
                >
                  <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                    Error
                  </span>
                  {error.map((err) => (
                    <span className="font-semibold mr-2 text-left flex-auto">
                      {err}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="mb-4 flex flex-col items-center">
              <input
                className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2"
                type="password"
                id="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                className="rounded-2xl text-white py-2 px-6 bg-greenBtn hover:bg-greenBorder m-auto"
                onClick={handleSubmit}
              >
                Sign in
              </button>
              <p className=" text-xs mt-3 font-bold text-greenText">
                <Link href="/forgetPassword">Forget your password ?</Link>
              </p>
              <p className=" text-xs mt-3">
                Don't have an account ?{" "}
                <span className="font-bold text-greenText">
                  {" "}
                  <Link href="/signUp">Sign up</Link>
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PublicHome;
