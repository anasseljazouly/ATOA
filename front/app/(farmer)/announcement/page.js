"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileUploader } from "react-drag-drop-files";

function announcement() {
  const fileTypes = ["JPG", "PNG", "GIF"];

  const [owner, setOwner] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [conditions, setConditions] = useState("");

  const [error, setError] = useState([]);
  const [created, setCreated] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    const errors = [];
    e.preventDefault();
    if (
      owner === "" ||
      title === "" ||
      description === "" ||
      budget === "" ||
      conditions === ""
    ) {
      errors.push("Please fill all the fields");
      setError(errors);
    }
    if (endDate < startDate) {
      errors.push("Please choose a valid date");
      setError(errors);
    }
    if (errors.length == 0) {
      console.log("announcement created");
      setCreated(true);
    }
  };

  useEffect(() => {
    if (error.length != 0) {
      console.log(error + " error");
    }
  }, [error]);

  return (
    <div className="items-center">
      <div className="  pt-5">
        <h1 className="text-2xl font-semibold text-center">
          Create your announcement and get help from the
        </h1>
        <h1 className="text-2xl font-semibold text-greenText text-center underline ">
          community
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

            {created ? (
              <div
                className="p-2 bg-green-300 items-center text-white leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  Success !
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  Your announcement has been created ! wait for the admin to
                  validate it.
                </span>
              </div>
            ) : null}
          </div>
          <div className="mb-4 flex flex-col items-center">
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="text"
              id="owner"
              placeholder="Announcement owner"
              onChange={(e) => setOwner(e.target.value)}
            />
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="text"
              id="title"
              placeholder="Announcement title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="text"
              id="Announcement description"
              placeholder="Announcement description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="date"
              id="startDate"
              placeholder="Announcement start date"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="date"
              id="endDate"
              placeholder="Announcement end date"
              onChange={(e) => setEndDate(e.target.value)}
            />
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="number"
              id="budget"
              placeholder="Announcement budget"
              onChange={(e) => setBudget(e.target.value)}
            />
            <input
              className="border-2 border-greenBorder rounded-2xl py-2 px-3 w-1/2 mb-3"
              type="text"
              id="conditions"
              placeholder="Announcement conditions"
              onChange={(e) => setConditions(e.target.value)}
            />

            <FileUploader
              handleChange={(e) => setImage(e.target.value)}
              name="image"
              types={fileTypes}
            />
          </div>

          <div className="flex flex-col items-center">
            <button
              className="rounded-2xl text-white py-2 px-6 bg-greenBtn hover:bg-greenBorder m-auto"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default announcement;
