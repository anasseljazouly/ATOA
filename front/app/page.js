"use client";
import React, { useEffect, useState } from "react";
import PublicHome from "../components/home/PublicHome";
import PublicHeader from "../components/headers/PublicHeader";

function Home() {
  return (
    <>
      <PublicHeader /> <PublicHome />
    </>
  );
}

export default Home;
